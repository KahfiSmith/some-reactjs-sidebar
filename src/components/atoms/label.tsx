import { LabelHTMLAttributes } from "react";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export default function Label({ htmlFor, children, className }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`block md:text-sm lg:text-base font-medium text-gray-500 mb-1 ${className}`}
    >
      {children}
    </label>
  );
}
