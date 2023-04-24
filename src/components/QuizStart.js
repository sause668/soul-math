import { Box, Button, MenuItem, MenuList, Typography, Container } from "@mui/material";

export default function QuizStart({quiz, pageState, setPageState, unitTitle}) {
    return (
        <Box 
            hidden={(pageState!=1000)}
            sx={{
                visibility: (pageState!=1000) ? 'hidden' : 'visible',
                position: 'absolute',
                top: '120px',
                left: '50%',
                transform: 'translate(-50%, 0%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
        }}>
            <Typography align='center' variant='h1' m={0} >{unitTitle}</Typography>
            <Typography align='center' variant='h2' m={4} >{quiz.title}</Typography>
            
            
            <Typography align='center' variant='h3' m={2} px={0} ><b>Instructions: </b>{quiz.dis}</Typography>
            
            <Button 
                variant='contained'
                onClick={()=>setPageState(0)}
                sx={{m: 3}}
            >
                <Typography color='myWhite.main' variant='h4' sx={{borderRadius: '30px'}} >Start Quiz</Typography>
            </Button>
        </Box>
    );
}