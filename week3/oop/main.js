class Document {
    constructor (name){
        this.EmployeeName = name ;
    }
}

class Employee{
    constructor(name){
        this.name = name ;
    }

    work(office){
        for ( let i=0 ; i<10 ; i++){
      office.documents.push(new Document(this.name))
        }
    }
}
class Manager{
    constructor( name){
        this.name=name ;
        this.employees = [] ;

    }
    hireEmployee(name){
        const employee =new Employee(name)
        this.employees.push(employee)
    }
    askEmployeesToWork(office){
       for(let i of this.employees){
         i.work(office);
    }
    }
}
class Cleaner{
    constructor(name ){
        this.name = name ;
    }
    clean(){
        console.log("Clean")
    }
}

class Office {
    constructor(){
        this.documents = []; 
        this.managers = [];
        this.cleaners = [];
    }
    hireCleaner(name){
        const cleaner = new Cleaner(name)
        this.cleaners.push(cleaner);
        //console.log("Added"+name.Clean)
    }

    hireManager(name){
        const manager = new Manager(name)
        this.managers.push(manager);

    }
    startWorkDay(){
     for(let i of this.managers)
     {
i.askEmployeesToWork(this);
     }
for(let i of this.cleaners)
{
    i.clean();
}
    }
}


