import type { ReactNode } from "react";


interface ButtonProps {
  children: ReactNode;
  href?: string;
}

const Button = ({ children, href }: ButtonProps) => {
  const classes =
    "inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return <button className={classes}>{children}</button>;
};

export default Button;