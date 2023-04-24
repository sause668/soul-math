import { Box, Button, ButtonBase, Typography, Grid } from "@mui/material";
import React from "react";
import { useRef, useState } from "react";
import CalcExpression from "./CalcExpression";

export default function Calc() {

    const values = useRef([]);
    const [answer, setAnswer] = useState('');
    const [numCount, setNumCount] = useState(0);
    const [opCount, setOpCount] = useState(0);
    const [numExt, setNumExt] = useState(false);
    const [keyP, setKeyP] = useState(0);
    const [keyN, setKeyN] = useState(0);
    const [parExit1, setParExit1] = useState(false);
    const [parExit2, setParExit2] = useState(false);
    const [parExit3, setParExit3] = useState(false);
    const [parExit4, setParExit4] = useState(false);
    const [parExit5, setParExit5] = useState(false);
    const [parExit6, setParExit6] = useState(false);
    const [parExit7, setParExit7] = useState(false);
    const [parExit8, setParExit8] = useState(false);
    const [parExit9, setParExit9] = useState(false);
    const [parExit10, setParExit10] = useState(false);
    const [fracState, setFracState] = useState(0);
    const [fracExit1, setFracExit1] = useState(false);
    const [fracExit2, setFracExit2] = useState(false);
    const [fracExit3, setFracExit3] = useState(false);
    const [fracExit4, setFracExit4] = useState(false);
    const [fracExit5, setFracExit5] = useState(false);
    const [fracExit6, setFracExit6] = useState(false);
    const [fracExit7, setFracExit7] = useState(false);
    const [fracExit8, setFracExit8] = useState(false);
    const [fracExit9, setFracExit9] = useState(false);
    const [fracExit10, setFracExit10] = useState(false);

    const numKey = [
        {
            id: 'num1',
            title: '1',
            func: ()=>numButton('1'),
        },
        {
            id: 'num2',
            title: '2',
            func: ()=>numButton('2'),
        },
        {
            id: 'num3',
            title: '3',
            func: ()=>numButton('3'),
        },
        {
            id: 'num4',
            title: '4',
            func: ()=>numButton('4'),
        },
        {
            id: 'num5',
            title: '5',
            func: ()=>numButton('5'),
        },
        {
            id: 'num6',
            title: '6',
            func: ()=>numButton('6'),
        },
        {
            id: 'num7',
            title: '7',
            func: ()=>numButton('7'),
        },
        {
            id: 'num8',
            title: '8',
            func: ()=>numButton('8'),
        },
        {
            id: 'num9',
            title: '9',
            func: ()=>numButton('9'),
        },
        {
            id: 'numdec',
            title: '.',
            func: ()=>numButton('.'),
        },
        {
            id: 'num0',
            title: '0',
            func: ()=>numButton('0'),
        },
        {
            id: 'neg',
            title: '-',
            func: handleNeg,
        },
    ]

    const opKey = [
        {
            id: 'add',
            title: '+',
            func: handleAdd,
        },
        {
            id: 'sub',
            title: '–',
            func: handleSub,
        },
        {
            id: 'mult',
            title: '×',
            func: handleMult,
        },
        {
            id: 'div',
            title: '÷',
            func: handleDiv,
        },
        {
            id: 'exp',
            title: '^',
            func: handleExp,
        },
        {
            id: 'parOpen',
            title: '(',
            func: handleParOpen,
        },
        {
            id: 'parClose',
            title: ')',
            func: handleParClose,
        },
    ]

    //Set Expression
    function setExpress(valTemp) {

        let expressTemp = valTemp;
        let depthIndex1 = -1;
        let depthIndex2 = -1;
        let depthIndex3 = -1;
        let depthIndex4 = -1;
        let depthIndex5 = -1;
        let depthIndex6 = -1;
        let depthIndex7 = -1;
        let depthIndex8 = -1;
        let depthIndex9 = -1;
        let depthIndex10 = -1;
        let fracTemp = [];
        let fracHold = [];

        //Depth 1
        if (expressTemp.length == 0 || parExit1) {
            setParExit1(false);
        } else if (fracExit1) {
            setFracExit1(false);
        } else if (expressTemp[expressTemp.length-1].type == 'par' || expressTemp[expressTemp.length-1].type == 'frac') {
            depthIndex1 = expressTemp.length - 1;
            fracTemp = valTemp;
            expressTemp = expressTemp[depthIndex1].val;
            fracHold = expressTemp;

            //Depth 2
            if (expressTemp.length == 0 || parExit2) {
                setParExit2(false);
            } else if (fracExit2) {
                setFracExit2(false);
            } else if (expressTemp[expressTemp.length-1].type == 'par' || expressTemp[expressTemp.length-1].type == 'frac') {
                depthIndex2 = expressTemp.length - 1;
                fracTemp = fracHold;
                expressTemp = expressTemp[depthIndex2].val;
                fracHold = expressTemp;

                //Depth 3
                if (expressTemp.length == 0 || parExit3) {
                    setParExit3(false);
                } else if (fracExit3) {
                    setFracExit3(false);
                } else if (expressTemp[expressTemp.length-1].type == 'par' || expressTemp[expressTemp.length-1].type == 'frac') {
                    depthIndex3 = expressTemp.length - 1;
                    fracTemp = fracHold;
                    expressTemp = expressTemp[depthIndex3].val;
                    fracHold = expressTemp;

                    //Depth 4
                    if (expressTemp.length == 0 || parExit4) {
                        setParExit4(false);
                    } else if (fracExit4) {
                        setFracExit4(false);
                    } else if (expressTemp[expressTemp.length-1].type == 'par' || expressTemp[expressTemp.length-1].type == 'frac') {
                        depthIndex4 = expressTemp.length - 1;
                        fracTemp = fracHold;
                        expressTemp = expressTemp[depthIndex4].val;
                        fracHold = expressTemp;

                        //Depth 5
                        if (expressTemp.length == 0 || parExit5) {
                            setParExit5(false);
                        } else if (fracExit5) {
                            setFracExit5(false);
                        } else if (expressTemp[expressTemp.length-1].type == 'par' || expressTemp[expressTemp.length-1].type == 'frac') {
                            depthIndex5 = expressTemp.length - 1;
                            fracTemp = fracHold;
                            expressTemp = expressTemp[depthIndex5].val;
                            fracHold = expressTemp;

                            //Depth 6
                            if (expressTemp.length == 0 || parExit6) {
                                setParExit6(false);
                            } else if (fracExit6) {
                                setFracExit6(false);
                            } else if (expressTemp[expressTemp.length-1].type == 'par' || expressTemp[expressTemp.length-1].type == 'frac') {
                                depthIndex6 = expressTemp.length - 1;
                                fracTemp = fracHold;
                                expressTemp = expressTemp[depthIndex6].val;
                                fracHold = expressTemp;

                                //Depth 7
                                if (expressTemp.length == 0 || parExit7) {
                                    setParExit7(false);
                                } else if (fracExit7) {
                                    setFracExit7(false);
                                } else if (expressTemp[expressTemp.length-1].type == 'par' || expressTemp[expressTemp.length-1].type == 'frac') {
                                    depthIndex7 = expressTemp.length - 1;
                                    fracTemp = fracHold;
                                    expressTemp = expressTemp[depthIndex7].val;
                                    fracHold = expressTemp;

                                    //Depth 8
                                    if (expressTemp.length == 0 || parExit8) {
                                        setParExit8(false);
                                    } else if (fracExit8) {
                                        setFracExit8(false);
                                    } else if (expressTemp[expressTemp.length-1].type == 'par' || expressTemp[expressTemp.length-1].type == 'frac') {
                                        depthIndex8 = expressTemp.length - 1;
                                        fracTemp = fracHold;
                                        expressTemp = expressTemp[depthIndex8].val;
                                        fracHold = expressTemp;

                                        //Depth 9
                                        if (expressTemp.length == 0 || parExit9) {
                                            setParExit9(false);
                                        } else if (fracExit9) {
                                            setFracExit9(false);
                                        } else if (expressTemp[expressTemp.length-1].type == 'par' || expressTemp[expressTemp.length-1].type == 'frac') {
                                            depthIndex9 = expressTemp.length - 1;
                                            fracTemp = fracHold;
                                            expressTemp = expressTemp[depthIndex9].val;
                                            fracHold = expressTemp;

                                            //Depth 10
                                            if (expressTemp.length == 0 || parExit10) {
                                                setParExit10(false);
                                            } else if (fracExit10) {
                                                setFracExit10(false);
                                            } else if (expressTemp[expressTemp.length-1].type == 'par' || expressTemp[expressTemp.length-1].type == 'frac') {
                                                depthIndex10 = expressTemp.length - 1;
                                                fracTemp = fracHold;
                                                expressTemp = expressTemp[depthIndex10].val;
                                                fracHold = expressTemp;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        return {
            valTemp: valTemp,
            expressTemp: expressTemp,
            fracTemp: fracTemp,
            fracHold: [],
            depthIndex1: depthIndex1,
            depthIndex2: depthIndex2,
            depthIndex3: depthIndex3,
            depthIndex4: depthIndex4,
            depthIndex5: depthIndex5,
            depthIndex6: depthIndex6,
            depthIndex7: depthIndex7,
            depthIndex8: depthIndex8,
            depthIndex9: depthIndex9,
            depthIndex10: depthIndex10,
        };
    }
    //Get Expression
    function getExpress(data) {

        let valTemp = data.valTemp;

        if (data.depthIndex1 > -1) {
            if (data.depthIndex2 > -1) {
                if (data.depthIndex3 > -1) {
                    if (data.depthIndex4 > -1) {
                        if (data.depthIndex5 > -1) {
                            if (data.depthIndex6 > -1) {
                                if (data.depthIndex7 > -1) {
                                    if (data.depthIndex8 > -1) {
                                        if (data.depthIndex9 > -1) {
                                            if (data.depthIndex10 > -1) {
                                                if (data.fracHold.length < 1) {
                                                    valTemp[data.depthIndex1].val[data.depthIndex2].val[data.depthIndex3].val[data.depthIndex4].val[data.depthIndex5].val[data.depthIndex6].val[data.depthIndex7].val[data.depthIndex8].val[data.depthIndex9].val[data.depthIndex10].val = data.expressTemp;
                                                } else {valTemp[data.depthIndex1].val[data.depthIndex2].val[data.depthIndex3].val[data.depthIndex4].val[data.depthIndex5].val[data.depthIndex6].val[data.depthIndex7].val[data.depthIndex8].val[data.depthIndex9].val = data.fracHold;}
                                            } else {
                                                if (data.fracHold.length < 1) {
                                                    valTemp[data.depthIndex1].val[data.depthIndex2].val[data.depthIndex3].val[data.depthIndex4].val[data.depthIndex5].val[data.depthIndex6].val[data.depthIndex7].val[data.depthIndex8].val[data.depthIndex9].val = data.expressTemp;
                                                } else {valTemp[data.depthIndex1].val[data.depthIndex2].val[data.depthIndex3].val[data.depthIndex4].val[data.depthIndex5].val[data.depthIndex6].val[data.depthIndex7].val[data.depthIndex8].val = data.fracHold;}
                                            }
                                        } else {
                                            if (data.fracHold.length < 1) {
                                                valTemp[data.depthIndex1].val[data.depthIndex2].val[data.depthIndex3].val[data.depthIndex4].val[data.depthIndex5].val[data.depthIndex6].val[data.depthIndex7].val[data.depthIndex8].val = data.expressTemp;
                                            } else {valTemp[data.depthIndex1].val[data.depthIndex2].val[data.depthIndex3].val[data.depthIndex4].val[data.depthIndex5].val[data.depthIndex6].val[data.depthIndex7].val = data.fracHold;}
                                        }
                                    } else {
                                        if (data.fracHold.length < 1) {
                                            valTemp[data.depthIndex1].val[data.depthIndex2].val[data.depthIndex3].val[data.depthIndex4].val[data.depthIndex5].val[data.depthIndex6].val[data.depthIndex7].val = data.expressTemp;
                                        } else {valTemp[data.depthIndex1].val[data.depthIndex2].val[data.depthIndex3].val[data.depthIndex4].val[data.depthIndex5].val[data.depthIndex6].val = data.fracHold;}
                                    }
                                } else {
                                    if (data.fracHold.length < 1) {
                                        valTemp[data.depthIndex1].val[data.depthIndex2].val[data.depthIndex3].val[data.depthIndex4].val[data.depthIndex5].val[data.depthIndex6].val = data.expressTemp;
                                    } else {valTemp[data.depthIndex1].val[data.depthIndex2].val[data.depthIndex3].val[data.depthIndex4].val[data.depthIndex5].val = data.fracHold;}
                                }
                            } else {
                                if (data.fracHold.length < 1) {
                                    valTemp[data.depthIndex1].val[data.depthIndex2].val[data.depthIndex3].val[data.depthIndex4].val[data.depthIndex5].val = data.expressTemp;
                                } else {valTemp[data.depthIndex1].val[data.depthIndex2].val[data.depthIndex3].val[data.depthIndex4].val = data.fracHold;}
                            }
                        } else {
                            if (data.fracHold.length < 1) {
                                valTemp[data.depthIndex1].val[data.depthIndex2].val[data.depthIndex3].val[data.depthIndex4].val = data.expressTemp;
                            } else {valTemp[data.depthIndex1].val[data.depthIndex2].val[data.depthIndex3].val = data.fracHold;}
                        }
                    } else {
                        if (data.fracHold.length < 1) {
                            valTemp[data.depthIndex1].val[data.depthIndex2].val[data.depthIndex3].val = data.expressTemp;
                        } else {valTemp[data.depthIndex1].val[data.depthIndex2].val = data.fracHold;}
                    }
                } else {
                    if (data.fracHold.length < 1) {
                        valTemp[data.depthIndex1].val[data.depthIndex2].val = data.expressTemp;
                    } else {valTemp[data.depthIndex1].val = data.fracHold;}
                }
            } else {valTemp[data.depthIndex1].val = data.expressTemp;}
        } else { valTemp = data.expressTemp;}

        return valTemp;
    }
    //Key Input
    function handleKey(e) {

        let data = setExpress(values.current);
        let key = keySelect(e.key);

        if (key != '') {
            if (!numExt) {
                data.expressTemp.push({
                    val: key,
                    type: 'num',
                    neg: false,
                });
                setNumExt(true);
                setNumCount(numCount + 1);
            } else {
                data.expressTemp[data.expressTemp.length-1].val += key;
                setNumCount(numCount + 1);
            }
        }
        
        values.current = getExpress(data);
    }
    function keySelect(key) {
        switch (key) {
            case '1':
                return '1';
            case '2':
                return '2';
            case '3':
                return '3';
            case '4':
                return '4';
            case '5':
                return '5';
            case '6':
                return '6';
            case '7':
                return '7';
            case '8':
                return '8';
            case '9':
                return '9';
            case '0':
                return '0';
            case '.':
                return '.';
            default:
                return '';
        }
    }
    function handleKeyUp() {
        setNumCount(numCount - 1);
    }
    function numButton(num) {

        let data = setExpress(values.current);
        let key = num;

        if (!numExt) {
            data.expressTemp.push({
                val: key,
                type: 'num',
                neg: false,
            });
            setNumExt(true);
            setNumCount(numCount + 1);
        } else {
            data.expressTemp[data.expressTemp.length-1].val += key;
        }
        
        values.current = getExpress(data);
        document.getElementById('textInput').focus()
        setKeyN(keyN+1);
    }
    
    //Add Handler
    function handleAdd(){
        
        let data = setExpress(values.current);

        setNumExt(false);
        setOpCount(opCount + 1);
        data.expressTemp.push({
            val: '+',
            type: 'op',
        });

        values.current = getExpress(data);
        document.getElementById('textInput').focus()
    }
    //Sub Handler
    function handleSub(){

        let data = setExpress(values.current);

        setNumExt(false);
        setOpCount(opCount + 1);
        data.expressTemp.push({
            val: '–',
            type: 'op',
        });

        values.current = getExpress(data);
        document.getElementById('textInput').focus()
    }
    //Mult Handler
    function handleMult(){

        let data = setExpress(values.current);

        setNumExt(false);
        setOpCount(opCount + 1);
        data.expressTemp.push({
            val: '×',
            type: 'op',
        });

        values.current = getExpress(data);
        document.getElementById('textInput').focus()
    }
    //Div Handler
    function handleDiv(){

        let data = setExpress(values.current);

        setNumExt(false);
        setOpCount(opCount + 1);
        data.expressTemp.push({
            val: '÷',
            type: 'op',
        });

        values.current = getExpress(data);
        document.getElementById('textInput').focus()
    }
    //Exp Handler
    function handleExp() {

        let data = setExpress(values.current);

        setNumExt(true);
        setNumCount(numCount + 1);
        data.expressTemp.push({
            val: '',
            type: 'exp',
        });

        values.current = getExpress(data);
        document.getElementById('textInput').focus()
    }
    //Neg Handler
    function handleNeg() {

        let data = setExpress(values.current);

        if (data.expressTemp.length == 0){
            data.expressTemp.push({
                val: '',
                type: 'num',
                neg: true,
            });
            setNumExt(true);
            setNumCount(numCount + 1);
        } else if (data.expressTemp[data.expressTemp.length-1].type == 'exp') {
            data.expressTemp[data.expressTemp.length-1].neg = true;
            setNumCount(numCount + 1);
        } else{
            data.expressTemp.push({
                val: '',
                type: 'num',
                neg: true,
            });
            setNumExt(true);
            setNumCount(numCount + 1);
        }

        values.current = getExpress(data);
        document.getElementById('textInput').focus();
    }
    // Par Handlers
    function handleParOpen() {

        let data = setExpress(values.current);

        if (data.depthIndex10 == -1) {
            data.expressTemp.push({
                val: [],
                type: 'par',
                neg: false,
            });
            setKeyP(keyP+1);

            if (data.expressTemp.length > 1) {
                if (data.expressTemp[data.expressTemp.length-2].type == 'num') {
                    if (data.expressTemp[data.expressTemp.length-2].neg && data.expressTemp[data.expressTemp.length-2].val == '') {
                        data.expressTemp.splice(data.expressTemp.length-2, 1)
                        data.expressTemp[data.expressTemp.length-1].neg = true;
                    }
                }
            }
        }

        setNumExt(false);
        values.current = getExpress(data);
        document.getElementById('textInput').focus()
    }
    function handleParClose() {

        let data = setExpress(values.current);
        
        if (data.depthIndex2 > -1) {
            if (data.depthIndex3 > -1) {
                if (data.depthIndex4 > -1) {
                    if (data.depthIndex5 > -1) {
                        if (data.depthIndex6 > -1) {
                            if (data.depthIndex7 > -1) {
                                if (data.depthIndex8 > -1) {
                                    if (data.depthIndex9 > -1) {
                                        if (data.depthIndex10 > -1) {
                                            setParExit10(true);
                                        } else {setParExit9(true);}
                                    } else {setParExit8(true);}
                                } else {setParExit7(true);}
                            } else {setParExit6(true);}
                        } else {setParExit5(true);}
                    } else {setParExit4(true);}
                } else {setParExit3(true);}
            } else {setParExit2(true);}
        } else {setParExit1(true);}

        setNumExt(false);
        setKeyP(keyP-1);
        values.current = getExpress(data);
        document.getElementById('textInput').focus()
    }

    //Frac Hanlder
    function handleFrac() {

        let data = setExpress(values.current);

        switch (fracState) {
            case 0:

                if (data.depthIndex9 == -1) {
                    data.expressTemp.push({
                        val: [
                            {
                                val: [],
                                type: 'par',
                                neg: false,
                            }
                        ],
                        type: 'frac',
                        neg: false
                    }
                    );
            
                    if (data.expressTemp.length > 1) {
                        if (data.expressTemp[data.expressTemp.length-2].type == 'num') {
                            if (data.expressTemp[data.expressTemp.length-2].neg && data.expressTemp[data.expressTemp.length-2].val == '') {
                                data.expressTemp.splice(data.expressTemp.length-2, 1)
                                data.expressTemp[data.expressTemp.length-1].neg = true;
                            }
                        }
                    }

                    setFracState(1);
                }

                setNumExt(false);
                break;
            case 1:

                data.fracTemp.push({
                    val: '÷',
                    type: 'op',
                },{
                    val: [],
                    type: 'par',
                    neg: false,
                });

                data.fracHold = data.fracTemp;
                setNumExt(false);
                setFracState(2);
                break;
            case 2:
                if (data.depthIndex3 > -1) {
                    if (data.depthIndex4 > -1) {
                        if (data.depthIndex5 > -1) {
                            if (data.depthIndex6 > -1) {
                                if (data.depthIndex7 > -1) {
                                    if (data.depthIndex8 > -1) {
                                        if (data.depthIndex9 > -1) {
                                            if (data.depthIndex10 > -1) {
                                                setFracExit9(true);
                                            } else {setFracExit8(true);}
                                        } else {setFracExit7(true);}
                                    } else {setFracExit6(true);}
                                } else {setFracExit5(true);}
                            } else {setFracExit4(true);}
                        } else {setFracExit3(true);}
                    } else {setFracExit2(true);}
                } else {setFracExit1(true);}

                setNumExt(false);
                setFracState(0);
                break;
            default:
                break;
        }

        values.current = getExpress(data);
        document.getElementById('textInput').focus()
    }
    function fracColor(fracState) {

        switch (fracState) {
            case 0:
                return 'primary';
            case 1:
                return 'depth2';
            case 2:
                return 'depth3';
            default:
                break;
        }
    }

    //Equate Handler
    function handleEquate(){
        let valTemp = values.current;

        if (valTemp.length == 0) {
            setAnswer('')
        } else{ 
            let answerTemp = calcExpress(valTemp).val;
            if (answerTemp == 'error' || answerTemp == 'NaN') {
                setAnswer('error');
            } else {
                answerTemp = parseFloat(answerTemp);
                if (answerTemp == 0 || answerTemp == '') {
                    
                } else if (Math.abs(answerTemp) > 1000000) {
                    answerTemp = answerTemp.toExponential(2);
                }else if (Math.abs(answerTemp) < .0001) {
                    answerTemp = answerTemp.toExponential(2);
                } else {
                    answerTemp = answerTemp.toFixed(6);

                    let answerTempA = answerTemp.split('');
                    let breakA = false;

                    while (answerTempA[answerTempA.length-1] == '0' && !breakA) {
                        answerTempA.pop();
                        
                        if (answerTempA[answerTempA.length-1] == '.') {
                            answerTempA.pop();
                            breakA = true;
                        }
                    }
                    answerTemp = answerTempA;
                }
                setAnswer(answerTemp);
            }
        }
        values.current = [];
        setNumCount(0);
        setOpCount(0);
        setNumExt(false);
        setParExit1(false);
        setParExit2(false);
        setParExit3(false);
        setParExit4(false);
        setParExit5(false);
        setParExit6(false);
        setParExit7(false);
        setParExit8(false);
        setParExit9(false);
        setParExit10(false);
        setFracState(0);
        setFracExit1(false);
        setFracExit2(false);
        setFracExit3(false);
        setFracExit4(false);
        setFracExit5(false);
        setFracExit6(false);
        setFracExit7(false);
        setFracExit8(false);
        setFracExit9(false);
        setFracExit10(false);
        document.getElementById('textInput').focus()
    }
    function doOp(op, val1, val2) {
        switch (op) {
            case '+':
                return val1 + val2;

            case '–':
                return val1 - val2;

            case '×':
                return val1 * val2;

            case '÷':
                return val1 / val2;
            
            case 'exp':
                return Math.pow(val1,val2);
            default:
                break;
        }
    }
    function makeNeg(val) {
        return (val.neg) ? parseFloat(val.val) * -1 : parseFloat(val.val);
    }
    function calcExpress(valTemp) {

        let calcAns = 0;
        let currentOp = '+';
        let orderIndex = -1;

        try {
            do {
                //Par
                orderIndex = valTemp.findIndex((val)=>{
                    return val.type == 'par' || val.type == 'frac';
                })
        
                if (orderIndex > -1) {
                    let neg = (valTemp[orderIndex].neg) ? -1 : 1;
                    let numTemp = 0;
                    valTemp.splice(orderIndex, 1, calcExpress(valTemp[orderIndex].val));
                    numTemp = parseFloat(valTemp[orderIndex].val) * neg;
                    valTemp[orderIndex].val = numTemp.toString();
                    calcAns = numTemp;
                    if (valTemp.length > 1 && orderIndex > 0) {
                        if (valTemp[orderIndex-1].type != 'op') {
                            valTemp.splice(orderIndex, 0, {
                                val : '×',
                                type: 'op'
                            })
                        }
                    }
                } else {
                    //Exp
                    orderIndex = valTemp.findIndex((val)=>{
                        return val.type == 'exp';
                    })
                    
                    if (orderIndex > -1) {
                        currentOp = 'exp';
                        calcAns = doOp(currentOp, makeNeg(valTemp[orderIndex-1]), makeNeg(valTemp[orderIndex]));
                        valTemp.splice(orderIndex-1, 2, {
                            val: calcAns.toString(),
                            type: 'num',
                        })
                    } else {
                        //Mult & Div
                        orderIndex = valTemp.findIndex((val)=>{
                            return val.val == '×' || val.val == '÷';
                        })
    
                        if (orderIndex > -1) {
                            currentOp = valTemp[orderIndex].val;
                            calcAns = doOp(currentOp, makeNeg(valTemp[orderIndex-1]), makeNeg(valTemp[orderIndex+1]));
                            valTemp.splice(orderIndex-1, 3, {
                                val: calcAns.toString(),
                                type: 'num',
                            })
                        } else {
                            //Add & Sub
                            orderIndex = valTemp.findIndex((val)=>{
                                return val.val == '+' || val.val == '–';
                            })
                
                            if (orderIndex > -1) {
                                currentOp = valTemp[orderIndex].val;
                                calcAns = doOp(currentOp, makeNeg(valTemp[orderIndex-1]), makeNeg(valTemp[orderIndex+1]));
                                valTemp.splice(orderIndex-1, 3, {
                                    val: calcAns.toString(),
                                    type: 'num',
                                })
                            } else {
                                if (valTemp[0] == '+' || valTemp[0] == '–' || valTemp[0] == '×' || valTemp[0] == '÷' || valTemp[0] == 'error') {
                                    calcAns = 'error';
                                } else{

                                    orderIndex = valTemp.findIndex((val)=>{
                                        return val.neg;
                                    })
                        
                                    if (orderIndex > -1) {
                                        throw error;
                                    }

                                    //One Number
                                    calcAns = makeNeg(valTemp[0]);
                                }
                            }
                        }
                    }
                }
            } while (valTemp.length > 1)
        } catch (error) {
            calcAns = 'error';
        }

        return {
            val: calcAns.toString(),
            type: 'num',
        };
    }

    //Clear Handler
    function handleClear(){
        
        values.current = [];
        setAnswer('')
        setNumCount(0);
        setNumExt(false);
        setParExit1(false);
        setParExit2(false);
        setParExit3(false);
        setParExit4(false);
        setParExit5(false);
        setParExit6(false);
        setParExit7(false);
        setParExit8(false);
        setParExit9(false);
        setParExit10(false);
        setFracState(0);
        setFracExit1(false);
        setFracExit2(false);
        setFracExit3(false);
        setFracExit4(false);
        setFracExit5(false);
        setFracExit6(false);
        setFracExit7(false);
        setFracExit8(false);
        setFracExit9(false);
        setFracExit10(false);
        document.getElementById('textInput').focus()
    }


    return (
        <Box 
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
        }}>
            {/* Main Input Display */}
            <input
                id='textInput'
                onKeyDown={handleKey}
                onKeyUp={handleKeyUp}
                autoFocus={true}
                style={{ opacity: 0,}}
            >
            </input>
            <ButtonBase
                disableRipple
                onClick={()=>document.getElementById('textInput').focus()}
            >
                <Box 
                    //contentEditable 
                    id='calcDis'
                    sx={{
                        mb: 5,
                        pr: 1,
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        minWidth: {xs: '350px', sm: '450px', md: '550px'}, 
                        minHeight: '60px',
                        border: '1.5px solid gray',
                        borderRadius: '10px',
                        '&:hover': {
                            borderColor: 'black',
                        },
                        '&:focus': {
                            borderColor: 'primary.main',
                            outline: '0px solid transparent'
                        },
                }}>
                    uuu
                    {(values.current.length == 0) ? (
                        <Typography variant="calc" fontSize={{xs: '30px', sm: '35px', md: '40px'}}>{answer}</Typography>
                    ):(<></>)}
                    {values.current.map((val,index)=>(
                        <CalcExpression key={`calcExpress${index}`} val={val} index={index}/>
                    ))}
                </Box>
            </ButtonBase>
            {/* Buttons */}
            <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: 'flex-start',
            }}>
                {/* Num Buttons */}
                <Grid 
                    container 
                    spacing={0} 
                    columns={12}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'flex-start',
                        mx: 1,
                        maxWidth: {xs: '140px', sm: '180px', md: '250px'},
                }}>
                    {numKey.map((num)=>(
                        <Grid item xs={4}  key={num.id} sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: 'center',
                        }}>
                            <Button
                                onClick={num.func}
                                variant='contained'
                                disableRipple
                                sx={{
                                    color: 'white', 
                                    m: {xs: .1, sm: .5, md: 1}, 
                                    minWidth: {xs: '45px', sm: '55px', md: '70px'}, 
                                    height: {xs: '45px', sm: '55px', md: '70px'}, 
                                    width: {xs: '45px', sm: '55px', md: '70px'},
                                }}
                            >
                                <Typography variant='h3' align='center' color='white' >{num.title}</Typography>
                            </Button>
                        </Grid>
                    ))}
                </Grid>
                {/* Op Buttons */}
                <Grid 
                    container 
                    spacing={0} 
                    columns={12}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'flex-start',
                        mx: 1,
                        maxWidth: {xs: '190px', sm: '250px', md: '320px'},
                }}>
                    {opKey.map((num)=>(
                        <Grid item xs={3}  key={num.id} sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: 'flex-start',
                        }}>
                            <Button
                                onClick={num.func}
                                variant='contained'
                                disableRipple
                                sx={{
                                    color: 'white', 
                                    m: {xs: .1, sm: .5, md: 1}, 
                                    minWidth: {xs: '45px', sm: '55px', md: '70px'}, 
                                    height: {xs: '45px', sm: '55px', md: '70px'},
                                    width: {xs: '45px', sm: '55px', md: '70px'},
                                }}
                            >
                                <Typography variant='h3' align='center' color='white' >{num.title}</Typography>
                            </Button>
                        </Grid>
                    ))}
                    {/* Frac */}
                    <Grid item xs={3} sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: 'center',
                        }}>
                        <Button
                            onClick={handleFrac}
                            variant='contained'
                            color={fracColor(fracState)}
                            disableRipple
                            sx={{
                                color: 'white', 
                                m: {xs: .1, sm: .5, md: 1,}, 
                                display: 'flex',
                                flexDirection: 'column',
                                minWidth: {xs: '45px', sm: '55px', md: '70px'},
                                height: {xs: '45px', sm: '55px', md: '70px'}, 
                                width: {xs: '45px', sm: '55px', md: '70px'},
                            }}
                        >
                            <Typography variant='h4' align='center' color='white' >□</Typography>
                            <Box sx={{
                                border: '1px solid white',
                                borderRadius: '5px',
                                maxHeight: '1px',
                                width: '100%',
                            }} />
                            <Typography variant='h4' align='center' color='white' sx={{
                                position: 'relative',
                                top: -7
                            }} >□</Typography>
                        </Button>
                        
                    </Grid>
                    {/* Equate */}
                    <Grid item xs={9} sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: 'center',
                        }}>
                            <Button
                                onClick={handleEquate}
                                variant='contained'
                                disableRipple
                                sx={{
                                    color: 'white', 
                                    my: {xs: .1, sm: .5, md: 1}, 
                                    minWidth: {xs: '138px', sm: '178px', md: '230px'},
                                    height: {xs: '92px', sm: '118px', md: '156px'},
                                    width: {xs: '138px', sm: '178px', md: '230px'},
                                }}
                            >
                                <Typography variant='h2' align='center' color='white' >=</Typography>
                            </Button>
                    </Grid>
                    {/* Clear */}
                    <Grid item xs={3} sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: 'center',
                    }}>
                        <Button
                            onClick={handleClear}
                            variant='contained'
                            disableRipple
                            sx={{
                                color: 'white', 
                                my: {xs: .1, sm: .5, md: 1, lg: 1, xl: 1}, 
                                minWidth: {xs: '45px', sm: '55px', md: '70px'},
                                height: {xs: '92px', sm: '118px', md: '156px'},
                                width: {xs: '45px', sm: '55px', md: '70px'},
                            }}
                        >
                            <Typography variant='h2' align='center' color='white' >C</Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}