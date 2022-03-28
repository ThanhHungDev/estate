import * as React from "react";

const SvgLaptopHouse = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M272 416H96a32 32 0 01-32-32V219.88L42.34 239a16.51 16.51 0 01-9.34 3.48 16.22 16.22 0 01-10.63-4.78L3.55 216.42A16.4 16.4 0 010 207a16.15 16.15 0 014.78-10.61L216.58 8.92C222.12 4 232.64 0 240.05 0S258 4 263.5 8.92L352 87.3V48a16 16 0 0116-16h32a16 16 0 0116 16v96l59.24 52.42A16.31 16.31 0 01480 207a16.51 16.51 0 01-3.58 9.44l-6.68 7.56H332.8c-17.8 0-33.69 8.24-44.82 21.12V208a16 16 0 00-16-16H208a16 16 0 00-16 16v64a16 16 0 0016 16h64z"
      opacity={0.4}
    />
    <path
      d="M629.33 448H592V288c0-17.67-12.89-32-28.8-32H332.8c-15.91 0-28.8 14.33-28.8 32v160h-37.33A10.67 10.67 0 00256 458.67v10.66A42.82 42.82 0 00298.6 512h298.8a42.82 42.82 0 0042.6-42.67v-10.66A10.67 10.67 0 00629.33 448zM544 448H352V304h192z"
      className="laptop-house_svg__fa-primary"
    />
  </svg>
);

SvgLaptopHouse.displayName = "SvgLaptopHouse";
SvgLaptopHouse.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLaptopHouse;
