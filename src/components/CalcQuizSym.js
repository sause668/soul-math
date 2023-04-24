import { Typography } from "@mui/material";

export default function CalcQuizSym({val}) {
    return (
        <Typography color='black' variant="calc" fontSize={{xs: '30px', sm: '35px', md: '40px'}}>{val}</Typography>
    );
}