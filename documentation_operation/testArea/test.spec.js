require('../operations.js')

const doc = new documentation()

describe("documentation functionality",()=>{
    it("view status",async ()=>{
        doc.changeFileLocation("/Users/marcus/Desktop/DEVELOPMENT_INFRASTRUCTURE/documentation_management/documentation_management_tool/documentation_operation/testArea/testData/status.txt")
        const x = await doc.getStatus();
        const expected = {
            project: "example",
            chains: ["chain1","chain2","chain3"]
        }
        const outcome = object_equal(expected, x);
        expect(outcome).toBe(true)
    })
})

