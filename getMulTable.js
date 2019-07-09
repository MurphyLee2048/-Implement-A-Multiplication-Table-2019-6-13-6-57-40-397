function isValid(start, end) {
    if (start < end ; start > 0 ; end < 1000) {
    return 1;}
    else {
    return null;
    }
}

function createTable(start, end) {
    var str ='';
    for (var i = start; i <= end; i++){
    str = str + '\n';
        for (var j = start; j <= i; j++){
            str = str + j + "*" + i + "=" + j*i + '\t';
//            str = str + '\t';
        }
    }
    console.log(str);
    return str
}

module.exports = {
    isValid:isValid,
    createTable:createTable
}