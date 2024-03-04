class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`a new course was added by ${this.username}`);
    }
}

const chai = new Teacher("Hitesh", "Hitesh@teacher.com", "3214");
chai.logMe(); //USERNAME is Hitesh
chai.addCourse(); //a new course was added by Hitesh

const masalaChai = new User("masalaChai");
// masalaChai.addCourse(); //Error as masalaChai has no access of child class method

masalaChai.logMe(); //USERNAME is masalaChai


console.log(chai instanceof Teacher); //true
console.log(Teacher instanceof User); //false
console.log(chai instanceof User); //true
console.log(chai === masalaChai); //false
console.log(chai == masalaChai); //false