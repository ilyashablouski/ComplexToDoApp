import React from 'react';

interface IProps {
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, IProps>(
  ({ children }, ref) => {
    return <button ref={ref}>{children}</button>;
  },
);

export default Button;
