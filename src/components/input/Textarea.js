import React from "react";
import { useController } from "react-hook-form";

const Textarea = (props) => {
  const { control, name, children, placeholder = "", ...rest } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <textarea
      className="resize-none outline-none min-h-[140px] w-full px-6 py-4 text-sm font-medium bg-transparent border dark:text-white rounded-xl dark:placeholder:text-text2 placeholder:text-text4"
      placeholder={placeholder}
      {...field}
      {...rest}
    ></textarea>
  );
};

export default Textarea;
