import * as React from "react";

const SvgMobileAndroidAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 320 512" {...props}>
    <path d="M224 96v240H96V96h128m48-96H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM48 480c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h224c8.8 0 16 7.2 16 16v416c0 8.8-7.2 16-16 16H48zM244 64H76c-6.6 0-12 5.4-12 12v280c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12zm-48 352h-72c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12h72c6.6 0 12-5.4 12-12v-8c0-6.6-5.4-12-12-12z" />
  </svg>
);

SvgMobileAndroidAlt.displayName = "SvgMobileAndroidAlt";
SvgMobileAndroidAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMobileAndroidAlt;