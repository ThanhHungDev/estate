import * as React from "react";

const SvgWindTurbine = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 514 512" {...props}>
    <path d="M350.1 480h-24.27l-3-46-52.03-61.3 7 107.3h-43.56l9.06-139.69-26.9-31.68a24 24 0 00-16-8.78l-2.52-.27L186.17 480H161.9a36.94 36.94 0 00-33 20.42A8 8 0 00136 512h240a8 8 0 007.15-11.58A36.93 36.93 0 00350.1 480zm48.59-54.21l-88.35-182.32a55.73 55.73 0 01-.73-42.79l73.28-179.07a15.8 15.8 0 00-27.5-15.07L241.27 163.21a55.74 55.74 0 01-36.47 22.4L13.32 215.94A15.81 15.81 0 000 231.89v.23a15.8 15.8 0 0014.1 15.35L203.83 268a55.78 55.78 0 0137.54 20.58l130.31 153.5a15.81 15.81 0 0020.53 3.63l.19-.12a15.79 15.79 0 006.29-19.8zM256 248a24 24 0 1124-24 24 24 0 01-24 24z" />
  </svg>
);

SvgWindTurbine.displayName = "SvgWindTurbine";
SvgWindTurbine.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWindTurbine;
