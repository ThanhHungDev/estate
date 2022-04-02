import * as React from "react";

const SvgPodium = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M432 144H111.36c6.33-30.9 30.72-55.29 62.71-62.05C182.76 90.63 194.75 96 208 96h64c26.51 0 48-21.49 48-48S298.51 0 272 0h-64c-22.06 0-40.45 14.97-46.07 35.24C109.85 46.85 70.16 90.29 63.35 144H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16zm-32 320h-38.22L384 224H64l22.22 240H48c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h352c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16z" />
  </svg>
);

SvgPodium.displayName = "SvgPodium";
SvgPodium.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPodium;
