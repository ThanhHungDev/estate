import * as React from "react";

const SvgFastForward = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M500 64h-24c-6.6 0-12 5.4-12 12v158.3c-1.1-1.2-2.2-2.4-3.5-3.4l-184-159.5C255.9 54.3 224 68.6 224 96v124L52.5 71.4C31.9 54.3 0 68.6 0 96v320c0 27.4 31.9 41.8 52.5 24.6L224 291v125c0 27.4 31.9 41.8 52.5 24.6l184-160.5c1.3-1.1 2.4-2.2 3.5-3.4V436c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12zM48 380.8V131.1l143.6 124.4L48 380.8zm224 0V131.1l143.6 124.4L272 380.8z" />
  </svg>
);

SvgFastForward.displayName = "SvgFastForward";
SvgFastForward.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFastForward;
