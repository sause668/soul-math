import React from "react";
import CalcExponent from "./CalcExponent";
import CalcFraction from "./CalcFraction";
import CalcNumber from "./CalcNumber";
import CalcOperation from "./CalcOperation";
import CalcParentheses from "./CalcParentheses";
import CalcQuizSym from "./CalcQuizSym";

export default function CalcExpression({val, index}) {
    return (
        <div id={`${val.type}${index}`} >
            {(val.type == 'num') ? (
                <CalcNumber val={val.val} neg={val.neg}/>
            ):(
                <React.Fragment>
                    {(val.type == 'exp') ? (
                    <CalcExponent val={val.val} neg={val.neg}/>
                    ):(
                        <React.Fragment>
                            {(val.type == 'op') ? (
                                <CalcOperation val={val.val}/>
                            ):(
                                <React.Fragment>
                                    {(val.type == 'par') ? (
                                        <CalcParentheses val={val.val} neg={val.neg}/>
                                    ):(<React.Fragment>
                                        {(val.type == 'frac') ? (
                                            <CalcFraction val={val.val} neg={val.neg}/>
                                        ):(<React.Fragment>
                                            {(val.type == 'sym') ? (
                                                <CalcQuizSym val={val.val}/>
                                            ):(<React.Fragment></React.Fragment>)}
                                        </React.Fragment>)}
                                    </React.Fragment>)}
                                </React.Fragment>
                            )}
                        </React.Fragment>
                    )}
                </React.Fragment>
            )}
        </div>
    );
}