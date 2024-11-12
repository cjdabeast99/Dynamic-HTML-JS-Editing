


/*
//? Example using a select statement
//* HTML: <div class='dynamic-edit select' id='test'>value</div>
/// Setting JS Var options list
//* JS: 
var test = {
    // Replace these with your actual element IDs and options
    elementID1: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' }
    ],
    elementID2: [
        { value: 'optionA', label: 'Option A' },
        { value: 'optionB', label: 'Option B' }
    ]
};
*/

var stored_text = [];
var active_edit_mode = 0;

function dynamicEdit(self,  container = '', icoOnly = false, noclearna = false) {
    if(container != ''){
        container = "." + container + " ";
    }
    if(active_edit_mode === 0){
        active_edit_mode = 1;
        if(icoOnly){
            $(self).html("<i>X</i>");
        }else{
            $(self).html("Cancel <i>X</i>");
        }
        $(container+".dynamic-edit-save-section").css("display","block");
        $(container+".dynamic-edit-cancel-section").attr('style', 'display: none !important;');
        $(container+'.dynamic-edit').each(function() {
            var element = $(this);
            var elementID = element.attr('id');
            var inputType = 'text';
            var newInput;
            let dataValue = element.data('value');
            
            // Store the original text with dynamic key
            stored_text.push({ [elementID]: element.html() });

            if (element.hasClass('number')) {
                inputType = 'number';
            }else if(element.hasClass('dt')){
                inputType = 'date';
            }

            let placeholder = element.data('placeholder');

            if (element.hasClass('select')) {
                var options = dynamic_options[elementID]; // Access the global dynamic_options object
                if (options && Array.isArray(options)) {
                    newInput = $('<select></select>').attr('name', elementID).attr('class', 'form-select').attr('placeholder', placeholder);
                    $.each(options, function(index, option) {
                        let sel = '';
                        if (typeof dataValue !== 'undefined') {
                            // Compare data-value with option.value
                            if (dataValue == option.value) {
                                sel = "selected";
                            }
                        } else {
                            // If no data-value attribute, compare the element's text with option.value
                            if (element.text() == option.value) {
                                sel = "selected";
                            }
                        }
                        newInput.append($('<option '+sel+'></option>').val(option.value).text(option.label));
                    });
                }
            } else if (element.hasClass('textarea')) {
                let element_text = element.text();
                if (typeof dataValue !== 'undefined') {
                    element_text = dataValue;
                }
                if(!noclearna){
                    if(element_text == "N/A"){
                        element_text = "";
                    }
                }
                newInput = $('<textarea>').attr('name', elementID).attr('class', 'form-control').html(element_text).attr('placeholder', placeholder);
            } else {
                let element_text = element.text();
                if (typeof dataValue !== 'undefined') {
                    element_text = dataValue;
                }
                if(!noclearna){
                    if(element_text == "N/A"){
                        element_text = "";
                    }
                }
                newInput = $('<input>').attr('type', inputType).attr('name', elementID).attr('class', 'form-control').val(element_text).attr('placeholder', placeholder);
            }

            if (newInput) {
                element.html(newInput);
            }
        });
    } else {
        if(confirm("Are you sure you want to cancel editing?")){
            $(container+".dynamic-edit-save-section").attr('style', 'display: none !important;');
            $(container+".dynamic-edit-cancel-section").attr('style', 'display: ;');
            if(icoOnly){
                $(self).html("✏️");
            }else{
                $(self).html("Edit ✏️");
            }
            
            // Restore original values from stored_text array
            $(container+'.dynamic-edit').each(function() {
                var element = $(this);
                var elementID = element.attr('id');
                
                // Find the original content in stored_text
                var originalContent = stored_text.find(item => item[elementID]);

                if (originalContent && originalContent[elementID]) {
                    element.html(originalContent[elementID]);
                }else{
                    element.html('');
                }
            });
            
            // Clear the stored_text array after restoring
            stored_text = [];
            active_edit_mode = 0;
        }
    }
}
