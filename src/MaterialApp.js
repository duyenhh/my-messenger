/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
//import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import { withStyles, createStyleSheet } from 'material-ui/styles';
//import {deepOrange500} from 'material-ui/styles/colors';
import Button from 'material-ui/Button';
const styles = {
    container: {
        textAlign: 'center',
        paddingTop: 200,
    },
};



class MaterialApp extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.handleTouchTap = this.handleTouchTap.bind(this);

        this.state = {
            open: false,
        };
    }

    handleRequestClose() {
        this.setState({
            open: false,
        });
    }

    handleTouchTap() {
        this.setState({
            open: true,
        });
    }

    render() {
        const standardActions = (
            <Button
                label="Ok"
                primary={true}
                onTouchTap={this.handleRequestClose}
            />
        );

        return (

                <div style={styles.container}>
                    <Dialog
                        open={this.state.open}
                        title="Super Secret Password"
                        actions={standardActions}
                        onRequestClose={this.handleRequestClose}
                    >
                        1-2-3-4-5
                    </Dialog>
                    <h1>Material-UI</h1>
                    <h2>example project</h2>
                    <Button raised
                        label="Super Secret Password"
                        secondary={true}
                        onTouchTap={this.handleTouchTap}
                    />
                </div>

        );
    }
}

export default withStyles(styleSheet)(MaterialApp);