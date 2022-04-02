import * as React from "react";

const SvgUserAlien = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M352 384h-34.385c-19.65 17.988-39.02 33.541-55.49 45.848a63.66 63.66 0 01-76.25.002c-16.47-12.307-35.84-27.862-55.49-45.85H96a96 96 0 00-96 96 32 32 0 0032 32h384a32 32 0 0032-32 96 96 0 00-96-96zm-146.97 20.215a31.664 31.664 0 0037.94 0C288.46 370.223 400 277.512 400 185.684 400 70.318 321.182 0 224 0 126.791 0 48 70.318 48 185.684c0 91.828 111.541 184.539 157.03 218.53zM240 252a60 60 0 0160-60h24a12 12 0 0112 12v8a60 60 0 01-60 60h-24a12 12 0 01-12-12zm-128-40v-8a12 12 0 0112-12h24a60 60 0 0160 60v8a12 12 0 01-12 12h-24a60 60 0 01-60-60z" />
  </svg>
);

SvgUserAlien.displayName = "SvgUserAlien";
SvgUserAlien.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUserAlien;
