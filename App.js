import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Image, ViewComponent, TextInput, Dimensions, Button } from 'react-native';
import DirectoryStackScreen from './src/Stacks/DirectoryStackScreen';
import HomeStackScreen from './src/Stacks/HomeStackScreen';

export default function App(){
 return(
    //<HomeStackScreen/>
  <DirectoryStackScreen/>
 )

}