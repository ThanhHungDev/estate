import * as React from "react";

const SvgFaucetDrip = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M416 480a32 32 0 0064 0c0-17.67-32-64-32-64s-32 46.33-32 64zm-64-288h-38.61c-15.71-13.44-35.46-23.07-57.39-28v-47.56l-32-3.38-32 3.38V164c-21.93 5-41.68 14.6-57.39 28H16a16 16 0 00-16 16v96a16 16 0 0016 16h92.79C129.38 357.73 173 384 224 384s94.62-26.27 115.21-64H352a32 32 0 0132 32 32 32 0 0032 32h64a32 32 0 0032-32 160 160 0 00-160-160zM81.59 95.91L224 80.89l142.41 15c9.42 1 17.59-6.81 17.59-16.8v-30.2c0-10-8.17-17.8-17.59-16.8L256 43.74V16a16 16 0 00-16-16h-32a16 16 0 00-16 16v27.74L81.59 32.09C72.17 31.09 64 38.9 64 48.89v30.22c0 9.99 8.17 17.8 17.59 16.8z" />
  </svg>
);

SvgFaucetDrip.displayName = "SvgFaucetDrip";
SvgFaucetDrip.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFaucetDrip;
