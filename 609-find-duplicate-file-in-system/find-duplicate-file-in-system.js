/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
    let m = new Map();
    for (const p of paths) {
        let pa = p.split(" ");
        for (let i = 1; i < pa.length; i++) {
            let start = pa[i].indexOf('(');
            let fileName = pa[i].slice(0, start);
            let content = pa[i].slice(start + 1, -1);
            if (!m.has(content)) m.set(content, []);
            m.get(content).push(pa[0] + '/' + fileName);
        }
    }
    return Array.from(m.values()).filter(x => x.length > 1);
};