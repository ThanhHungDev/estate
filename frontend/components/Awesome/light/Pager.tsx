import * as React from "react";

const SvgPager = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M272 320h-80v32h80a16 16 0 000-32zM448 64H64a64 64 0 00-64 64v256a64 64 0 0064 64h384a64 64 0 0064-64V128a64 64 0 00-64-64zm32 320a32 32 0 01-32 32H64a32 32 0 01-32-32V128a32 32 0 0132-32h384a32 32 0 0132 32zM64 336a16 16 0 0016 16h80v-32H80a16 16 0 00-16 16zm360-208H88a24 24 0 00-24 24v112a24 24 0 0024 24h336a24 24 0 0024-24V152a24 24 0 00-24-24zm-8 128H96v-96h320z" />
  </svg>
);

SvgPager.displayName = "SvgPager";
SvgPager.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPager;
