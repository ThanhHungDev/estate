import * as React from "react";

const SvgCoffeePot = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M424.06 171.86l-271.86.63C98.63 212.07 64 274.39 64 344.62c0 51.47 18.62 84.77 49.64 117.71A57.17 57.17 0 00155.16 480h265.68a57.08 57.08 0 0041.45-17.6c31-32.95 49.69-66.24 49.71-117.72 0-69.55-33.59-132.86-87.94-172.82zm-6 244.14H158c-22.34-24.35-30-42.72-30-71.38 0-41.12 17-79.62 47.3-108.18l225.81-.53A148.57 148.57 0 01448 344.66c0 28.64-7.63 47.01-29.95 71.34z"
      opacity={0.4}
    />
    <path
      d="M130.55 320a146 146 0 00-2.55 24.62c0 28.66 7.62 47 30 71.38h260.05c22.32-24.33 29.95-42.7 29.95-71.34a150.45 150.45 0 00-2.5-24.66zm293.51-148.14L480 32H88a88 88 0 00-88 88v88a16 16 0 0016 16h32a16 16 0 0016-16v-72a40 40 0 0140-40h17.6l30.6 76.49z"
      className="coffee-pot_svg__fa-primary"
    />
  </svg>
);

SvgCoffeePot.displayName = "SvgCoffeePot";
SvgCoffeePot.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCoffeePot;
