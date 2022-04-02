import * as React from "react";

const SvgMicrowave = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M464 64H48a48 48 0 00-48 48v288a48 48 0 0048 48l24 32h48l24-32h224l24 32h48l24-32a48 48 0 0048-48V112a48 48 0 00-48-48zm0 336H48V112h416zm-48-128a24 24 0 10-24-24 24 24 0 0024 24zm0-80a24 24 0 10-24-24 24 24 0 0024 24zM96 368h256a16 16 0 0016-16V160a16 16 0 00-16-16H96a16 16 0 00-16 16v192a16 16 0 0016 16z" />
  </svg>
);

SvgMicrowave.displayName = "SvgMicrowave";
SvgMicrowave.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMicrowave;
