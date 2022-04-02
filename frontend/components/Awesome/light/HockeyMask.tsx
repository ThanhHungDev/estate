import * as React from "react";

const SvgHockeyMask = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M376.61 54.46C335.13 18.15 279.56 0 224 0 168.43 0 112.87 18.15 71.39 54.46 7.36 110.5-31.01 224.44 32.63 416 64.53 512 224 512 224 512s159.47 0 191.37-96c63.64-191.56 25.27-305.5-38.76-361.54zM385 405.91c-20.08 60.43-123.06 73.97-161 74.09-1.36 0-137.06-2.02-161-74.09C-4.54 202.62 52.47 113.54 92.47 78.54 126.25 48.96 174.2 32 224 32s97.74 16.96 131.53 46.54c40 35 97.01 124.08 29.47 327.37zM272 112c8.84 0 16-7.16 16-16s-7.16-16-16-16-16 7.16-16 16 7.17 16 16 16zm-96 0c8.84 0 16-7.16 16-16s-7.16-16-16-16-16 7.16-16 16 7.16 16 16 16zm16 304c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16zm0-64c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16zm0-64c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16zm-20-112h-72c-19.88 0-36 14.33-36 32 0 35.35 32.23 64 72 64 39.76 0 72-28.65 72-64 0-17.67-16.12-32-36-32zm-36 64c-33.59 0-48.06-32-36-32h72c11.72 0-2.9 32-36 32zm88-112c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16zm32 288c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16zm0-64c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16zm0-64c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16zm92-112h-72c-19.88 0-36 14.33-36 32 0 35.35 32.24 64 72 64s72-28.65 72-64c0-17.67-16.12-32-36-32zm-36 64c-33.6 0-48.06-32-36-32h72c11.72 0-2.91 32-36 32z" />
  </svg>
);

SvgHockeyMask.displayName = "SvgHockeyMask";
SvgHockeyMask.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHockeyMask;
