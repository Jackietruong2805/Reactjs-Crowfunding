import React from "react";
import PropTypes from "prop-types";
import classNames from "utils/classNames";

const Button = ({ type = "button", children, className = "", text = '', isLoading = false, ...rest }) => {
  const child = !!isLoading 
  ? <div className="w-10 h-10 mx-auto border-4 border-white rounded-full border-b-transparent animate-spin border-t-transparent"></div>
  : children
  return (
    <button
      className={classNames(
        'flex items-center justify-center p-4 text-base font-semibold rounded-xl min-h-[56px]', 
        !!isLoading ? "opacity-50 pointer-events-none" : "",
        text === 'secondary' ? 'text-secondary' : 'text-white',
        className   
      )}
      type={type}
      {...rest}
    >
      {child}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  isLoading: PropTypes.bool
};

export default Button;
