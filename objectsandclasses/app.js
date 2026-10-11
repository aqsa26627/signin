// printmarks of student//

// const student = {
//     username : "amna",
//     marks : 50.0,
//     printMarks : function(){
//         console.log("marks = ",this.marks);
//     },
// };

//write all employes  deatails in one function and some mandantry changes in every employe list //

// const employe = {
//     calcTax(){
//         console.log("tax = ", this.salary* 0.1 );
//     },
// };
//  const karandawal = {
//     salary : 200000,
//     calcTax(){
//         console.log("tax = ", this.salary* 0.2 );
//     },
// };
// karandawal.__proto__ = employe;

// classes and how its  works//
// class toyota{
//     start(){
    
//     }
//     stop(){

//     }

//     //here we are defining function// //
//     setbrand(brand){
// this.brandName = brand;
//     }
// }

// let fortuner = new toyota();
// let innnova = new toyota();
// //here we are calling function meny times//
// fortuner.setbrand("fortuner");
// innnova.setbrand("innova");

/// constructors//

// class toyota{
// constructor(brand ,mileage){
//     this.brandName = brand;
//     this.mileage = mileage;
// }
//     start(){
    
//     }
//     stop(){

//     }
// }
//     //here we are defining function// //
  
// let fortuner = new toyota("fortuner",10);
// console.log(fortuner);
// let innnova = new toyota("innova",15);
// console.log(innnova);


//inheritance//

// class person{
//    constructor(name){
//    this.name = name;
//    };
//     eat(){
// console.log("person is eating");
//     };
//     sleep(){
// console.log("person is sleeping");
//     };
// };
// class Bareera extends person{
//     constructor(name){
//         super(name);
//     };  
//     student(){
//         super.eat();
//         console.log("computer science student");
//     };
// };
// let bareeraObj = new Bareera("bareera");


//practice question//
// class user {
//     constructor(name,email) {
//         this.name = name;
//         this.email = email;
//     }

// viewData(){
//     console.log("data=",this.Data);
// }
//     }

//  let Data = "information";
//  let userObj1 = new user("bareera","bareera@email.com");
//  let userObj2 = new user("bilal","bilal@email.com");

//practice question 2//
//  let iformation = "school information";
//  class school{
//     constructor(name, location,staff,students,classrooms){
//         this.name = name;
//         this.location = location;
//         this.staff = staff;
//         this.students = students;
//         this.classrooms = classrooms;
//  }
//  viewData(){
//     console.log("data = ", this.iformation);
//  }
// }
// let schoolObj1 = new school("city school","karachi",100,500,20);
// let schoolObj2 = new school("bahria school","islamabad",200,1000,30);

//practice question 3//

// let  editData ="edit information";
// class user{
//     constructor(name,phone){
//         this.name = name;
//         this.phone = phone;

//     }
//     editData(){
//         console .log("data =", this.editData);
//     }
// }
// class Admin extends user{
// constructor(name,phone){
//     super(name,phone);
// }
// };
// let student1Obj = new user("abida","0333336785");
// let student2Obj = new user("mahira","063436785");