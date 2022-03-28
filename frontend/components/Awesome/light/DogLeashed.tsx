import * as React from "react";

const SvgDogLeashed = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M544 112v64a64 64 0 01-64 64h-32v240a32 32 0 01-32 32h-64a32 32 0 01-32-32v-96h-96v96a32 32 0 01-32 32h-64a32 32 0 01-32-32V320a95 95 0 0113.46-48.26A80 80 0 0132 192a16 16 0 0132 0 48.05 48.05 0 0048 48h27.05A95.48 95.48 0 01192 224h79.94L34.88 26.45a8 8 0 01-1-11.27l10.23-12.3a8 8 0 0111.27-1L304 209V48a16 16 0 0116.12-16 15.67 15.67 0 0111.2 4.72L358.6 64h69.62c10.92 0 23.74 7.93 28.62 17.69L464 96h64a16 16 0 0116 16zM288 256h-96a64.07 64.07 0 00-64 64v160h64V352h96zm128 26.48l-96-24V352h32v128h64zM512 128h-67.78l-16-32h-82.88L336 86.66v142.86l80 20V208h64a32 32 0 0032-32zm-96 0a16 16 0 11-16-16 16 16 0 0116 16z" />
  </svg>
);

SvgDogLeashed.displayName = "SvgDogLeashed";
SvgDogLeashed.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDogLeashed;
