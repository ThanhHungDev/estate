import * as React from "react";

const SvgRainbow = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M288 224.4c-52.9.1-96 42.6-96 95.5V472c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V319.9c0-35.3 28.8-63.6 64-63.7 35.2 0 64 28.4 64 63.7V472c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V319.9c0-53-43.1-95.5-96-95.5zM288 32C129.2 32 0 161 0 319.9V472c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V319.9C32 178.6 146.9 64.1 288 64c141.1 0 256 114.6 256 255.9V472c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V319.9C576 161 446.8 32 288 32zm0 95.8c-105.9 0-192 86.1-192 192V472c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V319.9c0-88.3 71.8-159.9 160-159.9s160 71.6 160 159.9V472c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V319.9c0-106-86.1-192-192-192.1z" />
  </svg>
);

SvgRainbow.displayName = "SvgRainbow";
SvgRainbow.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRainbow;
