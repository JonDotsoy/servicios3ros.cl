import React from "react";

export const MaquinariasArticle = () => {
  return <article id="maquinarias">
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

      </div>
    </div>
  </article>;
};
