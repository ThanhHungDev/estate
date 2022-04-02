import * as React from "react";

const SvgMapMarkerTimes = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M192 0C86.4 0 0 86.4 0 192c0 76.8 25.6 99.2 172.8 310.4 9.6 12.8 28.8 12.8 38.4 0C358.4 291.2 384 268.8 384 192 384 86.4 297.6 0 192 0zm84.85 242.91c6.25 6.25 6.25 16.38 0 22.63l-11.31 11.31c-6.25 6.25-16.38 6.25-22.63 0L192 225.94l-50.91 50.91c-6.25 6.25-16.38 6.25-22.63 0l-11.31-11.31c-6.25-6.25-6.25-16.38 0-22.63L158.06 192l-50.91-50.91c-6.25-6.25-6.25-16.38 0-22.63l11.31-11.31c6.25-6.25 16.38-6.25 22.63 0L192 158.06l50.91-50.91c6.25-6.25 16.38-6.25 22.63 0l11.31 11.31c6.25 6.25 6.25 16.38 0 22.63L225.94 192l50.91 50.91z" />
  </svg>
);

SvgMapMarkerTimes.displayName = "SvgMapMarkerTimes";
SvgMapMarkerTimes.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMapMarkerTimes;
