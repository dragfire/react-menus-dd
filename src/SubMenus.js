import React from 'react';
import Menu from './Menu';
import './menus.css';

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
  list: React.PropTypes.bool,
  label: React.PropTypes.string,
  style: React.PropTypes.object,
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.func,
    React.PropTypes.arrayOf(Menu),
  ]).isRequired,
};

SubMenus.defaultProps = {
  list: true,
  style: null,
  label: null,
};

export default SubMenus;
