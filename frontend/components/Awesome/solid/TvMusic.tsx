import * as React from "react";

const SvgTvMusic = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M512 448H128a32 32 0 000 64h384a32 32 0 000-64zM240 320c26.5 0 48-14.33 48-32v-84.84l96-37.52V226a69.89 69.89 0 00-16-2c-26.5 0-48 14.33-48 32s21.5 32 48 32 48-14.33 48-32V112a16 16 0 00-20.81-15.25l-128 47.25A16 16 0 00256 159.25V258a69.89 69.89 0 00-16-2c-26.5 0-48 14.33-48 32s21.5 32 48 32zM592 0H48A48 48 0 000 48v320a48 48 0 0048 48h544a48 48 0 0048-48V48a48 48 0 00-48-48zm-16 352H64V64h512z" />
  </svg>
);

SvgTvMusic.displayName = "SvgTvMusic";
SvgTvMusic.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTvMusic;
