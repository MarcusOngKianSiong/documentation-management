

/**
 *
 * @abstract Commands that DISPLAYS documentation information
 * @class view
 */
class view{
    constructor(){
        
    }

    listProjects(){
        return "LISTING PROJECTS...."
    }
    
}
/**
 *
 * @abstract Commands that MODIFIES some fundamental information in the management tool (e.g. chain, documentation)
 * @class actions
 * @extends {view}
 */
class actions extends view{
    constructor(){
        super()
    }
}
class command_line extends actions{
    constructor(){
        super()
        this.docOps = new documentation()
    }
    #organise(arr1,arr2, frontSpaces){
        const final = [];
        const length = arr1.length;
        let highest = 0;
    
        arr1.forEach(item=>{
            const length = item.length;
            highest = highest < length ? length : highest;
        })
        // Check which string is the longest
        
        for(let i = 0;i<length;i++){
            const current = arr1[i];
            const arr2Item = arr2[i];
    
            // Check the difference
            const difference = highest - current.length;
    
            // Add "-" to the difference + 5 more "-"
            let extendString = current + "-".repeat(difference+5) + "> "
    
            // Check how many words are there in the description
            const split = arr2Item.split(' ');
            if(split.length < 15){
                extendString += arr2Item;
                final.push(" ".repeat(frontSpaces)+extendString);
                continue;
            }else{
                // Add new line
                let reformatWithNewLine = ""
                split.forEach((item,index)=>{
                    
                    if(index % 14 === 0 && index !== 0){
                        reformatWithNewLine+="\n" + " ".repeat(highest+7+frontSpaces) + item + " ";
                    }else{
                        reformatWithNewLine += item + " ";
                    }
                 
                });
                extendString += reformatWithNewLine;
                final.push(" ".repeat(frontSpaces)+extendString);
            }
    
        }
        return final;
        // Go through each string and calculate how many characters are there
        // Take the longest - no. of characters of the current string 
            // Add "-" equal to the difference + 5 more "-" + "> "
            // At the end, add a description 
                // Split the description by space
                    // if the number of words is more than 15, add a (X) for each 15 words. 
    
        // (X): \n + " " * longest string + " " * 5 + I have a few problem
    }
    help(){
        const commands = {
            "1": {
                command: "doc status",
                description: "Show current locked on project, and chains in the project.",
            },
            "2": {
                command: "doc projects",
                description: "Show all available projects you can lock on to.",
            },
            "3": {
                command: "doc lock [project]",
                description: "Lock in a specific projects so that other commands such that other command categories can be focused on the project. ",
            },
            "4": {
                command: "doc view method [component] [method]",
                description: "View a specific 'method' in the locked on project.",
            },
            "5": {
                command: "doc view function [component] [method]",
                description: "View a specific 'function' in the locked on project",
            },
            "6": {
                command: "doc view all [component]",
                description: "View all the functions, methods, and internal variables within the component. ", 
            },
            "7": {
                command: "doc chain new [chain]",
                description: "Create a new chain of functions/methods. ",
            },
            "8": {
                command: "doc chain delete [chain]",
                description: "Delete an existing chain of methods stay. ",
            },
            "9": {
                command: "doc chain edit [chain] [function/method]",
                description: "Edit a specific function/method in a specific chain.",
            },
            "10": {
                command: "doc chain append [chain] [function/method]",
                description: "Add a function/method to the end of an existing chain.",
            },
            "11": {
                command: "doc chain unshift [chain] [function/method]",
                description: "Add a function/method to the beginning of an existing chain.",
            },
            "12": {
                command: "doc chain insert [chain] [function/method] [index]",
                description: "Add a function/method in a specific index within the chain.",
            },
            "13": {
                command: "doc chain delete [chain] [function/method/index]",
                description: "Delete a specific function/method from a chain by stating either the name of the function/method or it's index."
            },
            "14": {
                command: "doc chain view [chain]",
                description: "Show all the functions/methods in a specific chain.",
            },
            "15": {
                command: "doc chain list",
                description: "List all the chain that exist in the project.",
            },
            "16": {
                command: "doc modify [component] [function]",
                description: "Modify the documentation for a specific function/method.",
            },
            "17": {
                command: "doc export [project]",
                description: "Export the documentation into a markdown file",
            },
            "18": {
                command: "doc help",
                description: "Show all commands.",
            },
            "19": {
                command: "doc generate description",
                description: "Display a template on nano representing the description documentation component where you fill up details, and at the end, produces a formatted version to be pasted on top of the source code.",
            },
            "20": {
                command: "doc generate data",
                description: "Display a template on nano representing the data documentation component where you fill up details, and at the end, produces a formatted version to be pasted on top of the source code.",
            },
            "21": {
                command: "doc generate process",
                description: "Display a template on nano representing the process documentation component where you fill up details, and at the end, produces a formatted version to be pasted on top of the source code.",
            },
            "22": {
                command: "doc generate dependencies",
                description: "Display a template on nano representing the dependencies documentation component where you fill up details, and at the end, produces a formatted version to be pasted on top of the source code.",
            },
        }
        console.log("")
        console.log("")
        console.log("    ---Available Commands---")
        console.log("")
        // Start writing here
        
        const arr1 = []
        const arr2 = []
        for(const key in commands){
            arr1.push(commands[key].command)
            arr2.push(commands[key].description)
        }
        const x = this.#organise(arr1,arr2,4);
        x.forEach(item=>{
            console.log(item)
        })

        // console.log(table.toString());
        console.log("")
        console.log("")
        console.log("")
    }
    async status(){
        const data = await this.docOps.getStatus();
        console.log("")
        console.log("")
        console.log("   ---Documentation status---")
        console.log("")
        console.log("       Project: ",data.project);
        console.log("")
        console.log("       Chains: ")
        data.chains.forEach((item,index)=>{
            console.log(`           ${index+1}. `,item);
        })
        console.log("")
        console.log("")
        return true;
    }
    respond(){
        return "HAHAHA"
    }
}

global.command_line = command_line;