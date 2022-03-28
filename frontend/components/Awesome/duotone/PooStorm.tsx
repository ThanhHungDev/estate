import * as React from "react";

const SvgPooStorm = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M318.4 354l-88 152a12 12 0 01-22.1-8.8l23-97.2H172a12 12 0 01-11.9-13.6l16-120A12.06 12.06 0 01188 256h68a12 12 0 0111.6 15.1L250.3 336H308a12 12 0 0110.4 18z"
      opacity={0.4}
    />
    <path
      d="M374.4 224.7c41 3.3 73.6 37.5 73.5 79.3a80.24 80.24 0 01-80 80h-30l8.1-14a44 44 0 00-38.1-66h-16l6.6-24.7A44 44 0 00256 224h-68a44.26 44.26 0 00-43.7 38.2l-16 120a10.82 10.82 0 010 1.8H80a80.24 80.24 0 01-80-80c0-41.8 32.6-76 73.6-79.3A62 62 0 0164 192a64.06 64.06 0 0164-64h16A79.79 79.79 0 00208.9 1.5 93.1 93.1 0 01224 0a96 96 0 0196 96 94.61 94.61 0 01-5.9 32h5.9a64.06 64.06 0 0164 64 62 62 0 01-9.6 32.7z"
      className="poo-storm_svg__fa-primary"
    />
  </svg>
);

SvgPooStorm.displayName = "SvgPooStorm";
SvgPooStorm.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPooStorm;
