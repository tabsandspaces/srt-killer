(function () { 
    let processButton = document.getElementById("process");
    let input = document.getElementById("input");
    let output = document.getElementById("output");
    processButton.addEventListener("click", () => {
        let result = input.value;
        // Transform data
        result =  result.replace(/(\r\n\t|\n|\r\t)/gm,""); // Test: remove line breaks
        // Set output
        output.value = result;
    });
})(); 