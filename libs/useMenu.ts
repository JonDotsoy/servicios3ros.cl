import { createStore, Store } from 'redux';
import { useState, useEffect, Dispatch, useRef } from 'react';

interface S {
  topMenuOpen: boolean;
  constructionMenuOpen: boolean;
}

interface A {
  type: ('close' | 'toggle_top_menu' | 'toggle_construccion_menu')
}

const initialStateGlobalStateMenu: S = {
  topMenuOpen: false,
  constructionMenuOpen: false,
}

const globalStateMenu = createStore<S, A, Store<S, A>, {}>((state = initialStateGlobalStateMenu, action): S => {
  switch (action.type) {
    case 'close': return {
      ...state,
      topMenuOpen: false,
      constructionMenuOpen: false,
    };
    case 'toggle_top_menu': return {
      ...state,
      topMenuOpen: !state.topMenuOpen,
    };
    case 'toggle_construccion_menu': return {
      ...state,
      constructionMenuOpen: !state.constructionMenuOpen,
    };
  }
  return state;
})

type ACT = {
  [K in A['type']]: (v?: Pick<A, Exclude<keyof A, 'type'>>) => any;
}

const act: ACT = new Proxy({}, {
  get(_target: any, prop: A['type']) {
    return (v = {}) => globalStateMenu.dispatch({ type: prop, ...v });
  }
})

export function useMenu(): [S, Dispatch<A>, React.MutableRefObject<Node | undefined>, typeof act] {
  const [state, updateState] = useState(globalStateMenu.getState());
  const soneMenu = useRef<Node>();

  useEffect(() => globalStateMenu.subscribe(() => updateState(globalStateMenu.getState())), []);

  useEffect(() => {
    if (soneMenu.current !== undefined) {
      const current = soneMenu.current;
      function handleEventToCloseToMenu(this: Document, ev: MouseEvent) {
        const element = ev.target;
        if (!current.contains(element)) {
          globalStateMenu.dispatch({
            type: 'close',
          });
        }
      }
      document.addEventListener('click', handleEventToCloseToMenu, false);
      return () => document.removeEventListener('click', handleEventToCloseToMenu, false);
    }
  }, [soneMenu.current]);

  return [
    state,
    globalStateMenu.dispatch,
    soneMenu,
    act,
  ];
}
