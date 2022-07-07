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
let x=new Employee("Ghazi Samer", "Administration", "Senior", "img");
new Employee("Lana Ali", "Finance", "Senior", "img");
new Employee("Tamara Ayoub", "Marketing", "Senior", "img");
new Employee("Safi Walid", "Administration", "Mid-Senior", "img");
new Employee("Omar Zaid", "Development", "Senior", "img");
new Employee("Rana Saleh", "Development", "Junior", "img");
new Employee("Hadi Ahmad", "Finance", "Mid-Senior", "img");

// calculate the net salary (tax 7.5%):

Employee.prototype.Salary = function () {
    if (this.level === "Senior") {
return Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
    } else if (this.level === "Mid-Senior") {
return Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
        } else {
return Math.floor(Math.random() * (1000 - 500 + 1)) + 500;

}}
console.log(x);
console.log(x.Salary());
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


