import React from 'react';
import { Dispatch } from 'redux'
import { connect } from 'react-redux';
import { RootState } from 'shared/redux/reducer';
import { loginRequest } from 'auth/redux/authSlice';

// Material ui components
import { Box, Container, Grid } from '@material-ui/core';

//Images
import mainIcon from 'assets/images/main_icon.svg';

interface LoginProps {
    isLoggingIn: boolean,
    id: string,
    userName: string,
    loginRequest: (userName: string, password: string) => void;
}

class Login extends React.Component<LoginProps> {
    render() {
        const { id, userName, loginRequest } = this.props;
        return (
            <Container maxWidth='xl'>
                <Grid container>
                    <Grid item xs={6}>
                        <img alt='main_icon' src={mainIcon} />
                    </Grid>
                    <Grid container item xs={6}>
                        <Grid item>
                            <Box>
                                Sign In
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box>
                                Sign Up
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    isLoggingIn: state.auth.isLoggingIn,
    id: state.auth.id,
    userName: state.auth.userName,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    loginRequest: (userName: string, password: string) => {dispatch(loginRequest({ userName, password }))},
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
