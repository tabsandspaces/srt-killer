var expressions = [
    new ReplaceLineBreaksWithAVerticalBar(),
    new RemoveTimecodes(),
    new FixLineBreaks(),
    new RemoveDoubleSpaces(),
    new RemoveDoubleLineBreaks(),
    new RemoveTrailingSpaces(),
    new RemoveRichTextFormatting()];

function ReplaceLineBreaksWithAVerticalBar () {
    this.searchExpression = "(?![\n|\r\n|\r]{0,}\d{1,}[\n|\r\n|\r]{1,}\d{1,2}:\d{1,2}:\d{1,2}[,.:]\d{1,3}\s{0,} -->\s{0,}\d{1,2}:\d{1,2}:\d{1,2}[,.:]\d{1,3}[\n|\r\n|\r]{1,})(^(?!\d{1,2}:\d{1,2}:\d{1,2}[,.:]\d{1,3}).{1,})[\n|\r\n|\r]{1,}(^(?!\d{1,2}:\d{1,2}:\d{1,2}[,.:]\d{1,3}).{1,})[\n|\r\n|\r]{1,}(?=[\n|\r\n|\r]{1,}\d{1,3}[\n|\r\n|\r]{1,}\d{1,2}:\d{1,2}:\d{1,2}[,.:]\d{1,3}\s{0,}-->\s{0,}\d{1,2}:\d{1,2}:\d{1,2}[,.:]\d{1,3})";
    this.replacementPattern = "$1|$2";
    this.description = "Replace line breaks with a vertical bar (|)";
}

function RemoveTimecodes () {
    this.searchExpression = "([\n|\r\n|\r]{0,}\d{1,3}[\n|\r\n|\r]{1,}\d{1,2}:\d{1,2}:\d{1,2}[,.:]\d{1,3}\s{0,}-->\s{0,}\d{1,2}:\d{1,2}:\d{1,2}[,.:]\d{1,3})";
    this.replacementPattern = "";
    this.description = "Remove timecodes";
}

function RemoveDoubleSpaces () {
    this.searchExpression = "(  )";
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
    this.searchExpression = "([\n|\r\n|\r])";
    this.replacementPattern = "\n";
    this.description = "Fix line breaks";
}

function RemoveRichTextFormatting () {
    this.searchExpression = "(\<[^\>]*\>)";
    this.replacementPattern = "";
    this.description = "Remove rich text formatting (removes any text between < and >)";
}
