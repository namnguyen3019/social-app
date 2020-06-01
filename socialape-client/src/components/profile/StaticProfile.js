import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import dayjs from "dayjs";

import EditDetails from './EditDetails';
//MU stuff
import Button from "@material-ui/core/Button";
import MuiLink from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
//Icons
import LocationOn from "@material-ui/icons/LocationOn";
import LinkIcon from "@material-ui/icons/Link";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import EditIcon from "@material-ui/icons/Edit";
import KeyboardReturn from "@material-ui/icons/KeyboardReturn";

import MyButton from "../../util/MyButton";



const styles = {}



const StaticProfile = (props) => {
    const handleImageChange = (event) => {
        const image = event.target.files[0];
        const formData = new FormData();
        formData.append("image", image, image.name);
        this.props.uploadImage(formData);
    };
    const handleEditPicture = () => {
        const fileInput = document.getElementById("imageInput");
        fileInput.click();
    };
    const handleLogout = () => {
        this.props.logoutUser();
    };
    const {
        classes,
        profile: { handle, createdAt, imageUrl, bio, website, location },
    } = props;

    return (
        <Paper className={classes.paper}>
            <div className={classes.profile}>
                <div className="image-wrapper">
                    <img
                        src={imageUrl}
                        alt="profile"
                        className="profile-image"
                    />
                    <input
                        type="file"
                        id="imageInput"
                        hidden="hidden"
                        onChange={handleImageChange}
                    />
                    <MyButton
                        tip="Edit profile picture"
                        onClick={handleEditPicture}
                        btnClassName="button"
                    >
                        <EditIcon />
                    </MyButton>
                </div>
                <hr />
                <div className="profile-details">
                    <MuiLink
                        component={Link}
                        to={`/users/${handle}`}
                        color="primary"
                        variant="h5"
                    >
                        @{handle}
                    </MuiLink>
                    <hr />
                    {bio && <Typography variant="body2">{bio} </Typography>}
                    <hr />
                    {location && (
                        <Fragment>
                            <LocationOn color="primary" />{" "}
                            <span>{location}</span>
                            <hr />
                        </Fragment>
                    )}
                    {website && (
                        <Fragment>
                            <LinkIcon color="primary" />
                            <a
                                href={website}
                                target="_blank"
                                ref="noopener noreferrer"
                            >
                                {website}
                            </a>
                        </Fragment>
                    )}
                    <hr />
                    <CalendarTodayIcon color="primary" />
                    <span> Joined {dayjs(createdAt).format("MMM YYYY")} </span>
                </div>
                <MyButton tip="Log out" onClick={handleLogout}>
                    <KeyboardReturn color="primary" />
                </MyButton>
                <EditDetails />
            </div>
        </Paper>
    );
};

StaticProfile.propTypes = {
    profile: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StaticProfile);
