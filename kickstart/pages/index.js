import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';

class CampaignIndex extends Component {
  static async getInitialProps() {
    //we don't have to create instance for static functions
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description: (
          <Link route={`/campaigns/${address}`}>
              <a>View Campaign</a>
          </Link>
        ),
        fluid: true
      };
    });

    return <Card.Group items={items} />;
  }

  render() {
    return (
       <Layout>
           <div>
               <link
                 rel="stylesheet"
                 href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
               />
               <h3>Open Campaigns</h3>

               <Link route="/campaigns/new">
                  <a>
                   <Button
                      floated="right"
                      content="Create Campaign"
                      icon="add circle"
                      //primary={true} or
                      primary
                   />
                  </a>
               </Link>

               {this.renderCampaigns()}
          </div>
      </Layout>
    );
  };
}

export default CampaignIndex;
