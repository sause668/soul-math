import { Box, Typography } from "@mui/material";
import React from "react";
import CalcExpression from "./CalcExpression";

export default function CalcFraction({val, neg}) {

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
        <Typography variant="calc" color='black' fontSize={{xs: '30px', sm: '35px', md: '40px'}}>{(neg) ? '-' : ''}</Typography>
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
                {(val[0].val < 1) ? (
                    <Typography variant="calc" color='black' fontSize={{xs: '30px', sm: '35px', md: '40px'}} >□</Typography>
                ):(
                    <React.Fragment>
                        {val[0].val.map((val,index)=>(
                            <CalcExpression key={`calcFracT${index}`} val={val} index={index}/>
                        ))}
                    </React.Fragment>
                )}
                
            </Box>
            <Box sx={{
                border: '2.3px solid black',
                borderRadius: '5px',
                maxHeight: '1px',
                width: '100%',
            }} />
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
            }}>
                {(val.length < 3) ? (
                    <Typography variant="calc" color='black' sx={{opacity: 0}} fontSize={{xs: '30px', sm: '35px', md: '40px'}}>□</Typography>
                ):(
                    <React.Fragment>
                        {(val[2].val.length < 1) ? (
                            <Typography variant="calc" color='black'  >□</Typography>
                        ):(
                            <React.Fragment>
                                {val[2].val.map((val,index)=>(
                                    <CalcExpression key={`calcFracB${index}`} val={val} index={index}/>
                                ))}
                            </React.Fragment>
                        )}
                    </React.Fragment>
                )}
            </Box>
        </Box>
        </Box>
        
    );
}