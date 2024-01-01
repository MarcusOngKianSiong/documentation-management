require('./component_consolidation.js');

const cmd = new command_line()

const params = process.argv

if(params[2] === "status"){
    cmd.status().then(res=>{
        
    }).catch(err=>{
        console.log("   Error: ",err.message)
    })
}
else if(params[2] === "projects"){
    console.log(cmd.listProjects())
}
else if(params[2] === "lock"){
    // Check if the name exist
    // If it does, extract the documentation from the project
    // PASS THE THIRD VARIABLE (project name) into the function
    console.log("doc lock COMING SOON....")
}
else if(params[2] === "view"){
        if(params[3] === "method"){
            console.log("doc view method COMING SOON....")
        }
        else if(params[3] === "function"){
            console.log("doc view function COMING SOON....")
        }
        else if(params[3] === "all"){
            console.log("doc view all COMING SOON....")
        }
        else{
            console.log(`"${param[3]}" sub command does not exist in "view" command.`)
        }
}
else if(params[2] === "chain"){
    if(params[3] === "new"){
        console.log("doc chain new COMING SOON....")
    }
    else if(params[3] === "delete"){
        console.log("doc chain delete COMING SOON....")
    }
    else if(params[3] === "append"){
        console.log("doc chain append COMING SOON....")
    }
    else if(params[3] === "unshift"){
        console.log("doc chain unshift COMING SOON....")
    }
    else if(params[3] === "insert"){
        console.log("doc chain insert COMING SOON....")
    }
    else if(params[3] === "view"){
        console.log("doc chain view COMING SOON....")
    }
    else if(params[3] === "list"){
        console.log("doc chain list COMING SOON....")
    }
}
else if(params[2] === "modify"){
    console.log("doc modify COMING SOON....")
}
else if(params[2] === "export"){
    console.log("doc export COMING SOON....")
}
else if(params[2] === "help"){
    cmd.help()
}
else{
    console.log("\n\nNo such command....\n\n")
}


