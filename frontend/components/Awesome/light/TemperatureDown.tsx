import * as React from "react";

const SvgTemperatureDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M160 354.91V304a16 16 0 10-32 0v50.91a48 48 0 1032 0zM224 80a80 80 0 10-160 0v241.91a112 112 0 10160 0zm-80 400a79.87 79.87 0 01-48-143.8V80a48 48 0 1196 0v256.2A79.87 79.87 0 01144 480zm348.53-102.83l-5.62-5.69a12 12 0 00-16.91-.07l-54 52.73V40a8 8 0 00-8-8h-16a8 8 0 00-8 8v383.92l-53.94-52.36a12 12 0 00-16.93 0l-5.63 5.67a12 12 0 000 17l84.06 82.25a11.91 11.91 0 0016.87 0l84-82.31a12 12 0 00.09-17z" />
  </svg>
);

SvgTemperatureDown.displayName = "SvgTemperatureDown";
SvgTemperatureDown.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTemperatureDown;
