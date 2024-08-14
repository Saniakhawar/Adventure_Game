import inquirer from "inquirer";
import chalk from "chalk";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        this.fuel -= 25; // Decrease player's fuel by 25
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        this.fuel -= 25; // Decrease opponent's fuel by 25
    }
}
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Please enter your name"
    }
]);
let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "Select your Opponent",
        choices: [
            "Skeleton",
            "Alien",
            "Zombie"
        ]
    }
]);
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    if (opponent.select == "Skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "Select your Opponent ",
                choices: ["Attack", "Drink Portion", "Run for your life"]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
            }
            if (p1.fuel <= 0) {
                console.log(chalk.red.bold.italic("Ooh, You loose. Better luck next time"));
                process.exit();
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
            }
            if (o1.fuel <= 0) {
                console.log(chalk.green.bold.italic("You Win!"));
                process.exit();
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.green.bold.italic(`You drink a health portion, and your fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run for your life") {
            console.log(chalk.red.bold.italic("Ooh, You lose. Better luck next time"));
            process.exit();
        }
    }
    // Alien
    if (opponent.select == "Alien") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "Select your Opponent ",
                choices: ["Attack", "Drink Portion", "Run for your life"]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
            }
            if (p1.fuel <= 0) {
                console.log(chalk.red.bold.italic("Ooh, You loose. Better luck next time"));
                process.exit();
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
            }
            if (o1.fuel <= 0) {
                console.log(chalk.green.bold.italic("You Win!"));
                process.exit();
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.green.bold.italic(`You drink a health portion, and your fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run for your life") {
            console.log(chalk.red.bold.italic("Ooh, You lose. Better luck next time"));
            process.exit();
        }
    }
    // Zombie
    if (opponent.select == "Zombie") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "Select your Opponent ",
                choices: ["Attack", "Drink Portion", "Run for your life"]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
            }
            if (p1.fuel <= 0) {
                console.log(chalk.red.bold.italic("Ooh, You loose. Better luck next time"));
                process.exit();
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
            }
            if (o1.fuel <= 0) {
                console.log(chalk.green.bold.italic("You Win!"));
                process.exit();
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.green.bold.italic(`You drink a health portion, and your fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run for your life") {
            console.log(chalk.red.bold.italic("Ooh, You lose. Better luck next time"));
            process.exit();
        }
    }
} while (true);
