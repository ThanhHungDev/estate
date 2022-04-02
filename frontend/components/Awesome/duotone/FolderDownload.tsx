import * as React from "react";

const SvgFolderDownload = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M464 127.08H272l-64-64H48a48 48 0 00-48 48v288a48 48 0 0048 48h416a48 48 0 0048-48v-224a48 48 0 00-48-48zm-99.56 155.36L268 378.14a17.05 17.05 0 01-24 0l-96.42-95.7a16 16 0 0111.25-27.34H224v-48a16 16 0 0116-16h32a16 16 0 0116 16v48h65.18a16 16 0 0111.26 27.34z"
      opacity={0.4}
    />
    <path
      d="M364.44 282.44L268 378.14a17.05 17.05 0 01-24 0l-96.42-95.7a16 16 0 0111.25-27.34H224v-48a16 16 0 0116-16h32a16 16 0 0116 16v48h65.18a16 16 0 0111.26 27.34z"
      className="folder-download_svg__fa-primary"
    />
  </svg>
);

SvgFolderDownload.displayName = "SvgFolderDownload";
SvgFolderDownload.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFolderDownload;
