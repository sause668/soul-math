import { Box, Typography, Container, Grid, ButtonBase, Card, CardContent } from "@mui/material";
import Link from "next/link";


export default function GradeContent({grade}) {
    return (
        <Box sx={{backgroundColor: "secondary.main", pt: '0px', pb: '60px'}} >
            <Container sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: 'top',
                
            }} >
                <Grid container spacing={2} columns={13} sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'flex-start',
                        my: 2,
                }}>
                    {grade.unitDir.map((unit)=>(
                        <Grid item xs={12} md={6} lg={4}  key={`${unit.id}${grade.id}Grade`} id={`${unit.id}`} sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: 'top',
                        }}>
                            <Box sx={{mt: '60px', mb: '-40px'}} >
                            <Card sx={{borderRadius: '20px', width: '100%'}}>
                                <CardContent sx={{
                                    backgroundColor: 'primary.main',
                                }}>
                                <Typography variant="h3" color="white" align="center" >{unit.title}</Typography>
                                </CardContent>
                                <CardContent sx={{
                                    display: "flex",
                                    flexDirection: 'column',
                                    justifyContent: "center",
                                    alignItems: 'top',
                                }}>
                                {unit.topicDir.map((topic)=>(
                                    <ButtonBase 
                                        key={`${topic.id}${unit.id}${grade.id}Grade`} 
                                        component={Link}
                                        href={`/${grade.id}/${topic.id}`}
                                        sx={{
                                            my: 1,
                                        }}
                                    >
                                        <Typography variant="h5" color="primary" align="center" >{topic.title}</Typography>
                                    </ButtonBase>
                                ))}
                                </CardContent>
                            </Card>
                            </Box>
                            
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}