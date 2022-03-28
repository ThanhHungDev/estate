import * as React from "react";

const SvgBlinds = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M512 32V16a16 16 0 00-16-16H16A16 16 0 000 16v16a15.94 15.94 0 0010.28 14.85L.07 158.55a16 16 0 009.65 16.09L.08 270.41a15.94 15.94 0 009.64 16.22L.08 382.41a15.94 15.94 0 009.64 16.22L.08 494.41a16 16 0 0016 17.59h479.81a16 16 0 0016-17.59l-9.64-95.78a15.93 15.93 0 009.64-16.22l-9.64-95.78a15.93 15.93 0 009.64-16.22l-9.64-95.77a16 16 0 009.65-16.09l-10.18-111.7A15.94 15.94 0 00512 32zM58.38 48H120v80H51.06zm-7 416l6.45-64h396.34l6.44 64zm402.79-288l6.44 64H217.22a79.22 79.22 0 015.16 48h231.79l6.44 64H51.38l6.45-64h7.79a79.25 79.25 0 015.16-48h-19.4l6.45-64H120v54.66a48 48 0 1048 0V48h285.62l7.32 80H200v48z" />
  </svg>
);

SvgBlinds.displayName = "SvgBlinds";
SvgBlinds.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBlinds;
