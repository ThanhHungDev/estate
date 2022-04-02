import * as React from "react";

const SvgBedBunk = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M152 144a72 72 0 10-72-72 72 72 0 0072 72zm0-96a24 24 0 11-24 24 24 24 0 0124-24zM464 0H272a16 16 0 00-16 16v144H48V16A16 16 0 0032 0H16A16 16 0 000 16v480a16 16 0 0016 16h16a16 16 0 0016-16v-32h480v32a16 16 0 0016 16h16a16 16 0 0016-16V128C576 50.14 525.88 0 464 0zm64 416H304V304h160a64.07 64.07 0 0164 64zm0-139.74A111.31 111.31 0 00464 256H272a16 16 0 00-16 16v144H48V208h480zM528 160H304V48h160a64.07 64.07 0 0164 64zM152 400a72 72 0 10-72-72 72 72 0 0072 72zm0-96a24 24 0 11-24 24 24 24 0 0124-24z" />
  </svg>
);

SvgBedBunk.displayName = "SvgBedBunk";
SvgBedBunk.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBedBunk;
