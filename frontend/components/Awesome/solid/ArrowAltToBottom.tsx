import * as React from "react";

const SvgArrowAltToBottom = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M360 480H24c-13.3 0-24-10.7-24-24v-24c0-13.3 10.7-24 24-24h336c13.3 0 24 10.7 24 24v24c0 13.3-10.7 24-24 24zM128 56v136H40.3c-17.8 0-26.7 21.5-14.1 34.1l152.2 152.2c7.5 7.5 19.8 7.5 27.3 0l152.2-152.2c12.6-12.6 3.7-34.1-14.1-34.1H256V56c0-13.3-10.7-24-24-24h-80c-13.3 0-24 10.7-24 24z" />
  </svg>
);

SvgArrowAltToBottom.displayName = "SvgArrowAltToBottom";
SvgArrowAltToBottom.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgArrowAltToBottom;
