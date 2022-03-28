import * as React from "react";

const SvgFolderDownload = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M464 128H272l-54.63-54.63A32 32 0 00194.74 64H48a48 48 0 00-48 48v288a48 48 0 0048 48h416a48 48 0 0048-48V176a48 48 0 00-48-48zm0 272H48V112h140.12L232 155.88V256h-48.88a12 12 0 00-8.45 20.52L247 348.29a12.81 12.81 0 0018 0l72.31-71.77a12 12 0 00-8.43-20.52H280v-80h184z" />
  </svg>
);

SvgFolderDownload.displayName = "SvgFolderDownload";
SvgFolderDownload.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFolderDownload;
