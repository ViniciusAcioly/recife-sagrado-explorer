import React from 'react';
import { TextInput } from 'react-native';

//Neste arquivo eu especifico o formato de entrada da senha (ForgotPasswordScreen, LoginScreen, SignUpScreen)
export default class PasswordTextInput extends React.Component {

    render() {
        return <TextInput {...this.props}
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
        />;
    }

}