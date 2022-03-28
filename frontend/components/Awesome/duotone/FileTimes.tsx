import * as React from "react";

const SvgFileTimes = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M224 136V0H24A23.94 23.94 0 000 24v464a23.94 23.94 0 0024 24h336a23.94 23.94 0 0024-24V160H248a24.07 24.07 0 01-24-24zm35.88 104.8l11.32 11.32a16 16 0 010 22.63L225.94 320l45.26 45.25a16 16 0 010 22.63l-11.32 11.32a16 16 0 01-22.63 0L192 353.94l-45.25 45.26a16 16 0 01-22.63 0l-11.32-11.32a16 16 0 010-22.63L158.06 320l-45.26-45.25a16 16 0 010-22.63l11.32-11.32a16 16 0 0122.63 0L192 286.06l45.25-45.26a16 16 0 0122.63 0zM377 105L279.1 7a24 24 0 00-17-7H256v128h128v-6.1a23.92 23.92 0 00-7-16.9z"
      opacity={0.4}
    />
    <path
      d="M271.2 387.88l-11.32 11.32a16 16 0 01-22.63 0L192 353.94l-45.25 45.26a16 16 0 01-22.63 0l-11.32-11.32a16 16 0 010-22.63L158.06 320l-45.26-45.25a16 16 0 010-22.63l11.32-11.32a16 16 0 0122.63 0L192 286.06l45.25-45.26a16 16 0 0122.63 0l11.32 11.32a16 16 0 010 22.63L225.94 320l45.26 45.25a16 16 0 010 22.63z"
      className="file-times_svg__fa-primary"
    />
  </svg>
);

SvgFileTimes.displayName = "SvgFileTimes";
SvgFileTimes.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFileTimes;
