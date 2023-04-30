import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";

const Input = (props) => {
  const { control, name, type, error = '', ...rest } = props;
  const { field } = useController({
    control,
    name
  });
  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        className={`w-full px-6 py-4 text-sm font-medium border rounded-xl text-text1 placeholder:text-text4 ${error.length > 0 ? 'border-error' : 'border-strock'}`}
        {...rest}
        {...field}
        placeholder={error ? error : rest?.placeholder}
      />
      {error.length > 0 && <span className="absolute text-sm font-medium pointer-events-none input-error text-error top-2/4 -translate-y-2/4 left-6">{error}</span>}
    </div>
  );
};

Input.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    error: PropTypes.string,
    control: PropTypes.any.isRequired
}

export default Input;
