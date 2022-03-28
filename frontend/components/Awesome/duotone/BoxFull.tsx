import * as React from "react";

const SvgBoxFull = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M439 382.1L576 343v82a32.07 32.07 0 01-24.2 31l-216.4 54.1a65 65 0 01-31 0L88.24 456A31.9 31.9 0 0164 425v-82l137.1 39.2c28.6 8.2 48.3-10.9 54.7-21.6L320 254l64.3 106.6c6.54 10.8 26.24 29.7 54.7 21.5z"
      opacity={0.4}
    />
    <path
      d="M194.24 143.7A63.28 63.28 0 01192 128a64 64 0 11128 0 62.84 62.84 0 01-8.2 30.7l8.2 1L475.34 140 511 41.7a16 16 0 00-9.6-20.5L445.94 1a16 16 0 00-20.5 9.6L383.74 125C382 55.7 325.74 0 256 0a128 128 0 00-128 128c0 2.5.6 4.9.7 7.4zm444.1 128.1L586.84 169a16.33 16.33 0 00-16.7-8.9L320 192l91.7 152.1a16.44 16.44 0 0018.5 7.3l197.9-56.5a16.47 16.47 0 0010.24-23.1zM53.24 169L1.74 271.8a16.3 16.3 0 0010.1 23l197.9 56.5a16.44 16.44 0 0018.5-7.3L320 192 69.84 160.1a16.34 16.34 0 00-16.6 8.9z"
      className="box-full_svg__fa-primary"
    />
  </svg>
);

SvgBoxFull.displayName = "SvgBoxFull";
SvgBoxFull.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBoxFull;
