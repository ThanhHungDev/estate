import * as React from "react";

const SvgFolderPlus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M464 128H272l-54.63-54.63A32 32 0 00194.74 64H48a48 48 0 00-48 48v288a48 48 0 0048 48h416a48 48 0 0048-48V176a48 48 0 00-48-48zm16 272a16 16 0 01-16 16H48a16 16 0 01-16-16V112a16 16 0 0116-16h146.74l54.63 54.63A32 32 0 00272 160h192a16 16 0 0116 16zM339.5 272h-68v-68a12 12 0 00-12-12h-8a12 12 0 00-12 12v68h-68a12 12 0 00-12 12v8a12 12 0 0012 12h68v68a12 12 0 0012 12h8a12 12 0 0012-12v-68h68a12 12 0 0012-12v-8a12 12 0 00-12-12z" />
  </svg>
);

SvgFolderPlus.displayName = "SvgFolderPlus";
SvgFolderPlus.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFolderPlus;
