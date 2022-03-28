import * as React from "react";

const SvgTired = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 496 512" {...props}>
    <path
      d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM118.8 248.3l33.6-40.3-33.6-40.3c-8.6-10.3 3.8-24.9 15.4-18l80 48a12 12 0 010 20.6l-80 48c-11.5 6.8-24-7.6-15.4-18zm234.7 166.8c-25.9-11.1-64.4-17.4-105.5-17.4s-79.6 6.3-105.5 17.4c-9.8 4.2-19.4-7-17.7-20.4C132.7 331.8 196.1 288 248 288s115.3 43.8 123.2 106.7c1.7 13.6-8 24.6-17.7 20.4zm8.3-148.8l-80-48a12.07 12.07 0 010-20.6l80-48c11.6-6.9 24 7.7 15.4 18L343.6 208l33.6 40.3c8.7 10.4-3.9 24.8-15.4 18z"
      opacity={0.4}
    />
    <path
      d="M214.2 197.7l-80-48c-11.6-6.9-24 7.7-15.4 18l33.6 40.3-33.6 40.3c-8.6 10.4 3.9 24.8 15.4 18l80-48a12 12 0 000-20.6zm163 50.6L343.6 208l33.6-40.3c8.6-10.3-3.8-24.9-15.4-18l-80 48a12.07 12.07 0 000 20.6l80 48c11.5 6.8 24.1-7.6 15.4-18z"
      className="tired_svg__fa-primary"
    />
  </svg>
);

SvgTired.displayName = "SvgTired";
SvgTired.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTired;
