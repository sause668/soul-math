import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem, ButtonGroup, ButtonBase } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from '@mui/material';
import { mainDir } from "@/lib/directories/mainDir";
import { useState} from "react";
import NavDir from "./NavDir";


export default function Nav({gradeIndex}) {

    const mobile = useMediaQuery('(min-width:1000px)');
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    
    const handleMenuClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
      setAnchorEl(null);
    };

    return (
        <AppBar sx={{
            backgroundColor: "primary.main", 
            width: '100%',
            position: 'fixed', 
            top: '0px', 
            zIndex: 999
        }} >
            {!mobile ? (
                // Mobile Nav
                <Toolbar>
                    {/* Mobile Menu Button */}
                    <IconButton 
                        color="secondary" 
                        size="large" 
                        onClick={handleMenuClick} 
                        sx={{mr: 2}}
                    >
                        <MenuIcon fontSize="large"/>
                    </IconButton>
                    {/* Mobile Menu */}
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleMenuClose}
                        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                backgroundColor: 'primary.main',
                                color: 'white',
                                borderRadius: '7px',
                            }
                        }}
                    >
                        {mainDir.map((grade, index)=>(
                            <div key={`${grade.id}mobGradeNav`}>
                            <MenuItem 
                                 onClick={()=>setAnchorEl(null)}
                                 component={Link}
                                 href={`/${grade.id}`}
                                 sx={{fontWeight: 700}}
                            >
                                {grade.title}
                            </MenuItem>
                            {(gradeIndex == index) ?  (<NavDir grade={mainDir[gradeIndex]} />) : (<></>)}
                            </div>
                        ))}
                    </Menu>
                    {/* Mobile Loge */}
                    <ButtonBase
                        component={Link}
                        href='/'
                        sx={{position: 'absolute', top: '0px', left: '50%', transform: 'translate(-50%, 10%)'}}
                    >
                        <Image 
                            src='/img/logos/main-logo-inverted.png'
                            height={50} 
                            width={50*338/305} 
                            alt='Nav Logo'
                        />
                    </ButtonBase>
                </Toolbar>
            ) : (
                // Nav
                <Toolbar>
                    {/* Logo */}
                    <ButtonBase
                        component={Link}
                        href='/'
                    >
                        <Image 
                            src='/img/logos/main-logo-inverted.png'
                            height={50} 
                            width={50*338/305} 
                            alt='Nav Logo'
                            
                        />
                    </ButtonBase>
                    {/* Menu */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'}, ml: 3 }}>
                        {mainDir.map((grade, index)=>(
                            <Button 
                                key={`${grade.id}GradeNav`}
                                component={Link}
                                href={`/${grade.id}`}
                                variant={(gradeIndex == index) ? 'contained' : ''}
                                color="myWhite" 
                                sx={{display: 'block', mx: 2,}}
                            >
                                <Typography align='center' color={(gradeIndex == index) ? 'primary' : 'white'}  variant="h6">
                                    {grade.title}
                                </Typography>
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            )}
        </AppBar>
    )
}