import * as React from "react";

const SvgMagnet = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M372 32c-19.9 0-36 16.1-36 36v172c0 64-40 96-79.9 96-40 0-80.1-32-80.1-96V68c0-19.9-16.1-36-36-36H36.4C16.4 32 .2 48.3.4 68.4c.3 24.5.6 58.4.7 91.6H0v32h1.1C1 218.3.7 242 0 257.3 0 408 136.2 504 256.8 504 377.5 504 512 408 512 257.3V68c0-19.9-16.1-36-36-36H372zM36.5 68H140v92H37.1c-.1-33.4-.4-67.4-.6-92zM476 258.1c-.1 30.4-6.6 59.3-19.4 85.8-11.9 24.9-29 47.2-50.8 66.3-20.6 18.1-45.2 32.9-71.2 42.9-25.5 9.8-52.4 15-77.9 15-25.5 0-52.5-5.2-78.2-15-26.2-10-51-24.9-71.8-43-22-19.2-39.2-41.5-51.3-66.3-12.9-26.5-19.4-55.3-19.6-85.6.7-15.9 1-39.7 1.1-66.1H140v48c0 49.2 18.9 79.7 34.8 96.6 10.8 11.5 23.5 20.4 37.8 26.5 13.8 5.9 28.5 8.9 43.5 8.9s29.7-3 43.5-8.9c14.3-6.1 27-15 37.7-26.5 15.8-16.9 34.7-47.4 34.7-96.6v-48h102.9c.1 26.2.4 50.1 1.1 66zM372 160V68h103.5c-.3 24.6-.6 58.6-.6 92H372z" />
  </svg>
);

SvgMagnet.displayName = "SvgMagnet";
SvgMagnet.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMagnet;
