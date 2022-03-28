import * as React from "react";

const SvgRegistered = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M250.43 179.77h-23.37v56.14h29.87c18.6 0 28.43-9.83 28.43-28.44 0-18.93-6.26-27.7-34.93-27.7zM256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm86.39 388h-24.46a24 24 0 01-21.19-12.73l-44.13-82.93h-25.55V372a24 24 0 01-24 24h-22.57a24 24 0 01-24-24V139.68a24 24 0 0124-24h70.67c74 0 105.49 35 105.49 89.25 0 31.48-14.51 59.31-37.94 74.48 1.4 2.37-2-3.82 44.7 81a24 24 0 01-21 35.59z"
      opacity={0.4}
    />
    <path
      d="M363.41 360.41c-46.73-84.82-43.3-78.63-44.7-81 23.43-15.17 37.94-43 37.94-74.48 0-54.25-31.5-89.25-105.49-89.25h-70.67a24 24 0 00-24 24V372a24 24 0 0024 24h22.57a24 24 0 0024-24v-71.66h25.55l44.13 82.93A24 24 0 00317.93 396h24.46a24 24 0 0021-35.59zm-106.48-124.5h-29.87v-56.14h23.37c28.67 0 34.93 8.77 34.93 27.7 0 18.61-9.83 28.44-28.43 28.44z"
      className="registered_svg__fa-primary"
    />
  </svg>
);

SvgRegistered.displayName = "SvgRegistered";
SvgRegistered.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRegistered;
