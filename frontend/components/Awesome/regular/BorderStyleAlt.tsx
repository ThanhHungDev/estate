import * as React from "react";

const SvgBorderStyleAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M432 32h-16a16 16 0 00-16 16v384H16a16 16 0 00-16 16v16a16 16 0 0016 16h400a32 32 0 0032-32V48a16 16 0 00-16-16zM312 88h24a16 16 0 0016-16V48a16 16 0 00-16-16h-24a16 16 0 00-16 16v24a16 16 0 0016 16zm-100 0h24a16 16 0 0016-16V48a16 16 0 00-16-16h-24a16 16 0 00-16 16v24a16 16 0 0016 16zM16 384h24a16 16 0 0016-16v-24a16 16 0 00-16-16H16a16 16 0 00-16 16v24a16 16 0 0016 16zm0-100h24a16 16 0 0016-16v-24a16 16 0 00-16-16H16a16 16 0 00-16 16v24a16 16 0 0016 16zm96-196h24a16 16 0 0016-16V48a16 16 0 00-16-16h-24a16 16 0 00-16 16v24a16 16 0 0016 16zm-96 96h24a16 16 0 0016-16v-24a16 16 0 00-16-16H16a16 16 0 00-16 16v24a16 16 0 0016 16zm0-96h24a16 16 0 0016-16V48a16 16 0 00-16-16H16A16 16 0 000 48v24a16 16 0 0016 16z" />
  </svg>
);

SvgBorderStyleAlt.displayName = "SvgBorderStyleAlt";
SvgBorderStyleAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBorderStyleAlt;
