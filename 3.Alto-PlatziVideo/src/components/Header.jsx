import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutRequest } from "../actions";
import classNames from 'classnames';
/*
 * Assets, importación de logo,imagenes, estilos.
 */
import "../assets/styles/components/Header.scss";
import logo from "../assets/static/logo-platzi-video-BW2.png";
import userIcon from "../assets/static/user-icon.png";
import gravatar from "../utils/gravatar.js";

const Header = (props) => {
  const { user, isLogin, isRegister } = props;
  const hasUSer = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  const headerClass = classNames('header', {
    isLogin,
    isRegister,
  });

  return (
    <header className={headerClass}>
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          <img
            className="header__img"
            src={hasUSer ? gravatar(user.email) : userIcon}
            alt={hasUSer ? gravatar(user.email) : ""}
          />
          <p>Perfil</p>
        </div>
        <ul>
          {hasUSer ? (
            <li>
              <a href="/">{user.email}</a>
            </li>
          ) : null}

          {hasUSer ? (
            <li>
              <a href="#logout" onClick={handleLogout}>
                Cerrar Sesión
              </a>
            </li>
          ) : (
            <li>
              <Link to="login">Iniciar sesión</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

//export default Header;
export default connect(mapStateToProps, mapDispatchToProps)(Header);
