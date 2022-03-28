import * as React from "react";

const SvgUserLock = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M496 432a32 32 0 10-32-32 32 32 0 0032 32zm-192 32H48v-25.6a86.55 86.55 0 0186.4-86.4c14.6 0 38.3 16 89.6 16 42.3 0 69.5-11.7 80-14.4V320a83.12 83.12 0 011.5-15.1c-26.2 2.9-40 15.1-81.5 15.1-47.1 0-60.8-16-89.6-16A134.43 134.43 0 000 438.4V464a48 48 0 0048 48h262.8c-7.9-18-6.8-30.7-6.8-48zm304-176h-32v-48a80 80 0 00-160 0v48h-32a32 32 0 00-32 32v160a32 32 0 0032 32h224a32 32 0 0032-32V320a32 32 0 00-32-32zm-144-48a32 32 0 0164 0v48h-64zm128 224H400V336h192zM224 0a144 144 0 10144 144A144 144 0 00224 0zm0 240a96 96 0 1196-96 96.15 96.15 0 01-96 96z" />
  </svg>
);

SvgUserLock.displayName = "SvgUserLock";
SvgUserLock.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUserLock;
