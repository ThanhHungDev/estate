import * as React from "react";

const SvgBallotCheck = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M360 0H24A23.94 23.94 0 000 24v464a23.94 23.94 0 0024 24h336a23.94 23.94 0 0024-24V24a23.94 23.94 0 00-24-24zM161.7 202.4l12.6 12.7a5.37 5.37 0 010 7.6l-64.2 63.6a5.37 5.37 0 01-7.6 0L65.6 249a5.37 5.37 0 010-7.6l12.7-12.6a5.37 5.37 0 017.6 0l20.6 20.8 47.6-47.2a5.37 5.37 0 017.6 0zM64 112a16 16 0 0116-16h32a16 16 0 0116 16v32a16 16 0 01-16 16H80a16 16 0 01-16-16zm64 288a16 16 0 01-16 16H80a16 16 0 01-16-16v-32a16 16 0 0116-16h32a16 16 0 0116 16zm192-8a8 8 0 01-8 8H168a8 8 0 01-8-8v-16a8 8 0 018-8h144a8 8 0 018 8zm-9.6-120H170.2s29.2-30.2 30.4-32h109.7c5.3 0 9.6 3.6 9.6 8v16h.1c0 4.4-4.3 8-9.6 8zm9.6-136a8 8 0 01-8 8H168a8 8 0 01-8-8v-16a8 8 0 018-8h144a8 8 0 018 8z"
      opacity={0.4}
    />
    <path
      d="M80 160h32a16 16 0 0016-16v-32a16 16 0 00-16-16H80a16 16 0 00-16 16v32a16 16 0 0016 16zm94.3 55.1l-12.6-12.7a5.37 5.37 0 00-7.6 0l-47.6 47.2-20.6-20.8a5.37 5.37 0 00-7.6 0l-12.7 12.6a5.37 5.37 0 000 7.6l36.9 37.3a5.37 5.37 0 007.6 0l64.2-63.6a5.37 5.37 0 000-7.6zM112 352H80a16 16 0 00-16 16v32a16 16 0 0016 16h32a16 16 0 0016-16v-32a16 16 0 00-16-16z"
      className="ballot-check_svg__fa-primary"
    />
  </svg>
);

SvgBallotCheck.displayName = "SvgBallotCheck";
SvgBallotCheck.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBallotCheck;
