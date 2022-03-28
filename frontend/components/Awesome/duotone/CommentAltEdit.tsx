import * as React from "react";

const SvgCommentAltEdit = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M448 0H64A64.06 64.06 0 000 64v288a64.06 64.06 0 0064 64h96v84a12 12 0 0019.1 9.7L304 416h144a64.06 64.06 0 0064-64V64a64.06 64.06 0 00-64-64zM215.4 310.6l-48.2 5.4a10.17 10.17 0 01-11.2-11.2l5.4-48.2 96.3-96.3 54 54zm150.7-150.7l-31.8 31.8-54-54 31.8-31.8a20.22 20.22 0 0128.6 0l25.4 25.4a20.22 20.22 0 010 28.6z"
      opacity={0.4}
    />
    <path
      d="M161.4 256.6l-5.4 48.2a10.17 10.17 0 0011.2 11.2l48.2-5.4 96.3-96.3-54-54zm204.7-125.3l-25.4-25.4a20.22 20.22 0 00-28.6 0l-31.8 31.8 54 54 31.8-31.8a20.22 20.22 0 000-28.6z"
      className="comment-alt-edit_svg__fa-primary"
    />
  </svg>
);

SvgCommentAltEdit.displayName = "SvgCommentAltEdit";
SvgCommentAltEdit.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCommentAltEdit;
