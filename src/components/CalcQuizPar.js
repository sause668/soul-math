import { Box, Typography } from "@mui/material";
import React from "react";
import CalcExponent from "./CalcExponent";
import CalcExpression from "./CalcExpression";
import CalcNumber from "./CalcNumber";
import CalcOperation from "./CalcOperation";
import CalcQuizExpress from "./CalcQuizExpress";

export default function CalcQuizPar({val, neg}) {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
        }}>
        <Typography color='black' variant="calc" fontSize={{xs: '30px', sm: '35px', md: '40px'}} >{(neg) ? '-' : ''}(</Typography>
        {val.map((val,index)=>(
            <CalcQuizExpress key={`calcPar${index}`} val={val} index={index}/>
        ))}
        <Typography color='black' variant="calc" fontSize={{xs: '30px', sm: '35px', md: '40px'}} >)</Typography>
        </Box>
        
    );
}