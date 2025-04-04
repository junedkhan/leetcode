/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
    const map = {};
    paths.forEach((item) => {
        const splitted = item.split(" ");
        for(let i = 1; i<splitted.length; i++) {
            const moreSplit = splitted[i].split(".")
            if(!map[moreSplit[1]]) {
                map[moreSplit[1]] = [`${splitted[0]}/${moreSplit[0]}.txt`]
            } else {
                map[moreSplit[1]].push(`${splitted[0]}/${moreSplit[0]}.txt`)
            }
        }
    })

    return Object.values(map).filter((item) => {
        return item.length > 1;
    });
};