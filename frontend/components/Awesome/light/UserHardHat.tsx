import * as React from "react";

const SvgUserHardHat = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M313.6 352c-28.72 0-42.45 16-89.6 16s-60.88-16-89.56-16A134.4 134.4 0 000 486.4 25.6 25.6 0 0025.6 512h396.8a25.6 25.6 0 0025.6-25.6A134.4 134.4 0 00313.6 352zM32.2 480a102.54 102.54 0 01102.24-96c19.82 0 38.92 16 89.56 16 51 0 69.6-16 89.6-16a102.53 102.53 0 01102.2 96zM88 160h12.66A124.32 124.32 0 0096 192a128 128 0 00256 0 124.32 124.32 0 00-4.66-32H360a8 8 0 008-8v-16a8 8 0 00-8-8h-8c0-51.52-35-94.46-82.33-107.52A31.89 31.89 0 00240 0h-32a31.89 31.89 0 00-29.67 20.48C131 33.54 96 76.48 96 128h-8a8 8 0 00-8 8v16a8 8 0 008 8zM272 54.91A79.94 79.94 0 01320 128h-48zM208 32h32v96h-32zm-80 96a79.94 79.94 0 0148-73.09V128zm6 32h180a92 92 0 016 32 96 96 0 01-192 0 92 92 0 016-32z" />
  </svg>
);

SvgUserHardHat.displayName = "SvgUserHardHat";
SvgUserHardHat.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUserHardHat;
