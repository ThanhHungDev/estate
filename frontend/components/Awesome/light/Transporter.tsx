import * as React from "react";

const SvgTransporter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M509.789 44.432l-29.786-12.42-12.42-29.785a3.993 3.993 0 00-7.155 0l-12.42 29.785-29.786 12.42a4 4 0 000 7.154l29.786 12.42 12.42 29.785a3.995 3.995 0 007.155 0l12.42-29.785 29.786-12.42a4 4 0 000-7.154zM95.987 111.996a4.378 4.378 0 00-2.211-3.576L63.992 96l-12.42-29.785a3.995 3.995 0 00-7.157 0L31.995 96 2.211 108.42a4 4 0 000 7.154l29.784 12.42 12.42 29.785a3.996 3.996 0 007.157 0l12.42-29.785 29.784-12.42a4.39 4.39 0 002.21-3.578zm263.023 34.541a95.381 95.381 0 00-46.74-30.178A71.275 71.275 0 00327.995 72a72.082 72.082 0 00-72.002-72h-.033a72.082 72.082 0 00-72.002 72 71.284 71.284 0 0015.735 44.375 95.365 95.365 0 00-46.695 30.164l-68.015 81.615a55.974 55.974 0 007.166 78.873 56.124 56.124 0 0067.855 2.928V416h-.01a63.999 63.999 0 00-64.001 64v16a16 16 0 0016 16h288.008a16.001 16.001 0 0016-16v-16a64 64 0 00-63.992-63.998V309.969a56.001 56.001 0 0074.995-81.848zM255.96 32l.018.002.015-.002a40 40 0 110 80l-.015-.002-.018.002a40 40 0 110-80zM384 480H127.994a32.037 32.037 0 0132-32H352a32.037 32.037 0 0132 32zm15.386-197.563a24.01 24.01 0 01-33.814-3.078l-45.585-54.699V256h.022v160h-48.012v-96h-32v96h-47.992V224.701l-45.564 54.658a23.997 23.997 0 11-36.876-30.718l68.016-81.614A64 64 0 01226.748 144h58.514a64.004 64.004 0 0149.165 23.025l68.021 81.616a23.976 23.976 0 01-3.062 33.797z" />
  </svg>
);

SvgTransporter.displayName = "SvgTransporter";
SvgTransporter.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTransporter;