import * as React from "react";

const SvgBoombox = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M448 432a96 96 0 10-96-96 96 96 0 0096 96zm144-272V56a56.06 56.06 0 00-56-56H104a56.07 56.07 0 00-56 56v104a48 48 0 00-48 48v256a48 48 0 0048 48h544a48 48 0 0048-48V208a48 48 0 00-48-48zM96 56a8 8 0 018-8h432a8 8 0 018 8v104h-96v-16a16 16 0 00-16-16h-32a16 16 0 00-16 16v16h-32v-16a16 16 0 00-16-16h-32a16 16 0 00-16 16v16h-32v-16a16 16 0 00-16-16h-32a16 16 0 00-16 16v16H96zm496 408H48V208h544zm-400-32a96 96 0 10-96-96 96 96 0 0096 96z" />
  </svg>
);

SvgBoombox.displayName = "SvgBoombox";
SvgBoombox.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBoombox;
