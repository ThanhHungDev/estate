import * as React from "react";

const SvgEllipsisH = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z" />
  </svg>
);

SvgEllipsisH.displayName = "SvgEllipsisH";
SvgEllipsisH.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgEllipsisH;
