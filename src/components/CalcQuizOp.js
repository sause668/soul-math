import { Typography } from "@mui/material";

export default function CalcQuizOp({val}) {
    return (
        <Typography color='black' variant="calc" mx={1} fontSize={{xs: '30px', sm: '35px', md: '40px'}} >{val}</Typography>
    );
}