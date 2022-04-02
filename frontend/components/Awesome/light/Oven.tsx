import * as React from "react";

const SvgOven = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M384 0H64A64 64 0 000 64v416a32 32 0 0032 32h384a32 32 0 0032-32V64a64 64 0 00-64-64zm32 480H32V160h384zm0-352H32V64a32 32 0 0132-32h320a32 32 0 0132 32zm-48-64a16 16 0 1016 16 16 16 0 00-16-16zm-64 0a16 16 0 1016 16 16 16 0 00-16-16zm-160 0a16 16 0 1016 16 16 16 0 00-16-16zm-64 0a16 16 0 1016 16 16 16 0 00-16-16zm0 384h288a16 16 0 0016-16V208a16 16 0 00-16-16H80a16 16 0 00-16 16v224a16 16 0 0016 16zm16-224h256v192H96zm208 32H144a16 16 0 000 32h160a16 16 0 000-32z" />
  </svg>
);

SvgOven.displayName = "SvgOven";
SvgOven.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgOven;
