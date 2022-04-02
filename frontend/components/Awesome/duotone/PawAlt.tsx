import * as React from "react";

const SvgPawAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M416 384a96 96 0 01-96 96c-51.71 1.76-72.19-32-96-32s-44.29 33.75-96 32a95.76 95.76 0 01-47.32-179.22c27.05-15.27 46.88-60.87 67.17-97.83C163.59 174.31 193.79 160 224 160s60.41 14.31 76.14 42.95c20 36.42 40.88 83 67.17 97.83A95.32 95.32 0 01416 384z"
      opacity={0.4}
    />
    <path
      d="M400 144a48 48 0 1048 48 48 48 0 00-48-48zM304 32a48 48 0 1048 48 48 48 0 00-48-48zM48 144a48 48 0 1048 48 48 48 0 00-48-48zm96-112a48 48 0 1048 48 48 48 0 00-48-48z"
      className="paw-alt_svg__fa-primary"
    />
  </svg>
);

SvgPawAlt.displayName = "SvgPawAlt";
SvgPawAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPawAlt;
