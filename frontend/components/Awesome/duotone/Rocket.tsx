import * as React from "react";

const SvgRocket = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M51.941 154.484l-49.41 98.813A28.125 28.125 0 000 264a24.006 24.006 0 0024 24h93.46c23.442-47.412 61.012-123.373 77.891-157.328.52-.914 1-1.768 1.524-2.672H94.82c-16.344.016-35.531 11.875-42.879 26.484zM224 394.646v93.563A24.124 24.124 0 00247.96 512a28.03 28.03 0 0010.626-2.531l98.726-49.39c14.625-7.313 26.5-26.5 26.5-42.86V315.703c.067-.04.125-.088.188-.129v-.527c-.906.52-1.746 1.002-2.664 1.525-33.961 17.008-110.063 54.68-157.336 78.074z"
      opacity={0.4}
    />
    <path
      d="M505.16 19.516a16.74 16.74 0 00-12.535-12.57C460.226 0 434.375 0 409.485 0c-89.15 0-156.677 40.615-212.509 127.818-.558.979-1.07 1.877-1.625 2.854-19.597 39.426-67.203 135.703-88.047 177.877a31.914 31.914 0 006.098 36.762l53.652 53.398a31.89 31.89 0 0036.649 5.98l14.176-7.013c46.574-23.049 128.066-63.38 163.457-81.104l2.789-1.597c87.234-56.06 127.86-123.512 127.86-212.278.077-25.09.144-50.61-6.825-83.181zM368 192a48 48 0 1148-48.002A48.022 48.022 0 01368 192z"
      className="rocket_svg__fa-primary"
    />
  </svg>
);

SvgRocket.displayName = "SvgRocket";
SvgRocket.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRocket;
