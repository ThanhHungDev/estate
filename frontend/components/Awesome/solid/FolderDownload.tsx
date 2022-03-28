import * as React from "react";

const SvgFolderDownload = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M464 128H272l-64-64H48a48 48 0 00-48 48v288a48 48 0 0048 48h416a48 48 0 0048-48V176a48 48 0 00-48-48zm-99.56 155.36L268 379.06a17.05 17.05 0 01-24 0l-96.42-95.7A16 16 0 01158.81 256H224v-48a16 16 0 0116-16h32a16 16 0 0116 16v48h65.18a16 16 0 0111.26 27.36z" />
  </svg>
);

SvgFolderDownload.displayName = "SvgFolderDownload";
SvgFolderDownload.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFolderDownload;
