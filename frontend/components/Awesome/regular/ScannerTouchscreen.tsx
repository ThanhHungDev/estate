import * as React from "react";

const SvgScannerTouchscreen = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M400 64H16C7.2 64 0 71.2 0 80v182.6c0 8.5 3.4 16.6 9.4 22.6L32 307.9V464c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48V307.9l22.6-22.6c6-6 9.4-14.1 9.4-22.6V80c0-8.8-7.2-16-16-16zm-32 192l-32 32v176H80V288l-32-32V112h320v144zM144 416h128c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16zM256 8c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v24h64V8zm64 0c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v24h32V8zm248-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V8c0-4.4-3.6-8-8-8zm-96 0h-16c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V8c0-4.4-3.6-8-8-8zm-64 0h-48c-4.4 0-8 3.6-8 8v24h64V8c0-4.4-3.6-8-8-8z" />
  </svg>
);

SvgScannerTouchscreen.displayName = "SvgScannerTouchscreen";
SvgScannerTouchscreen.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgScannerTouchscreen;
