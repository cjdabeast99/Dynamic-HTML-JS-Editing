# Dynamic-HTML-JS-Editing
Using the dynamic-edit.js script you can dynamically edit pages. You may need to use the dynamic-options.php; but using PhP is optional. It could be a flat JS file even. Really doesn't matter how you handle your &lt;select> tags.


# Paramaters
- self
    References own element clicked object. Required just for swapping text from "Edit" to "Cancel"

- container
    This is applicapable if you have multiple sections that you want to use seperately for editing.
    Each section needs to be enclosed by <form> and the ID set on the form passed through the onclick event for the container parameter.

- icoOnly
    Boolean to dispaly only the icon so instead of "Edit ✏️/Cancel X" it would just be "✏️/X"

- noclearna
    For this project i personally had some inner text display as "N/A" when the data record is actually just empty string. So I clear out N/A set to nothing if noclearna = true.