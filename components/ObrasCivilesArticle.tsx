import { Carousel } from "../libs/Carousel";


export const ObrasCivilesArticle = () => {
  return <article id="obrasciviles">
    <div className="container">

      <div className="row">

        <div className="col-md-12">
          <h2 className="h2 text text-center">Construcción de <b>Obras Civiles</b></h2>
        </div>

        <div className="text col-md-6">

          <p className="lead text-justify">En SERVICIOS3ROS nos encargamos de crear obras civiles con una gran capacidad técnica, profesional, para asumir proyectos de gran envergadura, encargados por concesionarias y entidades privadas en general, así como por organismos públicos y empresas del Estado. </p>

          <p className="lead text-justify">Nuestro foco está en ofrecer el mejor servicio en nuestras obras, pensando el las mejores estrategias para poder ofrecer un mejor experiencia para los usuarios de nuestras obras.</p>

        </div>

        <div className="text col-md-6">

          <Carousel>
            <img className="img-responsive" src="/static/img/obrasciviles/20160217_174505.jpg" />
            <img className="img-responsive" src="/static/img/obrasciviles/20160218_162630.jpg" />
            {/* <img className="img-responsive" src="/static/img/obrasciviles/20160303_161056.jpg" /> */}
          </Carousel>

        </div>
      </div>

    </div>
  </article>;
}
