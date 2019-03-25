import { createStore, Store } from 'redux';
import { useState, useEffect, Dispatch, useRef } from 'react';
import classNames from 'classnames';

interface NavbarTopProps {
  readonly cancell: boolean,
}

interface S {
  topMenuOpen: boolean
  constructionMenuOpen: boolean
};

interface A {
  type: (
    | 'close'
    | 'toggle_top_menu'
    | 'toggle_construccion_menu'
  )
  a?: string
  c?: string
  b?: string
};

const initialStateGlobalStateMenu: S = {
  topMenuOpen: false,
  constructionMenuOpen: false,
};

const globalStateMenu = createStore<S, A, Store<S, A>, {}>((state = initialStateGlobalStateMenu, action): S => {
  switch (action.type) {
    case 'close': return {
      ...state,
      topMenuOpen: false,
      constructionMenuOpen: false,
    }
    case 'toggle_top_menu': return {
      ...state,
      topMenuOpen: !state.topMenuOpen,
    }
    case 'toggle_construccion_menu': return {
      ...state,
      constructionMenuOpen: !state.constructionMenuOpen,
    }
  }
  return state;
});

type ACT = {
  [K in A['type']]: (v?: Pick<A, Exclude<keyof A, 'type'>>) => any
}

const act: ACT = new Proxy({}, {
  get(_target: any, prop: A['type']) {
    return (v = {}) => globalStateMenu.dispatch({ type: prop, ...v });
  }
});

export function useMenu(): [S, Dispatch<A>, React.MutableRefObject<Element | undefined>, typeof act] {
  const [state, updateState] = useState(globalStateMenu.getState());
  const soneMenu = useRef<Element>();

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

  return [state, globalStateMenu.dispatch, soneMenu, act];
}

export default ({ cancell }: NavbarTopProps) => {
  const [{ constructionMenuOpen },,, { toggle_construccion_menu, close }] = useMenu();

  const closeMenu = () => close();
  const togglemenuConstruccion = () => toggle_construccion_menu();

  return <div className={classNames("collapse navbar-collapse", { 'in': cancell })} id="collapse-menu-top">
    <ul className="nav navbar-nav navbar-right">

      <li className={classNames("dropdown", { open: constructionMenuOpen })}>
        <a className="dropdown-toggle" onClick={togglemenuConstruccion}>
          Construcción <span className="caret" />
        </a>
        <ul className="dropdown-menu">
          <li><a onClick={closeMenu} href="#obrasciviles">Obras Civiles</a></li>
          <li><a onClick={closeMenu} href="#obrasviales">Obras Viales</a></li>
        </ul>
      </li>

      <li><a onClick={closeMenu} href="#portacount">Portacount</a></li>
      <li><a onClick={closeMenu} href="#maquinarias">Arriendo de Maquinarias</a></li>
      <li><a onClick={closeMenu} href="#rrhh">RRHH</a></li>
      <li><a onClick={closeMenu} id="click-contact" href="#contact">Contacto</a></li>

    </ul>
  </div>;
}