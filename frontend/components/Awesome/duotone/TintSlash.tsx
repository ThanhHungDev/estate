import * as React from "react";

const SvgTintSlash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M162.72 255.78L436.4 467.3A174 174 0 01320 512c-97.28 0-176-79.65-176-178.09 0-29.78 7.31-54.63 18.72-78.13zM495.2 351c.52-5.61.8-11.3.8-17 0-111.75-99.79-153.34-146.78-311.82-7.94-28.78-49.44-30.12-58.44 0-15.5 52.3-36.86 92-58.48 125.68z"
      opacity={0.4}
    />
    <path
      d="M636.64 480.55L617 505.82a16 16 0 01-22.46 2.81L6.18 53.9a16 16 0 01-2.81-22.45L23 6.18a16 16 0 0122.47-2.81L633.82 458.1a16 16 0 012.82 22.45z"
      className="tint-slash_svg__fa-primary"
    />
  </svg>
);

SvgTintSlash.displayName = "SvgTintSlash";
SvgTintSlash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTintSlash;
