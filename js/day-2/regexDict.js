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
    },
    "zeroAsFloat":{
        "regex": /^0.0{1,}$/,
        "description": "in case that a division returns 0.0... this will zero down to 0"
    }
}

export default regexDictionary;