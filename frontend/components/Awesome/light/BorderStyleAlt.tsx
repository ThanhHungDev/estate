import * as React from "react";

const SvgBorderStyleAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M439 32h-16a8 8 0 00-8 8v408H7a8 8 0 00-8 8v16a8 8 0 008 8h424a16 16 0 0016-16V40a8 8 0 00-8-8zM15 80h16a16 16 0 0016-16V48a16 16 0 00-16-16H15A16 16 0 00-1 48v16a16 16 0 0016 16zm200 0h16a16 16 0 0016-16V48a16 16 0 00-16-16h-16a16 16 0 00-16 16v16a16 16 0 0016 16zm96 0h16a16 16 0 0016-16V48a16 16 0 00-16-16h-16a16 16 0 00-16 16v16a16 16 0 0016 16zm-192 0h16a16 16 0 0016-16V48a16 16 0 00-16-16h-16a16 16 0 00-16 16v16a16 16 0 0016 16zM15 376h16a16 16 0 0016-16v-16a16 16 0 00-16-16H15a16 16 0 00-16 16v16a16 16 0 0016 16zm0-96h16a16 16 0 0016-16v-16a16 16 0 00-16-16H15a16 16 0 00-16 16v16a16 16 0 0016 16zm0-96h16a16 16 0 0016-16v-16a16 16 0 00-16-16H15a16 16 0 00-16 16v16a16 16 0 0016 16z" />
  </svg>
);

SvgBorderStyleAlt.displayName = "SvgBorderStyleAlt";
SvgBorderStyleAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBorderStyleAlt;
