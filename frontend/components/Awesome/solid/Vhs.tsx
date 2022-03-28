import * as React from "react";

const SvgVhs = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M496 64H16A16 16 0 000 80v48h512V80a16 16 0 00-16-16zM0 400a48 48 0 0048 48h416a48 48 0 0048-48V160H0zm384-50.94a47.73 47.73 0 000-90.12V224h48.86C452 245.26 464 273.12 464 304s-12 58.73-31.14 80H384zM192 224h128v160H192zm-112.86 0H128v34.94a47.73 47.73 0 000 90.12V384H79.14C60 362.73 48 334.87 48 304s12-58.74 31.14-80z" />
  </svg>
);

SvgVhs.displayName = "SvgVhs";
SvgVhs.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgVhs;
