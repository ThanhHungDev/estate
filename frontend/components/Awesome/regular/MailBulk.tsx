import * as React from "react";

const SvgMailBulk = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M112 48h288v48h48V48c0-26.51-21.49-48-48-48H112C85.49 0 64 21.49 64 48v144h48V48zm224 176H48c-26.51 0-48 21.49-48 48v192c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48V272c0-26.51-21.49-48-48-48zm0 240H48V343.96c14.49 11.01 80 58.12 80 58.12 14.44 11.2 38.62 29.92 64 29.92s49.56-18.72 64-29.92c0 0 65.5-47.1 80-58.12V464zm0-178.61c-2.37 1.85-111.81 81.94-117.09 85.55-8.5 5.83-19.1 13.06-26.91 13.06-9.41 0-22.69-10.55-31.5-17.53-3.41-2.72-110.13-82.43-112.5-84.28V272h288v13.39zM528 128H240c-26.51 0-48 21.49-48 48v16h48v-16h288v192H416v48h112c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48zm-96 80v64h64v-64h-64z" />
  </svg>
);

SvgMailBulk.displayName = "SvgMailBulk";
SvgMailBulk.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMailBulk;
