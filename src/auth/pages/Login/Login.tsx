import React from 'react';
import { Dispatch } from 'redux'
import { connect } from 'react-redux';
import { RootState } from 'shared/redux/reducer';
import { loginRequest } from 'auth/redux/authSlice';

// Material ui components
import { Box, Grid, Button } from '@material-ui/core';

//Images
import mainIcon from 'assets/images/main_icon.svg';

//Styles
import 'shared/styles/mediaQueries.scss';
import styles from './login.module.scss';

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
            <Box>
                {/* Header section */}
                <Grid className={`responsive-main-app-container ${styles.header}`} container>
                    <Grid className={styles.imageWrapper} item xs={6}>
                        <img alt='main_icon' src={mainIcon} />
                    </Grid>
                    <Grid 
                        container 
                        item 
                        xs={6}
                        justify='flex-end'
                    >
                        <Grid className={styles.headerButtonWrapper} item>
                            <Box className={styles.headerButton}>
                                Sign In
                            </Box>
                        </Grid>
                        <Grid className={styles.headerButtonWrapper} item>
                            <Box className={styles.headerButton}>
                                Sign Up
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
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
