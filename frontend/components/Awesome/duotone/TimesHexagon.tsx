import * as React from "react";

const SvgTimesHexagon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M553.49 231.8l-112-192A48.14 48.14 0 00400 16H176a48.07 48.07 0 00-41.49 23.8l-112 192a48.09 48.09 0 000 48.4l112 192A48.07 48.07 0 00176 496h224a48.13 48.13 0 0041.5-23.8l112-192a48.14 48.14 0 000-48.4zM409.6 321a12 12 0 010 17l-39.38 39.8a12 12 0 01-17 0l-65.1-65.1L223 377.8a12 12 0 01-17 0l-39.6-39.6a12 12 0 010-17l65.09-65.1-65.05-65.1a12 12 0 010-17l39.5-39.7a12 12 0 0117 0L288 199.4l65-65a12 12 0 0117 0l39.69 39.5a12 12 0 010 17L344.61 256z"
      opacity={0.4}
    />
    <path
      d="M409.6 321a12 12 0 010 17l-39.38 39.8a12 12 0 01-17 0l-65.1-65.1L223 377.8a12 12 0 01-17 0l-39.6-39.6a12 12 0 010-17l65.09-65.1-65.05-65.1a12 12 0 010-17l39.5-39.7a12 12 0 0117 0L288 199.4l65-65a12 12 0 0117 0l39.69 39.5a12 12 0 010 17L344.61 256z"
      className="times-hexagon_svg__fa-primary"
    />
  </svg>
);

SvgTimesHexagon.displayName = "SvgTimesHexagon";
SvgTimesHexagon.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTimesHexagon;
