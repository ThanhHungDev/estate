import * as React from "react";

const SvgHelicopter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M304 416h272c17.67 0 32-14.33 32-32 0-123.71-100.29-224-224-224V64h184c4.42 0 8-3.58 8-8V40c0-4.42-3.58-8-8-8H136c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h216v96H128l-43.2-57.6C81.78 98.37 77.03 96 72 96H16.01C5.6 96-2.04 105.78.49 115.88L32 224l160 64 86.4 115.2A31.992 31.992 0 00304 416zm112-221.11C506.66 210.2 576 289.05 576 384H416V194.89zm-203.78 66.73l-8.33-3.33-145.54-58.21L37.33 128H64l38.4 51.2L112 192h272v192h-80l-86.4-115.2-5.38-7.18zm425.44 208.03l-11.31-11.31c-3.12-3.12-8.19-3.12-11.31 0l-7.6 7.6c-9 9-21.2 14.05-33.93 14.05H232c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h341.48c21.22 0 41.58-8.43 56.58-23.44l7.59-7.59c3.13-3.12 3.13-8.18.01-11.31z" />
  </svg>
);

SvgHelicopter.displayName = "SvgHelicopter";
SvgHelicopter.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHelicopter;
