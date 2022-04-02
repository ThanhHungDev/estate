import * as React from "react";

const SvgFolderUpload = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M464 128H272l-54.63-54.63A32 32 0 00194.74 64H48a48 48 0 00-48 48v288a48 48 0 0048 48h416a48 48 0 0048-48V176a48 48 0 00-48-48zm0 272H280v-80h48.88a12 12 0 008.45-20.52L265 227.71a12.81 12.81 0 00-18 0l-72.31 71.77a12 12 0 008.43 20.52H232v80H48V112h140.12l54.63 54.63a32 32 0 0022.63 9.37H464z" />
  </svg>
);

SvgFolderUpload.displayName = "SvgFolderUpload";
SvgFolderUpload.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFolderUpload;
