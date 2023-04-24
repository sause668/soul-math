import { Box, Typography, Container, useMediaQuery } from "@mui/material";
import Image from "next/image";


export default function HomeTitle() {

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
        <Box sx={{backgroundColor: "primary.main", paddingTop: '30px', paddingBottom: '0px'}} >
            <Container sx={{
                display: "flex",
                flexDirection: 'column',
                justifyContent: "center",
                alignItems: 'center',
            }} >
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: 'center',
                }} >
                    <Typography variant="h1" color="white" align="center" >
                        Soul Math
                        <Image
                            src='/img/logos/main-logo-inverted.png'
                            height={logoSize().height}
                            width={logoSize().width}
                            alt='Nav Logo'
                            style={{marginBottom: 0, paddingBottom: 0}}
                        />
                    </Typography>
                </Box>
                <Typography variant="h6" color="white" align="center" >
                    Lessons, Quizes and Asessment to help conquer Middle School Math
                </Typography>
            </Container>
        </Box>
    )
}