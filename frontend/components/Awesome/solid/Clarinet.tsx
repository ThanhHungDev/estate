import * as React from "react";

const SvgClarinet = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M630.12 129.22a15.94 15.94 0 00-17.43 3.47L569.38 176H480v-32h24a8 8 0 008-8v-16a8 8 0 00-8-8H232a8 8 0 00-8 8v16a8 8 0 008 8h24v32H101.19a32 32 0 00-10.12 1.64l-80.13 26.71A16 16 0 000 219.53v72.94a16 16 0 0010.94 15.18l80.13 26.71a32 32 0 0010.12 1.64h468.19l43.31 43.31A16 16 0 00624 384a15.73 15.73 0 006.12-1.22A16 16 0 00640 368V144a16 16 0 00-9.88-14.78zM384 144h64v32h-64zm-96 0h64v32h-64zm-16 136a24 24 0 1124-24 24 24 0 01-24 24zm96 0a24 24 0 1124-24 24 24 0 01-24 24zm96 0a24 24 0 1124-24 24 24 0 01-24 24z" />
  </svg>
);

SvgClarinet.displayName = "SvgClarinet";
SvgClarinet.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgClarinet;
