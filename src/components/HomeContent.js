import { Box, Typography, Container, Grid, ButtonBase, Card, CardContent } from "@mui/material";
import { mainDir } from "@/lib/directories/mainDir";
import Link from "next/link";


export default function HomeContent() {
    return (
        <Box sx={{backgroundColor: "secondary.main"}} >
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
                    {mainDir.map((grade)=>(
                        <Grid item xs={12} md={6} lg={4}  key={`${grade.id}HomeGrade`} sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: 'top',
                            m: 1,
                        }}>
                            <Card sx={{borderRadius: '20px', width: '100%'}}>
                                <CardContent sx={{
                                    backgroundColor: 'primary.main',
                                }}>
                                    <ButtonBase
                                        component={Link}
                                        href={`${grade.id}`}
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: 'top',
                                        }}
                                    >
                                        <Typography variant="h3" color="white" align="center" >{grade.title}</Typography>
                                    </ButtonBase>
                                </CardContent>
                                <CardContent sx={{
                                    display: "flex",
                                    flexDirection: 'column',
                                    justifyContent: "center",
                                    alignItems: 'top',
                                }}>
                                    {grade.unitDir.map((unit)=>(
                                        <ButtonBase 
                                            key={`${grade.id}${unit.id}HomeTopic`} 
                                            component={Link}
                                            href={`${grade.id}#${unit.id}`}
                                            sx={{
                                                my: 1,
                                            }}
                                        >
                                            <Typography variant="h5" color="primary" align="center" >{unit.title}</Typography>
                                        </ButtonBase>
                                    ))}
                                </CardContent>
                            </Card>
                            
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}