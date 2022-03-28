import * as React from "react";

const SvgArrowAltFromLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M0 424V88c0-13.3 10.7-24 24-24h24c13.3 0 24 10.7 24 24v336c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24zm120-104h136v87.7c0 17.8 21.5 26.7 34.1 14.1l152.2-152.2c7.5-7.5 7.5-19.8 0-27.3L290.1 90.1c-12.6-12.6-34.1-3.7-34.1 14.1V192H120c-13.3 0-24 10.7-24 24v80c0 13.3 10.7 24 24 24z" />
  </svg>
);

SvgArrowAltFromLeft.displayName = "SvgArrowAltFromLeft";
SvgArrowAltFromLeft.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgArrowAltFromLeft;