import * as React from "react";

const SvgFlask = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M437.2 403.5L320 215V48h20c6.6 0 12-5.4 12-12V12c0-6.6-5.4-12-12-12H108c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h20v167L10.8 403.5C-18.5 450.6 15.3 512 70.9 512h306.2c55.7 0 89.4-61.5 60.1-108.5zM377.1 464H70.9c-18.1 0-28.7-20.1-19.3-35.2l117.2-188.5c4.7-7.6 7.2-16.4 7.2-25.3V48h96v167c0 9 2.5 17.7 7.2 25.3l117.2 188.5c9.4 15.1-1.1 35.2-19.3 35.2z" />
  </svg>
);

SvgFlask.displayName = "SvgFlask";
SvgFlask.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFlask;
