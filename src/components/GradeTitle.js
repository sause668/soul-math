import { Box, Typography, Container} from "@mui/material";


export default function GradeTitle({grade}) {

    return (
        <Box sx={{backgroundColor: "secondary.main", paddingTop: '80px', paddingBottom: '10px'}} >
            <Container sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: 'center',
            }} >
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: 'center',
                    backgroundColor: 'primary.main',
                    borderRadius: '40px',
                    p: 1,
                }} >
                    <Typography variant="h1" color="white" align="center" >
                        {grade.title}
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}