import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import AssignmentIcon from 'material-ui-icons/Assignment';
import {Button} from '@shopify/polaris';
import Input from 'material-ui/Input';
import List, {ListItem, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import TextField from 'material-ui/TextField';
import ScrollArea from 'react-scrollbar';
import  ReactDOM from 'react-dom';
import IconButton from 'material-ui/IconButton';
import ReactTooltip from 'react-tooltip';

import Vue from 'vue';
import VTooltip from 'v-tooltip';

Vue.directive('my-tooltip', VTooltip.VTooltip);



const styleInput = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    paddingLeft: '10px',
    border: '1px solid #E0E0E0',
    borderBottomStyle: 'none'
};

const styleMyMessage = {
    textAlign: 'right',
    maxWidth: '500px',
    overflow: 'hidden',
    background: '#E0E0E0',
    borderRadius: '50px'
};
const styleYourMessage = {
    textAlign: 'left',
    maxWidth: '500px',
    overflow: 'hidden',
    background: '#E0E0E0',
    borderRadius: '50px'
    // background : 'red'
};
const floatLeft = {
    display: 'flex',
    justifyContent: 'flex-start',
};
const floatRight = {
    display: 'flex',
    justifyContent: 'flex-end',

};

export class Messages extends Component {

    scrollToBottom = () => {
        const node = ReactDOM.findDOMNode(this.messagesEnd);
        node.scrollIntoView({behavior: "smooth"});
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {
        const {current_ID, current_messages, addMessage} = this.props;
        const ava = (sender) => (
            <Avatar>
                <AssignmentIcon data-tip={"sender : " + sender} />
                <ReactTooltip place = "bottom"
                              effect = "solid"
                              type = "dark"
                              style = {{backgroundColor:'rgba(0, 0, 0, 0.5)'}}
                />
            </Avatar>

        );
        const ava2 = (sender) => (
            <Avatar>
                <AssignmentIcon my-tooltip="{ content: 'You have  new messages.' }"/>
            </Avatar>

        );
        const message = (mess) => (
            <ListItemText
                primary={ "SENDER :" + mess.sender + "   ( ID :" + mess.id + " )  --> " + mess.data}
                style={ (mess.sender == current_ID) ? styleYourMessage : styleMyMessage}
            />
        );

        const filledMessages = (current_messages) => (
            (current_messages.length > 8 ) ? current_messages.filter(mess => mess.id >= current_messages.length - 8) : current_messages
        );


        let input;
        return (
            <div>
                <ScrollArea
                    speed={0.8}
                    className="area"
                    contentClassName="content"
                    horizontal={false}
                >
                    <List style={{maxHeight: '450px'}}>
                        {current_messages.map(mess =>
                            <ListItem
                                dense
                                key={mess.id}
                                style={(mess.sender == current_ID) ? floatLeft : floatRight}
                            >

                                {(mess.sender == current_ID) ? ava(mess.sender) : message(mess)}
                                {(mess.sender == current_ID) ? message(mess) : ava(mess.sender)}

                            </ListItem>
                        )}
                        <div style={{float: "left", clear: "both"}}
                             ref={(el) => {
                                 this.messagesEnd = el;
                             }}
                        ></div>
                    </List>
                </ScrollArea>
                <Input key={current_ID}
                       style={styleInput}
                       placeholder="Your message here ..."
                       fullWidth='true'
                       disableUnderline='true'
                       onKeyPress={(ev) => {

                           if (ev.key === 'Enter') {
                               addMessage(current_ID, ev.target.value);
                               ev.target.value = ""
                           }
                       }}

                />


            </div>
        )
    }
}
export  default  Messages;

