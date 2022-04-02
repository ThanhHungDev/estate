import * as React from "react";

const SvgFootballHelmet = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M480 320H355.5l-15.2-76 136.8-17.8c9-1.2 15.6-9.8 13.9-18.7C466.2 82.6 347.9-8.6 211.9 10.6 104.6 25.7 17.8 112.6 2.6 219.9-7.6 292 13.3 359 53.7 409.9c3.1 3.9 7.8 6.1 12.8 6.1H120l85.7 45c25.2 12.6 55.7 7.7 75.7-12.3 36.2-36.2 10.9-81.9 5-96.7h42.9l9.5 47.3c9.5 47.4 48 85.3 95.9 91.3 44 5.5 42.5 5.4 45.3 5.4 22.5 0 32-19.7 32-32V352c0-17.7-14.3-32-32-32zm-304 40c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm97.6-40l-10.3-25.7c-7.8-19.4 4.9-40.9 25.6-43.6l19.6-2.6 14.4 71.9h-49.3zM480 464l-41.3-5.2c-25.9-3.2-48-18.7-60.1-40.7H480V464zm0-80H368.3l-6.4-32H480v32z" />
  </svg>
);

SvgFootballHelmet.displayName = "SvgFootballHelmet";
SvgFootballHelmet.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFootballHelmet;
