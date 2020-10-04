module.exports = function toReadable (number) {
    number = parseInt(number)
    let strNumber = number.toString()
    let digits = strNumber.split('');

    let res = []
    let name
    for (let i = digits.length - 1; i >= 0; i--) {
        switch (i) {
            case digits.length - 1:
                name = units(digits[i])
                break
            case digits.length - 2:
                name = dozens(digits[i])
                break
            case digits.length - 3:
                name = units(digits[i]) + " hundred"
                break
        }
        res.unshift(name)
    }

    res = res.filter(name => name.length > 0)
    let readable = res.join(' ')

    if (!readable) {
        return 'zero'
    }

    readable = readable.replace('ten one', 'eleven')
    readable = readable.replace('ten two', 'twelve')
    readable = readable.replace('ten three', 'thirteen')
    readable = readable.replace('ten four', 'fourteen')
    readable = readable.replace('ten five', 'fifteen')
    readable = readable.replace('ten six', 'sixteen')
    readable = readable.replace('ten seven', 'seventeen')
    readable = readable.replace('ten eight', 'eighteen')
    readable = readable.replace('ten nine' , 'nineteen')
    return readable
}

function units(digit) {
    let name

    switch (digit) {
        case '1':
            name = 'one'
            break
        case '2':
            name = 'two'
            break
        case '3':
            name = 'three'
            break
        case '4':
            name = 'four'
            break
        case '5':
            name = 'five'
            break
        case '6':
            name = 'six'
            break
        case '7':
            name = 'seven'
            break
        case '8':
            name = 'eight'
            break
        case '9':
            name = 'nine'
            break   
        default:
            name = ''
    }
    return name
}

function dozens(digit) {
    let name

    switch (digit) {
        case '1':
            name = 'ten'
            break
        case '2':
            name = 'twenty'
            break
        case '3':
            name = 'thirty'
            break
        case '4':
            name = 'forty'
            break
        case '5':
            name = 'fifty'
            break
        case '6':
            name = 'sixty'
            break
        case '7':
            name = 'seventy'
            break
        case '8':
            name = 'eighty'
            break
        case '9':
            name = 'ninety'
            break    
        default:
            name = ''
            break                                                                                                                                                                               
    }
    return name
}
