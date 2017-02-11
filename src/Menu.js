import React from 'react';
import './menu.css';
import ArrowRight from './arrow_right.png';

const Styles = {
  menuLink: {
    textDecoration: 'none',
  },
  arrowRight: {
    position: 'absolute',
    right: 5,
    top: '35%',
    width: 12,
    height: 12,
  },
};

const Menu = (props) => {
  const {
    link,
    onClick,
    children,
    text,
  } = props;
  return (
    <li className="Menu">
      <a
        href={link}
        onClick={() => onClick(text)}
        className="Menu-link"
        style={Styles.menuLink}
      >
        {text}
      </a>
      {children ? <img src={ArrowRight} style={Styles.arrowRight} alt="arrow" /> : null}
      {children}
    </li>
  );
};

Menu.propTypes = {
  link: React.PropTypes.string,
  text: React.PropTypes.string.isRequired,
  children: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object,
    React.PropTypes.func,
  ]),
  onClick: React.PropTypes.func,
};

Menu.defaultProps = {
  link: '#',
  onClick: value => console.info(value),
  children: null,
};

export default Menu;
