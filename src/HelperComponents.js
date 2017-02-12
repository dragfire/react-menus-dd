import React, { PropTypes } from 'react';

const WrappedComponent = ({ toggleMenus, component, label }) => {
  const TriggerComponent = component;
  return <TriggerComponent toggleMenus={toggleMenus} label={label} />;
};

const TriggerComponent = ({ toggleMenus, label }) => (
  <div onClick={toggleMenus}>
    {label}
  </div>
);

TriggerComponent.propTypes = {
  toggleMenus: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

WrappedComponent.propTypes = {
  component: PropTypes.func.isRequired,
  ...TriggerComponent.propTypes,
};

export { WrappedComponent, TriggerComponent };
