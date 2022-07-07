const allEmployee = []
// Employee Constructor Function:
function Employee(fullNameValue, departmentValue, levelValue, imageUrlValue) {
    this.iD = this.Id();
    this["Full Name"] = fullNameValue
    this.department = departmentValue
    this.level = levelValue
    this["Image Url"] = imageUrlValue
    this.salary = this.Salary();
    allEmployee.push(this);
    console.log(this);

}

// calculate the net salary (tax 7.5%):

Employee.prototype.Salary = function () {
    if (this.levelValue === 'Senior') {
        var totalSalary
        totalSalary = (Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500);
        totalSalary -= (totalSalary * 0.075);
        return totalSalary;
    } else if (this.levelValue === 'Mid-Senior') {
        totalSalary = (Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500);
        totalSalary -= (totalSalary * 0.075);
        return totalSalary;
        } else {
        totalSalary = (Math.floor(Math.random() * (1000 - 500 + 1)) + 500);
        totalSalary = (Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500);
        totalSalary -= (totalSalary * 0.075);
        return totalSalary;
        }
}

// generate a unique id for each employee:

Employee.prototype.Id = function () {
    return Math.floor(1000 + Math.random() * 9000);
}

// create a new employee object:
new Employee("Ghazi Samer", "Administration", "Senior", "img");
new Employee("Lana Ali", "Finance", "Senior", "img");
new Employee("Tamara Ayoub", "Marketing", "Senior", "img");
new Employee("Safi Walid", "Administration", "Mid-Senior", "img");
new Employee("Omar Zaid", "Development", "Senior", "img");
new Employee("Rana Saleh", "Development", "Junior", "img");
new Employee("Hadi Ahmad", "Finance", "Mid-Senior", "img");



