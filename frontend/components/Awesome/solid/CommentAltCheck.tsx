import * as React from "react";

const SvgCommentAltCheck = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm-77.9 163.8l-131 130c-4.3 4.3-11.3 4.3-15.6-.1l-75.7-76.3c-4.3-4.3-4.2-11.3.1-15.6l26-25.8c4.3-4.3 11.3-4.2 15.6.1l42.1 42.5 97.2-96.4c4.3-4.3 11.3-4.2 15.6.1l25.8 26c4.2 4.3 4.2 11.3-.1 15.5z" />
  </svg>
);

SvgCommentAltCheck.displayName = "SvgCommentAltCheck";
SvgCommentAltCheck.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCommentAltCheck;
