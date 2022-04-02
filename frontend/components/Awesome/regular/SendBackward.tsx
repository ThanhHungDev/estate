import * as React from "react";

const SvgSendBackward = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M48 48h256v80h48V48a48 48 0 00-48-48H48A48 48 0 000 48v256a48 48 0 0048 48h80v-48H48zm208 384h160a16 16 0 0016-16V256a16 16 0 00-16-16H256a16 16 0 00-16 16v160a16 16 0 0016 16zm32-144h96v96h-96zm176-128H208a48 48 0 00-48 48v256a48 48 0 0048 48h256a48 48 0 0048-48V208a48 48 0 00-48-48zm0 304H208V208h256z" />
  </svg>
);

SvgSendBackward.displayName = "SvgSendBackward";
SvgSendBackward.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSendBackward;
