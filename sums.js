const display=document.getElementById('display');

function show(input)
{
    display.value+=input;
}
function cleardisplay(){
    display.value=""
}
function calculateresult(){
    try{
    display.value=eval(display.value)//eval method to show result
    }
    catch{
        display.value="Error"
    }
}
function clearElement(){
    display.value=display.value.slice(0,-1)

}
