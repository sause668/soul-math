import { useMediaQuery, Box } from '@mui/material';
import { getAllTopicDirIds } from '@/lib/directoryFunctions';
import { getTopicDir } from '@/lib/directoryFunctions';
import Head from 'next/head'
import Nav from '@/components/Nav';
import QuizStart from '@/components/QuizStart';
import { useRef, useState } from 'react';
import Quiz from '@/components/Quiz';
import QuizEnd from '@/components/QuizEnd';
import { mainDir } from '@/lib/directories/mainDir';
import PageNav from '@/components/PageNav';



export async function getStaticPaths() {
  const paths = getAllTopicDirIds();
  return {
    paths,
    fallback: false,
  };
}
  
export async function getStaticProps({ params }) {
  const dirData = getTopicDir(params.topic);
  const topicIndex = dirData.newTopic;
  const unitIndex = dirData.newUnit;
  const gradeIndex = dirData.newGrade;

  return {
    props: {
      topicIndex,
      unitIndex,
      gradeIndex,
    },
  };
}  

export default function QuizPage({topicIndex, unitIndex, gradeIndex}) {

    const mobile = useMediaQuery('(min-width:1000px)');
    const [pageState, setPageState] = useState(1000);
    const results = useRef([]); 
    
    const gradeShown = mainDir[gradeIndex];
    const unitShown = gradeShown.unitDir[unitIndex];
    const topicShown = unitShown.topicDir[topicIndex];

    function nextQuest () {
        let next = pageState;
        next += 1;
        if (next == topicShown.quizDir.length) {
            next = 2000;
            
        }
        setPageState(next);
        let elm = document.getElementById('quizPage');
        elm.scrollTop = 0;
    }

    return (
        <div style={{backgroundColor: '', height: '100%', width: '100%', position:'absolute', zIndex:-1, display: 'flex'}}>
            <Head>
                <title>Soul Math</title>
                <meta name="description" content="Middle School Math Platform" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
                <link rel="manifest" href="/favicon/site.webmanifest"/>
                <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#00e676"/>
                <meta name="msapplication-TileColor" content="#00a300"/>
                <meta name="theme-color" content="#ffffff"/>
            </Head>
            <Nav gradeIndex={gradeIndex} topicIndex={topicIndex} />
            <PageNav mobile={mobile} grade={gradeShown} unitIndex={unitIndex} topicIndex={topicIndex}/>
            <Box ></Box>
            <Box id='quizPage' sx={{
                position: 'relative',
                height: '100%',
                width: '100%',
                overflowX: 'scroll',
            }}  >
                <QuizStart 
                    quiz={topicShown}
                    pageState={pageState}
                    setPageState={setPageState}
                    unitTitle={unitShown.title}
                />
                {topicShown.quizDir.map((quest,index)=>(
                    <Quiz
                        key={`${gradeShown.id}${topicShown.id}${index}Quest`}
                        quest={quest}
                        questIndex={index}
                        pageState={pageState}
                        nextQuest={nextQuest}
                        results={results}
                        topicId={topicShown.id}
                    />
                ))}
                <QuizEnd 
                    quiz={topicShown}
                    pageState={pageState}
                    setPageState={setPageState}
                    results={results}
                />
                </Box>
            </div>
    );
}