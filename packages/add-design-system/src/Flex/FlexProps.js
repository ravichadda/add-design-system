import React from 'react';
import PropTypes from 'prop-types';

export const FlexProps = (props) => <div {...props} />;

FlexProps.defaultProps = {
  alignItems: 'center',
  basis: undefined,
  direction: 'row',
  inline: false,
  justifyContent: undefined,
  reverse: false,
  wrap: undefined,
};

FlexProps.propTypes = {
  alignItems: PropTypes.string,
  basis: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  direction: PropTypes.string,
  inline: PropTypes.bool,
  justifyContent: PropTypes.string,
  reverse: PropTypes.bool,
  wrap: PropTypes.string,
};
