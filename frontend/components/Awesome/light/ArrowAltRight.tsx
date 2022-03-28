import * as React from "react";

const SvgArrowAltRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M32 212.57A20.57 20.57 0 0152.57 192H224V75a8 8 0 0113.66-5.66L410 241.44a20.56 20.56 0 010 29.11L237.66 442.63A8 8 0 01224 437V320H52.57A20.57 20.57 0 0132 299.42v-86.85m-32 0v86.85A52.63 52.63 0 0052.57 352H192v85c0 35.51 43 53.5 68.27 28.3l172.3-172.08a52.55 52.55 0 000-74.4L260.27 46.71C235.15 21.62 192 39.36 192 75v85H52.57A52.63 52.63 0 000 212.57z" />
  </svg>
);

SvgArrowAltRight.displayName = "SvgArrowAltRight";
SvgArrowAltRight.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgArrowAltRight;
