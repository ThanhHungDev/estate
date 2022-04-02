import * as React from "react";

const SvgTvMusic = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M608 0H32A32 32 0 000 32v352a32 32 0 0032 32h576a32 32 0 0032-32V32a32 32 0 00-32-32zm0 384H32V32h576zm-72 96H104a8 8 0 00-8 8v16a8 8 0 008 8h432a8 8 0 008-8v-16a8 8 0 00-8-8zM240 320c26.5 0 48-14.33 48-32V179.16l96-37.52V226a69.89 69.89 0 00-16-2c-26.5 0-48 14.33-48 32s21.5 32 48 32 48-14.33 48-32V112a16 16 0 00-20.81-15.25l-128 47.25A16 16 0 00256 159.25V258a69.89 69.89 0 00-16-2c-26.5 0-48 14.33-48 32s21.5 32 48 32z" />
  </svg>
);

SvgTvMusic.displayName = "SvgTvMusic";
SvgTvMusic.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTvMusic;
