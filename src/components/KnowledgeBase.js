import React, {Component} from 'react';
import {ResourceList} from '@shopify/polaris';
import {TextStyle} from '@shopify/polaris';
import Section from './Section';
import {Card} from '@shopify/polaris';
import {SettingToggle} from '@shopify/polaris';
import {Popover} from '@shopify/polaris';
import {ActionList} from '@shopify/polaris';
import {Collapsible} from '@shopify/polaris';
import {EmptyState} from '@shopify/polaris';
import {Link} from 'react-router-dom';
import {Layout} from '@shopify/polaris';
import {Stack} from '@shopify/polaris';
import {Page} from '@shopify/polaris';
import ReactTooltip from 'react-tooltip';
import {Button} from '@shopify/polaris';
import {Heading} from '@shopify/polaris';


class KnowledgeBase extends Component {

    render() {

        const {data, actions, history} = this.props;
        const mySection = (data) => <Layout.Section><Section key={data.sectionId} sectionData={data} actions={actions}
                                                             history={history}/></Layout.Section>;
        console.log(data);
        return (
            <Page
                title=""
                primaryAction={{
                    content: ' Add New Section',
                    onClick: () => (history.push("/newSection")),
                }}
                fullWidth={true}
            >

                {
                    (data.length != 0) ?
                        <Layout
                            sectioned={true}
                        >
                            {
                                data.map((section) => mySection(section))
                            }
                        </Layout>
                        : <EmptyState
                            heading="Manage your section of questions here"
                            action={{
                                content: 'Add new section',
                                onClick: () => (history.push("/newSection")),
                            }}
                            secondaryAction={{
                                content: 'Learn more',
                                url: 'https://help.shopify.com',
                            }}
                            image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
                        >
                            <p>Track and receive your incoming inventory from suppliers.</p>

                        </EmptyState>
                }


            </Page>
        );
    }
}

export default KnowledgeBase;