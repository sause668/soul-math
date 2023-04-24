import React from "react";
import CalcQuizExp from "./CalcQuizExp";
import CalcQuizFrac from "./CalcQuizFrac";
import CalcQuizNum from "./CalcQuizNum";
import CalcQuizOp from "./CalcQuizOp";
import CalcQuizPar from "./CalcQuizPar";
import CalcQuizSym from "./CalcQuizSym";

export default function CalcQuizExpress({val, index}) {
    return (
        <div id={`${val.type}${index}`} >
            {(val.type == 'num') ? (
                <CalcQuizNum val={val.val} neg={val.neg}/>
            ):(
                <React.Fragment>
                    {(val.type == 'exp') ? (
                    <CalcQuizExp val={val.val} neg={val.neg}/>
                    ):(
                        <React.Fragment>
                            {(val.type == 'op') ? (
                                <CalcQuizOp val={val.val}/>
                            ):(
                                <React.Fragment>
                                    {(val.type == 'par') ? (
                                        <CalcQuizPar val={val.val} neg={val.neg}/>
                                    ):(
                                        <React.Fragment>
                                            {(val.type == 'frac') ? (
                                                <CalcQuizFrac val={val.val} neg={val.neg}/>
                                            ):(
                                                <React.Fragment>
                                                    {(val.type == 'sym') ? (
                                                        <CalcQuizSym val={val.val}/>
                                                    ):(<React.Fragment></React.Fragment>)}
                                                </React.Fragment>
                                            )}
                                        </React.Fragment>
                                    )}
                                </React.Fragment>
                            )}
                        </React.Fragment>
                    )}
                </React.Fragment>
            )}
        </div>
    );
}