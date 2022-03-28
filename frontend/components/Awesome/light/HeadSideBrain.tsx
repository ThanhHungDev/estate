import * as React from "react";

const SvgHeadSideBrain = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M509.21 275c-20.94-47.12-48.44-151.73-73.08-186.75A207.94 207.94 0 00266.09 0H200C95.47 0 4.12 80.08.14 184.55A191.3 191.3 0 0064 334.82V504a8 8 0 008 8h16a8 8 0 008-8V320.54L85.36 311a159.67 159.67 0 01-53.25-125.23C35.35 101 110.66 32 200 32h66.08A176.08 176.08 0 01410 106.66c12.52 17.8 29.11 66.74 42.45 106.07 9.73 28.71 18.93 55.83 27.57 75.27H416v96a32 32 0 01-32 32h-96v88a8 8 0 008 8h16a8 8 0 008-8v-56h64a64 64 0 0064-64v-64h32a32 32 0 0029.21-45zM313.6 192c21.21 0 38.4-16.48 38.4-36.8s-17.19-36.8-38.4-36.8H311a38.09 38.09 0 00-35.8-25.6c-7.1 0-13.38 2.45-19.08 5.81C249.35 87.68 237.8 80 224 80s-25.34 7.68-32.11 18.61c-5.71-3.36-12-5.81-19.09-5.81a38.4 38.4 0 00-38.4 38.4A38.4 38.4 0 0096 169.6c0 16.85 11 30.74 26.11 35.92-.06.86-.51 1.6-.51 2.48a38.4 38.4 0 0038.4 38.4 37.91 37.91 0 0012.8-2.58V288H224v-44.18a37.91 37.91 0 0012.8 2.58 38.4 38.4 0 0038.4-38.4 37.84 37.84 0 00-3.73-16z" />
  </svg>
);

SvgHeadSideBrain.displayName = "SvgHeadSideBrain";
SvgHeadSideBrain.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHeadSideBrain;
