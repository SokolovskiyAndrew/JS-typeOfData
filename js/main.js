window.onload = function () {
    task_1.onclick = function () {
        let age = prompt('How old are you?');
        title = 'Elderly';
        if (age >= 0 && age < 12) {
            title = 'Child';
        } else if (age >= 12 && age < 18) {
            title = 'Teenager';
        } else if (age >= 18 && age < 60) {
            title = 'Mature';
        }

        alert(title);
    }
    //Task 2

    /*let figure = +prompt("Put down random figure from 0 to 10");
    let special = '';

    switch (figure) {
        case "1":
            special = '!';
            break;
        case "2":
            special = '@';
            break;
        case "3":
            special = '#';
            break;
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 0:
            special = 'others';
            break;
        default
        special = 'underfined';
        break;
    }

    alert

    //не дописана таска*/

    task_3.onclick = function () {

        let enterNumber = prompt("Введіть трьохзначне число");
        let fixingNumber = 0;
        if (enterNumber > 0) {
            fixingNumber = enterNumber;
        } else {
            fixingNumber = enterNumber * (-1);
        }
        let firstNumber = fixingNumber % 10;
        let twoNumbers = (fixingNumber - firstNumber) / 10;
        let secondNumber = twoNumbers % 10;
        let thirdNumber = (twoNumbers - secondNumber) / 10;

        if (firstNumber === secondNumber || firstNumber === thirdNumber || secondNumber === thirdNumber) {
            alert("Similarities");
        } else {

            alert("There si no similarities");
        };
    };

    task_4.onclick = function () {

        let enterNumber = +prompt("Put down year");
        if ((enterNumber % 400 === 0 || enterNumber % 4 === 0) && enterNumber % 100 !== 0) {
            alert("Високосний рік");
        } else {
            alert("Звичайний");
        }
    };

    task_5.onclick = function () {
        let enterNumber = prompt("Введіть 5значне  число");
        let fixingNumber = 0;
        if (enterNumber > 0) {
            fixingNumber = enterNumber;
        } else {
            fixingNumber = enterNumber * (-1);
        }
        let firstNumber = fixingNumber % 10;
        let twoNumbers = (fixingNumber - firstNumber) / 10
        let secondNumber = twoNumbers % 10;
        let thirdNumber = (twoNumbers - secondNumber) / 10;
        let fourthNumber = thirdNumber % 10;
        let sum = (thirdNumber - fourthNumber) / 10;
        let fifthNumber = sum % 10;
        let last = (sum - fifthNumber) / 10;
        let finale = "" + firstNumber + secondNumber + fourthNumber + fifthNumber + last;
        if (enterNumber === finale) {
            alert("Congratulations");
        }
    };


    task_6.onclick = function () {
        let whatAmount = prompt("What amount of money do you want to exchange?");
        let whatCurrency = prompt("Available currency: EUR, UAH, AZN");
        switch (whatCurrency) {
            case 'EUR':
                alert(whatAmount * 0.88);
                break;
            case 'UAH':
                alert(whatAmount * 23.32);
                break;
            case 'AZN':
                alert(whatAmount * 1.7);
                break;
            default:
                alert("Please, choose available type of currency!");
                break;
        }
    };

    task_7.onclick = function () {
        let amount = +prompt("What amount are you going to spend?");
        if (amount >= 200 && amount <= 300) {
            let threePercent = amount - amount * 0.03;
            alert("Your final price with 3% discount will be" + " " + threePercent + "!");
        } else if (amount >= 301 && amount <= 500) {
            let fivePercent = amount - amount * 0.05;
            alert("Your final price with 5% discount will be" + " " + fivePercent + "!");
        } else if (amount > 500) {
            let sevenPercent = amount - amount * 0.07;
            alert("Your final price with 7% discount wil be" + " " + sevenPercent + "!");
        } else {
            alert("Please, put down at least 200 figure!");
        }
    };

    /*task_8.onclick = function () {
        let circleLenght = prompt("Put down lenght of circle");
        let squarePerimetr = prompt("Put down perimetr of square");

        if (circleLenght < squarePerimetr) {
            alert("Great");
        } else if (circleLenght >= squarePerimetr) {
            alert("Dimensions of sircle should be less than dimensions of square")
        } else {
            alert("You committed a mistake!")
        }
    };*/

    task_8.onclick = function () {
        let circleRadius = prompt("Put down radius of circle");
        let squareSide = prompt("Put down one of sides of square");

        let circleLenght = 2 * Math.PI * circleRadius;
        let squarePerimetr = 4 * squareSide;

        if (circleLenght < squarePerimetr) {
            alert("Great. That's enough room for the circle");
        } else if (circleLenght >= squarePerimetr) {
            alert("Dimensions of sircle should be less than dimensions of square")
        } else {
            alert("You committed a mistake!");
        }
    };

    task_9.onclick = function () {
        let firstQuestion = prompt("Which football club won UEFA Champions League in 2005? Answers: Milan, Liverpool, Barcelona");
        const firstRightAnswer = "Liverpool";
        if (firstQuestion === firstRightAnswer) {
            alert("You're totally right! Here your 2 points!");
        } else {
            alert("Incorrect! Next time try harder!");
        }

        let secondQuestion = prompt("Fill the gap. She decided to _ opportunity! Answers: do, make, seize");
        const secondRightAnswer = "seize";

        if (secondQuestion === secondRightAnswer) {
            alert("You're totally right! Here your another 2 points!");
        } else {
            alert("Incorrect! Next time try harder!");
        }

        let thirdQuestion = +prompt("When programming language JavaScript was invented? Answers: 1998, 2000, 1995");
        const thirdRightAnswer = 1995;

        if (thirdQuestion === thirdRightAnswer) {
            alert("You're totally right! Here your 2 points!");
        } else {
            alert("Incorrect! What's wrong with you?");
        }

        if (firstQuestion === firstRightAnswer && secondQuestion === secondRightAnswer && thirdQuestion === thirdRightAnswer) {
            alert("Maaaann! You're on fire! Great work! You've got maximum 6 points");
        } else if ((firstQuestion === firstRightAnswer && secondQuestion === secondRightAnswer) || (firstQuestion === firstRightAnswer && thirdQuestion === thirdRightAnswer) || (thirdQuestion === thirdRightAnswer && secondQuestion === secondRightAnswer)) {
            alert("Not bad! But next time be more careful! You've got 4 points");
        } else if (firstQuestion === firstRightAnswer || secondQuestion === secondRightAnswer || thirdQuestion === thirdRightAnswer) {
            alert("It's a pity! Only 2 points, mate");
        } else {
            alert("You should try again! Snap out of it! You've got 0 points");
        }
    };
    task_10.onclick = function () {
        /*let tomorrow = new Date(+prompt("Please, enter day, month, year considering format 00.00.0000"));
        tomorrow.setDate(tomorrow.getDate() + 1);
        let nextday = new Date(tomorrow.getDate() + '.' + (tomorrow.getMonth() + 1) + '.' + tomorrow.getFullYear());
        alert(nextday);*/
        var day = +prompt("Please, ented a random day of month");
        var month = +prompt("Please, ented a random month");
        var year = +prompt("Please, ented a random year");
        var nextday = (day.getDate() + '.' + (month.getMonth() + 1) + '.' + year.getFullYear());
        alert(nextday);
    };
    part_2_task_1.onclick = function () {
        let firstFigure = +prompt("Please, enter the first figure!");
        let secondFigure = +prompt("Please, enter the second figure!");

        let summary = firstFigure + secondFigure;
        alert("Summary of your two figures is" + " " + summary);
    };
    part_2_task_2a.onclick = function () {
        let firstRandomNumber = Math.floor(Math.random() * (1, 7));
        let secondRandomNumber = Math.floor(Math.random() * (1, 7));
        alert("First random numder is" + " " +
            firstRandomNumber + " " + "and the second is" + " " + secondRandomNumber);
    };

    part_2_task_2b.onclick = function () {

    };
    part_2_task_2c.onclick = function () {
        let firstRandomNumber = Math.floor(Math.random() * (1, (+prompt("Enter figure!"))));
        alert(firstRandomNumber);
    };
    part_2_task_2d.onclick = function () {
        let firstRandomNumber = Math.floor(Math.random() * (+prompt("Enter figure!"), (+prompt("Enter figure!"))));
        alert(firstRandomNumber);
    };
    part_2_task_7.onclick = function () {
        let question = prompt("What's official name of JavaScript?");
        if (question == "ECMAScript") {
            alert("You're right!");
        } else {
            alert("Wrong! ECMAScript");
        }
    };
    part_2_task_8.onclick = function () {
        let a = 2;
        let b = 5;
        let summary = (a + b < 4) ? "Too little" : "Too much";
        alert(summary);
    };

};