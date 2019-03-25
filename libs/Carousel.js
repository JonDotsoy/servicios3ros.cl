import Head from 'next/head';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { isArray } from 'util';

const ContainerNavigateCarousel = styled.div({
  marginTop: 10,
});

const PointNavigateCarousel = styled.span(props => ({
  '&::before': {
    content: `''`,
    display: "inline-block",
    backgroundColor: props.actived ? '#c7c7c7' : '#e2e2e2',
    width: 17,
    height: 17,
    margin: 2,
    borderRadius: '100%',
  },
  '&:first-child, &:last-child': {
    marginLeft: 0,
  },
}));

const ContainerCarousel = styled.a(props => ({
}));

const SlideCarousel = styled.div(props => ({
}));

const BoxImage = styled.div(props => ({
  backgroundImage: `url(${props.src})`,
  paddingBottom: '110%',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
}));

export const useCarousel = ({ elms }) => {
  const [indexElm, setIndexElm] = useState(0);
  const length = elms.length;
  let nextIndexElm = indexElm + 1;

  useEffect(() => {
    const calNextIndexElm = () => {
      if (nextIndexElm in elms) {
        setIndexElm(nextIndexElm);
      } else {
        setIndexElm(0);
      }
    }

    const interval = setTimeout(() => calNextIndexElm(), 2400);
    return () => clearInterval(interval);
  }, [elms.length, indexElm])

  const elm = elms[indexElm];

  return {
    indexElm,
    elm,
    length,
    setIndexElm,
  }
}

export const CarouselNavigate = ({ len, elmActive, onActive }) => {
  return <ContainerNavigateCarousel>
    {Array(len).fill().map((_, i) =>
      <PointNavigateCarousel key={i} index={i} actived={elmActive === i} onClick={() => onActive && onActive(i)} />
    )}
  </ContainerNavigateCarousel>;
}

export const Carousel = ({ children }) => {
  if (!children) return null;

  if (Array.isArray(children)) {
    const { elm, length, indexElm, setIndexElm } = useCarousel({ elms: children });

    return <ContainerCarousel>
      <Head>
        {children.map((elm, i) => <link key={i} rel="preload" href={elm.props.src} as="image" />)}
      </Head>

      <SlideCarousel><BoxImage {...elm.props}></BoxImage></SlideCarousel>
      <CarouselNavigate len={length} elmActive={indexElm} onActive={setIndexElm}></CarouselNavigate>
    </ContainerCarousel>;
  }

  return <ContainerCarousel>
    <Head>
      <link rel="preload" href={children.props.src} as="image" />
    </Head>

    <SlideCarousel><BoxImage {...children.props}></BoxImage></SlideCarousel>
  </ContainerCarousel>;
}
