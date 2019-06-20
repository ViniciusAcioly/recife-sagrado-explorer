import React from 'react';
import { Button, Linking } from 'react-native';

//Neste arquivo eu possibilito a criação de um botão de telefone de contato (Não utilizado por enquanto)
export default class PhoneButton extends React.Component {

    onPress = () => {
        var url = "tel:" + this.props.title;
        Linking.openURL(url);
    }

    render() {
        return <Button {...this.props}
            onPress={this.onPress}
        />
    }

}