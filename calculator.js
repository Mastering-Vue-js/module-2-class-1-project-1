const calculator = {
    // x: 10,
    // y: 5,

    // add: function () {
    //     return this.x+this.y;
    // },
    // addFunction() {
    //     return this.x+this.y;
    // },
    // addArrowFunction: () => {
    //     return calculator.x+calculator.y;
    // }
    add: function (x,y) {
        return x+y;
    },
    minus: function (x,y) {
        return x-y;
    },
    multiply: function (x,y) {
        return x*y;
    },
    divided: function (x,y) {
        return x/y;
    },
}

// const {x, y} = calculator;

export {calculator};