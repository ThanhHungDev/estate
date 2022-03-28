import * as React from "react";

const SvgBorderStyle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M440 32H16A16 16 0 000 48v424a8 8 0 008 8h16a8 8 0 008-8V64h408a8 8 0 008-8V40a8 8 0 00-8-8zM232 432h-16a16 16 0 00-16 16v16a16 16 0 0016 16h16a16 16 0 0016-16v-16a16 16 0 00-16-16zm96 0h-16a16 16 0 00-16 16v16a16 16 0 0016 16h16a16 16 0 0016-16v-16a16 16 0 00-16-16zm-192 0h-16a16 16 0 00-16 16v16a16 16 0 0016 16h16a16 16 0 0016-16v-16a16 16 0 00-16-16zm296-200h-16a16 16 0 00-16 16v16a16 16 0 0016 16h16a16 16 0 0016-16v-16a16 16 0 00-16-16zm0-96h-16a16 16 0 00-16 16v16a16 16 0 0016 16h16a16 16 0 0016-16v-16a16 16 0 00-16-16zm0 296h-16a16 16 0 00-16 16v16a16 16 0 0016 16h16a16 16 0 0016-16v-16a16 16 0 00-16-16zm0-104h-16a16 16 0 00-16 16v16a16 16 0 0016 16h16a16 16 0 0016-16v-16a16 16 0 00-16-16z" />
  </svg>
);

SvgBorderStyle.displayName = "SvgBorderStyle";
SvgBorderStyle.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBorderStyle;
