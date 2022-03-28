import * as React from "react";

const SvgDice = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M480 328c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24s24-10.75 24-24c0-13.26-10.75-24-24-24zM224 200c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24s24-10.75 24-24c0-13.26-10.75-24-24-24zm96 0c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24s24-10.75 24-24c0-13.26-10.75-24-24-24zm-192 0c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24s24-10.75 24-24c0-13.26-10.75-24-24-24zm96 96c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24s24-10.75 24-24c0-13.26-10.75-24-24-24zm0-192c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24s24-10.75 24-24c0-13.26-10.75-24-24-24zm352 88H439.38c-2.89-5.17-6.26-10.15-10.65-14.54L270.54 19.28C257.69 6.42 240.84 0 224 0s-33.69 6.42-46.54 19.28L19.28 177.46c-25.7 25.7-25.7 67.38 0 93.08l158.18 158.18C190.31 441.57 207.16 448 224 448s33.69-6.43 46.54-19.28L320 379.26V448c0 35.35 28.65 64 64 64h192c35.35 0 64-28.65 64-64V256c0-35.35-28.65-64-64-64zM247.27 405.45c-6.21 6.21-14.48 9.64-23.27 9.64s-17.05-3.42-23.27-9.64L42.55 247.27c-6.21-6.22-9.64-14.48-9.64-23.27s3.42-17.05 9.64-23.27L200.73 42.55c6.21-6.21 14.48-9.64 23.27-9.64s17.05 3.42 23.27 9.64l158.18 158.18c6.22 6.21 9.64 14.48 9.64 23.27s-3.42 17.05-9.64 23.27L247.27 405.45zM608 448c0 17.64-14.36 32-32 32H384c-17.64 0-32-14.36-32-32V347.26l76.72-76.72C441.57 257.69 448 240.84 448 224h128c17.64 0 32 14.36 32 32v192z" />
  </svg>
);

SvgDice.displayName = "SvgDice";
SvgDice.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDice;