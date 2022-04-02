import * as React from "react";

const SvgWaveSine = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M628.41 261.07L613 256.63a15.88 15.88 0 00-19.55 10.16C572.85 329.76 511.64 432 464 432c-52.09 0-87.41-93.77-121.53-184.45C302.56 141.58 261.31 32 176 32 87.15 32 17.77 178.46.78 230.69a16 16 0 0010.81 20.23L27 255.36a15.87 15.87 0 0019.55-10.15C67.15 182.24 128.36 80 176 80c52.09 0 87.41 93.77 121.53 184.45C337.44 370.42 378.69 480 464 480c88.85 0 158.23-146.46 175.22-198.7a16 16 0 00-10.81-20.23z" />
  </svg>
);

SvgWaveSine.displayName = "SvgWaveSine";
SvgWaveSine.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWaveSine;
