import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import withWidth from 'material-ui/utils/withWidth';
import Typography from 'material-ui/Typography';

const styleSheet = createStyleSheet('Reponsive', theme => ({
    root: {
        padding: theme.spacing.unit,
        [theme.breakpoints.up('md')]: {
            backgroundColor: theme.palette.primary[500],
        },
        [theme.breakpoints.down('xs')]: {
            backgroundColor: theme.palette.accent.A400,
        },
//xs,sm,md,lg
    },
}));

function Reponsive(props) {
    const classes = props.classes;

    return (
        <div className={classes.root}>
            <Typography type="subheading">
                {`Current width: ${props.width}`}
            </Typography>
        </div>
    );
}

Reponsive.propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired,
};

export default compose(withStyles(styleSheet), withWidth())(Reponsive);