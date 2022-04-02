import * as React from "react";

const SvgWaveformPath = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M628 268h-52.09l-20.44-92.48a20 20 0 00-38.94-.07L484.75 315.7l-33-234.53a20 20 0 00-39.65.45l-29.5 250-42.79-314.35a20 20 0 00-39.62 0l-42.81 314.37-29.5-250a20 20 0 00-39.66-.44l-33 234.53-31.75-140.28a20 20 0 00-38.94.05L64.09 268H12a12 12 0 00-12 12v16a12 12 0 0012 12h68a19.87 19.87 0 0019.47-15.5l4.66-19.94 36.4 160c2.22 9.69 9.78 15.44 20.25 15.44h.22a19.94 19.94 0 0018.75-17.16l26.5-189.36 29.85 252.91a20 20 0 0039.68.34L320 170.36l44.19 324.37a20 20 0 0039.69-.34l29.84-252.91 26.5 189.33A20 20 0 00479.13 448c9.93.53 18.06-5.63 20.34-15.44l36.41-160 4.65 19.92A19.88 19.88 0 00560 308h68a12 12 0 0012-12v-16a12 12 0 00-12-12z" />
  </svg>
);

SvgWaveformPath.displayName = "SvgWaveformPath";
SvgWaveformPath.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWaveformPath;
