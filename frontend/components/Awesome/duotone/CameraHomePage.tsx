import * as React from "react";

const SvgCameraHomePage = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm17-1.5C393 365 331.7 429 256.5 429S120 365 120 286.5 181.3 144 256.5 144 393 208 393 286.5z" />
  </svg>
);

SvgCameraHomePage.displayName = "SvgCameraHomePage";
SvgCameraHomePage.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCameraHomePage;
