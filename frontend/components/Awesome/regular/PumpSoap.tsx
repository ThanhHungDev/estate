import * as React from "react";

const SvgPumpSoap = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M152 244c-16.33 21.8-52 72.27-52 97.27 0 32.42 26.88 58.75 60 58.75s60-26.33 60-58.75c0-25-35.7-75.47-52-97.27a10 10 0 00-16 0zm227.31-136.28L336 64.4A56 56 0 00296.41 48H240V32a32 32 0 00-32-32h-96a32 32 0 00-32 32v96.41a63.83 63.83 0 00-59.37 57.8l-20.36 256A64 64 0 0064 512h192a64 64 0 0063.74-69.79l-20.36-256a63.83 63.83 0 00-59.38-57.8V96h56.41a8 8 0 015.65 2.34l43.32 43.31a16 16 0 0022.62 0l11.31-11.31a16 16 0 000-22.62zM128 48h64v80h-64zm123.52 142l20.41 256.54A16 16 0 01256 464H64a15.87 15.87 0 01-11.82-5.21A16.26 16.26 0 0148.12 446l20.32-255.45A15.92 15.92 0 0184.37 176h151.26a15.81 15.81 0 0115.89 14z" />
  </svg>
);

SvgPumpSoap.displayName = "SvgPumpSoap";
SvgPumpSoap.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPumpSoap;
