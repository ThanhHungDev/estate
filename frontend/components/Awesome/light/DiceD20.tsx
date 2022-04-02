import * as React from "react";

const SvgDiceD20 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M431.88 116.13L239.88 4.3a31.478 31.478 0 00-31.76 0l-192 111.84C6.15 121.94 0 132.75 0 144.46v223.09c0 11.71 6.15 22.51 16.12 28.32l192 111.83a31.478 31.478 0 0031.76 0l192-111.83c9.97-5.81 16.12-16.62 16.12-28.32V144.46c0-11.71-6.15-22.52-16.12-28.33zM224 57.62L318.7 176H129.3L224 57.62zM124.62 208h198.75L224 369.47 124.62 208zm68.28 171.99L55.92 362.87l44.43-133.28 92.55 150.4zm154.75-150.41l44.43 133.28-136.98 17.13 92.55-150.41zm7.17-59.69L262.67 54.72l138.01 80.78-45.86 34.39zm-261.64 0l-46.24-34.68 138.54-80.7-92.3 115.38zm-16.01 27.98l-45.13 135.4.17-169.12 44.96 33.72zM208 414.12v56.43L85.4 398.8 208 414.12zm155.6-15.45L240 470.84v-56.72l123.6-15.45zm7.23-200.8l45.15-33.86-.17 168.79-44.98-134.93zM224.14 480h.17l-.09.05-.08-.05z" />
  </svg>
);

SvgDiceD20.displayName = "SvgDiceD20";
SvgDiceD20.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDiceD20;
