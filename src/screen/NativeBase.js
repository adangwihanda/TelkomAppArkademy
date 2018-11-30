import React from 'react';
import axios from 'axios';
import { Container, Header, Content, List, ListItem, Text, Fab, Spinner, TabHeading } from 'native-base';
import { StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default class NativeBase extends React.Component {


  // definisi array, kalau main local, akalu main dari api yang satunya
  // main local
  // data = [
  //   {
  //     name: 'Yoga',
  //     age: 21
  //   },

  //   {
  //     name: 'Erick',
  //     age: 25
  //   },
  //   {
  //     name: 'Widi',
  //     age: 20
  //   },
  //   {
  //     name: 'Hadi',
  //     age: 21
  //   },
  //   {
  //     name: 'Adang',
  //     age: 21
  //   },
  // ]



  // -------------- main api
  state = {
    data: [],
    isLoading: false
  }
  
  // deklarasi menggunakan api
  componentDidMount() {
    this.setState({
      isLoading: true
    })
    // syntax untuk melakukan panggilan  
    // axios().then (() => {}).catch(()=>)
    axios({
      url: 'https://jsonplaceholder.typicode.com/todos',
      method: 'get' // sama dengan CRUD
    }).then((succResult) => {
      // alert(succResult)
      // console.log(succResult)
      this.setState({
        data: succResult.data,
        isLoading:false  // karena dalam axios report nya dari api, datanya ada di properties data
      })

    }).catch((errResult) => {
      alert(errResult)
    })
  }


  handleForm = () => {
    this.props.navigation.navigate('Form');
  }



  renderList = (item, index) => {
    return (<ListItem key={index}>
      <Text>
        {item.title}
      
      </Text>
    </ListItem>
    )
  }


  render() {
    return (
      <Container>
        {/* <Header /> */}
        {this.state.isLoading === true ? <Spinner/> : null }
        
        <Content>
          <List>
            {/* memanggil nilai pada array ------------------------------ */}

            {/* main offline array --------------------------------
              {this.data.map(this.renderList)} */}

            {/* main pakai data dari api */}

            {this.state.data.map(this.renderList)}



            {/* // sebelum menggunakan function renderList */}
            {/* {this.data.map((item, index) => {
              return (
                <ListItem key={index}>
                  <Text>
                    {item.name}
                    {item.age}
                  </Text>
                </ListItem>
              ) */}

            {/* <ListItem>
              <Text>Nathaniel Clyne</Text>
            </ListItem>
            <ListItem>
              <Text>Dejan Lovren</Text>
            </ListItem> */}
          </List>
        </Content>


        <Fab
          containerStyle={{}}
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={this.handleForm} >

          <MaterialIcons name='add' />

        </Fab>


      </Container>


    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  Text: {
    fontSize: 50,
    color: 'blue',
    justifyContent: 'space-around'
    // align: 'center'
  }
});