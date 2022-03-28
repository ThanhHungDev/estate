import * as React from "react";

const SvgFolderPlus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M464 128H272l-64-64H48a48 48 0 00-48 48v288a48 48 0 0048 48h416a48 48 0 0048-48V176a48 48 0 00-48-48zM359.5 296a16 16 0 01-16 16h-64v64a16 16 0 01-16 16h-16a16 16 0 01-16-16v-64h-64a16 16 0 01-16-16v-16a16 16 0 0116-16h64v-64a16 16 0 0116-16h16a16 16 0 0116 16v64h64a16 16 0 0116 16z" />
  </svg>
);

SvgFolderPlus.displayName = "SvgFolderPlus";
SvgFolderPlus.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFolderPlus;
