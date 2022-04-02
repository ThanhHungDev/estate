import * as React from "react";

const SvgTemperatureUp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M160 322.91V112a16 16 0 00-32 0v210.91a48 48 0 1032 0zM256 112a112 112 0 00-224 0v166.5C12.3 303.19 0 334 0 368a144 144 0 00288 0c0-34-12.3-64.91-32-89.5zM144 448a79.87 79.87 0 01-48-143.81V112a48 48 0 0196 0v192.19A79.87 79.87 0 01144 448zm363.3-315.31l-80-96a16 16 0 00-22.63 0l-80 96C314.66 142.75 321.78 160 336 160h48v304a16 16 0 0016 16h32a16 16 0 0016-16V160h48c14.19 0 21.36-17.25 11.3-27.31z" />
  </svg>
);

SvgTemperatureUp.displayName = "SvgTemperatureUp";
SvgTemperatureUp.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTemperatureUp;
