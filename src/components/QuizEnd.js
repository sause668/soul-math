import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";

export default function QuizEnd({quiz, pageState, setPageState, results}) {

    const mobile = useMediaQuery('(min-width:1100px)');
    const phone = useMediaQuery('(min-width:600px)');

    function logoSize() {
        let sizer = .5;
        let height = 500*sizer;
        let width = 500*sizer;
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

    function resetQuiz() {
        results.current = [];
        setPageState(1000);
    }

    function grade() {
        let check = 0;
        let total = 0;

        results.current.forEach((answer)=>{
            if (answer) {
                check += 1;
            }
            total += 1;
        })

        let final = check/total;

        return (final >= .8) ? true : false;
    }

    return (
        <Box 
            hidden={(pageState!=2000)}
            sx={{
                visibility: (pageState!=2000) ? 'hidden' : 'visible',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
        }}>
            <Box sx={{
                mb: 3,
                mt: 3,
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                flexWrap: 'wrap',

            }}>
                {results.current.map((result, index)=>(
                    <Box key={`${quiz.id}Result${index}`} sx={{mx: 1}} >
                        {(result) ? (
                            <Box sx={{position: 'relative'}} >
                            <Image 
                                src='/img/quiz/logo-correct.png'
                                height={logoSize().height} 
                                width={logoSize().width} 
                                alt='Nav Logo'
                                style={{marginBottom: 2, paddingBottom: 0}}
                            />
                            <Typography color='myWhite.main' variant="h4" sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                zIndex: 99,

                            }}>
                                {index + 1}
                            </Typography>
                        </Box>
                        ) : (
                            <Box sx={{position: 'relative'}} >
                                <Image 
                                    src='/img/quiz/logo-wrong.png'
                                    height={logoSize().height} 
                                    width={logoSize().width} 
                                    alt='Nav Logo'
                                    style={{marginBottom: 2, paddingBottom: 0}}
                                />
                                <Typography color='myWhite.main' variant="h4" sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    zIndex: 99,

                                }}>
                                    {index + 1}
                                </Typography>
                            </Box>
                        )}
                    </Box>
                ))}
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mb: 4
            
            }}>
            <Typography variant="h3" align="center" mr={1} >
                {(grade()) ? 'Human Calculator!' : 'Stop Playing!'} 
            </Typography>
            <Image 
                src={(grade()) ? '/img/quiz/calc.png' : '/img/quiz/play.png'} 
                height={logoSize().height*.4} 
                width={logoSize().width*.4} 
                alt='Nav Logo'
                style={{marginBottom: 0, paddingBottom: 0}}
            />
            </Box>
            <Button 
                variant='contained'
                onClick={resetQuiz}
            >
                <Typography color='myWhite.main'>Start Menu</Typography>
            </Button>
        </Box>
    );
}