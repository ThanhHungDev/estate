import * as React from "react";

const SvgYenSign = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 320 512" {...props}>
    <path d="M307.982 32h-22.525a12 12 0 00-10.398 6.01l-87.337 153.306c-13.382 25.492-27.402 56.718-27.402 56.718h-1.274s-14.02-31.226-27.403-56.718L45.038 38.042A12 12 0 0034.621 32H12.018c-9.237 0-15.01 9.998-10.394 17.998L100.974 224H44c-6.627 0-12 5.373-12 12v8c0 6.627 5.373 12 12 12h75.442l18.573 32.182V320H44c-6.627 0-12 5.373-12 12v8c0 6.627 5.373 12 12 12h94.014v116c0 6.627 5.373 12 12 12h20.608c6.627 0 12-5.373 12-12V352H276c6.627 0 12-5.373 12-12v-8c0-6.627-5.373-12-12-12h-93.377v-31.818l17.7-32.182H276c6.627 0 12-5.373 12-12v-8c0-6.627-5.373-12-12-12h-58.062L318.35 50.042c4.662-8-1.109-18.042-10.368-18.042z" />
  </svg>
);

SvgYenSign.displayName = "SvgYenSign";
SvgYenSign.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgYenSign;
