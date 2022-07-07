const allEmployees = []
// Employee Constructor Function:
function Employee(fullNameValue, departmentValue, levelValue, imageUrlValue) {

    this["Full Name"] = fullNameValue
    this.department = departmentValue
    this.level = levelValue
    this["Image Url"] = imageUrlValue
    allEmployees.push(this);

    // console.log(this);

}
// create a new employee object:
let employee1=new Employee("Ghazi Samer", "Administration", "Senior", "img");
let employee2=new Employee("Lana Ali", "Finance", "Senior", "img");
let employee3=new Employee("Tamara Ayoub", "Marketing", "Senior", "img");
let employee4=new Employee("Safi Walid", "Administration", "Mid-Senior", "img");
let employee5=new Employee("Omar Zaid", "Development", "Senior", "img");
let employee6=new Employee("Rana Saleh", "Development", "Junior", "img");
let employee7=new Employee("Hadi Ahmad", "Finance", "Mid-Senior", "img");

// calculate the net salary (tax 7.5%):
let varEmployees = [employee1,employee2,employee3,employee4,employee5,employee6,employee7]

Employee.prototype.Salary = function () {
    if (this.level === "Senior") {
return Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
    } else if (this.level === "Mid-Senior") {
return Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
        } else {
return Math.floor(Math.random() * (1000 - 500 + 1)) + 500;

}}
// generate a unique id for each employee:

Employee.prototype.Id = function () {
    return Math.floor(1000 + Math.random() * 9000);
}
Employee.prototype.render = function () {
for(let i = 0; i < allEmployees.length; i++){
document.getElementById("employee").innerHTML +="<p>Full Name:"+ allEmployees[i]["Full Name"] +"</p>";
document.getElementById("employee").innerHTML +="<p>Department:"+ allEmployees[i].department +"</p>";
document.getElementById("employee").innerHTML +="<p>Level:"+ allEmployees[i].level +"</p>";
document.getElementById("employee").innerHTML +="<p>Image Url:"+ allEmployees[i]["Image Url"] +"</p>";
document.getElementById("employee").innerHTML +="<p>Salary:"+ allEmployees[i].Salary() +"</p>";
document.getElementById("employee").innerHTML +="<p>Id:"+ allEmployees[i].Id() +"</p> </br>";

}
}

for(let i = 0; i < varEmployees.length; i++) {
    console.log(varEmployees);
    varEmployees[i].render();}

