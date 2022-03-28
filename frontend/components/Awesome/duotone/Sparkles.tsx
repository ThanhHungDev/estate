import * as React from "react";

const SvgSparkles = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M423.16 186.58L448 127l59.58-24.84a8 8 0 000-14.32L448 63 423.16 3.42a8 8 0 00-14.32 0L384 63l-59.58 24.84a8 8 0 000 14.32L384 127l24.84 59.58a8 8 0 0014.32 0zm-14.32 136.84L384 383l-59.58 24.84a8 8 0 000 14.32L384 447l24.84 59.58a8 8 0 0014.32 0L448 447l59.58-24.84a8 8 0 000-14.32L448 383l-24.84-59.58a8 8 0 00-14.32 0z"
      opacity={0.4}
    />
    <path
      d="M384 254.64a16.06 16.06 0 00-8.84-14.33l-112.57-56.39-56.28-112.77c-5.44-10.87-23.19-10.87-28.62 0l-56.28 112.77L8.84 240.31a16 16 0 000 28.67l112.57 56.39 56.28 112.77a16 16 0 0028.62 0l56.28-112.77L375.16 269a16.07 16.07 0 008.84-14.36z"
      className="sparkles_svg__fa-primary"
    />
  </svg>
);

SvgSparkles.displayName = "SvgSparkles";
SvgSparkles.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSparkles;
