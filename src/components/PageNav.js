import { MenuList, } from "@mui/material";
import NavDir from "./NavDir";


export default function PageNav({mobile, grade, topicIndex, unitIndex}) {
    return (
        <>
            {!mobile ? (<></>) : (
                <MenuList 
                    sx={{
                        minWidth: '250px',
                        maxWidth: '251px',
                        bgcolor: 'primary.main',
                        zIndex: '99',
                        pt: 9,
                        overflowY: 'scroll',
                        overflowX: 'hidden',
                    }}
                >
                    <NavDir grade={grade} topicIndex={topicIndex} unitIndex={unitIndex}/>
                </MenuList>
            )}
        </>
    );
}