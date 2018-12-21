export function calculateWallpapers(roomLenght, roomWidth, roomHight, wallpaperWidth, wallpaperLenght) {
    let result;
    let perimeter=(roomLenght+roomWidth)*2;
    const delta=0.1; //  рекомендация по добавлению 10 см к высоте комнаты
    roomHight=roomHight+delta;
    let countStripes=wallpaperLenght/roomHight; // колво полос
    let countCanvas=perimeter/wallpaperWidth; // колво полотнищ
    result=countCanvas/countStripes;
    result = Math.round(result);
    return result;
}