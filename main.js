function Convert(input) {
	var findTimecode 			= new RegExp("([0-9]{1,}[\n|\r\n|\r]{1,}[0-9]{1,2}:[0-9]{1,2}:[0-9]{1,2}[,.:][0-9]{1,3} {0,}--> {0,}[0-9]{1,2}:[0-9]{1,2}:[0-9]{1,2}[,.:][0-9]{1,3}[\n|\r\n|\r]{1,})", "gm");
	var findLineBreaks 			= new RegExp("[\n|\r\n|\r]{1,}", "gm");
	var findTrailingWhitespaces = new RegExp("^[ \t]+|[ \t]+$", "gm");
	var findReachTextFormatting = new RegExp("(\<[^\>]*\>)", "gm");
	
	var subtitles = input.split(findTimecode);
	var validSubtitles = [];
	
	subtitles.forEach(function(s) {
		var isTimecode = findTimecode.test(s);
		
		if (!isTimecode)
		{
			var plainTextSubtitle = s.replace(findReachTextFormatting, "");
			var lines = plainTextSubtitle.split(findLineBreaks);
			var notEmptyLines = [];
			
			lines.forEach(function(l) {
				var line = l.replace(findTrailingWhitespaces, "");
				
				if (line != "")
				{
					notEmptyLines.push(line);
				}
			});
			
			if (notEmptyLines.length > 0)
			{
				validSubtitles.push(notEmptyLines.join("|"));
			}
		}
	});
		
	var output = validSubtitles.join("\n");
	return output;
}

(function () {
    let processButton = document.getElementById("process");
    let input = document.getElementById("input");
    let output = document.getElementById("output");
	
    processButton.addEventListener("click", () => {
		output.value = Convert(input.value);
    });
})();
