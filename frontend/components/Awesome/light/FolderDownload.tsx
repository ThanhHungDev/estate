import * as React from "react";

const SvgFolderDownload = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M464 128H272l-54.63-54.63A32 32 0 00194.74 64H48a48 48 0 00-48 48v288a48 48 0 0048 48h416a48 48 0 0048-48V176a48 48 0 00-48-48zM314.85 288L256 350l-58.84-62zM480 400a16 16 0 01-16 16H48a16 16 0 01-16-16V112a16 16 0 0116-16h146.74L240 141.27V256h-52.65a26.94 26.94 0 00-25 16.72 28.38 28.38 0 005.44 30.81l68.12 71.78c10.69 11.19 29.51 11.2 40.19 0l68.12-71.75a28.43 28.43 0 005.44-30.83 26.94 26.94 0 00-25-16.72H272V160h192a16 16 0 0116 16z" />
  </svg>
);

SvgFolderDownload.displayName = "SvgFolderDownload";
SvgFolderDownload.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFolderDownload;
