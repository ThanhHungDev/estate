import * as React from "react";

const SvgPoliceBox = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M184 208v-28h-36v36h28a8 8 0 008-8zm-44-72h-28a8 8 0 00-8 8v28h36zm-28 80h28v-36h-36v28a8 8 0 008 8zm72-72a8 8 0 00-8-8h-28v36h36zm-72 176h64a8 8 0 008-8v-64a8 8 0 00-8-8h-64a8 8 0 00-8 8v64a8 8 0 008 8zm168-112v-28h-36v36h28a8 8 0 008-8zm0-64a8 8 0 00-8-8h-28v36h36zm-72 72h28v-36h-36v28a8 8 0 008 8zm28-80h-28a8 8 0 00-8 8v28h36zm132 328h-16V88a23.999 23.999 0 00-24-24h-8.021V48a15.998 15.998 0 00-16-16H216V16a16 16 0 00-16-16h-16a16 16 0 00-16 16v16H80a16 16 0 00-16 16v16h-8a24 24 0 00-24 24v376H16a16 16 0 00-16 16v16a16 16 0 0016 16h352a16 16 0 0016-16v-16a16 16 0 00-16-16zm-64 0H80V112h224z" />
  </svg>
);

SvgPoliceBox.displayName = "SvgPoliceBox";
SvgPoliceBox.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPoliceBox;
