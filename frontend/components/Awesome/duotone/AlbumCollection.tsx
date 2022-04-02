import * as React from "react";

const SvgAlbumCollection = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M480 160H32A32 32 0 00.13 194.9l26.19 288A32 32 0 0058.18 512h395.64a32 32 0 0031.86-29.1l26.19-288A32 32 0 00480 160zM256 472.89c-94.26 0-174.39-54.53-179.2-125.15C71.71 273.1 151.82 209.4 256 209.4s184.29 63.7 179.2 138.34c-4.81 70.63-84.93 125.15-179.2 125.15z"
      opacity={0.4}
    />
    <path
      d="M480 24a24 24 0 00-24-24H56a24 24 0 00-24 24v24h448zm-8 56H40a24 24 0 00-24 24v24h480v-24a24 24 0 00-24-24zM256 209.4c-104.18 0-184.29 63.7-179.19 138.34 4.81 70.62 84.94 125.15 179.2 125.15s174.38-54.52 179.19-125.15C440.29 273.1 360.18 209.4 256 209.4zm0 160.06c-16.36 0-29.73-9.68-29.86-21.72s13.23-22.09 29.86-22.09 30 9.93 29.87 22.09-13.51 21.72-29.87 21.72z"
      className="album-collection_svg__fa-primary"
    />
  </svg>
);

SvgAlbumCollection.displayName = "SvgAlbumCollection";
SvgAlbumCollection.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAlbumCollection;
