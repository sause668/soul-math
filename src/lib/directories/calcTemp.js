let num = 
{
    val: 0,
    type: 'num',
    neg: false
}

let exp = 
{
    val: 0,
    type: 'exp',
    neg: false,
}

let add = 
{
    val: '+',
    type: 'op'
}

let sub = 
{
    val: '–',
    type: 'op'
}

let mult = 
{
    val: '×',
    type: 'op'
}

let div = 
{
    val: '÷',
    type: 'op'
}

let par =
{
    val: [
    ],
    type: 'par',
    neg: false
}

let perc = 
{
    val: '%',
    type: 'sym'
}

let ratio = 
{
    val: ':',
    type: 'sym'
}

let comma = 
{
    val: ',',
    type: 'sym'
}

let equal = 
{
    val: '=',
    type: 'op'
}

let great = 
{
    val: '>',
    type: 'op'
}

let less = 
{
    val: '<',
    type: 'op'
}

let greatEqual = 
{
    val: '≥',
    type: 'op'
}

let lessEqual = 
{
    val: '≤',
    type: 'op'
}

let angle = 
{
    val: '∠',
    type: 'op'
}

let vari = 
{
    val: '',
    type: 'sym'
}

let frac = 
{
    val: [
        {
            val: [
                {
                    val: 0,
                    type: 'num',
                    neg: false
                },
            ],
            type: 'par',
            neg: false
        },
        {
            val: '÷',
            type: 'op',
        },
        {
            val: [
                {
                    val: 0,
                    type: 'num',
                    neg: false
                },
            ],
            type: 'par',
            neg: false
        },
    ],
    type: 'frac',
    neg: false
}

let radio = {
radio: [
    {id: 'greater', val: '>'},
    {id: 'less', val: "<"},
],
}

let questPic = {
questPic: {
    src: '/img/quiz/8thGrade/ratioPics1.jpg',
    height: 800,
    width: 800
},
}


