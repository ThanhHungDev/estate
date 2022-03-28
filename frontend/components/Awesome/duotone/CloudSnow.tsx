import * as React from "react";

const SvgCloudSnow = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M126.9 389.1l-8-13.9a8 8 0 00-10.9-2.9l-28 16.1V360a8 8 0 00-8-8H56a8 8 0 00-8 8v28.4l-28-16.1a8 8 0 00-10.9 2.9l-8 13.9A8 8 0 004 400l27.9 16L4 432a8 8 0 00-2.9 10.9l8 13.9a8 8 0 0010.9 2.9l28-16.1V472a8 8 0 008 8h16a8 8 0 008-8v-28.4l28 16.1a8 8 0 0010.9-2.9l8-13.9A8 8 0 00124 432l-27.9-16 27.9-16a8 8 0 002.9-10.9zm192 32l-8-13.9a8 8 0 00-10.9-2.9l-28 16.1V392a8 8 0 00-8-8h-16a8 8 0 00-8 8v28.4l-28-16.1a8 8 0 00-10.9 2.9l-8 13.9A8 8 0 00196 432l27.9 16-27.9 16a8 8 0 00-2.9 10.9l8 13.9a8 8 0 0010.9 2.9l28-16.1V504a8 8 0 008 8h16a8 8 0 008-8v-28.4l28 16.1a8 8 0 0010.9-2.9l8-13.9A8 8 0 00316 464l-27.9-16 27.9-16a8 8 0 002.9-10.9zM508 432l-27.9-16 27.9-16a8 8 0 002.9-10.9l-8-13.9a8 8 0 00-10.9-2.9l-28 16.1V360a8 8 0 00-8-8h-16a8 8 0 00-8 8v28.4l-28-16.1a8 8 0 00-10.9 2.9l-8 13.9A8 8 0 00388 400l27.9 16-27.9 16a8 8 0 00-2.9 10.9l8 13.9a8 8 0 0010.9 2.9l28-16.1V472a8 8 0 008 8h16a8 8 0 008-8v-28.4l28 16.1a8 8 0 0010.9-2.9l8-13.9A8 8 0 00508 432z"
      opacity={0.4}
    />
    <path
      d="M0 224c0-42.5 27.8-78.2 66.1-90.8A113.72 113.72 0 0164 112 111.94 111.94 0 01176 0c43.3 0 80.4 24.8 99 60.8C289.7 43.3 311.4 32 336 32a80 80 0 0180 80 78.09 78.09 0 01-1.6 16.2c.5 0 1-.2 1.6-.2a96 96 0 010 192H96a96 96 0 01-96-96z"
      className="cloud-snow_svg__fa-primary"
    />
  </svg>
);

SvgCloudSnow.displayName = "SvgCloudSnow";
SvgCloudSnow.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCloudSnow;