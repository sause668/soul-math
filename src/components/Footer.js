import { Box, Typography } from "@mui/material";


export default function Footer() {
    return (
        <Box sx={{
            backgroundColor: "primary.main",
        }} >
            <Typography variant="h5" color="white" align="right" sx={{pr: '10px', pt: '25px'}} >SOUL SITES</Typography>
            <Typography variant="h6" color="white" align="right" sx={{pr: '10px', pb: '25px'}} >Soul Never Dies</Typography>
        </Box>
    )
}