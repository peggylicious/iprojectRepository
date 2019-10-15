
document.addEventListener("change", function(){
    let file_input = document.getElementById("exampleInputFile1");
    let file_input_label = document.getElementById("file_label");
    let file_input_value = document.getElementById("exampleInputFile1").value;

    if (event.target.matches("#exampleInputFile1")){
        file_input_label.innerHTML = file_input_value;
    }
})