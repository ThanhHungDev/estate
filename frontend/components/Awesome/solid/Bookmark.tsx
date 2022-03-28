import * as React from "react";

const SvgBookmark = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z" />
  </svg>
);

SvgBookmark.displayName = "SvgBookmark";
SvgBookmark.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBookmark;
