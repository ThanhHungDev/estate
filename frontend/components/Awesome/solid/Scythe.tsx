import * as React from "react";

const SvgScythe = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M608 0h-25.45l-59.74 288H400a16 16 0 00-16 16v32a16 16 0 0016 16h109.54l-29.26 141.05A16 16 0 00496 512h31.45a16 16 0 0015.72-13l96.27-461A32 32 0 00608 0zm-58.13 0h-211C192 0 64 64 0 192h510z" />
  </svg>
);

SvgScythe.displayName = "SvgScythe";
SvgScythe.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgScythe;
