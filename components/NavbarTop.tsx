import classNames from 'classnames';
import { useMenu } from '../libs/useMenu';

interface NavbarTopProps {
  readonly cancell: boolean,
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