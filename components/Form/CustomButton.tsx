import React, { FunctionComponent, MouseEventHandler } from "react";

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  className?: string;
};

const CustomButton: FunctionComponent<Props> = ({
  children,
  onClick,
  className,
}) => {
  return (
    <button
      className={`bg-gblue px-10 py-1 text-white rounded-md shadow-shadow1 hover:shadow-shadow2 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
