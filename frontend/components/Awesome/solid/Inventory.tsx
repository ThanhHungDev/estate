import * as React from "react";

const SvgInventory = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M624 0h-32c-8.8 0-16 7.2-16 16v144H64V16c0-8.8-7.2-16-16-16H16C7.2 0 0 7.2 0 16v496h64v-32h512v32h64V16c0-8.8-7.2-16-16-16zm-48 416H64V224h512v192zM368 128h96c8.8 0 16-7.2 16-16V16c0-8.8-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16zM112 384h96c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16zm160 0h96c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16z" />
  </svg>
);

SvgInventory.displayName = "SvgInventory";
SvgInventory.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgInventory;
