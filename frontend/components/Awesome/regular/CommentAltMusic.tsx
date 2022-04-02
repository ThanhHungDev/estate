import * as React from "react";

const SvgCommentAltMusic = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M331.19 96.75l-128 47.25A16 16 0 00192 159.25V258a69.82 69.82 0 00-16-2c-26.5 0-48 14.33-48 32s21.5 32 48 32 48-14.33 48-32v-84.84l96-37.52V226a69.82 69.82 0 00-16-2c-26.5 0-48 14.33-48 32s21.5 32 48 32 48-14.33 48-32V112a16 16 0 00-20.81-15.25zM448 0H64A64.05 64.05 0 000 64v288a64.05 64.05 0 0064 64h96v84a12 12 0 0012 12 11.35 11.35 0 007.09-2.41L304 416h144a64.05 64.05 0 0064-64V64a64.05 64.05 0 00-64-64zm16 352a16 16 0 01-16 16H288l-12.81 9.59L208 428v-60H64a16 16 0 01-16-16V64a16 16 0 0116-16h384a16 16 0 0116 16z" />
  </svg>
);

SvgCommentAltMusic.displayName = "SvgCommentAltMusic";
SvgCommentAltMusic.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCommentAltMusic;
