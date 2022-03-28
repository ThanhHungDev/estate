import * as React from "react";

const SvgSendBackward = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M464 160H208a48 48 0 00-48 48v256a48 48 0 0048 48h256a48 48 0 0048-48V208a48 48 0 00-48-48zm16 304a16 16 0 01-16 16H208a16 16 0 01-16-16V208a16 16 0 0116-16h256a16 16 0 0116 16zM32 304V48a16 16 0 0116-16h256a16 16 0 0116 16v80h32V48a48 48 0 00-48-48H48A48 48 0 000 48v256a48 48 0 0048 48h80v-32H48a16 16 0 01-16-16zm400-80H240a16 16 0 00-16 16v192a16 16 0 0016 16h192a16 16 0 0016-16V240a16 16 0 00-16-16zm-16 192H256V256h160z" />
  </svg>
);

SvgSendBackward.displayName = "SvgSendBackward";
SvgSendBackward.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSendBackward;
