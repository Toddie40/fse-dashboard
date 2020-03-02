/**
 * @param {Number} num - The number to clip
 * @param {Number} min - The lower bound
 * @param {Number} max - The upper bound
 */
export default function clip(num,  min, max) {
    if (num < min) {
        return min;
    }
    else if(num > max){
        return max;
    }
    else{
        return num
    }
}