import React from "react";

interface IconProps {
  className?: string;
}
export const FilterIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="32px"
      height="32px"
      viewBox="0 0 32 32"
      fill="#ffb7f3"
      className={className}
    >
      <path d="M26,6v0.233l-8.487,9.43L17,16.233V17v7.764l-2-1V17v-0.767l-0.513-0.57L6,6.233V6H26 M28,4H4v3  l9,10v8l6,3V17l9-10V4L28,4z" />
    </svg>
  );
};
export const DevpostIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      // enable-background="new 0 0 64 64"
      height="30px"
      viewBox="0 0 64 64"
      width="30px"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="m48.7 4.8h-33.4l-15.3 27.2 15.7 27.2h33.1l15.2-27.2z"
        fill="#ffb7f3"
      />
      <path
        fill="#0d0221"
        d="m32.2 16.9h-10.8v30.3h10.8c8.2 0 14.9-6.8 14.9-15.1s-6.6-15.2-14.9-15.2zm-.2 24.2h-4.5v-18.2h4.5c5 0 9.1 4.1 9.1 9.1s-4.1 9.1-9.1 9.1z"
      />
    </svg>
  );
};
