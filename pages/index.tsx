import Head from "next/head";
import React, { useRef, useEffect, useState } from "react";
import { RenderBrands } from "../components/RenderBrands";
import url from 'url';
import classNames from 'classnames';

const schemaPage = {
  "@context": "http://schema.org",
  "@type": "Organization",
  "url": "http://www.servicios3ros.cl/",
  "logo": "http://www.servicios3ros.cl/images/servicios3ros.png",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+562-2-2584-8631",
      "contactType": "sales",
      "areaServed": "CL",
      "availableLanguage": "Spanish",
    },
  ],
  "sameAs": [
    "https://twitter.com/servicios3ros",
  ],
};

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
    </div>;

  <main className="billy box">
      <article id="portacount">
        <div className="container">
          <div className="row">
            <div className="text col-md-6">
              <h2 className="h1 text-center">Equipo <b>Portacount</b></h2>
              <p className="lead text-justify">Servicioc3ros pone a su disposición el equipo <strong>PORTACOUNT</strong>, diseñado y certificado para realizar “Prueba de Ajuste Cuantitativa para Mascaras de protección Respiratoria”. <i>Único equipo certificado por las normas HSE (Reino Unido) y OSHA (Estados Unidos) y validado en chile.</i></p><img className="hidden" src="/static/img/images-products-8038.jpg" height={274} width={400} alt="Portacount" /></div>
          </div>
        </div>
        <div className="images-cap1" />
      </article>
      <article id="portacount-objetivo">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center"><img src="/static/img/bars-s3ros.png" /></div>
            <div className="text col-md-6">
              <p className="lead text-justify">El servicio de “Prueba de Ajuste Cuantitativa para Mascaras de protección Respiratoria” con equipo PORTACOUNT, permite verificar cuantitativamente si es que los trabajadores están bien protegidos contra la inhalación de partículas que pudieran generarles una enfermedad profesional al utilizar respiradores de medio rostro o rostro completo. Esta prueba es realizada de acuerdo al protocolo establecido por el Instituto de Salud Pública, con instrumentos de última generación, certificados.</p>
              <ul className="list-unstyled lead">
                <li>Determinar la hermeticidad del elemento de protección respiratoria</li>
                <li>Seleccionar el tamaño adecuado de la máscara de protección respiratoria, entre otros</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center"><cite><a className="small" id="view-normativs" ga-event="Normativas" href="http://silicosis.ispch.cl/PDF/Protocolo_PortaCount.pdf" target="_blank">Informate de las Normaticas</a></cite></div>
      </article>

      <RenderBrands />

      <article id="maquinarias">
        <div className="box-image">
          <div className="heading-page" /></div>
        <div className="container">
          <h2 className="text-center">Maquinarias</h2>
          <p className="lead text-center">Busca la maquinaría que tu empresa necesita con <b>Servicios3ros</b>.</p>
          <p className="lead text-center">Contamos con maquinaria para distintas áreas de la construcción , Compactación, Hormingon, Traslado.</p>
          <div className="clasification hidden-xs">
            <div className="row">
              <div className="col-xs-6">
                <div className="text-center">
                  <img className="img-responsive img-circle" src="/static/img/PROVEEDORES-DE-MAQUINARIA.jpg" alt="proveedores de maquinaria" />
                </div>
              </div>
              <div className="col-xs-6">
                <h3 className="text-center">Construcción</h3>
                <p className="lead text-justify">Bajo el nombre de <b>maquinaria de construcción</b> se incluyen un grupo de máquinas utilizadas en actividades de construcción con la finalidad de:</p>
                <ul>
                  <li className="lead">Remover parte de la capa del suelo, de forma de modificar el perfil de la tierra según los requerimientos del proyecto de ingeniería específico.</li>
                  <li className="lead">Transportar materiales (áridos, agua, hormigón, elementos a incorporar en la construcción)</li>
                  <li className="lead">Cargar y descargar materiales de construcción</li>
                  <li className="lead">Conformar el terreno</li>
                </ul>
              </div>
            </div>
            {/*
                <div className="col-sm-4 col-xs-12">
                    <div className="text-center">
                        <img src="http://lorempixel.com/400/400/sports" alt="" className="img-responsive img-circle">
                    </div>
                    <h3 className="text-center">Hormingon</h3>
                </div>
                <div className="col-sm-4 col-xs-12">
                    <div className="text-center">
                        <img src="http://lorempixel.com/400/400/sports" alt="" className="img-responsive img-circle">
                    </div>
                    <h3 className="text-center">Traslado</h3>
                </div>
            */}
          </div>
        </div>
      </article>
      <article id="rrhh">
        <div className="box-image">
          <div className="heading-page" /></div>
        <div className="container">
          <h2 className="text-center">Asesoría Inteligente en <b>Recursos Humanos</b></h2>
          <p className="lead text-center">Te brindamos una asesoría para que encuentres a las personas ideales para tu empresa. Te ayudamos a buscar a las personas que agreguen valor a tu negoció. Tras la gestión, control y selección minuciosa de cada persona.</p>
        </div>
      </article>
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