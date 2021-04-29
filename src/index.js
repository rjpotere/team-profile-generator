const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

const newEmployee = [];


menu = () => {
    createManager = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Enter Manager's first and last name:",
            },
            {
                type: "input",
                name: "id",
                message: "Enter Manager's id number:",

            },
            {
                type: "input",
                name: "email",
                message: "Enter Manager's email address:",

            },
            {
                type: "input",
                name: "officeNumber",
                message: "Enter Manager's office number:",

            }
        ]).then(({ name, id, email, officeNumber }) => {
            const manager = new Manager(name, id, email, officeNumber);
            newEmployee.push(manager);
            console.log(newEmployee);
            const fileName = `index.html`;
            const htmlString = convertPrompts(manager);
            printHtml(fileName, htmlString);
        })
    }

    createEngineer = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Enter Engineer's first and last name:",
            },
            {
                type: "input",
                name: "id",
                message: "Enter Engineer's id number:",

            },
            {
                type: "input",
                name: "email",
                message: "Enter Engineer's email address:",

            },
            {
                type: "input",
                name: "gitHub",
                message: "Enter Engineer's GitHub username:",

            }
        ]).then(({ name, id, email, gitHub }) => {
            const engineer = new Engineer(name, id, email, gitHub);
            console.log(engineer);
            const fileName = `index.html`;
            const htmlString = convertPrompts(engineer);
            printHtml(fileName, htmlString);
        })
    }
}

createIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter Intern's first and last name:",
        },
        {
            type: "input",
            name: "id",
            message: "Enter Intern's id number:",

        },
        {
            type: "input",
            name: "email",
            message: "Enter Intern's email address:",

        },
        {
            type: "input",
            name: "school",
            message: "Enter school name:",

        }
    ]).then(({ name, id, email, school }) => {
        const intern = new Intern(name, id, email, school);
        console.log(intern.getSchool());
        intern.getRole();
        console.log(intern);
        newEmployee.push(intern);
        const fileName = `index.html`;
        const htmlString = convertPrompts(intern);
        printHtml(fileName, htmlString);
        // console.log(htmlString);
    })
};

createProfile = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "employeeType",
            message: "what type of employee profile would you like to create?",
            choices: ['Manager', 'Engineer', 'Intern', 'I do not want to create another profile'],
        }]).then((data) => {
            if (data.employeeType === 'Manager') {
                createManager();
            } if (data.employeeType === 'Engineer') {
                createEngineer();

            } if (data.employeeType === 'Intern') {
                createIntern();
            } else {return}
        })
}

createProfile();

printHtml = (fileName, htmlString) => {
    fs.writeFileSync(fileName, htmlString,{flag: "a"});

}

convertPrompts = () => {
    let printIndex = '';
    newEmployee.forEach(employee => {
        if (employee.getRole() === 'Intern') {
            printIndex += 
            `<div>
                <h1>${employee.name}</h1>
                <h2>${employee.getRole()}</h2>
                <h3>${employee.id}</h3>
                <p>${employee.getSchool()}</p>
            </div>`
        }
        if (employee.getRole() === 'Manager') {
            printIndex += `<div>
            <h1>${employee.name}</h1>
            <h2>${employee.getRole()}</h2>
            <h3>${employee.id}</h3>
            <p>${employee.getOfficeNumber()}</p>
        </div>`
        }
        if (employee.getRole() === 'Engineer') {
            printIndex += 
            `<div>
                <h1>${employee.name}</h1>
                <h2>${employee.getRole()}</h2>
                <h3>${employee.id}</h3>
                <p>${employee.getGithub()}</p>
            </div>`
        }

    })
return printIndex;
}


menu();