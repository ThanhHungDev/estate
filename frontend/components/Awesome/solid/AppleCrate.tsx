import * as React from "react";

const SvgAppleCrate = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M318.2 192h159.79c5.26-39.47-5.15-102.65-53.82-111.39-18.13-3.03-51.9 6.18-72.49 17.69-17.01-9.52-42.45-16.98-61.15-17.79 1.82 2.21 3.83 4.17 5.5 6.58 20.84 30.15 25.74 72.3 22.17 104.91zM210.53 50.47c11.29-12.19 14.43-32.03 13.22-50.22-12.88-.86-35.67-.12-50.02 13.28-16.53 16.6-13.77 46.36-13.22 50.22 18.47 1.23 37.77-1.85 50.02-13.28zm191.69 0c11.29-12.19 14.43-32.03 13.22-50.22-12.88-.86-35.67-.12-50.02 13.28-16.53 16.6-13.77 46.36-13.22 50.22 18.47 1.23 37.77-1.85 50.02-13.28zM286.3 192c5.26-39.47-5.15-102.65-53.82-111.39-18.13-3.03-51.9 6.18-72.48 17.69-20.66-11.56-54.43-20.71-72.48-17.69C38.91 89.34 28.53 152.88 33.7 192h252.6zM496 224H16c-8.84 0-16 7.16-16 16v112h512V240c0-8.84-7.16-16-16-16zM64 304c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16zm384 0c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16zM0 496c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16V384H0v112zm448-64c8.84 0 16 7.16 16 16s-7.16 16-16 16-16-7.16-16-16 7.16-16 16-16zm-384 0c8.84 0 16 7.16 16 16s-7.16 16-16 16-16-7.16-16-16 7.16-16 16-16z" />
  </svg>
);

SvgAppleCrate.displayName = "SvgAppleCrate";
SvgAppleCrate.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAppleCrate;
