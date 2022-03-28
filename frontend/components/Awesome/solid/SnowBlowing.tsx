import * as React from "react";

const SvgSnowBlowing = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M540.2 320H361.7c-6.3 0-12.5 1.9-17.8 5.4l-44 29.3c-13.2 8.8-7 29.3 8.9 29.3h233.3c15.9 0 30.8 10.9 33.4 26.6 3.3 20-12.1 37.4-31.6 37.4-14.1 0-26.1-9.2-30.4-21.9-2.1-6.3-8.6-10.1-15.2-10.1h-32.8c-10 0-17.7 9.3-15.7 19.1 8.9 43.8 47.7 76.9 94.1 76.9 59.2 0 106-53.8 94.1-115.1-8.7-45.6-51.4-76.9-97.8-76.9zM400 288h144c59.7 0 106.8-54.8 93.8-116.7-7.6-36.2-36.9-65.5-73.1-73.1-55.4-11.6-105.1 24.9-114.9 75.5-1.9 9.6 6.1 18.3 15.8 18.3h32.8c6.7 0 13.1-3.8 15.2-10.1 4.2-12.7 16.3-21.9 30.4-21.9 19.4 0 34.9 17.4 31.6 37.4-2.6 15.7-17.4 26.6-33.4 26.6H400c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16zm-99.5 21.2l-5.5-20.4 26.6 15.3c5.8 3.4 13.2 1.4 16.6-4.4l12.1-21c3.4-5.8 1.4-13.2-4.4-16.6l-26.6-15.3 20.4-5.5c6.5-1.7 10.3-8.4 8.6-14.9l-3.1-11.7c-1.7-6.5-8.4-10.3-14.9-8.6L274.7 221l-50.2-29 50.2-29 55.6 14.9c6.5 1.7 13.1-2.1 14.9-8.6l3.1-11.7c1.7-6.5-2.1-13.1-8.6-14.9l-20.4-5.5 26.6-15.3c5.8-3.4 7.8-10.8 4.4-16.6l-12.1-21c-3.4-5.8-10.8-7.8-16.6-4.4L295 95.2l5.5-20.4c1.7-6.5-2.1-13.1-8.6-14.9l-11.7-3.1c-6.5-1.7-13.1 2.1-14.9 8.6L250.4 121 200 150.1V93.2L240.2 53c4.7-4.7 4.7-12.3 0-17l-8.5-8.5c-4.7-4.7-12.3-4.7-17 0L200 42.3V12c0-6.6-5.4-12-12-12h-24c-6.6 0-12 5.4-12 12v30.3l-14.8-14.8c-4.7-4.7-12.3-4.7-17 0l-8.5 8.5c-4.7 4.7-4.7 12.3 0 17L152 93.2v56.9L101.6 121l-15-55.7c-1.7-6.5-8.4-10.3-14.9-8.6L60 59.9c-6.5 1.7-10.3 8.4-8.6 14.9l5.5 20.4-26.5-15.3c-5.8-3.4-13.2-1.4-16.6 4.4l-12.1 21c-3.4 5.8-1.4 13.2 4.4 16.6l26.6 15.3-20.4 5.5c-6.5 1.7-10.3 8.4-8.6 14.9l3.1 11.7c1.7 6.5 8.4 10.3 14.9 8.6L77.3 163l50.2 29-50.2 29-55.7-15c-6.5-1.7-13.1 2.1-14.9 8.6l-3.1 11.7c-1.7 6.5 2.1 13.1 8.6 14.9l20.4 5.5-26.5 15.4c-5.8 3.4-7.8 10.8-4.4 16.6l12.1 21c3.4 5.8 10.8 7.8 16.6 4.4L57 288.8l-5.5 20.4c-1.7 6.5 2.1 13.1 8.6 14.9l11.7 3.1c6.5 1.7 13.1-2.1 14.9-8.6l14.9-55.6 50.4-29.1v56.9L111.8 331c-4.7 4.7-4.7 12.3 0 17l8.5 8.5c4.7 4.7 12.3 4.7 17 0l14.8-14.8V372c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12v-30.3l14.8 14.8c4.7 4.7 12.3 4.7 17 0l8.5-8.5c4.7-4.7 4.7-12.3 0-17L200 290.8v-56.9l50.4 29.1 14.9 55.6c1.7 6.5 8.4 10.3 14.9 8.6l11.7-3.1c6.5-1.7 10.4-8.4 8.6-14.9z" />
  </svg>
);

SvgSnowBlowing.displayName = "SvgSnowBlowing";
SvgSnowBlowing.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSnowBlowing;
