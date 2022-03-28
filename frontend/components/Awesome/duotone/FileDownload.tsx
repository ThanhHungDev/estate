import * as React from "react";

const SvgFileDownload = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M384 128H272a16 16 0 01-16-16V0H24A23.94 23.94 0 000 23.88V488a23.94 23.94 0 0023.88 24H360a23.94 23.94 0 0024-23.88V128zm-83.55 219.36L204 443.06a17.06 17.06 0 01-24 0l-96.42-95.7C73.42 337.29 80.54 320 94.82 320H160v-80a16 16 0 0116-16h32a16 16 0 0116 16v80h65.18c14.28 0 21.4 17.29 11.27 27.36z"
      opacity={0.4}
    />
    <path
      d="M377 105L279.1 7a24 24 0 00-17-7H256v112a16 16 0 0016 16h112v-6.1a23.9 23.9 0 00-7-16.9zm-87.82 215H224v-80a16 16 0 00-16-16h-32a16 16 0 00-16 16v80H94.82c-14.28 0-21.4 17.29-11.24 27.36l96.42 95.7a17.06 17.06 0 0024 0l96.45-95.7c10.13-10.07 3.01-27.36-11.27-27.36z"
      className="file-download_svg__fa-primary"
    />
  </svg>
);

SvgFileDownload.displayName = "SvgFileDownload";
SvgFileDownload.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFileDownload;
