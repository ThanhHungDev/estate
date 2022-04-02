import * as React from "react";

const SvgOven = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M64 256v192h320V256zm288 64H96v-32h256z" opacity={0.4} />
    <path
      d="M384 0H64A64 64 0 000 64v96h448V64a64 64 0 00-64-64zM80 104a24 24 0 1124-24 24 24 0 01-24 24zm96 0a24 24 0 1124-24 24 24 0 01-24 24zm96 0a24 24 0 1124-24 24 24 0 01-24 24zm96 0a24 24 0 1124-24 24 24 0 01-24 24zM0 480a32 32 0 0032 32h384a32 32 0 0032-32V192H0zm64-224h320v192H64zm32 64h256v-32H96z"
      className="oven_svg__fa-primary"
    />
  </svg>
);

SvgOven.displayName = "SvgOven";
SvgOven.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgOven;
