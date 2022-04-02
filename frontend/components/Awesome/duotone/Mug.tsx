import * as React from "react";

const SvgMug = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M448 64h-32v288-32h32a128 128 0 000-256zm0 192h-32V128h32a64 64 0 010 128z"
      opacity={0.4}
    />
    <path
      d="M416 352a96 96 0 01-96 96H128a96 96 0 01-96-96V87.88A23.94 23.94 0 0156 64h360v288z"
      className="mug_svg__fa-primary"
    />
  </svg>
);

SvgMug.displayName = "SvgMug";
SvgMug.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMug;
