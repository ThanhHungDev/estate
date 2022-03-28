import * as React from "react";

const SvgTrumpet = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M400 160a16 16 0 00-16-16h-16a16 16 0 00-16 16v32h48zm-176 0a16 16 0 00-16-16h-16a16 16 0 00-16 16v32h48zm88 0a16 16 0 00-16-16h-16a16 16 0 00-16 16v32h48zm180.27 109.64c-4.61-2.43-19.86-9.86-44.27-12.45V352a32 32 0 01-32 32h-16V256h-48v128h-40V256h-48v128h-40V256H81.75C70.75 274.9 64 296.57 64 320a128 128 0 00128 128h224a96 96 0 0096-96v-70.3c-6.42-4.16-12.78-8.4-19.73-12.06zM176 381.73a63.69 63.69 0 010-123.46z"
      opacity={0.4}
    />
    <path
      d="M640 80v288c0 12-10.81 16-16 16a16.22 16.22 0 01-13-6.67 555.44 555.44 0 00-66.19-71.68c-15.38-13-32.93-25.66-52.54-36-5.55-2.93-25.75-13.6-60-13.63H48a16 16 0 01-16 16H16A16 16 0 010 256v-64a16 16 0 0116-16h16a16 16 0 0116 16h384.27c34.25 0 54.45-10.69 60-13.63 19.61-10.35 37.16-23.05 52.54-36A555.44 555.44 0 00611 70.67 16.27 16.27 0 01624 64c5.19 0 16 4 16 16z"
      className="trumpet_svg__fa-primary"
    />
  </svg>
);

SvgTrumpet.displayName = "SvgTrumpet";
SvgTrumpet.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTrumpet;
