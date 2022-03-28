import * as React from "react";

const SvgTabletAndroid = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M400 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-6 464H54c-3.3 0-6-2.7-6-6V54c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v404c0 3.3-2.7 6-6 6zm-118-32H172c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h104c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12z" />
  </svg>
);

SvgTabletAndroid.displayName = "SvgTabletAndroid";
SvgTabletAndroid.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTabletAndroid;
