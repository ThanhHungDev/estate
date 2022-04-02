import * as React from "react";

const SvgLampDesk = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M221.78 120.28L103 239a24 24 0 00-6.11 23.56L149.9 448h49.92L147 263l108.72-108.78zm236.55 67.43l-78.62 78.62a55.73 55.73 0 0078.62-78.62z"
      opacity={0.4}
    />
    <path
      d="M320 448H64C35.58 448 9.05 466.53.7 492.16-2.52 502 5.88 512 16.26 512h351.48c10.39 0 18.78-10 15.57-19.84C375 466.53 348.42 448 320 448zM494.41 64H346.5l-45.26-45.26a64 64 0 00-90.5 90.5l45 45 .28.28v147.9c0 15.63 18.9 23.46 30 12.4L506.82 94c11.06-11.1 3.23-30-12.41-30z"
      className="lamp-desk_svg__fa-primary"
    />
  </svg>
);

SvgLampDesk.displayName = "SvgLampDesk";
SvgLampDesk.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLampDesk;
