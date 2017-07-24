import React, {Component} from 'react';
import Friend from './Friend';
import {ActionList, Popover, FooterHelp, Button, Link} from  '@shopify/polaris';
import List, {ListItem, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
export class FriendList extends Component {


    render() {
        const {data, changeFriend} = this.props;
        const messagesCurrent = (id) => (data.ListContent)[id].messages;
        const friendCurrent = (id) => (data.ListContent)[id];
        return (
            <div>
                <List>
                    {data.ListID.map((id) =>

                            <Friend id={id}
                                    name={friendCurrent(id).name}
                                    isCurrent={data.Current_id === id}
                                    lassMessage={messagesCurrent(id)[messagesCurrent(id).length - 1].data}
                                    changeFriendNow={changeFriend}/>
                        ,)}
                </List>

            </div>
        )
    }

}

export  default  FriendList;