import * as React from "react";

const SvgCoffeePot = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M431.45 177.65L480 32H88a88 88 0 00-88 88v88a16 16 0 0016 16h32a16 16 0 0016-16v-72a40 40 0 0140-40h13.33l27.39 82.16C95.41 217.9 64 277.69 64 344.62c0 51.47 18.62 84.77 49.64 117.71A57.18 57.18 0 00155.17 480h265.67a57.08 57.08 0 0041.45-17.6c31-32.95 49.69-66.24 49.71-117.72 0-66.31-30.63-126.85-80.55-167.03zM445.91 320h-315.3c6.71-39.06 28.92-72.85 60.5-96h195.8c30.98 23.2 52.58 57.22 59 96z" />
  </svg>
);

SvgCoffeePot.displayName = "SvgCoffeePot";
SvgCoffeePot.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCoffeePot;
