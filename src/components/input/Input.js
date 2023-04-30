import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
import {withErrorBoundary} from 'react-error-boundary';
import ErrorComponent from "../common/ErrorComponent";
import classNames from "utils/classNames";

const Input = (props) => {
  const { control, name, type, error = '', children, ...rest } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: ''
  });
  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        className={classNames('w-full dark:text-white bg-transparent px-6 py-4 text-sm font-medium border rounded-xl dark:placeholder:text-text2 placeholder:text-text', 
        error.length > 0 ? 'border-error text-error' : 'border-strock  text-text1 dark:border-darkStroke',
        children ? 'pr-16' : ''
        )}
        {...rest}
        {...field}
        placeholder={error ? error : rest?.placeholder}
      />
      {error.length > 0 && <span className="absolute text-sm font-medium pointer-events-none input-error text-error top-2/4 -translate-y-2/4 left-6">{error}</span>}
      { children && <span className="absolute cursor-pointer select-none right-6 top-2/4 -translate-y-2/4">
        {children}
      </span>}
    </div>
  );
};

Input.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    error: PropTypes.string,
    control: PropTypes.any.isRequired
}

export default withErrorBoundary(Input, {
  FallbackComponent: <ErrorComponent></ErrorComponent>
});
