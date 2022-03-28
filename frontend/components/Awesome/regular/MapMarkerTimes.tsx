import * as React from "react";

const SvgMapMarkerTimes = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M192 0C86.4 0 0 86.4 0 192c0 76.8 25.6 99.2 172.8 310.4 4.8 6.4 12 9.6 19.2 9.6 7.2 0 14.4-3.2 19.2-9.6C358.4 291.2 384 268.8 384 192 384 86.4 297.6 0 192 0zm0 446.09c-14.41-20.56-27.51-39.13-39.41-56C58.35 256.48 48 240.2 48 192c0-79.4 64.6-144 144-144s144 64.6 144 144c0 48.2-10.35 64.48-104.59 198.09-11.9 16.87-25 35.44-39.41 56zm73.54-316.32l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-39.6 39.6-39.6-39.6c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63l39.6 39.6-39.6 39.6c-6.25 6.25-6.25 16.38 0 22.63l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l39.6-39.6 39.6 39.6c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63l-39.6-39.6 39.6-39.6c6.25-6.25 6.25-16.38 0-22.63z" />
  </svg>
);

SvgMapMarkerTimes.displayName = "SvgMapMarkerTimes";
SvgMapMarkerTimes.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMapMarkerTimes;
