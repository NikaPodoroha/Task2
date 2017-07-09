function myConcat() {
    var join = [].join ;
    var arg = join.call(arguments , arguments[0]);
    return arg;
}
myConcat(",","red","orange","blue");