import * as React from "react";

const SvgLungsVirus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M328 0h-16a16 16 0 00-16 16v134.68a46.45 46.45 0 0148 0V16a16 16 0 00-16-16zM186 96c-44 0-58 28.5-80.12 63.13a819.52 819.52 0 00-102 231A113.16 113.16 0 000 419.75C0 481 62.5 525.26 125.25 508.38l59.5-15.87a98.51 98.51 0 0052.5-34.75 47.9 47.9 0 01-41.71-81.18l8.58-8.58H192a48 48 0 010-96h12.12l-8.58-8.57a48 48 0 0160.46-74v-27.68C256 125.38 224.63 96 186 96zm450.13 294.13a819.8 819.8 0 00-102-231C512 124.5 498 96 454 96c-38.62 0-70 29.38-70 65.75v27.72a48 48 0 0160.46 74l-8.58 8.53H448a48 48 0 010 96h-12.12l8.58 8.58a47.7 47.7 0 01-41.71 81.18 98.51 98.51 0 0052.5 34.75l59.5 15.87C577.5 525.26 640 481 640 419.75a113.57 113.57 0 00-3.87-29.62z"
      opacity={0.4}
    />
    <path
      d="M448 304h-12.12c-28.51 0-42.79-34.47-22.63-54.62l8.58-8.58a16 16 0 00-22.63-22.63l-8.57 8.58c-20.16 20.16-54.63 5.88-54.63-22.63V192a16 16 0 00-32 0v12.12c0 28.51-34.47 42.79-54.63 22.63l-8.57-8.58a16 16 0 00-22.63 22.63l8.58 8.58c20.16 20.15 5.88 54.62-22.63 54.62H192a16 16 0 000 32h12.12c28.51 0 42.79 34.47 22.63 54.63l-8.58 8.58a16 16 0 1022.63 22.62l8.57-8.57c20.16-20.16 54.63-5.88 54.63 22.62V448a16 16 0 0032 0v-12.12c0-28.5 34.47-42.78 54.63-22.62l8.57 8.57a16 16 0 1022.63-22.62l-8.58-8.58c-20.16-20.16-5.88-54.63 22.63-54.63H448a16 16 0 000-32zm-160 0a16 16 0 1116-16 16 16 0 01-16 16zm64 64a16 16 0 1116-16 16 16 0 01-16 16z"
      className="lungs-virus_svg__fa-primary"
    />
  </svg>
);

SvgLungsVirus.displayName = "SvgLungsVirus";
SvgLungsVirus.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLungsVirus;
