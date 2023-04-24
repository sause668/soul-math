import { Typography } from "@mui/material";

export default function CalcExponent({val, neg}) {
    return (
        <Typography
            variant="calc"
            fontSize={{xs: '30px', sm: '35px', md: '40px'}}
            sx={{
                position: 'relative',
                bottom: '17px',
                fontSize: '20px'
        }}>
            {(neg) ? '-' : ''}{(val == '') ? '□' : ''}{val}
        </Typography>
    );
}