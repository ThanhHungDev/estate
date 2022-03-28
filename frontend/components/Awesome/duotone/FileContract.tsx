import * as React from "react";

const SvgFileContract = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M384 128H272a16 16 0 01-16-16V0H24A23.94 23.94 0 000 23.88V488a23.94 23.94 0 0023.88 24H360a23.94 23.94 0 0024-23.88V128zM64 72a8 8 0 018-8h80a8 8 0 018 8v16a8 8 0 01-8 8H72a8 8 0 01-8-8zm0 64a8 8 0 018-8h80a8 8 0 018 8v16a8 8 0 01-8 8H72a8 8 0 01-8-8zm240 280h-47.19a43 43 0 01-38.64-23.86 11.08 11.08 0 00-10.17-6.52 10.91 10.91 0 00-10 6.19l-7.67 15.34A16 16 0 01176 416a8.77 8.77 0 01-1.14-.05 16 16 0 01-14-10.89L144 354.59l-10.61 31.88a43.17 43.17 0 01-41 29.53H80a16 16 0 010-32h12.39a11.21 11.21 0 0010.61-7.66l18.19-54.64a24 24 0 0145.55 0l13.88 41.64c19.8-16.19 54.08-9.7 66 14.16a11.39 11.39 0 0010.16 6.5H304a16 16 0 010 32z"
      opacity={0.4}
    />
    <path
      d="M377 105L279.1 7a24 24 0 00-17-7H256v112a16 16 0 0016 16h112v-6.1a23.9 23.9 0 00-7-16.9zm-73 279h-47.19a11.39 11.39 0 01-10.16-6.5c-12-23.86-46.23-30.35-66-14.16l-13.91-41.64a24 24 0 00-45.55 0L103 376.34A11.21 11.21 0 0192.39 384H80a16 16 0 000 32h12.39a43.17 43.17 0 0041-29.53L144 354.59l16.86 50.47a16 16 0 0014 10.89 8.77 8.77 0 001.14.05 16 16 0 0014.33-8.85l7.67-15.34a10.91 10.91 0 0110-6.19 11.08 11.08 0 0110.17 6.52A43 43 0 00256.81 416H304a16 16 0 000-32z"
      className="file-contract_svg__fa-primary"
    />
  </svg>
);

SvgFileContract.displayName = "SvgFileContract";
SvgFileContract.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFileContract;
