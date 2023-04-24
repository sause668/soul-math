import { Typography } from "@mui/material";

export default function CalcQuizNum({val, neg}) {
    return (
        <Typography color='black' variant="calc" fontSize={{xs: '30px', sm: '35px', md: '40px'}} >{(neg) ? '-' : ''}{val}</Typography>
    );
}