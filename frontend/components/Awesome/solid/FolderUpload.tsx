import * as React from "react";

const SvgFolderUpload = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M464 128H272l-64-64H48a48 48 0 00-48 48v288a48 48 0 0048 48h416a48 48 0 0048-48V176a48 48 0 00-48-48zM353.19 320H288v48a16 16 0 01-16 16h-32a16 16 0 01-16-16v-48h-65.17a16 16 0 01-11.27-27.34L244 197a17.05 17.05 0 0124 0l96.42 95.7a16 16 0 01-11.23 27.3z" />
  </svg>
);

SvgFolderUpload.displayName = "SvgFolderUpload";
SvgFolderUpload.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFolderUpload;
