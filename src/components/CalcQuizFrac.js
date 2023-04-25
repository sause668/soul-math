import { Box, Typography } from "@mui/material";
import React from "react";
import CalcQuizExpress from "./CalcQuizExpress";

export default function CalcQuizFrac({val, neg}) {

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
        <Typography color='black' variant="calc" fontSize={{xs: '30px', sm: '35px', md: '40px'}}>{(neg) ? '-' : ''}</Typography>
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
        
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
            }}>
                {val[0].val.map((val,index)=>(
                    <CalcQuizExpress key={`calcFracT${index}`} val={val} index={index}/>
                ))}
            </Box>
            <Box sx={{
                border: '2.3px solid black',
                borderRadius: '5px',
                maxHeight: '1px',
                width: '100%',
            }} />
            <Box 
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mt: 1
            }}>
                {val[2].val.map((val,index)=>(
                    <CalcQuizExpress key={`calcFracB${index}`} val={val} index={index}/>
                ))}
            </Box>
        </Box>
        </Box>
        
    );
}