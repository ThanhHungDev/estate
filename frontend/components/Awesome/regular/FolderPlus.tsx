import * as React from "react";

const SvgFolderPlus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M464 128H272l-54.63-54.63A32 32 0 00194.74 64H48a48 48 0 00-48 48v288a48 48 0 0048 48h416a48 48 0 0048-48V176a48 48 0 00-48-48zm0 272H48V112h140.12l54.63 54.63a32 32 0 0022.63 9.37H464zM247.5 208a16 16 0 00-16 16v40H192a16 16 0 00-16 16v16a16 16 0 0016 16h39.5v40a16 16 0 0016 16h16a16 16 0 0016-16v-40H320a16 16 0 0016-16v-16a16 16 0 00-16-16h-40.5v-40a16 16 0 00-16-16z" />
  </svg>
);

SvgFolderPlus.displayName = "SvgFolderPlus";
SvgFolderPlus.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFolderPlus;
