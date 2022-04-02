import * as React from "react";

const SvgListMusic = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M470.36 1.51l-112 35.38A32 32 0 00336 67.36v299.12c-18.16-9.07-40.16-14.48-64-14.48-61.86 0-112 35.82-112 80s50.14 80 112 80 112-35.82 112-80V195.36L489.64 162A32 32 0 00512 131.48V32a32 32 0 00-41.64-30.49zM272 464c-39.7 0-64-20.72-64-32s24.3-32 64-32 64 20.72 64 32-24.3 32-64 32zm192-344.25L384 145V79.12l80-25.26zM16 104h256a16 16 0 0016-16V72a16 16 0 00-16-16H16A16 16 0 000 72v16a16 16 0 0016 16zm0 128h256a16 16 0 0016-16v-16a16 16 0 00-16-16H16a16 16 0 00-16 16v16a16 16 0 0016 16zm144 96a16 16 0 00-16-16H16a16 16 0 00-16 16v16a16 16 0 0016 16h128a16 16 0 0016-16z" />
  </svg>
);

SvgListMusic.displayName = "SvgListMusic";
SvgListMusic.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgListMusic;
