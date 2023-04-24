import { Box, Typography } from "@mui/material";
import React from "react";
import CalcExponent from "./CalcExponent";
import CalcExpression from "./CalcExpression";
import CalcNumber from "./CalcNumber";
import CalcOperation from "./CalcOperation";

export default function CalcParentheses({val, neg}) {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
        }}>
        <Typography variant="calc" fontSize={{xs: '30px', sm: '35px', md: '40px'}} >{(neg) ? '-' : ''}(</Typography>
        {val.map((val,index)=>(
            <CalcExpression key={`calcExpress${index}`} val={val} index={index}/>
        ))}
        <Typography variant="calc" fontSize={{xs: '30px', sm: '35px', md: '40px'}} >)</Typography>
        </Box>
        
    );
}