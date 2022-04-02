import * as React from "react";

const SvgGenderless = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 288 512" {...props}>
    <path d="M144 160c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96m0-48C64.5 112 0 176.5 0 256s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144z" />
  </svg>
);

SvgGenderless.displayName = "SvgGenderless";
SvgGenderless.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGenderless;
