import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export const Button = ({ mixes, size, color, label, ...props }) => {
  return (
    <button
      type="button"
      className={['button', `button_size_${size}`, `button_color_${color}`, mixes].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(['extra-small', 'small', 'medium', 'large']),
  color: PropTypes.oneOf(['blue', 'red', 'yellow', 'white']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

// Button.defaultProps = {
//   color: 'blue',
//   size: 'medium',
//   onClick: undefined,
// };

// export default Button;
