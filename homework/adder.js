"using strict;"
//window.alert("connected")
//Marty De Alba

//review video 4
//for future coding problems use variables 
// var textNum1 = document.getElementById("num1");
//this can simplify your code in the future

function add(){
    console.log("button clicked");
    //get num1 from text box
    //make sure both boxes have data

    if (document.getElementById("num1").value == "" || 
        document.getElementById("num2").value == ""){
        window.alert("missing data");
        }
        else {
        var num1 = parseInt(document.getElementById("num1").value);
        console.log("num1 is: " + num1)

        //get num2 from text box
        var num2 = parseInt(document.getElementById("num2").value);
        console.log("num2 is: " + num2)
        
        //calculate sum
        var sum = num1 + num2
        console.log("sum is: " + sum)

        //display sum on the page
        document.getElementById("sum").innerHTML = sum;
        }
}//end add

function reset(){
    //clear the text boxes and the sum
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("sum").innerHTML = "";
}

