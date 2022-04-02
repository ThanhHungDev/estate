import * as React from "react";

const SvgTemperatureUp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M160 322.91V112a16 16 0 00-32 0v210.91a48 48 0 1032 0zM256 112a112 112 0 00-224 0v166.5C12.31 303.09 0 334 0 368a144 144 0 00288 0c0-34-12.31-64.91-32-89.5zM144 464a96.14 96.14 0 01-96-96c0-27 11.69-47.3 21.5-59.5L80 295.41V112a64 64 0 01128 0v183.3l10.5 13.11C228.31 320.7 240 341 240 368a96.14 96.14 0 01-96 96zm348.72-356.23l-68-72A13.61 13.61 0 00416 32a13.77 13.77 0 00-8.72 3.77l-68 72A13.75 13.75 0 00336 116a12 12 0 0012 12h44v336a16 16 0 0016 16h16a16 16 0 0016-16V128h44a12 12 0 0012-12 13.75 13.75 0 00-3.28-8.23z" />
  </svg>
);

SvgTemperatureUp.displayName = "SvgTemperatureUp";
SvgTemperatureUp.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTemperatureUp;
