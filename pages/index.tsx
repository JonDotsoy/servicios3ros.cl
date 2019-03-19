import Head from "next/head";
import React, { useRef, useEffect, useState } from "react";
import { RenderBrands } from "../components/RenderBrands";
import url from 'url';
import classNames from 'classnames';
import { PortacountArticle } from "../components/PortacountArticle";
import { MaquinariasArticle } from "../components/MaquinariasArticle";
import { RRHHArticle } from "../components/RRHHArticle";
import { schemaPage } from "../components/schemaPage";
import styled from 'styled-components';

export default () => {
  const [cancell, setCancell] = useState(true);
  const navbarRef = useRef<HTMLElement>();

  useEffect(() => {
    const funcRef = (event: HashChangeEvent) => {
      event.preventDefault();
      if (navbarRef.current) {
        const navbarElm: HTMLElement = navbarRef.current;

        const hash = url.parse(event.newURL, true).hash;
        const elmFound = hash && document.querySelector(hash);

        if (elmFound) {
          const offsetTopElmFound: number = elmFound.offsetTop;

          window.scroll(0, offsetTopElmFound - navbarElm.offsetHeight);
        }
      }
    }

    window.addEventListener("hashchange", funcRef, false);
    return () => window.removeEventListener("hashchange", funcRef);
  }, []);

  function toggleCancell() {
    setCancell(e => !e);
  }

  return <>

    <Head>
      <title>Servicios3ros</title>
      <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
      <link rel="apple-touch-icon" sizes="180x180" href="/static/img/favicons/apple-touch-icon.png"></link>
      <link rel="icon" type="image/png" href="/static/img/favicons/favicon-32x32.png" sizes="32x32"></link>
      <link rel="icon" type="image/png" href="/static/img/favicons/favicon-16x16.png" sizes="16x16"></link>
      <link rel="manifest" href="/static/img/favicons/manifest.json"></link>
      <link rel="mask-icon" href="/static/img/favicons/safari-pinned-tab.svg" color="#5bbad5"></link>
      <link rel="shortcut icon" href="/static/img/favicons/favicon.ico"></link>
      <meta name="apple-mobile-web-app-title" content="Servicios3ros"></meta>
      <meta name="application-name" content="Servicios3ros"></meta>
      <meta name="msapplication-TileColor" content="#2b5797"></meta>
      <meta name="msapplication-TileImage" content="/static/img/favicons/mstile-144x144.png"></meta>
      <meta name="msapplication-config" content="/static/img/favicons/browserconfig.xml"></meta>
      <meta name="theme-color" content="#ffffff"></meta>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaPage) }}></script>
      <link rel="stylesheet" href="/static/css/style.css"></link>
    </Head>

    <div className="s3ros-nav-fixed">
      <div className="s3ros-nav-animation">
        <nav className="nav navbar navbar-default animated-non-top">
          <div className="container">
            <div ref={navbarRef} className="navbar-header">
              <button onClick={toggleCancell} className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#collapse-menu-top" aria-expanded="true"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button><a className="navbar-brand s3ros-brand" href="#"><span className="title">Servicios3ros</span></a>
            </div>
            <div className={classNames("collapse navbar-collapse", { cancell })} id="collapse-menu-top">
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#portacount">Portacount</a></li>
                <li><a href="#maquinarias">Arriendo de Maquinarias</a></li>
                <li><a href="#rrhh">RRHH</a></li>
                <li><a id="click-contact" href="#contact">Contacto</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>

    <main className="billy box">
      <PortacountArticle />
      <RenderBrands />
      <MaquinariasArticle />
      <RRHHArticle />
    </main>

    <footer className="billy footer" id="contact">
      <div className="container"><span className="box-contact"><h2 className="title text-center">Contactanos</h2></span>
        <div className="row">
          <div className="col-md-offset-3 col-md-6 box-contact">
            {/* <h2 className="title text-center text-uppercase">Contactanos En</h2> */}
            <div className="data">
              <h3 className="title">Email</h3>
              <div className="value"><a className="email" id="actions-email" href="mailto:josecaamano@servicios3ros.cl">josecaamano@servicios3ros.cl</a></div>
            </div>
            <div className="data">
              <h3 className="title">Telefono</h3>
              <div className="value"><a className="phone" href="tel:+56982705229">+56 (9) 82-705-229</a></div>
            </div>
            <div className="data">
              <h3 className="title">Oficina</h3>
              <div className="value"><a target="_blank" href="https://goo.gl/maps/JPZcI">Nueva Providencia #1881 Oficina 2110</a></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copy"><span className="animated-3ros">servicios<i className="effect-letter-jump"><span>3</span><span>r</span><span>o</span><span>s</span></i>.cl</span> © 2019 Todos los derechos reservados.</div>
      </div>
    </footer>
  </>;
}
