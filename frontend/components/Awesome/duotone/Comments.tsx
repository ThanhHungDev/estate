import * as React from "react";

const SvgComments = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M208 352c-41 0-79.1-9.3-111.3-25-21.8 12.7-52.1 25-88.7 25a7.83 7.83 0 01-7.3-4.8 8 8 0 011.5-8.7c.3-.3 22.4-24.3 35.8-54.5-23.9-26.1-38-57.7-38-92C0 103.6 93.1 32 208 32s208 71.6 208 160-93.1 160-208 160z"
      opacity={0.4}
    />
    <path
      d="M576 320c0 34.3-14.1 66-38 92 13.4 30.3 35.5 54.2 35.8 54.5a8 8 0 011.5 8.7 7.88 7.88 0 01-7.3 4.8c-36.6 0-66.9-12.3-88.7-25-32.2 15.8-70.3 25-111.3 25-86.2 0-160.2-40.4-191.7-97.9A299.82 299.82 0 00208 384c132.3 0 240-86.1 240-192a148.61 148.61 0 00-1.3-20.1C522.5 195.8 576 253.1 576 320z"
      className="comments_svg__fa-primary"
    />
  </svg>
);

SvgComments.displayName = "SvgComments";
SvgComments.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgComments;
