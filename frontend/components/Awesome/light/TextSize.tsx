import * as React from "react";

const SvgTextSize = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M624 32H272a16 16 0 00-16 16v72a8 8 0 008 8h16a8 8 0 008-8V64h144v384h-72a8 8 0 00-8 8v16a8 8 0 008 8h176a8 8 0 008-8v-16a8 8 0 00-8-8h-72V64h144v56a8 8 0 008 8h16a8 8 0 008-8V48a16 16 0 00-16-16zM304 224H16a16 16 0 00-16 16v56a8 8 0 008 8h16a8 8 0 008-8v-40h112v192H88a8 8 0 00-8 8v16a8 8 0 008 8h144a8 8 0 008-8v-16a8 8 0 00-8-8h-56V256h112v40a8 8 0 008 8h16a8 8 0 008-8v-56a16 16 0 00-16-16z" />
  </svg>
);

SvgTextSize.displayName = "SvgTextSize";
SvgTextSize.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTextSize;
