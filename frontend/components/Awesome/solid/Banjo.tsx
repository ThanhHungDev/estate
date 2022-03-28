import * as React from "react";

const SvgBanjo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M502.63 39L473.05 9.37a32 32 0 00-45.26 0l-46.31 46.32A35.26 35.26 0 00373 69.48l-12.19 36.59L286 180.79c-19.93-13.49-43.08-22.24-67.86-26.15v-.46a26.18 26.18 0 00-52.36 0v.46a166.32 166.32 0 00-72.28 29.82l-.23-.23a26.18 26.18 0 00-37 37l.23.22a166.31 166.31 0 00-29.84 72.34h-.46a26.18 26.18 0 000 52.36h.46a166.31 166.31 0 0029.84 72.34l-.23.22a26.18 26.18 0 1037 37l.23-.23a166.32 166.32 0 0072.32 29.82v.46a26.18 26.18 0 0052.36 0v-.46a166.32 166.32 0 0072.32-29.82l.23.23a26.18 26.18 0 1037-37l-.23-.22a166.31 166.31 0 0029.84-72.34h.46a26.18 26.18 0 000-52.36h-.46c-3.9-24.74-12.62-47.87-26.07-67.78l74.88-74.88 36.35-12.11a35.26 35.26 0 0013.79-8.53l46.32-46.31a32 32 0 00.02-45.18zM192 432a112 112 0 11112-112 112.12 112.12 0 01-112 112zm-39-125.65a8 8 0 00-11.32 0l-11.31 11.31a8 8 0 000 11.31L183 381.66a8 8 0 0011.31 0l11.31-11.31a8 8 0 000-11.32z" />
  </svg>
);

SvgBanjo.displayName = "SvgBanjo";
SvgBanjo.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBanjo;