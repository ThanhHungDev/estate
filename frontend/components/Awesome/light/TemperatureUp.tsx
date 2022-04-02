import * as React from "react";

const SvgTemperatureUp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M224 80a80 80 0 10-160 0v241.91a112 112 0 10160 0zm-80 400a79.87 79.87 0 01-48-143.8V80a48 48 0 1196 0v256.2A79.87 79.87 0 01144 480zm16-125.09V80a16 16 0 10-32 0v274.91a48 48 0 1032 0zm332.47-237.16L408.41 35.5a11.91 11.91 0 00-16.87 0l-84 82.31a13.88 13.88 0 00-3.56 8.55 13.82 13.82 0 003.47 8.45l5.62 5.69a11.94 11.94 0 0016.91.08l54-52.74V472a8 8 0 008 8h16a8 8 0 008-8V88.06l53.94 52.36a12 12 0 0016.93 0l5.63-5.67a13.83 13.83 0 003.53-8.5 13.85 13.85 0 00-3.54-8.5z" />
  </svg>
);

SvgTemperatureUp.displayName = "SvgTemperatureUp";
SvgTemperatureUp.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTemperatureUp;
