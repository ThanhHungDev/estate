import * as React from "react";

const SvgStars = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M415.998 80.002a7.297 7.297 0 00-3.687-5.962l-49.642-20.702-20.704-49.641a6.657 6.657 0 00-11.926 0l-20.703 49.641L259.69 74.04a6.664 6.664 0 000 11.925l49.646 20.7 20.703 49.642a6.657 6.657 0 0011.926 0l20.704-49.643 49.642-20.7a7.316 7.316 0 003.687-5.962zm93.057 139.227l-39.716-16.558-16.559-39.71a5.325 5.325 0 00-9.54 0l-16.562 39.71-39.712 16.558a5.335 5.335 0 000 9.54l39.712 16.56 16.563 39.707a5.324 5.324 0 009.54 0l16.558-39.708 39.716-16.56a5.335 5.335 0 000-9.54z"
      opacity={0.4}
    />
    <path
      d="M364.294 267.293l-104.799-15.295-46.907-95.197c-8.39-16.998-32.688-17.202-41.188 0l-46.908 95.197-104.798 15.295c-18.798 2.703-26.407 25.905-12.704 39.2l75.908 73.995-18 104.587c-3.204 18.905 16.687 33.107 33.297 24.201l93.799-49.387 93.798 49.387a22.954 22.954 0 0033.298-24.201l-17.891-104.587 75.892-73.994c13.61-13.296 6-36.498-12.797-39.2z"
      className="stars_svg__fa-primary"
    />
  </svg>
);

SvgStars.displayName = "SvgStars";
SvgStars.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgStars;
