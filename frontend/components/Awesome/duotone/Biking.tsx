import * as React from "react";

const SvgBiking = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M512 256a128 128 0 10128 128 128 128 0 00-128-128zm0 192a64 64 0 1164-64 64 64 0 01-64 64zM128 256a128 128 0 10128 128 128 128 0 00-128-128zm0 192a64 64 0 1164-64 64 64 0 01-64 64z"
      opacity={0.4}
    />
    <path
      d="M400 96a48 48 0 10-48-48 48 48 0 0048 48zm80 64h-52.78L356 103a31.94 31.94 0 00-40.81.68l-112 96a32 32 0 003.08 50.92L288 305.12V416a32 32 0 0064 0V288a32 32 0 00-14.25-26.62l-41.36-27.57 58.25-49.92L396 217a31.9 31.9 0 0020 7h64a32 32 0 000-64z"
      className="biking_svg__fa-primary"
    />
  </svg>
);

SvgBiking.displayName = "SvgBiking";
SvgBiking.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBiking;
