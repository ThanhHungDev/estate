import * as React from "react";

const SvgBorderOuter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M216 185h16a16 16 0 0016-16v-16a16 16 0 00-16-16h-16a16 16 0 00-16 16v16a16 16 0 0016 16zm96 96h16a16 16 0 0016-16v-16a16 16 0 00-16-16h-16a16 16 0 00-16 16v16a16 16 0 0016 16zm-96 0h16a16 16 0 0016-16v-16a16 16 0 00-16-16h-16a16 16 0 00-16 16v16a16 16 0 0016 16zm-96 0h16a16 16 0 0016-16v-16a16 16 0 00-16-16h-16a16 16 0 00-16 16v16a16 16 0 0016 16zm96 96h16a16 16 0 0016-16v-16a16 16 0 00-16-16h-16a16 16 0 00-16 16v16a16 16 0 0016 16zM432 33H16A16 16 0 000 49v416a16 16 0 0016 16h416a16 16 0 0016-16V49a16 16 0 00-16-16zm-16 416H32V65h384z" />
  </svg>
);

SvgBorderOuter.displayName = "SvgBorderOuter";
SvgBorderOuter.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBorderOuter;
