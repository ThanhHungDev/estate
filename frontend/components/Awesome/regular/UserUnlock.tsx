import * as React from "react";

const SvgUserUnlock = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M224 0a144 144 0 10144 144A144 144 0 00224 0zm0 240a96 96 0 1196-96 96 96 0 01-96 96zm80 224H48v-25.6a86.55 86.55 0 0186.4-86.4c14.6 0 38.3 16 89.6 16 42.3 0 69.5-11.7 80-14.4V320a83.2 83.2 0 011.5-15.1c-26.2 2.9-40 15.1-81.5 15.1-47.1 0-60.8-16-89.6-16A134.43 134.43 0 000 438.4V464a48 48 0 0048 48h262.8c-7.9-18-6.8-30.7-6.8-48zm304-176H464v-79.33c0-17.44 13.67-32.18 31.1-32.66A32 32 0 01528 208a16 16 0 0016 16h17a15 15 0 0015-15c0-43.28-34-79.51-77.26-80.95A80 80 0 00416 208v80h-32a32 32 0 00-32 32v160a32 32 0 0032 32h224a32 32 0 0032-32V320a32 32 0 00-32-32zm-16 176H400V336h192zm-96-32a32 32 0 10-32-32 32 32 0 0032 32z" />
  </svg>
);

SvgUserUnlock.displayName = "SvgUserUnlock";
SvgUserUnlock.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUserUnlock;
