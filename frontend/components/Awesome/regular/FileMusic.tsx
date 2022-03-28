import * as React from "react";

const SvgFileMusic = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M144 271.29V370a69.27 69.27 0 00-16-2c-26.5 0-48 14.32-48 32s21.5 32 48 32 48-14.32 48-32v-84.81l96-37.51V338a69.82 69.82 0 00-16-2c-26.5 0-48 14.33-48 32s21.5 32 48 32 48-14.32 48-32V224a16 16 0 00-20.81-15.24l-128 47.24A16 16 0 00144 271.29zM369.91 98L286 14.09A48 48 0 00252.09 0H48A48.15 48.15 0 000 48.08V464a48 48 0 0048 48h288a48 48 0 0048-48V132a48.22 48.22 0 00-14.09-34zM256 52l76.09 76.08H256zm80 412H48V48.08h160v104a23.93 23.93 0 0024 24h104z" />
  </svg>
);

SvgFileMusic.displayName = "SvgFileMusic";
SvgFileMusic.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFileMusic;
