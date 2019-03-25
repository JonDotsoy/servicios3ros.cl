import React from "react";

export const PortacountArticle = () => {
  return <>
    <article id="portacount">
      <div className="container">
        <div className="row">
          <div className="text col-md-6">
            <h2 className="h1 text-center">Equipo <b>Portacount</b></h2>
            <p className="lead text-justify">Servicioc3ros pone a su disposición el equipo <strong>PORTACOUNT</strong>, diseñado y certificado para realizar “Prueba de Ajuste Cuantitativa para Mascaras de protección Respiratoria”.<i>Único equipo certificado por las normas HSE (Reino Unido) y OSHA (Estados Unidos) y validado en chile.</i></p><img className="hidden" src="/static/img/images-products-8038.jpg" height={274} width={400} alt="Portacount" /></div>
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
  </>;
};
