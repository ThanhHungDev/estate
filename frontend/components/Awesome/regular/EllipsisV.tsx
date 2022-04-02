import * as React from "react";

const SvgEllipsisV = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 128 512" {...props}>
    <path d="M64 208c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM16 104c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48zm0 304c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48z" />
  </svg>
);

SvgEllipsisV.displayName = "SvgEllipsisV";
SvgEllipsisV.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgEllipsisV;
