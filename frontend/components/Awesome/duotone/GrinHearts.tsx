import * as React from "react";

const SvgGrinHearts = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 496 512" {...props}>
    <path
      d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM90.4 183.6c6.7-17.6 26.7-26.7 44.9-21.9l7.1 1.9 2-7.1c5-18.1 22.8-30.9 41.5-27.9a35.38 35.38 0 0129.71 40.26 35.93 35.93 0 01-.91 4.24L195.3 243a8.59 8.59 0 01-10.5 6l-70.2-18.2a35.49 35.49 0 01-25.47-43.25 34.27 34.27 0 011.27-3.95zm301.4 155.1c-9.3 55-83.2 93.3-143.8 93.3s-134.5-38.3-143.8-93.3a16 16 0 0120.7-17.9C155.1 330.5 200 336 248 336s92.9-5.5 123.1-15.2a16.08 16.08 0 0120.7 17.9zm-10.4-108l-70.2 18.2a8.68 8.68 0 01-10.5-6L281.3 173a35.38 35.38 0 0124.54-43.59 35.93 35.93 0 014.24-.91c18.6-3 36.4 9.8 41.5 27.9l2 7.1 7.1-1.9c18.2-4.7 38.2 4.3 44.9 21.9a35.42 35.42 0 01-20.1 45.88 36.92 36.92 0 01-4.1 1.32z"
      opacity={0.4}
    />
    <path
      d="M185.9 128.6c-18.7-3-36.5 9.8-41.5 27.9l-2 7.1-7.1-1.9c-18.2-4.8-38.2 4.3-44.9 21.9a35.5 35.5 0 0020.25 45.93 36.32 36.32 0 003.95 1.27l70.2 18.2a8.59 8.59 0 0010.5-6l19.4-69.9a35.38 35.38 0 00-24.54-43.59 35.93 35.93 0 00-4.24-.91zm219.7 54.9c-6.7-17.6-26.7-26.6-44.9-21.9l-7.1 1.9-2-7.1c-5.1-18.1-22.9-30.9-41.5-27.9a35.38 35.38 0 00-29.71 40.26 35.93 35.93 0 00.91 4.24l19.4 69.9a8.68 8.68 0 0010.5 6l70.2-18.2a35.4 35.4 0 0025.52-43.08 36.92 36.92 0 00-1.32-4.1z"
      className="grin-hearts_svg__fa-primary"
    />
  </svg>
);

SvgGrinHearts.displayName = "SvgGrinHearts";
SvgGrinHearts.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGrinHearts;