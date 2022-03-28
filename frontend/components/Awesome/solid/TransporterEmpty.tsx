import * as React from "react";

const SvgTransporterEmpty = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M384.002 448H127.994a32 32 0 00-32 32v32h320.009v-32a32 32 0 00-32.001-32zm125.789-179.581l-29.786-12.42-12.42-29.785a3.993 3.993 0 00-7.155 0l-12.42 29.785-29.786 12.42a4 4 0 000 7.154l29.786 12.42 12.42 29.786a3.995 3.995 0 007.155 0l12.42-29.786 29.786-12.42a4 4 0 000-7.154zM63.991 32.002L51.57 2.22a3.993 3.993 0 00-7.155 0l-12.42 29.783L2.21 44.422a4.002 4.002 0 000 7.156l29.786 12.42 12.42 29.784a3.993 3.993 0 007.155 0l12.42-29.784 29.786-12.42a4 4 0 000-7.156z" />
  </svg>
);

SvgTransporterEmpty.displayName = "SvgTransporterEmpty";
SvgTransporterEmpty.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTransporterEmpty;
