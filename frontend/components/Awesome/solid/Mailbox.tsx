import * as React from "react";

const SvgMailbox = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M144 64A144 144 0 000 208v208a32 32 0 0032 32h256V208A144 144 0 00144 64zm80 176a16 16 0 01-16 16H80a16 16 0 01-16-16v-32a16 16 0 0116-16h128a16 16 0 0116 16zM432 64H244.87C290.23 95.87 320 148.48 320 208v240h224a32 32 0 0032-32V208A144 144 0 00432 64zm80 208a16 16 0 01-16 16h-32a16 16 0 01-16-16v-48h-56a8 8 0 01-8-8v-16a8 8 0 018-8h104a16 16 0 0116 16z" />
  </svg>
);

SvgMailbox.displayName = "SvgMailbox";
SvgMailbox.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMailbox;
