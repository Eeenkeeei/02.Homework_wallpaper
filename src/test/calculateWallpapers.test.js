import {calculateWallpapers} from "../js/calculateWallpapers";

test ('it should return count', () => {
    const result=calculateWallpapers(5, 6, 2.75, 1.06, 10)
    expect(result).toBe(6);
})