import React from 'react';
import PropTypes from 'prop-types';
import Menu from './Menu';
import SubMenus from './SubMenus';
import { WrappedComponent, TriggerComponent } from './HelperComponents';
import './menus.css';

class Menus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };

    this.onDOMClick = this.onDOMClick.bind(this);
    this.onClickedAway = this.onClickedAway.bind(this);
    this.toggleMenus = this.toggleMenus.bind(this);
  }

  componentDidMount() {
    this.element = this.node;
    window.addEventListener('click', this.onDOMClick);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onDOMClick);
  }

  onDOMClick(event) {
    if (this.element !== event.target && !this.element.contains(event.target)) {
      this.onClickedAway();
    }
  }

  onClickedAway() {
    this.setState({ visible: false });
  }

  toggleMenus() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    const {
      list,
      children,
      style,
      label,
      triggerComponent,
    } = this.props;
    return (
      <div className="Menus-wrapper">
        <WrappedComponent
          toggleMenus={this.toggleMenus}
          component={triggerComponent}
          label={label}
        />
        <div className={`${this.state.visible ? 'show' : 'hide'}`}>
          <SubMenus
            list={list}
            style={style}
          >
            {children}
          </SubMenus>
        </div>
      </div>
    );
  }
}

Menus.propTypes = {
  list: PropTypes.bool,
  label: PropTypes.string,
  style: PropTypes.object,
  triggerComponent: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.arrayOf(Menu),
  ]).isRequired,
};

Menus.defaultProps = {
  list: true,
  style: null,
  label: null,
  triggerComponent: TriggerComponent,
};

export default Menus;
