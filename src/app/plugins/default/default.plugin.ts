const splitter: string = ";";
const allSplitters: Array<string> = [
    ";",
    ","
];

export function detectAttributes(data: string): {
    wordForms: Array<string>,
    wordKeyForms: {[key: string]: string},
    extraAttributes: Array<string>
} {
    // searching brackets, and outer content
    let bracketContent = "";
    let outerContent = "";
    let isBracket = false;
    for (const letter of data.split("")) {
        if (letter === ")") {
            isBracket = false;
        }
        if (isBracket) {
            bracketContent += letter;
        }
        if (letter === "(") {
            isBracket = true;
        }
        if (letter !== "(" && letter !== ")" && !isBracket) {
            outerContent += letter;
        }
    }
    bracketContent = bracketContent.trim();
    outerContent = outerContent.trim();
    //

    const wordForms = outerContent.split(splitter).map(word => word.trim());

    const wordKeyForms: {
        [key: string]: string
    } = {}
    const extraAttributes: Array<string> = [];

    let splitArray = [bracketContent];
    for (const splitter of allSplitters) {
        splitArray = splitArray.join("|||").split(splitter).join("|||").split("|||");
    }
    splitArray = splitArray.map(obj => {
        obj = obj.trim();
        obj = obj.split(" ").filter(b => b !== "").join(" ");
        return obj;
    });
    for (const data of splitArray) {
        const result = data.split(" ");
        if (result.length === 1) {
            if (result[0].endsWith(".")) {
                extraAttributes.push(result[0].substring(0, result[0].length - 1));
            }
        } else if (result.length > 1) {
            if (result[0].endsWith(".")) {
                const value = result.slice(1, result.length).join(" ");
                wordKeyForms[result[0].substring(0, result[0].length - 1)] = value;
            }
        }
    }

    return {
        wordForms: wordForms,
        wordKeyForms: wordKeyForms,
        extraAttributes: extraAttributes
    };
}
