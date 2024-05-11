#!/usr/bin/env
import inquirer from "inquirer";
class Player {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
    }
    healthDecrease() {
        let health = this.health - 25;
        this.health = health;
    }
    healthIncrease() {
        this.health = 100;
    }
}
class Opponent {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
    }
    healthDecrease() {
        let health = this.health - 25;
        this.health = health;
    }
}
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "What is your name:"
    }
]);
let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "Select your Opponent?",
        choices: [
            "Vampire",
            "Werewolf",
            "Zombie",
        ]
    }
]);
let p = new Player(player.name);
let opp = new Opponent(opponent.select);
do {
    //* Vampire
    if (opponent.select == "Vampire") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What do you want to do?",
                choices: [
                    "Attack",
                    "Heal",
                    "Escape"
                ]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p.healthDecrease();
                console.log(`${p.name} health is ${p.health}`);
                console.log(`${opp.name} health is ${opp.health}`);
                if (p.health <= 0) {
                    console.log("You LOST!!!, Better Luck Next Time!");
                    process.exit();
                }
            }
            if (num <= 0) {
                opp.healthDecrease();
                console.log(`${p.name} health is ${p.health}`);
                console.log(`${opp.name} health is ${opp.health}`);
                if (opp.health <= 0) {
                    console.log("You WIN. Congratulations!!!!");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Heal") {
            p.healthIncrease();
            console.log(`${p.name} health is ${p.health}`);
        }
        if (ask.opt == "Escape") {
            console.log("You LOST!!!, Better Luck Next Time!");
            process.exit();
        }
    }
    //* Werewolf
    if (opponent.select == "Werewolf") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What do you want to do?",
                choices: [
                    "Attack",
                    "Heal",
                    "Escape"
                ]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p.healthDecrease();
                console.log(`${p.name} health is ${p.health}`);
                console.log(`${opp.name} health is ${opp.health}`);
                if (p.health <= 0) {
                    console.log("You LOST!!!, Better Luck Next Time!");
                    process.exit();
                }
            }
            if (num <= 0) {
                opp.healthDecrease();
                console.log(`${p.name} health is ${p.health}`);
                console.log(`${opp.name} health is ${opp.health}`);
                if (opp.health <= 0) {
                    console.log("You WIN. Congratulations!!!!");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Heal") {
            p.healthIncrease();
            console.log(`${p.name} health is ${p.health}`);
        }
        if (ask.opt == "Escape") {
            console.log("You LOST!!!, Better Luck Next Time!");
            process.exit();
        }
    }
    //* Zombie
    if (opponent.select == "Zombie") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What do you want to do?",
                choices: [
                    "Attack",
                    "Heal",
                    "Escape"
                ]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p.healthDecrease();
                console.log(`${p.name} health is ${p.health}`);
                console.log(`${opp.name} health is ${opp.health}`);
                if (p.health <= 0) {
                    console.log("You LOST!!!, Better Luck Next Time!");
                    process.exit();
                }
            }
            if (num <= 0) {
                opp.healthDecrease();
                console.log(`${p.name} health is ${p.health}`);
                console.log(`${opp.name} health is ${opp.health}`);
                if (opp.health <= 0) {
                    console.log("You WIN. Congratulations!!!!");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Heal") {
            p.healthIncrease();
            console.log(`${p.name} health is ${p.health}`);
        }
        if (ask.opt == "Escape") {
            console.log("You LOST!!!, Better Luck Next Time!");
            process.exit();
        }
    }
} while (true);
