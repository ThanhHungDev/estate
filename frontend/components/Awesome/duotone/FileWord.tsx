import * as React from "react";

const SvgFileWord = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M384 128H272a16 16 0 01-16-16V0H24A23.94 23.94 0 000 23.88V488a23.94 23.94 0 0023.88 24H360a23.94 23.94 0 0024-23.88V128zm-67.3 142.7l-38 168A11.9 11.9 0 01267 448h-38a12 12 0 01-11.6-9.1c-25.8-103.5-20.8-81.2-25.6-110.5h-.5c-1.1 14.3-2.4 17.4-25.6 110.5a12 12 0 01-11.6 9.1H117a12 12 0 01-11.7-9.4l-37.8-168A12 12 0 0179.2 256h24.5a12 12 0 0111.8 9.7c15.6 78 20.1 109.5 21 122.2 1.6-10.2 7.3-32.7 29.4-122.7a11.9 11.9 0 0111.7-9.1h29.1a12 12 0 0111.7 9.2c24 100.4 28.8 124 29.6 129.4-.2-11.2-2.6-17.8 21.6-129.2a11.59 11.59 0 0111.5-9.5H305a12 12 0 0112 12 11.8 11.8 0 01-.3 2.7z"
      opacity={0.4}
    />
    <path
      d="M377 105L279.1 7a24 24 0 00-17-7H256v112a16 16 0 0016 16h112v-6.1a23.9 23.9 0 00-7-16.9zm-72 151h-23.9a11.59 11.59 0 00-11.5 9.5c-24.2 111.4-21.8 118-21.6 129.2-.8-5.4-5.6-29-29.6-129.4a12 12 0 00-11.7-9.2h-29.1a11.9 11.9 0 00-11.7 9.1c-22.1 90-27.8 112.5-29.4 122.7-.9-12.7-5.4-44.2-21-122.2a12 12 0 00-11.8-9.7H79.2a12 12 0 00-11.7 14.6l37.8 168A12 12 0 00117 448h37.1a12 12 0 0011.6-9.1c23.2-93.1 24.5-96.2 25.6-110.5h.5c4.8 29.3-.2 7 25.6 110.5A12 12 0 00229 448h38a11.9 11.9 0 0011.7-9.3l38-168a11.8 11.8 0 00.3-2.7 12 12 0 00-12-12z"
      className="file-word_svg__fa-primary"
    />
  </svg>
);

SvgFileWord.displayName = "SvgFileWord";
SvgFileWord.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFileWord;
