import * as React from "react";

const SvgFileMusic = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M377 105L279.09 7a24 24 0 00-17-7H256v128h128v-6.09a23.91 23.91 0 00-7-16.91zm-153 31V0H24A23.94 23.94 0 000 24v464a23.94 23.94 0 0024 24h336a23.94 23.94 0 0024-24V160H248a24.08 24.08 0 01-24-24zm64 88v160c0 17.67-21.5 32-48 32s-48-14.33-48-32 21.5-32 48-32a69.82 69.82 0 0116 2v-76.36l-96 37.52V416c0 17.67-21.5 32-48 32s-48-14.33-48-32 21.5-32 48-32a69.82 69.82 0 0116 2V271.25A16 16 0 01139.19 256l128-47.25A16 16 0 01288 224z"
      opacity={0.4}
    />
    <path
      d="M288 224v160c0 17.67-21.5 32-48 32s-48-14.33-48-32 21.5-32 48-32a69.82 69.82 0 0116 2v-76.36l-96 37.52V416c0 17.67-21.5 32-48 32s-48-14.33-48-32 21.5-32 48-32a69.82 69.82 0 0116 2V271.25A16 16 0 01139.19 256l128-47.25A16 16 0 01288 224z"
      className="file-music_svg__fa-primary"
    />
  </svg>
);

SvgFileMusic.displayName = "SvgFileMusic";
SvgFileMusic.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFileMusic;
