import * as React from "react";

const SvgMapMarkerMinus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M192 0C86.4 0 0 86.4 0 192c0 76.8 25.6 99.2 172.8 310.4 4.8 6.4 12 9.6 19.2 9.6s14.4-3.2 19.2-9.6C358.4 291.2 384 268.8 384 192 384 86.4 297.6 0 192 0zm.01 474c-19.67-28.17-37.09-52.85-52.49-74.69C42.64 261.97 32 245.11 32 192c0-88.22 71.78-160 160-160s160 71.78 160 160c0 53.11-10.64 69.97-107.52 207.31-15.52 22.01-33.09 46.92-52.47 74.69zM280 176H104c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h176c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8z" />
  </svg>
);

SvgMapMarkerMinus.displayName = "SvgMapMarkerMinus";
SvgMapMarkerMinus.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMapMarkerMinus;
