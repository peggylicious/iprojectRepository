// Create dictionary to store all input values
let input_data = {};
// Get element by attribute on button click
document.addEventListener('click', function () {
    // Get all inputs
    let getInputElements = document.querySelectorAll("#my-form .form-control");
    if(event.target.matches("form button")){
        // Prevent button reload
        event.preventDefault();


        // Loop through inputs
        for(i = 0; i < getInputElements.length; i++){
            // Get each input item value
            let inputElValue = getInputElements[i].value;
            // Get name attribute value
            let inputAtt = getInputElements[i].getAttribute("name");
            // Check if input value is empty
            if(inputElValue !== "" ){
                // Check if input element has name attribute
                // And assign input value and attribute value as key value pairs to dictionary
                if(getInputElements[i].hasAttribute("name")){
                    input_data[inputAtt] = inputElValue;
                }
            }else{
                alert("Some fields have not been filled e.g " + getInputElements[i].getAttribute("name"));
                return false;
            }
        }
        // log result in console
        console.log(input_data);
    }

}, false)
