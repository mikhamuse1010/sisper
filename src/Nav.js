import React from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
  render() {    
    return (
      <nav className="Nav">
        <div className="Nav__container">
          <div className="Nav__right">
            <ul className="Nav__item-wrapper">
              <li className="Nav__item">
                <Link List item with no bullet></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}