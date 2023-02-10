const regexDictionary = {
    "simplemath": {
        "regex": /[\*\/\-\+]/,
        "description": "finds the first plus/minus/divide/multiply in a string"
    },
    "simplemathmultiple":{
        "regex": /[\*\/\-\+]/g,
        "description": "will find several occurances globally"
    },
    "capturegroupsyntax":{
        "regex": /([0-9]{1,})([\+\-\/\*]{1})([0-9]{1,})/,
        "description": "will find specific specific pattern of basic math expression"
    }
}

export default regexDictionary;