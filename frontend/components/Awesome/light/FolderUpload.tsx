import * as React from "react";

const SvgFolderUpload = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M464 128H272l-54.63-54.63A32 32 0 00194.74 64H48a48 48 0 00-48 48v288a48 48 0 0048 48h416a48 48 0 0048-48V176a48 48 0 00-48-48zm16 272a16 16 0 01-16 16H272v-96.3h52.66a26.94 26.94 0 0025-16.72 28.38 28.38 0 00-5.44-30.81l-68.12-71.78c-10.69-11.19-29.51-11.2-40.19 0l-68.12 71.75a28.43 28.43 0 00-5.45 30.86 26.94 26.94 0 0025 16.72H240V416H48a16 16 0 01-16-16V112a16 16 0 0116-16h146.74l54.63 54.63A32 32 0 00272 160h192a16 16 0 0116 16zM197.15 287.7l58.84-62 58.84 62z" />
  </svg>
);

SvgFolderUpload.displayName = "SvgFolderUpload";
SvgFolderUpload.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFolderUpload;
