import React, {Component} from 'react';
import {Card} from '@shopify/polaris';
import {Button} from '@shopify/polaris';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as MessagesActions from '../actions/actions';
import {FormLayout} from '@shopify/polaris';
import {TextField} from '@shopify/polaris';
import {PageActions} from '@shopify/polaris';
import {Page} from '@shopify/polaris';
import {Layout} from '@shopify/polaris';
import ReactTooltip from 'react-tooltip'

export class Question extends Component {
    constructor(props) {
        const quesId = parseInt(props.match.params.questionId, 10);
        const sectionId = parseInt(props.match.params.sectionId, 10);
        const current_section = props.knowledge.find((section) => (section.sectionId == sectionId))
        const question = current_section.sectionContent.find((ques) => (ques.quesId == quesId));
        super(props);
        this.state = {
            isEditingQues: false,
            isEditingAns: false,
            question: question.quesData,
            answer: question.answer,
        };
    }


    render() {
        const quesId = parseInt(this.props.match.params.questionId, 10);
        const sectionId = parseInt(this.props.match.params.sectionId, 10);
        const {knowledge, history, actions} = this.props;
        const current_section = knowledge.find((section) => (section.sectionId == sectionId));
        const question = current_section.sectionContent.find((ques) => (ques.quesId == quesId));

        const ButtonSubmit = (
            <div>
                <Button
                    onClick={() => (
                        this.setState({question: question.quesData, answer: question.answer})
                    )}
                    icon = "refresh"
                />
                <Button
                    onClick={() => {
                        //  alert(this.state.question + "///" + this.state.answer);
                        actions.editQuestion(sectionId, quesId, {
                            'question': this.state.question,
                            'answer': this.state.answer
                        });
                        alert("OK");
                        this.setState({isEditingQuest: false, isEditingAns: false});
                    }}
                >Submit
                </Button>
            </div>);

        const SubmitFooter = (

            <PageActions

                secondaryActions={[{
                    content: 'Undo',
                    onClick: () => (this.setState({question: question.quesData, answer: question.answer}))
                }]}
            />

        );

        const UndoQuestionButton = (
            <Button
                onClick={ () => (this.setState({question: question.quesData}))}
                icon = "refresh"
            />
        );
        const UndoAnswerButton = (
            <Button
                onClick={ () => (this.setState({answer: question.answer}))}
                icon = "refresh"
            />
        );


        return (
            <Page
                breadcrumbs={[
                    {
                        content: 'Home',
                        url: "/"
                    }
                ]}
                title="My Question"

                primaryAction={(this.state.isEditingQues || this.state.isEditingAns) ? {
                        content: 'Submit',
                        onClick: () => {
                            actions.editQuestion(sectionId, quesId, {
                                'question': this.state.question,
                                'answer': this.state.answer
                            });
                            this.setState({isEditingQuest: false, isEditingAns: false});
                            history.push("/");
                        }
                    } : null}


                fullWidth={true}

            >
            <Layout>
                <Layout.Section secondary>
                    <Layout.AnnotatedSection
                        title="Let manage your question right now"
                        description="Shopify and your customers will use this information to contact you."/>
                </Layout.Section>
                <Layout.Section>
                <Card
                    sectioned={false}
                >
                    <Card.Section>
                        <TextField
                            label="Question"
                            value={this.state.question}
                            onChange={(newValue) => {
                                this.setState({question: newValue, isEditingQues: true});
                            }}
                            multiline={true}
                            autoFocus={this.state.isEditingQues }
                            connectedRight={(this.state.isEditingQues ) ? UndoQuestionButton : null}
                        />
                        <TextField
                            label="Answer"
                            multiline={true}
                            value={this.state.answer}
                            autoFocus={this.state.isEditingAns }
                            onChange={(newValue) => this.setState({answer: newValue, isEditingAns: true})}
                            connectedRight={(this.state.isEditingAns ) ? UndoAnswerButton : null}
                        />

                    </Card.Section>

                </Card>
                </Layout.Section>
                    </Layout>
                {/*{(this.state.isEditing ) ? SubmitFooter : (<div></div>)}*/}
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

//export default connect(mapStateToProps, mapDispatchToProps)(MessengerApp);
export  default (connect(mapStateToProps, mapDispatchToProps)(Question));


