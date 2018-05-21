function ReplaceLineBreaksWithAVerticalBar () {
    this.searchExpression = "(?![\n|\r\n|\r]{0,}[0-9]{1,}[\n|\r\n|\r]{1,}[0-9]{1,2}:[0-9]{1,2}:[0-9]{1,2}[,.:][0-9]{1,3} {0,}--> {0,}[0-9]{1,2}:[0-9]{1,2}:[0-9]{1,2}[,.:][0-9]{1,3}[\n|\r\n|\r]{1,})(^(?![0-9]{1,2}:[0-9]{1,2}:[0-9]{1,2}[,.:][0-9]{1,3}).{1,})[\n|\r\n|\r]{1,}(^(?![0-9]{1,2}:[0-9]{1,2}:[0-9]{1,2}[,.:][0-9]{1,3}).{1,})[\n|\r\n|\r]{1,}(?=[\n|\r\n|\r]{1,}[0-9]{1,3}[\n|\r\n|\r]{1,}[0-9]{1,2}:[0-9]{1,2}:[0-9]{1,2}[,.:][0-9]{1,3} {0,}--> {0,}[0-9]{1,2}:[0-9]{1,2}:[0-9]{1,2}[,.:][0-9]{1,3})";
    this.replacementPattern = "$1|$2";
    this.description = "Replace line breaks with a vertical bar (|)";
}

function RemoveTimecodes () {
    this.searchExpression = "([\n|\r\n|\r]{0,}[0-9]{1,3}[\n|\r\n|\r]{1,}[0-9]{1,2}:[0-9]{1,2}:[0-9]{1,2}[,.:][0-9]{1,3} {0,}--> {0,}[0-9]{1,2}:[0-9]{1,2}:[0-9]{1,2}[,.:][0-9]{1,3})";
    this.replacementPattern = "";
    this.description = "Remove timecodes";
}

function RemoveDoubleSpaces () {
    this.searchExpression = "\s{1,}";
    this.replacementPattern = " ";
    this.description = "Remove double spaces";
}

function RemoveDoubleLineBreaks () {
    this.searchExpression = "([\n|\r\n|\r]{2,})";
    this.replacementPattern = "\n";
    this.description = "Remove double line breaks";
}

function RemoveTrailingSpaces () {
    this.searchExpression = "( )(?=[\||\n|\r\n|\r])";
    this.replacementPattern = "";
    this.description = "Remove double spaces";
}

function FixLineBreaks () {
    this.searchExpression = "([\r\n|\r])";
    this.replacementPattern = "\n";
    this.description = "Fix line breaks";
}

function RemoveRichTextFormatting () {
    this.searchExpression = "(\<[^\>]*\>)";
    this.replacementPattern = "";
    this.description = "Remove rich text formatting (removes any text between < and >)";
}

var Expressions = [
    new ReplaceLineBreaksWithAVerticalBar(),
    new RemoveTimecodes(),
    //new FixLineBreaks(),
    new RemoveDoubleSpaces(),
    new RemoveDoubleLineBreaks(),
    new RemoveTrailingSpaces(),
    new RemoveRichTextFormatting()];

(function () {
    let processButton = document.getElementById("process");
    let input = document.getElementById("input");
    let output = document.getElementById("output");
    processButton.addEventListener("click", () => {
        var result = input.value;

        // Transform data
        Expressions.forEach (function(expression)
        {
            var regex = new RegExp(expression.searchExpression, "gm");

            while (regex.test(result))
            {
                result = result.replace(regex, expression.replacementPattern);
                console.log(expression.description);
            }
        });

        // Set output
        output.value = result;
    });
})();
