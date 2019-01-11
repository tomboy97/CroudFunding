const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);  //deletes everything inside this folder

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
//console.log(solc.compile(source, 1));
const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath); //creates the build folder

//console.log(output);
for (let contract in output) {
  fs.outputJsonSync(  //going to write a json file
    path.resolve(buildPath, contract.replace(':','') + '.json' ),  //providing path of file
    output[contract] //actual content we want to write in the json file
  );
}
