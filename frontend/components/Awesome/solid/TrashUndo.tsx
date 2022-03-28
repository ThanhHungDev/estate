import * as React from "react";

const SvgTrashUndo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M53.2 467a48 48 0 0047.9 45h245.8a48 48 0 0047.9-45L416 128H32zm47.18-189.47l84-81.59c8.84-8.59 23.61-2.24 23.61 10.47v41.67c82.47.8 144 18.36 144 103.92 0 34.29-20.14 68.26-42.41 86-6.95 5.54-16.85-1.41-14.29-10.4 23.08-80.93-6.55-101.74-87.3-102.72v44.69c0 12.69-14.76 19.07-23.61 10.47l-84-81.59a14.7 14.7 0 010-20.92zM432 32H312l-9.4-18.7A24 24 0 00281.1 0H166.8a23.72 23.72 0 00-21.4 13.3L136 32H16A16 16 0 000 48v32a16 16 0 0016 16h416a16 16 0 0016-16V48a16 16 0 00-16-16z" />
  </svg>
);

SvgTrashUndo.displayName = "SvgTrashUndo";
SvgTrashUndo.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTrashUndo;
