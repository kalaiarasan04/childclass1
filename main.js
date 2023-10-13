
// 3.Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.


class Employee{
	
	constructor(name,salary){
		
		this.name=name
		
		this.salary=salary
		
	}
	
	calculate(){
		 
		let month=10000
		
		let ans=12*month
		
		document.write(`Your name is : ${this.name}`);
		
		document.write("<br>");
		
		document.write(`Annual Salary is : ${ans}`)
		
		document.write("<br>");
		
		document.write("<br>");
	}
		 
}

let em=new Employee("kalai",10000)

em.calculate()

class Manager extends Employee{
	
	constructor(name,salary,department){
	
	super(name,salary)
		
	this.department=department;
		
	}
	
	bonuses(){
		
		let month=10000
		
		let ans=12*month+2000
		
		document.write(`Your name is : ${this.name}`);
		
		document.write("<br>");
		
		document.write(`Annual Salary is : ${ans}`)
		
		document.write("<br>");
		
		document.write(`Department : ${this.department}`);
		
	}
	
}

let mg=new Manager("Arun",12000,"CA")

mg.bonuses()