import { Box, Typography, Container, useMediaQuery, Button } from "@mui/material";
import Link from "next/link";


export default function HomeInfo() {

    const mobile = useMediaQuery('(min-width:1100px)');
    const phone = useMediaQuery('(min-width:600px)');

    function logoSize() {
        let sizer = .15;
        let height = 939*sizer;
        let width = 1042*sizer;
        if (!mobile) {
            if (!phone) {
                height *= .45;
                width *= .45;
            }else {
                height *= .625;
                width *= .625;
            }
        }else {
            height *= .75;
            width *= .75;
        }
        return {height: height, width: width};
    }

    return (
        <Box sx={{backgroundColor: "primary.main", paddingTop: '10px'}} >
            <Container sx={{
                display: "flex",
                flexDirection: 'column',
                justifyContent: "center",
                alignItems: 'center',
            }} >
                <Typography variant="h3" color="white" align="center" mb={2} >
                    Practice, Practice, Practice!!
                </Typography>
                <Button
                    component={Link}
                    href='/calc'
                    variant="contained"
                >
                    <Typography variant="h6" color="white" align="center" >
                        Calculator
                    </Typography>
                </Button>
                
            </Container>
        </Box>
    )
}