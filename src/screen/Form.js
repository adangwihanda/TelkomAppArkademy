import React from 'react';
import { Text, View } from 'react-native';
import { Container, Content, Form as FormNB, Item, Input } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

export default class Form extends React.Component {
    render() {
        return (
                <Container>
                
                <Content>
                    <FormNB>
                        <Item>
                            <Input 
                            placeholder="Title" 
                            value={this.props.navigation.state.params.title}
                            />
                        </Item>
                        <Item last>
                            <Input placeholder="ID" 
                            value={this.props.navigation.state.params.id.toString()} 
                            />
                        </Item>
                    </FormNB>
                </Content>
            </Container>

        )
    }
}

