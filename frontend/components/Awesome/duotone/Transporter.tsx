import * as React from "react";

const SvgTransporter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M509.789 44.432l-29.782-12.42-12.422-29.785a3.995 3.995 0 00-7.157 0l-12.422 29.785-29.782 12.42a4 4 0 000 7.154l29.782 12.42 12.422 29.785a3.996 3.996 0 007.157 0l12.422-29.785 29.782-12.42a4 4 0 000-7.154zM63.99 96L51.572 66.215a3.995 3.995 0 00-7.157 0L31.993 96 2.211 108.42a4 4 0 000 7.154l29.782 12.42 12.422 29.785a3.996 3.996 0 007.157 0l12.418-29.785 29.786-12.42a4 4 0 000-7.154z"
      opacity={0.4}
    />
    <path
      d="M255.957 96l.02-.002.02.002a48 48 0 100-96l-.02.002-.02-.002a48 48 0 100 96zM384 448h-56.002V238.78l31.423 37.704a31.996 31.996 0 0049.158-40.968l-70.393-84.485A63.843 63.843 0 00289.013 128h-66.034a63.788 63.788 0 00-49.157 23.031l-70.409 84.485a31.996 31.996 0 0049.158 40.968l31.423-37.705V448h-56.002a31.998 31.998 0 00-32 32v32H416v-32A31.998 31.998 0 00384 448zm-120.004 0h-16V320h16z"
      className="transporter_svg__fa-primary"
    />
  </svg>
);

SvgTransporter.displayName = "SvgTransporter";
SvgTransporter.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTransporter;