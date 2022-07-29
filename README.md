# Employee Manager

This project allows the user to create a company database and save departments roles and employee infromation. Each role you create will be saved to the database and hold information such as title, salary, and the Id from its parent department. As an examlpe in the seeded database here a Software Engineer belongs to the Developtment department. Then for each role there is the relationship to roles. Each employee is linked to a role and potentially a manager.<br>

[Link to Video Demo on Google Drive](https://drive.google.com/file/d/19dulgmelrrT7aIYMSXpdNOog8aknaSkH/view)

---

## Demo

Here is a short demonstration of the apps functionality from start to finish:

![StartUp Page](./Assets/images/demoGif.gif)

---

## Installation

To install the project in terminal run this command:

```bash
    git clone git@github.com:fiaschettima/employeeTracker-Mod12.git

```
The files will then be downloaded to the directory you ran the command in, Next run the following:
```bash
    cd employeeTracker-Mod12.git
    npm i
```
These commands will move you into the file, then install the npm packages the app requires for its functionality.
 Then you will need to create the initial database and seed it with starter data by doing the following:
 Navigate into Schema and copy all cody in schema, after pasted and rand also copy everything in seeds.sql
 ```bash
   mysql -u root -p
   <paste the schema here>
   <paste seeds.sql here
```   
Now the initial database is created and the application will function as intended.

## Usage/Examples

To use the application 
```bash
    node server.js
```
This will Initialize the application meaning begin the prompts to view employees, add,change ...
When finished you can choose the final option in the Main list of "Exit" or press CTRL C.

---

## Code Snippets

The displayed function is intended to add an employee with manager value as null if none is given. This is done because in the schema the default value is set to null if no value is given.

![No Manager code Snippet](./Assets/Images/codeSnip.png)

---

## Tech Stack

**Client:** 

**Server:** Node, Express, Inquirer, MySQL, figlet

---

## Lessons Learned

This project provided the oppurtunity to gain practive and understanding of base SQL.

---

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

## Badges

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

---

## Authors

- [@Matt Fiaschetti](https://github.com/fiaschettima)

