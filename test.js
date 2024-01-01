const fs = require('fs').promises;

const fileLocation = "/Users/marcus/Desktop/DEVELOPMENT_INFRASTRUCTURE/documentation_management/documentation_management_tool"

async function getTheData(){

    const data = await fs.readFile(fileLocation+"/class.js",'utf8');
    const splitted = data.split('\n');
    return splitted;
}

function getAllClasses(data){
    const length = data.length;
    const classList = []
    for(let i = 0;i<length;i++){
        const current = data[i];
        const matchResult = /^class ([a-zA-Z]+){$/.exec(current)
        if(matchResult){
            classList.push(matchResult[1]);
        }
    }
    if(classList.length){
        return classList;
    }
    return false;
}


function getMethod(data){
    
}

getTheData().then(res=>{
    console.log(getAllClasses(res));
})


