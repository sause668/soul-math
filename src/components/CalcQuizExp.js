import { Typography } from "@mui/material";

export default function CalcQuizExp({val, neg}) {
    return (
        <Typography
            color='black' 
            variant="calc"
            fontSize={{xs: '15px', sm: '17.5px', md: '20px'}}
            sx={{
                position: 'relative',
                bottom: '17px',
        }}>
            {(neg) ? '-' : ''}{(val == '') ? '□' : ''}{val}
        </Typography>
    );
}