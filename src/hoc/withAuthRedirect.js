// import { ReactComponent } from "*.svg";
import React, { ReactComponent } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Comment) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'} />
            return <Comment {...this.props} />
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);


    return ConnectedAuthRedirectComponent;

}