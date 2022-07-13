'use strict';
const allEmployees = []
let switcher
// Create the containers divs & append them to the DOM:
const eContainer = document.createElement("div");
const Administration = document.createElement("div");
const Marketing = document.createElement("div");
const Development = document.createElement("div");
const Finance = document.createElement("div");
const AdministrationCards = document.createElement("div");
const MarketingCards = document.createElement("div");
const DevelopmentCards = document.createElement("div");
const FinanceCards = document.createElement("div");
document.body.appendChild(eContainer);
eContainer.appendChild(Administration);
eContainer.appendChild(Marketing);
eContainer.appendChild(Development);
eContainer.appendChild(Finance);
Administration.appendChild(AdministrationCards);
Marketing.appendChild(MarketingCards);
Development.appendChild(DevelopmentCards);
Finance.appendChild(FinanceCards);
Administration.className = "card-container";
Marketing.className = "card-container";
Development.className = "card-container";
Finance.className = "card-container";
eContainer.id = "employee-container";
AdministrationCards.id = "AdministrationCards";
MarketingCards.id = "MarketingCards";
DevelopmentCards.id = "DevelopmentCards";
FinanceCards.id = "FinanceCards";
// Create Headlines for the departments & append them to the DOM:
const administrationHeadline = document.createElement("h2");
const marketingHeadline = document.createElement("h2");
const developmentHeadline = document.createElement("h2");
const financeHeadline = document.createElement("h2");
Administration.appendChild(administrationHeadline);
Marketing.appendChild(marketingHeadline);
Development.appendChild(developmentHeadline);
Finance.appendChild(financeHeadline);
administrationHeadline.textContent = "Administration";
marketingHeadline.textContent = "Marketing";
developmentHeadline.textContent = "Development";
financeHeadline.textContent = "Finance";
// Employee Constructor Function:
function Employee(fullName, department, level, imageUrl) {

    this.fullName = fullName
    this.department = department
    this.level = level
    this.imageUrl = imageUrl
    allEmployees.push(this);
}

// create a new employee object:
new Employee("Ghazi Samer", "Administration", "Senior", "assets/Ghazi.jpg");
new Employee("Lana Ali", "Finance", "Senior", "assets/Lana.jpg");
new Employee("Tamara Ayoub", "Marketing", "Senior", "assets/Tamara.jpg");
new Employee("Safi Walid", "Administration", "Mid-Senior", "assets/Safi.jpg");
new Employee("Omar Zaid", "Development", "Senior", "assets/Omar.jpg");
new Employee("Rana Saleh", "Development", "Junior", "assets/Rana.jpg");
new Employee("Hadi Ahmad", "Finance", "Mid-Senior", "assets/Hadi.jpg");

// calculate the salary of each employee:
Employee.prototype.Salary = function () {
    if (this.level === "Senior") {
        return Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
    } else if (this.level === "Mid-Senior") {
        return Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
    } else {
        return Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
    }
}
// generate a unique id# for each employee:
Employee.prototype.Id = function () {
    return Math.ceil(Math.random() * 10000)
}
// render the employee object to the DOM:
Employee.prototype.render = function (switcher) {
    // create employeeCard div inside the eContainer div:
    const eCard = document.createElement("div");
    switcher.appendChild(eCard);
    eCard.className = "employee-card"
    // [IMG] create employeeImgDiv div inside the employeeCard div:
    const eImgDiv = document.createElement("div");
    eCard.appendChild(eImgDiv);
    eImgDiv.className = "employee-img-div"
    // [IMG] create employeeImg Img inside the employeeImgDiv div:
    const eImg = document.createElement("img");
    eImgDiv.appendChild(eImg);
    eImg.className = "employee-img";
    eImg.src = this.imageUrl;
    // [TEXT] create employeeInfoDiv div inside the employeeCard div:
    const eInfoDiv = document.createElement("div");
    eCard.appendChild(eInfoDiv);
    eInfoDiv.className = "employee-info-div"
    // [TEXT] create employeeNameandID div inside the employeeInfoDiv div:
    const eNameandID = document.createElement("p");
    eInfoDiv.appendChild(eNameandID);
    eNameandID.textContent = `Name: ${this.fullName} - ID: ${this.Id()}`;
    // [TEXT] create employeeDepartmentandLevel div inside the employeeInfoDiv div:
    const eDepartmentandLevel = document.createElement("p");
    eInfoDiv.appendChild(eDepartmentandLevel);
    eDepartmentandLevel.textContent = `Department: ${this.department} - Level: ${this.level}`;
    // [TEXT] create employeeSalary div inside the employeeInfoDiv div:
    const eSalary = document.createElement("p");
    eInfoDiv.appendChild(eSalary);
    eSalary.textContent = `Salary: ${this.Salary()}`;
}

function renderAllEmployees() {

    for (let i = 0; i < allEmployees.length; i++) {
       
                switcher = document.getElementById(`${allEmployees[i].department}Cards`);
                allEmployees[i].render(switcher);

    }
}

renderAllEmployees()
