import * as React from "react";

const SvgStoreAltSlash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M320 384H128V224H64v256a32 32 0 0032 32h256a32 32 0 0032-32v-73.41l-64-49.47zM17.89 123.62L5.51 142.2c-14.2 21.3 1 49.8 26.59 49.8h74.26zM384 265v-41h-53.08zm128 99l64 49.46V224h-64zm122.6-221.8l-85.29-128A32.18 32.18 0 00522.6 0H117.42a31.87 31.87 0 00-26.61 14.2l-10.66 16L289.52 192H608c25.51 0 40.71-28.5 26.6-49.8z"
      opacity={0.4}
    />
    <path
      d="M6.18 53.91a16 16 0 01-2.81-22.45L23 6.19a16 16 0 0122.46-2.81L633.81 458.1a16 16 0 012.81 22.45L617 505.81a16 16 0 01-22.45 2.82z"
      className="store-alt-slash_svg__fa-primary"
    />
  </svg>
);

SvgStoreAltSlash.displayName = "SvgStoreAltSlash";
SvgStoreAltSlash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgStoreAltSlash;
