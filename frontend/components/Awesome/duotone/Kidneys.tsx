import * as React from "react";

const SvgKidneys = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M402.73 199.72l-35.89 18a55.81 55.81 0 00-31 50.09v228.21a16 16 0 0016 16h16a16 16 0 0016-16V267.77a8 8 0 014.47-7.16l23.87-11.94 2.13-7.39c4.92-16.94-3.05-31.56-11.58-41.56zm-98.86 68a55.74 55.74 0 00-31-50.09l-35.84-17.92c-8.57 10.12-16.55 25-11.66 42.26l1.82 6.49 24.21 12.11a8 8 0 014.44 7.16V496a16 16 0 0016 16h16a16 16 0 0016-16v-48z"
      opacity={0.4}
    />
    <path
      d="M639.9 224c-2.09-74-35.81-146.16-96-199.7a96 96 0 10-127.69 143.42c49.6 44.12 26.49 91.15 25.76 93.71C424.49 322 469.62 384 534.29 384a96.07 96.07 0 0092.26-69.46c5.54-19.27 14.54-48.08 13.35-90.54zM96 24.38C36.08 77.85 2.39 150 .13 224-1.15 266 7.6 294.91 13 314.06A96 96 0 00105.37 384c64.31 0 109.65-61.47 92.47-122.11-1-3.7-23.08-50.43 26.07-94.27A96 96 0 1096 24.38z"
      className="kidneys_svg__fa-primary"
    />
  </svg>
);

SvgKidneys.displayName = "SvgKidneys";
SvgKidneys.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgKidneys;
