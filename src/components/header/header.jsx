import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getAuthorizationStatus, getEmail} from '../../store/selectors/selectors';
import {AuthorizationStatus} from '../../const';


const Header = (props) => {
  const {isAuthorized, email} = props;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile"
                  to={isAuthorized === AuthorizationStatus.AUTHORIZED ? `/favorites` : `/login`}>
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  <span className="header__user-name user__name"
                  >{isAuthorized ? email : `Sign in`}</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};


Header.propTypes = {
  type: PropTypes.string,
  isAuthorized: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isAuthorized: getAuthorizationStatus(state),
    email: getEmail(state),
  };
};

export {Header};
export default connect(mapStateToProps)(Header);
