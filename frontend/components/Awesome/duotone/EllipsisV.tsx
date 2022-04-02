import * as React from "react";

const SvgEllipsisV = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 192 512" {...props}>
    <path d="M96 184a72 72 0 1072 72 72 72 0 00-72-72z" opacity={0.4} />
    <path
      d="M96 152a72 72 0 10-72-72 72 72 0 0072 72zm0 208a72 72 0 1072 72 72 72 0 00-72-72z"
      className="ellipsis-v_svg__fa-primary"
    />
  </svg>
);

SvgEllipsisV.displayName = "SvgEllipsisV";
SvgEllipsisV.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgEllipsisV;
