import React from 'react';
import Menu from './Menu';
import './menus.css';
import PropTypes from 'prop-types';

const SubMenus = (props) => {
  const {
    list,
    children,
    style,
  } = props;
  const className = 'Menus';
  let MenuList = (
    <ul
      className={className}
      style={style}
    >
      {children}
    </ul>
  );

  if (!list) {
    MenuList = (
      <div
        className={className}
        style={style}
      >
        {children}
      </div>
    );
  }
  return MenuList;
};


SubMenus.propTypes = {
  list: PropTypes.bool,
  label: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.arrayOf(Menu),
  ]).isRequired,
};

SubMenus.defaultProps = {
  list: true,
  style: null,
  label: null,
};

export default SubMenus;
