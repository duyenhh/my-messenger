import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as MessagesActions from '../actions/actions';
import FriendList from '../components/FriendList';
import Messages from '../components/Messages';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import List, {ListItem, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import autoBind from 'react-autobind';
import KnowledgeBase from '../components/KnowledgeBase';
import {Tabs} from '@shopify/polaris';
import {Page} from '@shopify/polaris';

const styleSheet = createStyleSheet('MessengerApp', theme => ({
    root: {
        flexGrow: 1,
        margin: 30,
        width: '100%',


    },
    paper: {

        textAlign: 'center',
        // color: theme.palette.text.secondary,
        height: '100%',
        width: '100%',

        border: '0.5px solid #E0E0E0'
    },
    listFriends: {
        height: '100%'
    },
    listMessages: {
        height: '100%'
    },
    messageHeader: {
        fontSize: 15,
        margin: '10px',
        textAlign: 'center'
    },

    header: {
        height: '50px'
    },
    contain: {
        height: '500px'
    }
}));


export class MessengerApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedId : 0
        };
    }


    render() {
        const {messages, actions, classes, knowledge, history} = this.props;
        const current_ID = messages.Current_id;
        const current_friend = (messages.ListContent)[current_ID];
        const current_messages = current_friend.messages;

        const conversation = (
            <div id="conversation">
                <Grid className={classes.root} container gutter={0}>
                    <Grid item xs={4} className={classes.listFriends}>
                        <Paper className={classes.paper + " " + classes.header}>
                            <Typography className={classes.messageHeader}> MY MESSAGE </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={8} className={classes.listFriends}>
                        <Paper className={classes.paper + " " + classes.header}>
                            <Typography type="title"
                                        className={classes.messageHeader}> {current_friend.name} </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={4} className={classes.listFriends}>
                        <Paper className={classes.paper + " " + classes.contain}>
                            <FriendList data={messages} changeFriend={actions.changeFriend}/>
                        </Paper>
                    </Grid>

                    <Grid item xs={8} className={classes.listMessages}>
                        <Paper className={classes.paper + " " + classes.contain}
                               style={{position: 'relative'}}>
                            <Messages current_ID={current_ID} current_messages={current_messages}
                                      addMessage={actions.addMessage}/>
                        </Paper>
                    </Grid>

                </Grid>
            </div>
        );


        const myKnowledge = (
            <KnowledgeBase id="knowledge" data={knowledge} actions={actions} history={history}/>

        );

        return (
            <div>
                <Page
                    fullWidth = {true}
                >
                <Tabs
                    fitted={false}
                    selected={this.state.selectedId}
                    tabs={[
                        {
                            id: 'knowledge',
                            title: 'Knowledge Base',

                        },
                        {
                            id: 'conversation',
                            title: 'Conversation',

                        }
                    ]}
                    onSelect = {(id)=>(this.setState({selectedId : id}))}
                >
                    {
                        (this.state.selectedId == 0) ? myKnowledge : conversation
                    }
                </Tabs>
                </Page>
            </div>
        )
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
export  default withStyles(styleSheet)(connect(mapStateToProps, mapDispatchToProps)(MessengerApp));
