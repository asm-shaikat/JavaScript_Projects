function CalResult(value){
    let get=document.getElementById("result");
    if(get.value == "undefined"){
        get.value = "";
      }
      get.value += value;
}
function ClearResult(){
    document.getElementById("result").value=null;
}