const fs = require('fs').promises;

async function readFileDataAsync() {
    try {
        const fileData = await fs.readFile("./data.txt","utf-8");
        let pattern = /\s+/gm;
        console.log("total number of words:",fileData.trim().split(pattern).length);
    } catch(error) {
        console.log("error while reading file",error);
    }
}

readFileDataAsync();