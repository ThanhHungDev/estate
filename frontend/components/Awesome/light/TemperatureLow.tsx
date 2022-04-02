import * as React from "react";

const SvgTemperatureLow = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M128 354.9V304c0-8.8-7.2-16-16-16s-16 7.2-16 16v50.9c-18.6 6.6-32 24.2-32 45.1 0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.5-32-45.1zM320 0c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64zm0 96c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zM192 80c0-44.1-35.9-80-80-80S32 35.9 32 80v241.9C11.7 342.6 0 370.8 0 400c0 61.8 50.2 112 112 112s112-50.2 112-112c0-29.2-11.7-57.4-32-78.1V80zm-80 400c-44.1 0-80-35.9-80-80 0-25.5 12.2-48.9 32-63.8V80c0-26.5 21.5-48 48-48s48 21.5 48 48v256.2c19.8 14.8 32 38.3 32 63.8 0 44.1-35.9 80-80 80z" />
  </svg>
);

SvgTemperatureLow.displayName = "SvgTemperatureLow";
SvgTemperatureLow.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTemperatureLow;
