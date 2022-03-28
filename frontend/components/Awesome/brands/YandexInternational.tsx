import * as React from "react";

const SvgYandexInternational = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 320 512" {...props}>
    <path d="M129.5 512V345.9L18.5 48h55.8l81.8 229.7L250.2 0h51.3L180.8 347.8V512h-51.3z" />
  </svg>
);

SvgYandexInternational.displayName = "SvgYandexInternational";
SvgYandexInternational.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgYandexInternational;
