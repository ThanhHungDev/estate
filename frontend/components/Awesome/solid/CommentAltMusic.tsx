import * as React from "react";

const SvgCommentAltMusic = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M448-1H64A64.05 64.05 0 000 63v288a64.05 64.05 0 0064 64h96v84a12 12 0 0019.09 9.7L304 415h144a64.05 64.05 0 0064-64V63a64.05 64.05 0 00-64-64zm-96 256c0 17.67-21.5 32-48 32s-48-14.33-48-32 21.5-32 48-32a69.89 69.89 0 0116 2v-76.36l-96 37.52V287c0 17.67-21.5 32-48 32s-48-14.33-48-32 21.5-32 48-32a69.89 69.89 0 0116 2V142.25A16 16 0 01203.19 127l128-47.25A16 16 0 01352 95z" />
  </svg>
);

SvgCommentAltMusic.displayName = "SvgCommentAltMusic";
SvgCommentAltMusic.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCommentAltMusic;
