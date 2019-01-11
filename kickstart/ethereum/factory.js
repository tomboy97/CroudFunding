import web3 from './web3'; //the instance of web3 that we created
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x1C1e93502059bfBd54C864c00A459980e250f6fd'
);

export default instance;
