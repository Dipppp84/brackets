function check(str, bracketsConfig) {
    const arrStr = str.split('')
    for (let k = 0; k < str.length / 2; k++)
        for (let i = 0; i < bracketsConfig.length; i++) {
            const conf = bracketsConfig[i];
            for (let j = 0; j < arrStr.length - 1; j++)
                if (arrStr[j] === conf[0] && arrStr[j + 1] === conf[1]) {
                    arrStr.splice(j, 2)
                    break
                }
        }
    return arrStr.length === 0
}
module.exports = check
