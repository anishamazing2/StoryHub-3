import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ToastAndroid, KeyboardAvoidingView} from 'react-native';
import * as Permissions from 'expo-permissions';
import db from '../config'


export default class WriteStoryScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            author:'', 
            storyText:'',
            title:''
        }
    }

    submitStory=()=>{
        db.collection('stories').add({
            author: this.state.author,
            storyText: this.state.storyText,
            title: this.state.title
        })
        this.setState({
            author:'',
            storyText:'',
            title:''
        })
      
    }
    render(){
        return(
            <View style={styles.container}>
                <View>
                    <Text style={{textAlign: 'center', fontSize:30, backgroundColor: 'lightgreen'}}>StoryHub</Text>
                </View>
                <View style={styles.inputView}>
                    <KeyboardAvoidingView>
                    <TextInput
                    style={styles.inputBox}
                    placeholder="Title of Story"
                    onChangeText={
                        text=>this.setState({title:text})
                    }
                    value={this.state.title}/>
                    </KeyboardAvoidingView>
                </View>
                
                <View style={styles.inputView}>
                    <KeyboardAvoidingView>
                    <TextInput
                    style={styles.inputBox}
                    placeholder="Author of Story"
                    onChangeText={
                        text=>this.setState({author:text})
                    }
                    value={this.state.author}/>
                    </KeyboardAvoidingView>
                
                </View>
                <KeyboardAvoidingView>
                <TextInput
                    style={styles.storyBox}
                    placeholder="Write your story here"
                    onChangeText={
                        text=>this.setState({storyText:text})
                    }
                    value={this.state.storyText}/>
                    </KeyboardAvoidingView>
                    <TouchableOpacity
                    style={styles.submitButton}
                    onPress={this.submitStory}>
                        <Text style={styles.submitButtonText}>Submit</Text>
                    </TouchableOpacity>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'lightgreen'
    },
    inputView:{
        flexDirection:'row', 
        margin: 20
    },
    inputBox:{
        width:200,
        height:40,
        borderWidth: 1.5,
        borderRightWidth: 1.5,
        fontSize: 20,
        backgroundColor:'white'
    },
    storyBox:{
        width:200,
        height:200,
        borderWidth:1.5,
        borderRightWidth: 1.5,
        fontSize: 20,
        backgroundColor:'white'
    },
    submitButton:{
        backgroundColor: '#FBC02D',
        width: 200,
        height:50,
    },
    submitButtonText:{
        padding: 10,
        textAlign:'center',
        fontSize: 20,
        fontWeight:'bold',
        color:'white',
    },
});