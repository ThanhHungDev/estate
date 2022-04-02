import * as React from "react";

const SvgFileMusic = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M369.91 98L286 14.09A48 48 0 00252.09 0H48A48.15 48.15 0 000 48.08V464a48 48 0 0048 48h288a48 48 0 0048-48V132a48.22 48.22 0 00-14.09-34zM256 32.59a15.63 15.63 0 017.41 4.2l83.9 83.88a15.63 15.63 0 014.19 7.4H256zM352 464a16 16 0 01-16 16H48a16 16 0 01-16-16V48.08a16 16 0 0116-16h176v104a23.93 23.93 0 0024 24h104zM128 271.2v98.69a69.34 69.34 0 00-16-2c-26.5 0-48 14.33-48 32s21.5 32 48 32 48-14.32 48-32V291.11l96-37.51v84.29a69.34 69.34 0 00-16-1.95c-26.5 0-48 14.32-48 32s21.5 32 48 32 48-14.33 48-32V224a16 16 0 00-20.81-15.24l-128 47.24A16 16 0 00128 271.2z" />
  </svg>
);

SvgFileMusic.displayName = "SvgFileMusic";
SvgFileMusic.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFileMusic;
