import * as React from "react";

const SvgPlaneSlash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M269.44 480h-57.88l53.18-186.06-7.54-5.94H144l-48 64H69.34l28-96-28-96h25.32L54 128h-6a16 16 0 00-15.54 19.88L64 256 32.48 364.13A16 16 0 0048 384h56a16 16 0 0012.8-6.41L160 320h64l-49 171.59A16 16 0 00190.34 512h88.36a16 16 0 0013.89-8.06l74.12-129.71-25.41-20zM189.72 72l42.94 33.81L211.56 32h57.88l106.79 186.89 6.5 5.11H512c26.23 0 62.61 21.75 64 31.91-1.39 10.34-37.77 32.09-64 32.09h-48l40.64 32H512c35.34 0 96-28.66 96-64s-60.66-64-96-64H397.7L292.61 8.06C290.06 3.61 283.84 0 278.72 0h-88.38A16 16 0 00175 20.39zM637 485.32L23 1.8A7.88 7.88 0 0011.77 3l-10 12.5A7.94 7.94 0 003 26.71l614 483.52a8 8 0 0011.2-1.23l10-12.5a7.86 7.86 0 00-1.2-11.18z" />
  </svg>
);

SvgPlaneSlash.displayName = "SvgPlaneSlash";
SvgPlaneSlash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPlaneSlash;
