const isMissingInput= function(input){
    if(input.length === 0){
        return true 
    }
    
    else {
        return false
    }
}
const  msg = document.createElement("h3")
msg.setAttribute("class" , "error")


const validate = function(){
    const name = document.getElementById("name").value
    const salary = parseInt(document.getElementById("salary").value)
    const birthDay = document.getElementById("bday").value
    const phone = document.getElementById("phone").value
    const form =document.getElementById("main")

    if(isMissingInput(name)){
        msg.innerHTML = "not found any name , you must enter the name " 
    }else if (isMissingInput(salary)){
        msg.innerHTML= " you should enter salary"
    }
    else if (name.length <=2){
        msg.innerHTML = " The length name should be more than 2 char"
     }
     else if (isMissingInput(salary)){
         msg.innerHTML="you should enter the salary "
     }
    else if (salary < 10000  ){
        msg.innerHTML = " Salary must be greater than 10,000 but less than 16,000 "
    } else if ( salary >16000 ){
        msg.innerHTML = " Salary must be greater than 10,000 but less than 16,000 "
    } 
    else if (isMissingInput(birthDay)) {
        msg.innerHTML= " Birthday may not be null "
    }
    else if(isMissingInput(phone)){
        msg.innerHTML="not found any number , you must enter the phone "
    }else if (phone.length !== 10 ){
        msg.innerHTML = " Phone must be 10 digits long"
    }
    else {
        form.style.display="none"
        const hi = document.createElement("h2")
        hi.innerHTML="welcome " + name
       hi.style.color = "black"
        document.body.appendChild(hi)
    }
    document.getElementById("main").appendChild(msg)
}



