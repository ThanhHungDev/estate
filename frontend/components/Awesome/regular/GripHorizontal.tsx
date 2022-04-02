import * as React from "react";

const SvgGripHorizontal = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M488 96h-96c-13.25 0-24 10.74-24 24v96c0 13.25 10.75 24 24 24h96c13.25 0 24-10.75 24-24v-96c0-13.26-10.75-24-24-24zm-24 96h-48v-48h48v48zm24 80h-96c-13.25 0-24 10.74-24 24v96c0 13.25 10.75 24 24 24h96c13.25 0 24-10.75 24-24v-96c0-13.26-10.75-24-24-24zm-24 96h-48v-48h48v48zM120 96H24c-13.25 0-24 10.74-24 24v96c0 13.25 10.75 24 24 24h96c13.25 0 24-10.75 24-24v-96c0-13.26-10.75-24-24-24zm-24 96H48v-48h48v48zm24 80H24c-13.25 0-24 10.74-24 24v96c0 13.25 10.75 24 24 24h96c13.25 0 24-10.75 24-24v-96c0-13.26-10.75-24-24-24zm-24 96H48v-48h48v48zM304 96h-96c-13.25 0-24 10.74-24 24v96c0 13.25 10.75 24 24 24h96c13.25 0 24-10.75 24-24v-96c0-13.26-10.75-24-24-24zm-24 96h-48v-48h48v48zm24 80h-96c-13.25 0-24 10.74-24 24v96c0 13.25 10.75 24 24 24h96c13.25 0 24-10.75 24-24v-96c0-13.26-10.75-24-24-24zm-24 96h-48v-48h48v48z" />
  </svg>
);

SvgGripHorizontal.displayName = "SvgGripHorizontal";
SvgGripHorizontal.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGripHorizontal;
