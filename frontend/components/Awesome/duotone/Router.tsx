import * as React from "react";

const SvgRouter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M566.22 82.05C444.81-27.34 259.26-27.34 137.78 82a16.11 16.11 0 00-.71 23.34l22.34 22.34a15.85 15.85 0 0021.86.64c96.45-86.55 244.24-85.85 341.11.42a16 16 0 0021.85-.63l22.7-22.7a16.1 16.1 0 00-.71-23.36zm-360.34 83.61a16.12 16.12 0 00-.86 23.61L227.73 212a15.94 15.94 0 0021.7.78c58.77-49.84 145.8-49.36 205.14.21a16.07 16.07 0 0021.63-.84l22.8-22.8a16.22 16.22 0 00-.84-23.63c-83.83-71.91-208.42-71.91-292.28-.06zM96 384a32 32 0 1032 32 32 32 0 00-32-32z"
      opacity={0.4}
    />
    <path
      d="M528 320H376v-80a16 16 0 00-16-16h-16a16 16 0 00-16 16v80H48a48 48 0 00-48 48v96a48 48 0 0048 48h480a48 48 0 0048-48v-96a48 48 0 00-48-48zM96 448a32 32 0 1132-32 32 32 0 01-32 32zm96 0a32 32 0 1132-32 32 32 0 01-32 32z"
      className="router_svg__fa-primary"
    />
  </svg>
);

SvgRouter.displayName = "SvgRouter";
SvgRouter.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRouter;
