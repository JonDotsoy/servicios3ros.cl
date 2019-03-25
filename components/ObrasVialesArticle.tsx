
import { Carousel } from "../libs/Carousel";


export const ObrasVialesArticle = () => {
  return <article id="obrasciviles">
    <div className="container">

      <div className="row">

        <div className="text col-md-6">

          <h2 className="h2 text text-center">Obras Viales</h2>

          <p className="lead text-justify">Con la colaboración de expertos en el área, en SERVICIOS3ROS trabajamos en proyectos de gran envergadura para hacer de las vías públicas que la comunidad necesita.</p>

        </div>
        <div className="text col-md-6">
          <Carousel>
            <img className="img-responsive" src="/static/img/obrasviales/20160215_125922.jpg" />
            <img className="img-responsive" src="/static/img/obrasviales/egloreja.jpg.w300h225.jpg" />
          </Carousel>
        </div>

      </div>

    </div>
  </article>;
}
