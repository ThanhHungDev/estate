import * as React from "react";

const SvgClub = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M256 48c60.3 0 101.3 60.9 79.6 116.5L321 201.9c-1.6 4 1.4 8.2 5.6 8.2.3 0 .5 0 .8-.1l39.8-5.3c3.9-.5 7.7-.8 11.5-.8 46.8 0 85.5 38.2 85.3 85.8-.2 47.3-39.4 85.1-86.6 85.1h-.8c-38.1-.3-48.9-6-78.4-36.2-1.2-1.3-2.7-1.8-4.2-1.8-3.1 0-6 2.4-6 6V360c0 37.7-2.3 48.8 24.7 82.9 6.8 8.5.7 21.1-10.2 21.1h-93.1c-10.9 0-16.9-12.6-10.2-21.1 27-34 24.7-45.2 24.7-82.9v-17.1c0-3.6-3-6-6-6-1.5 0-3 .6-4.2 1.8-29.2 29.9-40.1 35.8-78.3 36.2h-.8c-47.2 0-86.5-37.9-86.6-85.2-.1-47.5 38.6-85.6 85.3-85.6 3.8 0 7.6.2 11.5.8l39.8 5.3c.3 0 .5.1.8.1 4.1 0 7.1-4.2 5.6-8.2l-14.6-37.4C154.6 108.8 195.8 48 256 48m0-48c-22.4 0-44.5 5.6-63.9 16.2-18.3 10-34.3 24.6-46.2 42-11.9 17.4-19.6 37.6-22.3 58.4-1.7 13.2-1.4 26.6.9 39.7-14.8 1-29.3 4.4-43.1 10.3-15.9 6.8-30.2 16.4-42.4 28.7-25.2 25.3-39.1 58.8-39 94.5.2 73.4 60.5 133.1 134.6 133.1h1.2c6.9-.1 13.5-.3 19.9-.8-3.9 7.2-6.3 15.2-7.1 23.5-1 11 1 22.1 5.9 32 4.8 10 12.2 18.4 21.4 24.5 9.9 6.5 21.5 10 33.5 10h93.1c12 0 23.6-3.5 33.5-10 9.2-6.1 16.6-14.5 21.4-24.5 4.8-10 6.8-21 5.9-32-.7-8.3-3.2-16.2-7.1-23.5 6.4.5 13 .8 20 .8h1.2c73.9 0 134.3-59.6 134.6-132.9.1-35.7-13.7-69.3-38.9-94.6-12.3-12.3-26.5-22-42.5-28.7-13.8-5.9-28.3-9.3-43.1-10.3 2.3-13.1 2.6-26.5.9-39.7-2.7-20.8-10.4-41-22.3-58.4s-27.9-31.9-46.2-41.9C300.5 5.6 278.4 0 256 0z" />
  </svg>
);

SvgClub.displayName = "SvgClub";
SvgClub.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgClub;