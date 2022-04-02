import * as React from "react";

const SvgMicrowave = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M384 352H64V128h320z" opacity={0.4} />
    <path
      d="M464 64H48a48 48 0 00-48 48v256a48 48 0 0048 48l24 32h48l24-32h224l24 32h48l24-32a48 48 0 0048-48V112a48 48 0 00-48-48zm-80 288H64V128h320zm64-72a24 24 0 1124-24 24 24 0 01-24 24zm0-96a24 24 0 1124-24 24 24 0 01-24 24z"
      className="microwave_svg__fa-primary"
    />
  </svg>
);

SvgMicrowave.displayName = "SvgMicrowave";
SvgMicrowave.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMicrowave;
