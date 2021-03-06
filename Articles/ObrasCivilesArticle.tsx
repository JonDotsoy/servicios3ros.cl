import { Carousel } from "../libs/Carousel";


export const ObrasCivilesArticle = () => {
  return <article id="obrasciviles">
    <div className="container">

      <div className="row">
        <h2 className="h2 text text-center">Obras Civiles</h2>
      </div>

      <div className="row">

        {/* <div className="text col-md-6">
          <p className="lead text-justify">En SERVICIOS3ROS nos encargamos de crear obras civiles con una gran capacidad técnica, profesional, para asumir proyectos de gran envergadura, encargados por concesionarias y entidades privadas en general, así como por organismos públicos y empresas del Estado. </p>
        </div> */}

        <div className="text col-md-3"></div>

        <div className="text col-md-6">

          <Carousel height='67%'>
            <img className="img-responsive" src="/static/img/obrasciviles/WhatsApp Image 2019-03-25 at 14.51.59.jpeg" />
            <img className="img-responsive" src="/static/img/obrasciviles/WhatsApp Image 2019-03-25 at 14.51.59(2).jpeg" />
            <img className="img-responsive" src="/static/img/obrasciviles/WhatsApp Image 2019-03-25 at 14.52.00.jpeg" />
          </Carousel>

        </div>
      </div>

    </div>
  </article>;
}
