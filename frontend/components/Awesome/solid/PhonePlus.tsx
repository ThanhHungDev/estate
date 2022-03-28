import * as React from "react";

const SvgPhonePlus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4zM16 144h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16h-64V16c0-8.8-7.2-16-16-16H96c-8.8 0-16 7.2-16 16v64H16C7.2 80 0 87.2 0 96v32c0 8.8 7.2 16 16 16z" />
  </svg>
);

SvgPhonePlus.displayName = "SvgPhonePlus";
SvgPhonePlus.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPhonePlus;
