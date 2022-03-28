import * as React from "react";

const SvgQuestion = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M182.43 373.46a69.27 69.27 0 1069.28 69.27 69.28 69.28 0 00-69.28-69.27z"
      opacity={0.4}
    />
    <path
      d="M367.92 153.6c0 116-125.27 117.77-125.27 160.63V320a24 24 0 01-24 24h-72.47a24 24 0 01-24-24v-9.79c0-61.83 46.87-86.54 82.3-106.4 30.38-17 49-28.62 49-51.17 0-29.83-38-49.63-68.82-49.63-39.12 0-57.75 18.07-82.75 49.45a24 24 0 01-33.26 4.15L25.51 123.9A24 24 0 0120.34 91c40.59-58.3 92.28-91 172.1-91 84.88 0 175.49 66.26 175.48 153.6z"
      className="question_svg__fa-primary"
    />
  </svg>
);

SvgQuestion.displayName = "SvgQuestion";
SvgQuestion.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgQuestion;
