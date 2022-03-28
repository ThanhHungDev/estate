import * as React from "react";

const SvgTransporterEmpty = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M509.793 268.419l-29.786-12.42-12.422-29.785a3.992 3.992 0 00-7.153 0l-12.418 29.785-29.79 12.42a4 4 0 000 7.154l29.79 12.42 12.418 29.786a3.993 3.993 0 007.153 0l12.422-29.786 29.786-12.42a4.002 4.002 0 000-7.154zM63.994 32.002L51.572 2.22a3.995 3.995 0 00-7.157 0L31.997 32.002 2.211 44.422a4 4 0 000 7.156l29.786 12.42 12.418 29.784a3.995 3.995 0 007.157 0l12.422-29.784 29.782-12.42a4 4 0 000-7.156z"
      opacity={0.4}
    />
    <path
      d="M416.005 480v32H95.995v-32a32 32 0 0132.001-32h256.008a32 32 0 0132 32z"
      className="transporter-empty_svg__fa-primary"
    />
  </svg>
);

SvgTransporterEmpty.displayName = "SvgTransporterEmpty";
SvgTransporterEmpty.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTransporterEmpty;
