import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
//MUI stuff
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from '@material-ui/core/IconButton';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import EditButton from "@material-ui/icons/Edit";
import EditIcon from "@material-ui/icons/Edit";
//MUI Dialog
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

//Redux
import { connect } from "react-redux";
import { editUserDetails } from "../../redux/actions/userActions";
import MyButton from "../../util/MyButton";

const styles = ({
    button: {
        float: 'right'
    }
});
class EditDetails extends Component {
    state = {
        bio: "",
        website: "",
        location: "",
        open: false,
    };
    mapUserDetailsToState = (credentials) => {
        this.setState({
            bio: credentials.bio ? credentials.bio : "",
            website: credentials.website ? credentials.website : "",
            location: credentials.location ? credentials.location : "",
        });
    };
    componentDidMount() {
        const { credentials } = this.props;
        this.mapUserDetailsToState(credentials);
    }
    handleOpen = () => {
        const { credentials } = this.props;
        this.setState({ open: true });
        this.mapUserDetailsToState(credentials);
    };
    handleClose = () => {
        this.setState({ open: false });
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    handleSave = () => {
        const userDetails = {
            bio: this.state.bio,
            website: this.state.website,
            location: this.state.location
        }
        this.props.editUserDetails(userDetails);
        this.handleClose();
    }

    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <MyButton tip="Edit details" onClick={this.handleOpen} btnClassName={classes.button}>
                    <EditIcon color="primary" />
                </MyButton>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    fullWidth
                    maxWidth="sm"
                >
                    <DialogTitle> Edit Your Details </DialogTitle>
                    <DialogContent>
                        <form>
                            <TextField
                                name="bio"
                                type="text"
                                label="Bio"
                                multiline
                                rows="3"
                                placeholder="Your bio :) "
                                className={classes.textField}
                                value={this.state.bio}
                                onChange={this.handleChange}
                                fullWidth
                            />
                            <TextField
                                name="website"
                                type="text"
                                label="website"
                                placeholder="Website "
                                className={classes.textField}
                                value={this.state.website}
                                onChange={this.handleChange}
                                fullWidth
                            />
                            <TextField
                                name="location"
                                type="text"
                                label="Locaion"
                                placeholder="Where you live"
                                className={classes.textField}
                                value={this.state.location}
                                onChange={this.handleChange}
                                fullWidth
                            />
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">Cancel</Button>
                        <Button onClick={this.handleSave} color="primary">Save</Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        );
    }
}

EditDetails.propTypes = {
    editUserDetails: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
    credentials: state.user.credentials,
});
export default connect(mapStateToProps, { editUserDetails })(
    withStyles(styles)(EditDetails)
);
