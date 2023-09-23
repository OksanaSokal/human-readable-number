module.exports = function toReadable(number) {
    const units = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];

    const ten = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const dozen = [
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const hundreds = [
        "one hundred",
        "two hundred",
        "three hundred",
        "four hundred",
        "five hundred",
        "six hundred",
        "seven hundred",
        "eight hundred",
        "nine hundred",
    ];

    let result = "";
    const arr = number.toString().split("");
    // до 10
    if (arr.length == 1) {
        units.forEach((element, index) => {
            if (index == number) {
                result = `${result}${element}`;
            }
        });
    }

    if (arr.length == 2) {
        if (number == 10) {
            result = "ten";
            // от 11 до 19
        } else if (number > 10 && number < 20) {
            ten.forEach((elem, index) => {
                if (index == arr[1]) {
                    result = elem;
                }
            });
            // от 20 до 100
        } else if (arr[1] == 0) {
            dozen.forEach((element, index) => {
                if (index + 1 == arr[0]) {
                    result = `${result}${element}`;
                }
            });
        } else {
            dozen.forEach((element, index) => {
                if (index + 1 == arr[0]) {
                    result = `${result}${element} `;
                }
            });
            units.forEach((element, index) => {
                if (index == arr[1]) {
                    result = `${result}${element}`;
                }
            });
        }
    }

    // для сотен
    if (arr.length == 3) {
        hundreds.forEach((element, index) => {
            if (index + 1 == arr[0]) {
                result = `${result}${element}`;
            }
        });

        if (arr[1] == 1) {
            if (arr[2] == 0) {
                return (result = `${result} ${ten[0]}`);
            } else {
                ten.forEach((element, index) => {
                    if (index == arr[2]) {
                        return (result = `${result} ${element}`);
                    }
                });
            }
        }

        if (arr[1] == 1) {
            return result;
        }

        if (arr[1] == 0 && arr[2] != 0) {
            units.forEach((element, index) => {
                if (index == arr[2]) {
                    result = `${result} ${element}`;
                }
            });
        }
        if (arr[2] == 0) {
            dozen.forEach((element, index) => {
                if (index + 1 == arr[1]) {
                    return (result = `${result} ${element}`);
                }
            });
        }

        if (arr[1] != 0 && arr[2] != 0) {
            dozen.forEach((element, index) => {
                if (index + 1 == arr[1]) {
                    result = `${result} ${element}`;
                }
            });
            units.forEach((element, index) => {
                if (index == arr[2]) {
                    result = `${result} ${element}`;
                }
            });
        }

        if (arr[1] == 0 && arr[2] == 0) {
            hundreds.forEach((element, index) => {
                if (index + 1 == arr[0]) {
                    result = `${result}`;
                }
            });
        }
    }

    return result;
};
