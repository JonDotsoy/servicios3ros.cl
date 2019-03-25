
import { Carousel } from "../libs/Carousel";


export const ObrasVialesArticle = () => {
  return <article id="obrasviales">
    <div className="container">

      <div className="row">
        <h2 className="h2 text text-center">Obras Viales</h2>
      </div>

      <div className="row">

        <div className="text col-md-6">
          <p className="lead text-justify">En servicios3ros Contamos con un gran  equipo de especialistas para ejecutar los proyectos en obras viales.</p>
        </div>

        <div className="text col-md-6">
          <Carousel>
            <img className="img-responsive" src="/static/img/obrasviales/20160218_165228.jpg" />
            <img className="img-responsive" src="/static/img/obrasviales/20160303_161050.jpg" />
            <img className="img-responsive" src="/static/img/obrasviales/eglo.jpg.w300h225.jpg" />
            {/* <img className="img-responsive" src="/static/img/obrasviales/carro.jpg.w300h225.jpg" /> */}
          </Carousel>
        </div>

      </div>

    </div>
  </article>;
}
