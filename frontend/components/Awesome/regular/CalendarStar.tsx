import * as React from "react";

const SvgCalendarStar = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M167 331.4l-9.4 54.6c-1.7 9.9 8.7 17.2 17.4 12.6l48.9-25.8 48.9 25.8c8.7 4.6 19.1-2.8 17.4-12.6l-9.4-54.6 39.6-38.6c7.1-6.9 3.2-19-6.6-20.5l-54.7-8-24.5-49.6c-4.4-8.8-17.1-9-21.5 0l-24.5 49.6-54.7 8c-9.8 1.4-13.7 13.5-6.6 20.5l39.7 38.6zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V160h352v298z" />
  </svg>
);

SvgCalendarStar.displayName = "SvgCalendarStar";
SvgCalendarStar.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCalendarStar;
