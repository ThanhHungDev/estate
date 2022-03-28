import * as React from "react";

const SvgSpellCheck = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M272 256h88a72 72 0 0030.63-137.16A72 72 0 00336 0h-64a16 16 0 00-16 16v224a16 16 0 0016 16zm16-224h48a40 40 0 010 80h-48zm0 112h72a40 40 0 010 80h-72zm-63.93 101.34l-89-234.67A16 16 0 00120 0h-16a16 16 0 00-15.09 10.67l-89 234.67A8 8 0 007.47 256h17a8 8 0 007.53-5.34L60.54 176h102.92L192 250.66a8 8 0 007.55 5.34h17a8 8 0 007.52-10.66zM72.78 144L112 41.41 151.22 144zm499.5 135L561 267.72a12 12 0 00-17 0L354.8 460.41l-99-99a12 12 0 00-17 0l-11.31 11.31a12 12 0 000 17L346.3 508.48a12 12 0 0017 0L572.28 296a12 12 0 000-17z" />
  </svg>
);

SvgSpellCheck.displayName = "SvgSpellCheck";
SvgSpellCheck.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSpellCheck;
