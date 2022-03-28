import * as React from "react";

const SvgProjectDiagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M608 0H480c-17.67 0-32 14.33-32 32v32H192V32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72L224 360.12V480c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32H274.76L192 175.5V128h256v32c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32zM144 144H48V48h96v96zm128 224h96v96h-96v-96zm320-224h-96V48h96v96z" />
  </svg>
);

SvgProjectDiagram.displayName = "SvgProjectDiagram";
SvgProjectDiagram.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgProjectDiagram;
