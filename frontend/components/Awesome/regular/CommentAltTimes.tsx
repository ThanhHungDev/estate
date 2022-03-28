import * as React from "react";

const SvgCommentAltTimes = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 352c0 8.8-7.2 16-16 16H288l-12.8 9.6L208 428v-60H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h384c8.8 0 16 7.2 16 16v288zM329.5 145.8l-11.3-11.3c-6.2-6.2-16.4-6.2-22.6 0L256 174.1l-39.6-39.6c-6.2-6.2-16.4-6.2-22.6 0l-11.3 11.3c-6.2 6.2-6.2 16.4 0 22.6l39.6 39.6-39.6 39.6c-6.2 6.2-6.2 16.4 0 22.6l11.3 11.3c6.2 6.2 16.4 6.2 22.6 0l39.6-39.6 39.6 39.6c6.2 6.2 16.4 6.2 22.6 0l11.3-11.3c6.2-6.2 6.2-16.4 0-22.6L289.9 208l39.6-39.6c6.3-6.2 6.3-16.4 0-22.6z" />
  </svg>
);

SvgCommentAltTimes.displayName = "SvgCommentAltTimes";
SvgCommentAltTimes.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCommentAltTimes;
