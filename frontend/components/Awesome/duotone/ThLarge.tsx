import * as React from "react";

const SvgThLarge = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M488 272H296a24 24 0 00-24 24v160a24 24 0 0024 24h192a24 24 0 0024-24V296a24 24 0 00-24-24zm-272 0H24a24 24 0 00-24 24v160a24 24 0 0024 24h192a24 24 0 0024-24V296a24 24 0 00-24-24z"
      opacity={0.4}
    />
    <path
      d="M488 32H296a24 24 0 00-24 24v160a24 24 0 0024 24h192a24 24 0 0024-24V56a24 24 0 00-24-24zm-272 0H24A24 24 0 000 56v160a24 24 0 0024 24h192a24 24 0 0024-24V56a24 24 0 00-24-24z"
      className="th-large_svg__fa-primary"
    />
  </svg>
);

SvgThLarge.displayName = "SvgThLarge";
SvgThLarge.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgThLarge;
