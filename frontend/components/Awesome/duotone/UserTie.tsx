import * as React from "react";

const SvgUserTie = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M191.35 414.77L208 344l-32-56h96l-32 56 16.65 70.77L224 480zM224 256A128 128 0 1096 128a128 128 0 00128 128z"
      opacity={0.4}
    />
    <path
      d="M319.8 288.6L224 480l-95.8-191.4C56.9 292 0 350.3 0 422.4V464a48 48 0 0048 48h352a48 48 0 0048-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"
      className="user-tie_svg__fa-primary"
    />
  </svg>
);

SvgUserTie.displayName = "SvgUserTie";
SvgUserTie.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUserTie;