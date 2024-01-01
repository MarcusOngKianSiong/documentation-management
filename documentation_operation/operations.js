class documentation{
    constructor(){
        this.statusFileLocation = '/Users/marcus/Desktop/DEVELOPMENT_INFRASTRUCTURE/documentation_management/documentation_management_tool/documentation_operation/.status.txt'
    }
    changeFileLocation(newLocation){
        this.statusFileLocation = newLocation;
    }
    async setProject(){
        
    }
    
    async getStatus(){
        const content = await fs.readFile(this.statusFileLocation,'utf8');
        const byLine = content.split('\n');
        let projectLine = null;
        let chainLine = null;
        byLine.forEach((item,index)=>{
            const outcome = item.split(':');
            if(index === 0){
                projectLine = outcome[1];
            }
            if(index === 1){
                chainLine = outcome[1];
                
            }
        })
        chainLine = chainLine.split(",");
        return {
            project: projectLine,
            chains: chainLine
        }
    }
}

global.documentation = documentation;