/*
This function is called when the calculate button is clicked
*/
function Calculate(){
    var err="";//Initiate error string
    var salary=document.querySelector("#salary");
    var hours=document.querySelector("#hours");
    //check if values are not entered,assign error to err string
    if(salary.value == ""){
       err+="Enter The Salary.";
    }
    if(hours.value == ""){
       err+="\nEnter The working hours.";
    }
    //If radius is entered then call CalculateArea function to get area,pass the argument as radius in the function
    if(err.length > 0){
        alert(err);
    }
    else{
        //initiating variables
        var tot_sal = 0;
        var bonus = 0;
        //logic if salary greater than equal to 150000 and working hours greater than 10 
         if(salary.value >= 15000 && hours.value >= 10){
            bonus = salary.value * 0.1;
           }else{
            bonus = salary.value * 0.05;
           }
        tot_sal += (salary.value + bonus);
        //send the outputs to the innerhtml of result div
         document.getElementById("result").innerHTML= "Basic Salary : <span style='font-style:oblique'>"+parseInt(salary.value)+"</span><br>Bonus : <span style='font-style:oblique'>"+parseInt(bonus)+"</span><br> Total Salary : <span style='color:green;'>"+parseInt(tot_sal)+"</span>";
    }
}

