import * as React from "react";

const SvgSparkles = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M324.42 103.15L384 128l24.84 59.58a8 8 0 0014.32 0L448 128l59.58-24.85a8 8 0 000-14.31L448 64 423.16 4.42a8 8 0 00-14.32 0L384 64l-59.58 24.84a8 8 0 000 14.31zm183.16 305.69L448 384l-24.84-59.58a8 8 0 00-14.32 0L384 384l-59.58 24.84a8 8 0 000 14.32L384 448l24.84 59.58a8 8 0 0014.32 0L448 448l59.58-24.84a8 8 0 000-14.32zM384 255.64a16.06 16.06 0 00-8.84-14.33l-112.57-56.39-56.28-112.77c-5.44-10.87-23.19-10.87-28.62 0l-56.28 112.77L8.84 241.31a16 16 0 000 28.67l112.57 56.39 56.28 112.77a16 16 0 0028.62 0l56.28-112.77L375.16 270a16.07 16.07 0 008.84-14.36z" />
  </svg>
);

SvgSparkles.displayName = "SvgSparkles";
SvgSparkles.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSparkles;
