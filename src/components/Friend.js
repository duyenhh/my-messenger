import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import PropTypes from 'prop-types';
import pink from 'material-ui/colors/pink';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AssignmentIcon from 'material-ui-icons/Assignment';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Vue from 'vue'
import VTooltip from 'v-tooltip'

Vue.use(VTooltip);

const styleSheet = createStyleSheet('Friend',{
    avatar : {
        margin : 0,
    },
    pinkAvatar : {
        margin : 10,
        color : 'fff',
        backgroundColor : pink[100],
    },
    info : {
        textAlign : 'left',
    },
    root : {

    }
});
export class Friend extends Component {


    render (){
        const {id,name, isCurrent,lassMessage, changeFriendNow,classes} = this.props;

        return (
            <ListItem dense="true" button key={id} v-tooltip="{ content: 'You have  new messages.' }">
                <Avatar  className={classes.pinkAvatar}>
                    <AssignmentIcon  />
                </Avatar>
                <ListItemText className={classes.info}
                    primary={name}
                    secondary={lassMessage.length > 30 ? (lassMessage.slice(0,30)).concat('...')  : lassMessage}
                    onClick=  {() => (changeFriendNow(id))}
                />
            </ListItem>
        )
    }
}

Friend.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styleSheet)(Friend);
