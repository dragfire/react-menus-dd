import React from 'react';
import Menu from './Menu';
import './menus.css';

const Menus = (props) => {
  const { list, children } = props;
  const className = 'Menus';
  let MenuList = (
    <ul className={className}>
      {children}
    </ul>
  );

  if (!list) {
    MenuList = (
      <div className={className}>
        {children}
      </div>
    );
  }
  return MenuList;
};

Menus.propTypes = {
  list: React.PropTypes.bool,
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.func,
    React.PropTypes.arrayOf(React.PropTypes.shape(Menu)),
  ]).isRequired,
};

Menus.defaultProps = {
  list: true,
};

export default Menus;
