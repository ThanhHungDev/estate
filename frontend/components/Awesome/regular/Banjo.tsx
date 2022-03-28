import * as React from "react";

const SvgBanjo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M502.63 39L473.05 9.37a32 32 0 00-45.26 0l-46.31 46.32A35.26 35.26 0 00373 69.48L355.11 123l-62.88 62.87a166.32 166.32 0 00-73.54-31.2l-.51-.51a26.18 26.18 0 00-52.36 0v.46a166.32 166.32 0 00-72.32 29.84l-.23-.23a26.18 26.18 0 00-37 37l.23.22a166.31 166.31 0 00-29.84 72.34h-.46a26.18 26.18 0 000 52.36h.46a166.31 166.31 0 0029.84 72.34l-.23.22a26.18 26.18 0 1037 37l.23-.23a166.32 166.32 0 0072.32 29.82v.46a26.18 26.18 0 0052.36 0v-.46a166.32 166.32 0 0072.32-29.82l.23.23a26.18 26.18 0 1037-37l-.23-.22a166.31 166.31 0 0029.84-72.34h.46a26.18 26.18 0 000-52.36l-.47-.07a166.12 166.12 0 00-31.19-73.91l63-63 53.35-17.78a35.26 35.26 0 0013.79-8.53l46.32-46.31a32 32 0 00.03-45.19zM192 440a120 120 0 11120-120 120.13 120.13 0 01-120 120zm-41.38-131.31a16 16 0 00-22.63 0L116.68 320a16 16 0 000 22.63l52.69 52.68a16 16 0 0022.63 0L203.31 384a16 16 0 000-22.63z" />
  </svg>
);

SvgBanjo.displayName = "SvgBanjo";
SvgBanjo.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBanjo;
