import * as React from "react";

const SvgCandleHolder = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M160 192c45.93 0 78-32.61 78-79.29C238 82.72 205.41 37.82 160 0c-45.62 38-78 82.84-78 112.71 0 46.68 32.07 79.29 78 79.29zm0-148.93c31.56 30.97 46 58.26 46 69.63 0 29.17-17.63 47.29-46 47.29s-46-18.12-46-47.29c0-11.37 14.44-38.66 46-69.63zM384 384c-35.35 0-64 28.65-64 64 0 11.72 3.38 22.55 8.88 32H256V256c0-17.67-14.33-32-32-32H96c-17.67 0-32 14.33-32 32v224H8c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h376c35.35 0 64-28.65 64-64s-28.65-64-64-64zm-160 96H96V256h32v48c0 8.84 7.16 16 16 16s16-7.16 16-16v-48h64v224zm160 0c-17.64 0-32-14.36-32-32s14.36-32 32-32 32 14.36 32 32-14.36 32-32 32z" />
  </svg>
);

SvgCandleHolder.displayName = "SvgCandleHolder";
SvgCandleHolder.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCandleHolder;
