import React from 'react';
import { TextInput } from 'react-native';

//Neste arquivo eu especifico o formato de entrada do e-mail (ForgotPasswordScreen, LoginScreen, SignUpScreen)
export default class EmailTextInput extends React.Component {

    render() {
        return <TextInput {...this.props}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
        />;
    }

}