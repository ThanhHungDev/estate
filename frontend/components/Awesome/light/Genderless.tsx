import * as React from "react";

const SvgGenderless = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 288 512" {...props}>
    <path d="M144 144c61.9 0 112 50 112 112 0 61.9-50 112-112 112-61.9 0-112-50-112-112 0-61.9 50-112 112-112m0-32C64.5 112 0 176.5 0 256s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144z" />
  </svg>
);

SvgGenderless.displayName = "SvgGenderless";
SvgGenderless.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGenderless;
