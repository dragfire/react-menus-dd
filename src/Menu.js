import React from 'react';
import './menu.css';
import ArrowRight from './arrow_right.png';
import PropTypes from 'prop-types';

const Styles = {
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
    style,
  } = props;
  return (
    <li className="Menu">
      <a
        href={link}
        onClick={() => onClick(text)}
        className="Menu-link"
        style={style}
      >
        {text}
      </a>
      {children ? <img src={ArrowRight} style={Styles.arrowRight} alt="arrow" /> : null}
      {children}
    </li>
  );
};

Menu.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string.isRequired,
  style: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func,
  ]),
  onClick: React.PropTypes.func,
};

Menu.defaultProps = {
  link: '#',
  onClick: value => console.info(value),
  children: null,
  style: null,
};

export default Menu;
