function fib(num) {
    let a = 0,
        b = 1,
        f = "0 1",
        temp;

    if (typeof (num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return ""
    }
    else {
        switch (num) {

            case 1:
                return "0";

            case 2:
                return f;

            default:

                for (let i = 2; i < num; i++) {
                    f += " ";
                    temp = a + b;
                    a = b;
                    b = temp;
                    f += b;
                }
                return f;
        }

    }

}

console.log(fib(10));
