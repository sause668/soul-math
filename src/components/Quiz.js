import { Box, Button, Typography, useMediaQuery, Radio, RadioGroup, FormControlLabel } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import CalcQuiz from "./CalcQuiz";
import CalcQuizExpress from "./CalcQuizExpress";

export default function Quiz({quest, pageState, questIndex, nextQuest, results, topicId}) {

    const mobile = useMediaQuery('(min-width:1100px)');
    const phone = useMediaQuery('(min-width:600px)');
    const [answer, setAnswer] = useState('');
    const [radio, setRadio] = useState('');


    function submitAnswer(ans) {

        let userAns = ans;
        let currentResults = results.current;
        let check = false;
        

        if (userAns.length == 0) {
            userAns.push({val: ''});
        }

        if ('answerArr' in quest) {
            check = compareArray(quest.answerArr, userAns);
        } else {
            userAns = parseFloat(userAns[0].val);
            check = (quest.answer == userAns);
        }
        
        currentResults.push(check);
        results.current = currentResults;
        setAnswer(userAns);
        nextQuest();
    }

    function submitRadio() {
        let currentResults = results.current;
        let check = (quest.answer == radio);
        
        currentResults.push(check);
        results.current = currentResults;
        setRadio(quest.radio[0].id);
        nextQuest();
    }

    function compareArray(arrayKey, arrayUser) {
        if (arrayKey.length !== arrayUser.length) {
            return false;
        }

        const keysKey = arrayKey.keys();

        for (const key of keysKey) {
            if (!compareObj(arrayKey[key], arrayUser[key])) {
                return false;
            }
        }
        return true;
    }

    function compareObj(objKey, objUser) {
        const keysKey = Object.keys(objKey);
        const keysUser = Object.keys(objUser);

        if (keysKey.length !== keysUser.length) {
            return false;
        }

        if (objUser.type == 'num' || objUser.type == 'exp') {
            objUser.val = parseFloat(objUser.val);
        }

        for (const key of keysKey) {
            const valKey = objKey[key];
            const valUser = objUser[key];

            const areArrays = Array.isArray(valKey) && Array.isArray(valUser);

            if (areArrays && !compareArray(valKey, valUser) || !areArrays && valKey !== valUser) {
                return false;
            }
        }
        return true;
    }

    function logoSize(h,w) {
        let sizer = 1;
        let height = h*sizer;
        let width = w*sizer;
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
        <Box 
            hidden={(pageState!=questIndex)}
            sx={{
                visibility: (pageState!=questIndex) ? 'hidden' : 'visible',
                position: 'absolute',
                top: '90px',
                left: '50%',
                transform: 'translate(-50%, 0%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
        }}>
            {/* Question Picture */}
            {('questPic' in quest) ? 
            <Image 
                src={quest.questPic.src}
                height={logoSize(quest.questPic.height, quest.questPic.width).height} 
                width={logoSize(quest.questPic.height, quest.questPic.width).width} 
                alt='Nav Logo'
                style={{marginBottom: 2, paddingBottom: 0}}
            /> : <></>}
            {/* Question Array */}
            {('questArr' in quest) ? (
                <Box 
                    //contentEditable 
                    id='calcDis'
                    sx={{
                        //mb: 5,
                        //pr: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                }}>
                    {quest.questArr.map((val, index)=>(
                        <CalcQuizExpress key={`calcExpress${index}`} val={val} index={index}/>
                    ))}
                </Box>
            ):<></>}
            {/* Question Text */}
            {('questText' in quest) ? 
                <Typography color='black' variant='calc' sx={{mt: 1}} align='center' fontSize={{xs: '30px', sm: '35px', md: '40px'}} >{quest.questText}</Typography>
            :<></>}
            <Box sx={{m:2}} ></Box>
            {/* Answer */}
            {('radio' in quest) ? (
                <Box sx={{
                    display: 'flex', 
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <RadioGroup 
                        defaultValue={quest.radio[0].id} 
                        sx={{m: 1}}
                    >
                        {quest.radio.map((option)=>(
                            <FormControlLabel 
                                key={`${option.id}${topicId}`}
                                value={option.id} 
                                control={<Radio />} 
                                checked={radio ==  option.id}
                                label={<Typography color='black' variant="h5" >{option.val}</Typography>} 
                                onChange={(e)=>setRadio(e.target.value)}
                                sx={{m: .5}}
                            />
                        ))}
                        
                    </RadioGroup>
                    <Button
                        onClick={submitRadio}
                        variant='contained'
                        sx={{m: 2}}
                    >
                        <Typography variant="h4" color='myWhite.main'>Submit</Typography>
                    </Button>
                </Box>
            ):(
                <CalcQuiz submitAnswer={submitAnswer} questIndex={questIndex} />
            )}
        </Box>
    );
}