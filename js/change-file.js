
document.addEventListener("change", function(){
    // let file_input = document.getElementById("exampleInputFile1");
    // let file_input_label = document.getElementById("file_label");
    // let file_input_value = document.getElementById("exampleInputFile1").value;
    let paper_input_value = document.getElementById("upload_book_cover").value;
    let paper_span = document.getElementById("change_file_name");

    // if (event.target.matches("#exampleInputFile1")){
    //     file_input_label.innerHTML = file_input_value;
    // }
    if (event.target.matches("#upload_book_cover")){
        console.log("I clicked on file input");
        paper_span.innerHTML =  paper_input_value;
    }
})