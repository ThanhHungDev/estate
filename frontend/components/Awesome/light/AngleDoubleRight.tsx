import * as React from "react";

const SvgAngleDoubleRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 320 512" {...props}>
    <path d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17zm128-17l-117.8-116c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17L255.3 256 153.1 356.4c-4.7 4.7-4.7 12.3 0 17l7.1 7.1c4.7 4.7 12.3 4.7 17 0l117.8-116c4.6-4.7 4.6-12.3-.1-17z" />
  </svg>
);

SvgAngleDoubleRight.displayName = "SvgAngleDoubleRight";
SvgAngleDoubleRight.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAngleDoubleRight;
