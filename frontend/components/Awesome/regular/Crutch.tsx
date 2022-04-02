import * as React from "react";

const SvgCrutch = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M507.31 185.59L326.29 4.68a16 16 0 00-22.62 0L292.35 16a16 16 0 000 22.61l181 180.9a16 16 0 0022.63 0l11.31-11.3a16 16 0 00.02-22.62zm-178.75 77.2l-79.19-79.15 71.43-71.38-33.94-33.92-121.14 121a87.62 87.62 0 00-23.5 42.43l-28.31 122.47L5.27 472.81a18 18 0 000 25.44l8.49 8.48a18 18 0 0025.45 0l108.66-108.59 122.5-28.24a87.85 87.85 0 0042.41-23.51l121.16-121.06L400 191.41zm-49.75 49.7a39.75 39.75 0 01-19.25 10.66l-91.78 21.18L189 252.59a39.74 39.74 0 0110.69-19.27l15.77-15.76 79.19 79.14z" />
  </svg>
);

SvgCrutch.displayName = "SvgCrutch";
SvgCrutch.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCrutch;
