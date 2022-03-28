import * as React from "react";

const SvgUmbrella = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M288 288c12.2 0 22.9 5.7 32 13.6v130.3a80 80 0 01-155.4 26.7 32 32 0 0160.3-21.3A16 16 0 00256 432V301.7c9.59-8.9 19.69-13.6 32-13.7z"
      opacity={0.4}
    />
    <path
      d="M557 292.2c-51.5-54.4-107.61-52.5-158.61 37-5.3 9.5-14.9 8.6-19.7 0-2.5-4.4-32.2-73.2-90.7-73.2-45.8 0-70.5 37.8-90.7 73.2-4.8 8.6-14.4 9.5-19.7 0-50.9-89.4-106.59-92-158.59-37-10.2 9.9-20.9-1.3-18.7-11.4C29.49 144.5 138.29 62.6 256 49.9V32a32 32 0 0164 0v17.9c117.3 12.7 227.11 94.6 255.71 230.9 2.2 10.1-8.4 21.4-18.71 11.4z"
      className="umbrella_svg__fa-primary"
    />
  </svg>
);

SvgUmbrella.displayName = "SvgUmbrella";
SvgUmbrella.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUmbrella;