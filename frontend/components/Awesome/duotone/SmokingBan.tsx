import * as React from "react";

const SvgSmokingBan = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M96 240a16 16 0 0116-16h21.5l96 96H112a16 16 0 01-16-16zm224.6-80a32 32 0 0131.4 25.9 7.74 7.74 0 007.7 6.1h16.2a8.17 8.17 0 008-9.4 64.07 64.07 0 00-63.3-54.6 32 32 0 01-31.4-25.9 7.74 7.74 0 00-7.7-6.1h-16.2a8.17 8.17 0 00-8 9.4 64.07 64.07 0 0063.3 54.6zm95.4 80a16 16 0 00-16-16H269.2l32 32H384v32h-50.8l32 32H400a16 16 0 0016-16z"
      opacity={0.4}
    />
    <path
      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 448c-105.9 0-192-86.1-192-192a190.67 190.67 0 0135.7-111.1l267.4 267.4A190.67 190.67 0 01256 448zm156.3-80.9L144.9 99.7A190.67 190.67 0 01256 64c105.9 0 192 86.1 192 192a190.67 190.67 0 01-35.7 111.1z"
      className="smoking-ban_svg__fa-primary"
    />
  </svg>
);

SvgSmokingBan.displayName = "SvgSmokingBan";
SvgSmokingBan.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSmokingBan;
