import * as React from "react";

const SvgTireRugged = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M480 192h-9.4c-4.43-14.88-10.27-29.15-17.53-42.56l6.58-6.58c12.5-12.5 12.5-32.76 0-45.26L414.4 52.35c-12.5-12.5-32.76-12.5-45.26 0l-6.58 6.58c-13.41-7.27-27.68-13.1-42.56-17.53V32c0-17.67-14.33-32-32-32h-64c-17.67 0-32 14.33-32 32v9.4c-14.88 4.43-29.15 10.27-42.56 17.53l-6.58-6.58c-12.5-12.5-32.76-12.5-45.26 0L52.35 97.61c-12.5 12.5-12.5 32.76 0 45.26l6.58 6.58c-7.27 13.41-13.1 27.68-17.53 42.56H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h9.4c4.43 14.88 10.27 29.15 17.53 42.56l-6.58 6.58c-12.5 12.5-12.5 32.76 0 45.25l45.25 45.26c12.5 12.5 32.76 12.5 45.26 0l6.58-6.58c13.41 7.27 27.68 13.1 42.56 17.53v9.4c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-9.4c14.88-4.43 29.15-10.27 42.56-17.53l6.58 6.58c12.5 12.5 32.76 12.5 45.26 0l45.25-45.26c12.5-12.5 12.5-32.76 0-45.25l-6.58-6.58c7.27-13.41 13.1-27.68 17.53-42.56h9.4c17.67 0 32-14.33 32-32v-64c0-17.68-14.33-32.01-32-32.01zM256 383.98c-70.69 0-128-57.31-128-128s57.31-128 128-128 128 57.31 128 128c0 70.7-57.31 128-128 128zM256 160c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24s24-10.75 24-24c0-13.26-10.75-24-24-24zm0 144c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24s24-10.75 24-24c0-13.26-10.75-24-24-24zm72-72c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24s24-10.75 24-24c0-13.26-10.75-24-24-24zm-144 0c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24s24-10.75 24-24c0-13.26-10.75-24-24-24z" />
  </svg>
);

SvgTireRugged.displayName = "SvgTireRugged";
SvgTireRugged.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTireRugged;
