import * as React from "react";

const SvgStretcher = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M608 128H192L79.84 10.74a32 32 0 00-45.18-2.65L10.74 29.35a32 32 0 00-2.66 45.17l121.7 128A64 64 0 00177.62 224h23.18l143.11 125.81-51.84 45.36A65.88 65.88 0 10313 419.38L368 371l55 48.39a63.26 63.26 0 1020.89-24.21l-51.84-45.36L535.2 224H608a32 32 0 0032-32v-32a32 32 0 00-32-32zM256 480a32 32 0 1132-32 32 32 0 01-32 32zm224-64a32 32 0 11-32 32 32 32 0 0132-32zm-112-87.27L248.3 224h239.4zM608 192H177.62c-9.14 0-17.85-3.92-24.65-11.53L32 53.26 55.89 32l122.44 128H608z" />
  </svg>
);

SvgStretcher.displayName = "SvgStretcher";
SvgStretcher.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgStretcher;
