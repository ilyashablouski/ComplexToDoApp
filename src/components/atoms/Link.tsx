import React from 'react';

interface ILinkProps {
  className?: string;
  href: string;
  isTarget?: boolean;
  children: React.ReactNode;
}

const Link = ({ className, href, isTarget, children }: ILinkProps) => (
  <a
    className={className}
    href={href}
    target={isTarget ? '_blank' : '_self'}
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

export default Link;
