import * as React from "react";

const SvgDrone = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M302.87 128c6.68 0 12.75-2.57 18.11-6.35a78.85 78.85 0 01-1-9.65 80 80 0 1180 80 78.65 78.65 0 01-9.65-1c-3.79 5.36-6.35 11.43-6.35 18.11v13.26A111.75 111.75 0 10288 112a111 111 0 001.61 16zm67.88 35.88l21.45-21.45c2.56.66 5 1.57 7.8 1.57a32 32 0 10-32-32c0 2.77.91 5.24 1.57 7.8l-21.45 21.45A64 64 0 01302.87 160h-93.74a64 64 0 01-45.25-18.75l-21.45-21.45c.66-2.56 1.57-5 1.57-7.8a32 32 0 10-32 32c2.77 0 5.24-.91 7.8-1.57l21.45 21.45A64 64 0 01160 209.13v93.74a64 64 0 01-18.75 45.25l-21.45 21.45c-2.56-.66-5-1.57-7.8-1.57a32 32 0 1032 32c0-2.77-.91-5.24-1.57-7.8l21.45-21.46A64 64 0 01209.13 352h93.74a64 64 0 0145.25 18.74l21.45 21.46c-.66 2.56-1.57 5-1.57 7.8a32 32 0 1032-32c-2.77 0-5.24.91-7.8 1.57l-21.45-21.45A64 64 0 01352 302.87v-93.74a64 64 0 0118.75-45.25zM320 320H192V192h128zm-208-96a111 111 0 0016-1.61v-13.26c0-6.68-2.57-12.75-6.35-18.11a78.65 78.65 0 01-9.65 1 80 80 0 1180-80 78.85 78.85 0 01-1 9.65c5.36 3.78 11.43 6.35 18.11 6.35h13.26A111 111 0 00224 112a112 112 0 10-112 112zm97.13 160c-6.68 0-12.75 2.56-18.11 6.34a79 79 0 011 9.66 80 80 0 11-80-80 78.85 78.85 0 019.65 1c3.79-5.35 6.35-11.43 6.35-18.11v-13.28A111 111 0 00112 288a115.6 115.6 0 10110.39 96zM400 288a111 111 0 00-16 1.61v13.26c0 6.68 2.57 12.75 6.35 18.11a78.85 78.85 0 019.65-1 80 80 0 11-80 80 78.65 78.65 0 011-9.65c-5.36-3.78-11.43-6.35-18.11-6.35h-13.28A111.75 111.75 0 10400 288z" />
  </svg>
);

SvgDrone.displayName = "SvgDrone";
SvgDrone.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDrone;
