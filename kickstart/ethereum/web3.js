//to interact with web3
import Web3 from 'web3';

let web3; //we want to reassign that variable
//const web3 = new Web3(window.web3.currentProvider);
//window is global variable present inside the browser on nodejs

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') { //typeof is used when to see if a variable is defined
  //we are in the browser and metamak is running
  web3 = new Web3(window.web3.currentProvider);
} else {
  //we are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/cbeef0bb139c4554a3a0db3b1f564fd0'
  );
  web3 = new Web3(provider);
}
export default web3;
