import * as React from "react";

const SvgProjectDiagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M592 0h-96c-26.51 0-48 21.49-48 48v32H192V48c0-26.51-21.49-48-48-48H48C21.49 0 0 21.49 0 48v96c0 26.51 21.49 48 48 48h94.86l88.76 150.21c-4.77 7.46-7.63 16.27-7.63 25.79v96c0 26.51 21.49 48 48 48h96c26.51 0 48-21.49 48-48v-96c0-26.51-21.49-48-48-48h-96c-5.2 0-10.11 1.04-14.8 2.57l-83.43-141.18C184.8 172.59 192 159.2 192 144v-32h256v32c0 26.51 21.49 48 48 48h96c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM32 144V48c0-8.82 7.18-16 16-16h96c8.82 0 16 7.18 16 16v96c0 8.82-7.18 16-16 16H48c-8.82 0-16-7.18-16-16zm336 208c8.82 0 16 7.18 16 16v96c0 8.82-7.18 16-16 16h-96c-8.82 0-16-7.18-16-16v-96c0-8.82 7.18-16 16-16h96zm240-208c0 8.82-7.18 16-16 16h-96c-8.82 0-16-7.18-16-16V48c0-8.82 7.18-16 16-16h96c8.82 0 16 7.18 16 16v96z" />
  </svg>
);

SvgProjectDiagram.displayName = "SvgProjectDiagram";
SvgProjectDiagram.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgProjectDiagram;