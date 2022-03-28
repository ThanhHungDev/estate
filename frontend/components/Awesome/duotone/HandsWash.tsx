import * as React from "react";

const SvgHandsWash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M290.59 49.94c-11.53-1.34-22.22 6.45-25.71 17.52l-33.46 106.42a8 8 0 01-15.26-4.83l43.37-137.79A24 24 0 00239.2.15C227.67-1.19 217 6.6 213.49 17.66l-47.93 151.71a8 8 0 11-15.26-4.82l38.56-122a24 24 0 00-20.33-31.11C157 10 146.32 17.83 142.82 28.9l-60 189.85-2.06-50.05a24 24 0 00-23.86-24.15c-13.23-.05-24.72 10.54-24.9 23.86v112.73a123.69 123.69 0 0061.65 105.19c.8-.19 1.54-.54 2.35-.71v-25.69a156 156 0 01107.06-148l73.7-22.76 34.16-108.12a24 24 0 00-20.33-31.11zM342 99.74c-11.53-1.35-22.21 6.44-25.71 17.51l-20.9 66.17 16.11-5A56.77 56.77 0 01328 176a56 56 0 0119 3.49l15.35-48.61A24 24 0 00342 99.74zM112 416a48 48 0 1048 48 48 48 0 00-48-48zM416 0a32 32 0 1032 32 32 32 0 00-32-32zm80 128a48 48 0 1048 48 48 48 0 00-48-48z"
      opacity={0.4}
    />
    <path
      d="M519.1 336H360a8 8 0 010-16h128a24 24 0 0023.54-28.76c-2.19-11.4-12.83-19.24-24.44-19.24H288l47.09-17.06a24 24 0 00-14.18-45.88l-107.72 33.25A123.88 123.88 0 00128 360v25.65a79.78 79.78 0 0158 108.63A118.9 118.9 0 00248 512h208a24 24 0 0023.54-28.76c-2.19-11.4-12.83-19.24-24.44-19.24H360a8 8 0 010-16h128a24 24 0 0023.54-28.76c-2.19-11.4-12.83-19.24-24.44-19.24H360a8 8 0 010-16h160a24 24 0 0023.54-28.76c-2.19-11.4-12.83-19.24-24.44-19.24z"
      className="hands-wash_svg__fa-primary"
    />
  </svg>
);

SvgHandsWash.displayName = "SvgHandsWash";
SvgHandsWash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHandsWash;
