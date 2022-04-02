import * as React from "react";

const SvgTemperatureDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M160 322.91V304a16 16 0 00-32 0v18.91a48 48 0 1032 0zM256 112a112 112 0 00-224 0v166.5C12.3 303.19 0 334 0 368a144 144 0 00288 0c0-34-12.3-64.91-32-89.5zM144 448a79.87 79.87 0 01-48-143.81V112a48 48 0 0196 0v192.19A79.87 79.87 0 01144 448zm352-96h-48V48a16 16 0 00-16-16h-32a16 16 0 00-16 16v304h-48c-14.21 0-21.39 17.25-11.31 27.31l80 96a16 16 0 0022.62 0l80-96C517.34 369.25 510.22 352 496 352z" />
  </svg>
);

SvgTemperatureDown.displayName = "SvgTemperatureDown";
SvgTemperatureDown.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTemperatureDown;
