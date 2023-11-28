//1.Class - Movie












//3. Person class to hold all details.
class person {
    constructor(name,age, gender,qualification, designation){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.qualification = qualification;
        this.designation = designation;
    }
    getname(){
        return `My name is ${this.name}`;
    }
    getage(){
        return `I am in my age of ${this.age}`;
    }
    getgender(){
        return `I identify as a ${this.gender}`;
    }
    getqualification(){
        return `I completed my ${this.qualification}`;
    }
    getdesignation(){
        return `I am ${this.designation}`;
    }
}
var p1 = new person("Sneha harigharun.", 22, "Female.", "Diploma in printing technology.", "Full stack developer.");
console.log(p1.getname(), p1.getage(), p1.getgender(), p1.getqualification(), p1.getdesignation());
