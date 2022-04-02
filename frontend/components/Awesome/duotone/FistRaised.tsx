import * as React from "react";

const SvgFistRaised = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M64 512v-64l-26.5-26.51A128 128 0 010 331v-77.95A47.26 47.26 0 0016 256h32a47.65 47.65 0 0032-12.49A47.65 47.65 0 00112 256h32a47.4 47.4 0 0021.87-5.52 64.34 64.34 0 0038.87 34.45c-17.11 14.82-31.58 34.48-47.31 58.08l-6.31 9.47a8 8 0 002.22 11.08l13.31 8.88a8 8 0 0011.08-2.22l6.31-9.47c31.89-47.84 51.53-70.27 96.05-72.55a8.22 8.22 0 007.88-8V264c0-4.42-3.52-8-13.2-8h-35.25A47.59 47.59 0 01192 208.41v-.56A15.86 15.86 0 01207.85 192H320a64 64 0 0164 64v88.22a96 96 0 01-28.12 67.91L320 448v64z"
      opacity={0.4}
    />
    <path
      d="M144 32h-32a16 16 0 00-16 16v160a16 16 0 0016 16h32a16 16 0 0016-16V48a16 16 0 00-16-16zM48 64H16A16 16 0 000 80v128a16 16 0 0016 16h32a16 16 0 0016-16V80a16 16 0 00-16-16zm288-32h-32a16 16 0 00-16 16v112h32a94.76 94.76 0 0132 5.9V48a16 16 0 00-16-16zM240 0h-32a16 16 0 00-16 16v146.93a47.56 47.56 0 0116-2.93h48V16a16 16 0 00-16-16z"
      className="fist-raised_svg__fa-primary"
    />
  </svg>
);

SvgFistRaised.displayName = "SvgFistRaised";
SvgFistRaised.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFistRaised;
