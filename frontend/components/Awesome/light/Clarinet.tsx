import * as React from "react";

const SvgClarinet = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M272 232a24 24 0 1024 24 24 24 0 00-24-24zm96 0a24 24 0 1024 24 24 24 0 00-24-24zm96 0a24 24 0 1024 24 24 24 0 00-24-24zm152-120a23.73 23.73 0 00-13.28 4l-66 44H480v-32h24a8 8 0 008-8v-16a8 8 0 00-8-8H232a8 8 0 00-8 8v16a8 8 0 008 8h24v32H101.2a31.92 31.92 0 00-10.12 1.64l-69.2 23.07A32 32 0 000 215.06v81.88a32 32 0 0021.88 30.35l69.2 23.07A31.92 31.92 0 00101.2 352h435.53l66 44A24 24 0 00640 376V136a24 24 0 00-24-24zm-232 16h64v32h-64zm-96 0h64v32h-64zm320 233.05L546.42 320H101.2L32 296.94v-81.88L101.2 192h445.22L608 151z" />
  </svg>
);

SvgClarinet.displayName = "SvgClarinet";
SvgClarinet.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgClarinet;
