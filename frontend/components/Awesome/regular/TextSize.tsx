import * as React from "react";

const SvgTextSize = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M624 32H272a16 16 0 00-16 16v80a16 16 0 0016 16h16a16 16 0 0016-16V96h112v336h-48a16 16 0 00-16 16v16a16 16 0 0016 16h160a16 16 0 0016-16v-16a16 16 0 00-16-16h-48V96h112v32a16 16 0 0016 16h16a16 16 0 0016-16V48a16 16 0 00-16-16zM304 224H16a16 16 0 00-16 16v64a16 16 0 0016 16h16a16 16 0 0016-16v-32h80v160H96a16 16 0 00-16 16v16a16 16 0 0016 16h128a16 16 0 0016-16v-16a16 16 0 00-16-16h-32V272h80v32a16 16 0 0016 16h16a16 16 0 0016-16v-64a16 16 0 00-16-16z" />
  </svg>
);

SvgTextSize.displayName = "SvgTextSize";
SvgTextSize.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTextSize;
