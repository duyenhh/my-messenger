import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as MessagesActions from '../actions/actions';
import {Card} from '@shopify/polaris';
import {Button} from '@shopify/polaris';
import {TextField} from '@shopify/polaris';
import {Pagination} from '@shopify/polaris';
import {Page} from '@shopify/polaris';
import {Layout} from '@shopify/polaris';
import {Link} from 'react-router-dom';
import {useLinkComponent} from '@shopify/polaris';
import {PageActions} from '@shopify/polaris';
import {EmptyState} from '@shopify/polaris';
import {FormLayout} from '@shopify/polaris';
import {List} from '@shopify/polaris';
import {DisplayText} from '@shopify/polaris';
import {Banner} from '@shopify/polaris';
import {Image} from '@shopify/polaris';
import {Alert} from '@shopify/polaris//embedded';


export class NewSectionForm extends Component {
    state = {value: '', open: false};

    render() {

        const {knowledge, actions, history} = this.props;
        console.log(knowledge);
        //const NewSection = this.props.location.state.addNew;
        return (

            <Page
                breadcrumbs={[
                    {
                        content: 'Home',
                        url: "/"
                    }
                ]}

                pagination={{
                    hasPrevious: true,
                    hasNext: false
                }}

                title="New Section"

                primaryAction={{
                    content: 'Submit',
                    onClick: () => {
                        if (this.state.value == "") alert('please type something below !');
                        else {
                            actions.addSection(this.state.value);
                            this.setState({value: '', open: true});
                            history.push("/");
                        }
                    }
                }}
                fullWidth={true}
            >
                <Layout>
                    <Layout.Section secondary>
                        <Layout.AnnotatedSection
                            title="Let make your new section right now"
                            description="Shopify and your customers will use this information to contact you."
                        >
                        <Image source = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"/>
                        </Layout.AnnotatedSection>
                    </Layout.Section>
                    <Layout.Section>
                        <Layout.Section>
                            <Card title="New section here : ">
                                <Card.Section>
                                    <TextField
                                        value={this.state.value}
                                        type="text"
                                        onChange={(newValue) => this.setState({value: newValue})}/>
                                </Card.Section>
                            </Card>
                        </Layout.Section>
                    </Layout.Section>
                </Layout>
                <Alert
                    title="Accept terms and conditions"
                    open={this.state.open}
                    confirmContent="I accept"
                    onConfirm={() => {
                        this.setState({open: false});
                        history.push("/")
                    }}
                >
                    You must accept the terms and conditions before proceeding.
                </Alert>

            </Page>



        );

    }
}

function mapStateToProps(state) {
    return {
        messages: state.messagesReducers,
        knowledge: state.knowledgeReducers
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(MessagesActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewSectionForm);

class MyTextInput extends Component {
    state = {value: ''};

    render() {
        const {addSection, history} = this.props;
        return (
            <div>
                <TextField
                    label="New Section : "
                    value={this.state.value}
                    type="text"
                    placeholder="your new section name here ..."
                    onChange={(newValue) => this.setState({value: newValue})}/>
                <Button
                    onClick={() => (history.push("/"))}
                >Cancel</Button>
                <Button
                    primary
                    onClick={() => {
                        addSection(this.state.value);
                        alert('OK !');
                        this.setState({value: ''});
                        history.push("/")
                    }}>
                    Submit
                </Button>
            </div>
        );
    }
}


