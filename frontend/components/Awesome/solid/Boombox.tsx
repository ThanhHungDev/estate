import * as React from "react";

const SvgBoombox = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M463 256a80 80 0 1080 80 80.09 80.09 0 00-80-80zm-288 0a80 80 0 1080 80 80.09 80.09 0 00-80-80zm432-93.06V56a56.06 56.06 0 00-56-56H87a56.06 56.06 0 00-56 56v106.94A47.86 47.86 0 00-1 208v256a48 48 0 0048 48h544a48 48 0 0048-48V208a47.86 47.86 0 00-32-45.06zM175 448a112 112 0 11112-112 112 112 0 01-112 112zm160-320h-32a16 16 0 00-16 16v16h-32v-16a16 16 0 00-16-16h-32a16 16 0 00-16 16v16H79V56a8 8 0 018-8h464a8 8 0 018 8v104H447v-16a16 16 0 00-16-16h-32a16 16 0 00-16 16v16h-32v-16a16 16 0 00-16-16zm128 320a112 112 0 11112-112 112 112 0 01-112 112z" />
  </svg>
);

SvgBoombox.displayName = "SvgBoombox";
SvgBoombox.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBoombox;
