// Create dictionary to store all input value
let input_data = {};
// Get element by attribute on button click
document.addEventListener('click', function () {
    if(event.target.matches("form button")){
        // Prevent button reload
        event.preventDefault();
        // get parent of clicked element and assign id
        event.target.parentElement.id = "hello";

        // Get children of parent with a particular class
        // get all-inputs = document.querySelector()
        let getInputElements = document.querySelectorAll("#hello .form-control");
        // Loop through children
        for(i = 0; i < getInputElements.length; i++){
            // Check if inputElements has a 'name' attribute
            if(getInputElements[i].hasAttribute("name")){
                // Get each attribute value
                inputAtt = getInputElements[i].getAttribute("name");
                // Get each value user entered and assign it to dictionary key/value pairs
                input_data[inputAtt] = getInputElements[i].value;
            }
        }
    }
    console.log(input_data);
}, false)
//
//