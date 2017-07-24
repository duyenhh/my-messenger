import React, {Component} from 'react';
import {Layout} from '@shopify/polaris';
import {Card} from '@shopify/polaris';
import {Stack} from '@shopify/polaris';
import {ResourceList} from '@shopify/polaris';
import Question from './Question';
import {Button} from '@shopify/polaris';
import {Heading} from '@shopify/polaris';
import {Collapsible} from '@shopify/polaris';
import * as myIcon from '../my-icon/index.js';
import ReactTooltip from 'react-tooltip';

export class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsible: true
        };
    }

    render() {

        const {sectionData, actions, history} = this.props;

        const newHeader = (
            <Card.Section>
                <Stack>
                    <Stack.Item fill>
                        <Heading>Section name</Heading>
                    </Stack.Item>
                    <Stack.Item >
                        <div data-tip="ahjhj" data-for="hjhj">
                        <Button primary size="small" icon="add" plain = "true" data-tip="React-tooltip" onClick={()=> (alert("ahjhj"))}/>
                        </div>
                        <ReactTooltip id = "hjhj" place="top"  type="dark"/>
                    </Stack.Item>
                    <Stack.Item><div></div></Stack.Item>
                    <Stack.Item>
                        <Button destructive icon="delete" plain = "true"/>
                    </Stack.Item>
                    <Stack.Item></Stack.Item>
                    <Stack.Item>
                        <Button icon="chevronUp" plain = {true}/>
                    </Stack.Item>
                    <Stack.Item></Stack.Item>
                </Stack>

            </Card.Section>
        );

        return (
            <div>
                <Card
                    title={sectionData.sectionName}
                    sectioned={true}
                    actions={[
                        {
                            content: "Add question",
                            icon:"add"
                        },
                        {
                            content: "Delete section",
                            icon: "delete",
                            onClick: () => (actions.deleteSection(sectionData.sectionId)),
                        },
                        {
                            icon: this.state.collapsible ? "chevronUp" : "chevronDown",
                            onClick: () => this.setState({collapsible: !this.state.collapsible}),


                        }
                    ]}
                >


                    <Collapsible
                        open={this.state.collapsible}
                    >
                        <Card />
                        <ResourceList
                            items={sectionData.sectionContent.map((item) => ({
                                url: '#',
                                attributeOne: item.quesId,
                                attributeTwo: item.quesData,

                                badges: [
                                    {
                                        content: item.quesState,
                                        status: (item.quesState == "Enable") ? "success" : "default",
                                    },
                                ],
                                actions: [
                                    {
                                        icon: (item.quesState == "Enable") ? "disable" : "view",
                                        onClick: () => (actions.changeStateQuestion(sectionData.sectionId, item.quesId)),
                                        primary: true,
                                        plain: false,

                                    },
                                    {
                                        icon: 'external',
                                        onClick: () => (history.push("/" + sectionData.sectionId + "/" + item.quesId))
                                    },
                                    {
                                        icon: 'delete',
                                        destructive: true,
                                        onClick: () => (actions.deleteQuestion(sectionData.sectionId, item.quesId)),
                                    }],
                                persistActions: true,

                            }))}
                            renderItem={(item, index) => {
                                return <ResourceList.Item key={index} {...item} />;
                            }}
                        />
                        <Card />
                    </Collapsible>
                </Card>

            </div>

        );

    }
}

export default Section;
