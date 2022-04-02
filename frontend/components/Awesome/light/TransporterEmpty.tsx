import * as React from "react";

const SvgTransporterEmpty = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M509.791 268.419l-29.786-12.42-12.42-29.785a3.993 3.993 0 00-7.155 0l-12.42 29.785-29.786 12.42a4 4 0 000 7.154l29.786 12.42 12.42 29.786a3.995 3.995 0 007.155 0l12.42-29.786 29.786-12.42a4 4 0 000-7.154zM93.776 44.422L63.99 32.002 51.57 2.219a3.993 3.993 0 00-7.155 0l-12.42 29.783L2.21 44.422a4.002 4.002 0 000 7.156l29.786 12.42 12.42 29.784a3.993 3.993 0 007.155 0l12.42-29.784 29.786-12.42a4 4 0 000-7.156zm258.225 371.58V416H159.985a64 64 0 00-64.002 64v16a16 16 0 0016 16h288.01a16.001 16.001 0 0016-16v-16a64 64 0 00-63.992-63.998zM127.984 480a32.037 32.037 0 0132.001-32h192.006a32.037 32.037 0 0132.001 32z" />
  </svg>
);

SvgTransporterEmpty.displayName = "SvgTransporterEmpty";
SvgTransporterEmpty.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTransporterEmpty;
