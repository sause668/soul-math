import { MenuItem, Typography, Collapse } from "@mui/material";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState, useEffect } from "react";
import {useRouter} from 'next/router'


export default function NavDir({grade, close, topicIndex, unitIndex}) {
    const [tableCol, setTableCol] = useState(null);
    const router = useRouter();
    const dynamicRoute = router.asPath;

    function changeTableCol(index) {
        (index == tableCol) ? setTableCol(null) : setTableCol(index);
    };

    useEffect(() => {
        setTableCol(unitIndex);
    }, [dynamicRoute, unitIndex])// When the dynamic route change reset the state

    return (
        <>
            {grade.unitDir.map((unit, uIndex) => (
                <div key={`${grade.id}${unit.id}PageDir`} style={{}} >
                    <MenuItem onClick={()=>changeTableCol(uIndex)} sx={{alignItems: 'center',}} >
                        <Typography variant="body1" color='white' align="left" >
                            {unit.title}
                            {(uIndex == tableCol) ? <ExpandLess /> : <ExpandMore />}
                        </Typography>
                    </MenuItem>
                    <Collapse in={(uIndex == tableCol)} timeout="auto" unmountOnExit>
                        {unit.topicDir.map((topic, tIndex) => (
                            <MenuItem 
                                key={`${grade.id}${unit.id}${topic.id}PageDirT`}
                                onClick={()=>{
                                    router.push(`/${grade.id}/${topic.id}`);
                                    router.reload();
                                }}
                                selected={(topicIndex == tIndex & unitIndex == uIndex)}
                            >
                                <Typography 
                                    variant="body2" 
                                    color='white' 
                                    align="left" 
                                >
                                    {topic.title}
                                </Typography>
                            </MenuItem>
                        ))}
                    </Collapse>
                </div>
            ))}
        </>
    );
}