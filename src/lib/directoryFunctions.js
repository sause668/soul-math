import { mainDir } from '@/lib/directories/mainDir';

export function getAllGradeDirIds() {
    
    return mainDir.map((grade) => {
      return {
        params: {
          grade: grade.id,
        },
      };
    });
}

export function getGradeDir(gradeShown) {

    let newGrade = '';

    mainDir.forEach((grade, index)=>{
        if (grade.id == gradeShown) {
            newGrade=index;
        }
    })

    return newGrade;
}


export function getAllTopicDirIds() {
    
    let pathArray = [];

    mainDir.forEach((grade) => {
        grade.unitDir.forEach((unit)=>{
            pathArray = pathArray.concat(unit.topicDir.map((topic)=>{
                return {
                    params: {
                      grade: grade.id,
                      topic: topic.id,
                    },
                };
            }))
        })
    })

    return pathArray;
}

export function getTopicDir(topicShown) {

    let newTopic = '';
    let newUnit = '';
    let newGrade = '';

    mainDir.forEach((grade, gradeIndex)=>{
        grade.unitDir.forEach((unit, unitIndex)=>{
            unit.topicDir.forEach((topic, topicIndex)=>{
                if (topic.id == topicShown) {
                    newTopic=topicIndex;
                    newUnit=unitIndex;
                    newGrade=gradeIndex;
                }
            })
        })
    })

    return {newTopic: newTopic, newUnit: newUnit, newGrade: newGrade};
}



