const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const output = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const { validate } = require("@babel/types");

const teamMembers = [];
const idArray = [];

function appMenu() {

    function createManager() {
        console.log("Please Build Your Team");
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "Managers Name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a name";
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "Managers ID?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter an ID for the manager";

                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "Managers Email?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter an email for the manager";

                }

            },
            {
                type: "input",
                name: "managerPhoneNumber",
                message: "Managers Phone number?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a phone number for the manager";

                }
            }
        ])
    }
}