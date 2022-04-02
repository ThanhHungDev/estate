import * as React from "react";

const SvgSquirrel = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M263.48 512C175.39 511.58 97.93 443.62 96 355.46c-.82-37.58 11.81-71.87 32.74-99.54-.27 0-.52.08-.79.08A128 128 0 01128 0c86.2 0 184.54 112.89 137.33 254.86l-34.57 103.85a8 8 0 005.07 10.12l15.17 5.05a8 8 0 009.57-3.83l-31.22 93.7c-7.8 23.5 9.43 47.98 34.13 48.25z"
      opacity={0.4}
    />
    <path
      d="M479.84 448h-30.92c18.19-18.4 30.93-42.12 30.93-64 0-26.55-22.08-52.81-47.85-61.09V224h47.85a32.2 32.2 0 0031.43-38.87C500.84 136.42 466.72 96 415.87 96V64c-48 0-74.22 62.73-89.4 108.29l-97.1 291.47c-7.85 23.58 9.54 48.17 34.4 48.24h232.08a16 16 0 0016-16v-16a32 32 0 00-32.01-32zm-64-288a16 16 0 1116 16 16 16 0 01-15.97-16z"
      className="squirrel_svg__fa-primary"
    />
  </svg>
);

SvgSquirrel.displayName = "SvgSquirrel";
SvgSquirrel.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSquirrel;
