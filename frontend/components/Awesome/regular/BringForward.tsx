import * as React from "react";

const SvgBringForward = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M352 304V48a48 48 0 00-48-48H48A48 48 0 000 48v256a48 48 0 0048 48h256a48 48 0 0048-48zM48 48h256v256H48zm416 112h-80v48h80v256H208v-80h-48v80a48 48 0 0048 48h256a48 48 0 0048-48V208a48 48 0 00-48-48zM240 416a16 16 0 0016 16h160a16 16 0 0016-16V256a16 16 0 00-16-16h-32v144H240z" />
  </svg>
);

SvgBringForward.displayName = "SvgBringForward";
SvgBringForward.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBringForward;
