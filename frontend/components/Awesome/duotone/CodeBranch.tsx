import * as React from "react";

const SvgCodeBranch = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M328 220.33V224c0 32-6.69 47.26-20 63.8-28.2 35-76 39.5-118.2 43.4-25.7 2.4-49.9 4.6-66.1 12.8-3.82 1.94-9.25 6.44-13.44 13.94A80.16 80.16 0 0056 355.67V156.33a80.31 80.31 0 0048 0v144c23.9-11.5 53.1-14.3 81.3-16.9 35.9-3.3 69.8-6.5 85.2-25.7 6.34-7.83 9.5-17.7 9.5-33.7v-3.67a80.31 80.31 0 0048 0z"
      opacity={0.4}
    />
    <path
      d="M80 0a80 80 0 1080 80A80 80 0 0080 0zm0 96a16 16 0 1116-16 16 16 0 01-16 16zm0 256a80 80 0 1080 80 80 80 0 00-80-80zm0 96a16 16 0 1116-16 16 16 0 01-16 16zM304 64a80 80 0 1080 80 80 80 0 00-80-80zm0 96a16 16 0 1116-16 16 16 0 01-16 16z"
      className="code-branch_svg__fa-primary"
    />
  </svg>
);

SvgCodeBranch.displayName = "SvgCodeBranch";
SvgCodeBranch.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCodeBranch;
