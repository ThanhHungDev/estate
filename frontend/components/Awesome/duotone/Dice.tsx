import * as React from "react";

const SvgDice = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M433.63 189.3L258.7 14.37a49.07 49.07 0 00-69.39 0L14.37 189.3a49.07 49.07 0 000 69.39L189.3 433.63a49.07 49.07 0 0069.39 0L433.63 258.7a49.08 49.08 0 000-69.4zM96 248a24 24 0 1124-24 24 24 0 01-24 24zm128 128a24 24 0 1124-24 24 24 0 01-24 24zm0-128a24 24 0 1124-24 24 24 0 01-24 24zm0-128a24 24 0 1124-24 24 24 0 01-24 24zm128 128a24 24 0 1124-24 24 24 0 01-24 24z"
      opacity={0.4}
    />
    <path
      d="M592 192H473.26a81.07 81.07 0 01-17 89.32L320 417.58V464a48 48 0 0048 48h224a48 48 0 0048-48V240a48 48 0 00-48-48zM480 376a24 24 0 1124-24 24 24 0 01-24 24zM96 200a24 24 0 1024 24 24 24 0 00-24-24zm256 48a24 24 0 10-24-24 24 24 0 0024 24zm-128 80a24 24 0 1024 24 24 24 0 00-24-24zm0-256a24 24 0 1024 24 24 24 0 00-24-24zm0 128a24 24 0 1024 24 24 24 0 00-24-24z"
      className="dice_svg__fa-primary"
    />
  </svg>
);

SvgDice.displayName = "SvgDice";
SvgDice.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDice;
