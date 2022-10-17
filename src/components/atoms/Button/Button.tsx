import React from 'react';

interface IProps {
  children: React.ReactNode;
  color?: string;
}

const Button = React.forwardRef<HTMLButtonElement, IProps>(
  ({ children, color }, ref) => {
    return (
      <button ref={ref} style={{ color: color ?? '#000000' }}>
        {children}
      </button>
    );
  },
);

export default Button;
