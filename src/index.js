module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !=0) {
        return false;
    }

    let expr = '';
    for (let item = 0; item < str.length; item++) {

        for (let patt = 0; patt < bracketsConfig.length; patt++) { 
            if (bracketsConfig[patt][0] === str[item]) { 
                if (expr.length && expr[expr.length - 1] === bracketsConfig[patt][0] && bracketsConfig[patt][1] === str[item]) {
                    expr = expr.slice(0, expr.length - 1);

                } else {
                    expr += str[item];
                }

            } else if (bracketsConfig[patt][1] === str[item]) {
                if (expr[expr.length - 1] === bracketsConfig[patt][0]) {
                    expr = expr.slice(0, expr.length - 1);

                } else if (expr[expr.length - 1] !== bracketsConfig[patt][0]) {
                    return false;
                }
            }
        }
    }

    if (expr.length !== 0) {
        return false;
    }

return true; // your solution
}
