import * as React from "react";

const SvgChimney = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M480 0H32C14.3 0 0 14.3 0 32v128c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32zM32 512h288V384H32v128zm160-160h288V224H192v128zM32 224v128h128V224H32zm320 288h128V384H352v128z" />
  </svg>
);

SvgChimney.displayName = "SvgChimney";
SvgChimney.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgChimney;
