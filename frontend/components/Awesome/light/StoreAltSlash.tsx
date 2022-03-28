import * as React from "react";

const SvgStoreAltSlash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M516.51 32L608 192H342.09L384 225v-1h160v127l32 25.2V224h32c24.6 0 39.91-26.5 27.71-47.91l-91.41-160A32.15 32.15 0 00516.51 0h-393a31.85 31.85 0 00-17.92 5.76L138.91 32zM352 478.5c0 .91-.29 1.41-.2 1.5l-255.2.2a2.23 2.23 0 01-.6-1.7V352h242.48l-40.64-32H96v-96h79.92l-40.64-32H32.11l32-56-25.44-20-34.36 60.09C-7.89 197.5 7.42 224 32 224h32v254.5C64 497 78.31 512 96 512h256c17.71 0 32-15 32-33.5v-90.64l-32-25.2zM23 1.8A7.88 7.88 0 0011.77 3l-10 12.5A7.94 7.94 0 003 26.71l614 483.52a8 8 0 0011.2-1.23l10-12.5a7.86 7.86 0 00-1.21-11.2z" />
  </svg>
);

SvgStoreAltSlash.displayName = "SvgStoreAltSlash";
SvgStoreAltSlash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgStoreAltSlash;
