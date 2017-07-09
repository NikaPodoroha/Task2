function Summator() {
    this.sum = function (a, b) {
        return(a + b);
    }
    this.run = function () {
        var a = +prompt('Input a' , '0');
        var b = +prompt('Input b' , '0');
        alert(this.sum(a, b));
    }
}
new Summator().run() ;