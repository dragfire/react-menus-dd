import React from 'react';
import Menu from './Menu';
import './menus.css';

const Menus = (props) => {
  const {
    list,
    children,
    style,
  } = props;
  const className = 'Menus';
  let MenuList = (
    <ul className={className} style={style}>
      {children}
    </ul>
  );

  if (!list) {
    MenuList = (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }
  return MenuList;
};

Menus.propTypes = {
  list: React.PropTypes.bool,
  style: React.PropTypes.object,
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.func,
    React.PropTypes.arrayOf(Menu),
  ]).isRequired,
};

Menus.defaultProps = {
  list: true,
  style: null,
};

export default Menus;
