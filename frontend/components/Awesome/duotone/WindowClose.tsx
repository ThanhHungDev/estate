import * as React from "react";

const SvgWindowClose = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M464 32H48A48 48 0 000 80v352a48 48 0 0048 48h416a48 48 0 0048-48V80a48 48 0 00-48-48zm-83.6 290.5a12.31 12.31 0 010 17.4l-40.5 40.5a12.31 12.31 0 01-17.4 0L256 313.3l-66.5 67.1a12.31 12.31 0 01-17.4 0l-40.5-40.5a12.31 12.31 0 010-17.4l67.1-66.5-67.1-66.5a12.31 12.31 0 010-17.4l40.5-40.5a12.31 12.31 0 0117.4 0l66.5 67.1 66.5-67.1a12.31 12.31 0 0117.4 0l40.5 40.5a12.31 12.31 0 010 17.4L313.3 256z"
      opacity={0.4}
    />
    <path
      d="M380.4 322.5a12.31 12.31 0 010 17.4l-40.5 40.5a12.31 12.31 0 01-17.4 0L256 313.3l-66.5 67.1a12.31 12.31 0 01-17.4 0l-40.5-40.5a12.31 12.31 0 010-17.4l67.1-66.5-67.1-66.5a12.31 12.31 0 010-17.4l40.5-40.5a12.31 12.31 0 0117.4 0l66.5 67.1 66.5-67.1a12.31 12.31 0 0117.4 0l40.5 40.5a12.31 12.31 0 010 17.4L313.3 256z"
      className="window-close_svg__fa-primary"
    />
  </svg>
);

SvgWindowClose.displayName = "SvgWindowClose";
SvgWindowClose.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWindowClose;
