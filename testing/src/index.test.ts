// touch ./src/index.test.ts
import { findFirstOdd } from "./index"

describe("Find", () => {
    it('findFirstOdd', () => {
        expect(findFirstOdd([ 0 , 2, 4, 3 ])).toBe(3)
    })
});
