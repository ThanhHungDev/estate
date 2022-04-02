import * as React from "react";

const SvgCalendarStar = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48zM0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm134.1-143.7l54.7-8 24.5-49.6c4.4-9 17.1-8.8 21.5 0l24.5 49.6 54.7 8c9.8 1.4 13.7 13.5 6.6 20.5L281 379.4l9.4 54.6c1.7 9.9-8.7 17.2-17.4 12.6l-49-25.8-48.9 25.8c-8.7 4.6-19.1-2.8-17.4-12.6l9.4-54.6-39.6-38.6c-7.2-7-3.2-19.1 6.6-20.5z" />
  </svg>
);

SvgCalendarStar.displayName = "SvgCalendarStar";
SvgCalendarStar.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCalendarStar;
