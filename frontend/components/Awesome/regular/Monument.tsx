import * as React from "react";

const SvgMonument = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M368 464h-33.98l-44.89-363.26a31.97 31.97 0 00-9.21-19.44L203.31 4.69A15.905 15.905 0 00192 0c-4.09 0-8.19 1.56-11.31 4.69L104.08 81.3a31.97 31.97 0 00-9.21 19.44L49.98 464H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h352c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16zm-269.66 0l43.56-352.65 50.1-50.1 50.08 50.08L285.66 464H98.34zM227.2 272h-70.4c-6.4 0-12.8 6.4-12.8 12.8v22.4c0 6.4 6.4 12.8 12.8 12.8h70.4c6.4 0 12.8-6.4 12.8-12.8v-22.4c0-6.4-6.4-12.8-12.8-12.8z" />
  </svg>
);

SvgMonument.displayName = "SvgMonument";
SvgMonument.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMonument;
