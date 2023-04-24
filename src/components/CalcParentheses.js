import { Box, Typography } from "@mui/material";
import React from "react";
import CalcExpression from "./CalcExpression";

export default function CalcParentheses({val, neg}) {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
        }}>
        <Typography color='black' variant="calc" fontSize={{xs: '30px', sm: '35px', md: '40px'}} >{(neg) ? '-' : ''}(</Typography>
        {val.map((val,index)=>(
            <CalcExpression key={`calcExpress${index}`} val={val} index={index}/>
        ))}
        <Typography color='black' variant="calc" fontSize={{xs: '30px', sm: '35px', md: '40px'}} >)</Typography>
        </Box>
        
    );
}