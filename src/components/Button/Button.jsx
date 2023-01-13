import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export const Button = ({ onClick, variant = '', type = 'button', children, ...rest }) => {
  return (
    <button type='button' className="button" { ...rest }>
      { children }
    </button>
  )
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'square', 'link']),
  type: PropTypes.oneOf(['button', 'submit']),
  children: PropTypes.node,
  onClick: PropTypes.func
}

export default Button;
