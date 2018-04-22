/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * Copyright cuiyueshuai
 * @author cuiyueshuai<850705402@qq.com>
 */

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  AppRegistry,
  Button,
} from 'react-native';

import ExpandableList from 'react-native-expandable-section-list';
import MockData from './constants/mockData';
import DictStyle from './constants/dictStyle';

class Example extends React.PureComponent {

  _renderRow = (rowItem, rowId, sectionId) => {
    return (
      <TouchableOpacity key={ rowId } onPress={() => {
      }}>
        <View
          style={{
            alignItems: 'center', margin: 5, padding: 5,
            borderWidth: 0.5, borderColor: DictStyle.colorSet.lineColor
          }}
        >
          <Text style={{fontSize: DictStyle.fontSet.mSize, color: DictStyle.colorSet.normalFontColor}}>
            {rowItem.title}
          </Text>
        </View>
      </TouchableOpacity>
    )
  };

  _renderSection = (section, sectionId, state)  => {
    return (
      <View
        style={{ marginVertical: 10, marginHorizontal: 15, height: 30, flexDirection: 'row',
          justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 0.5,
          borderBottomColor: DictStyle.colorSet.lineColor }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: DictStyle.fontSet.mSize, color: DictStyle.colorSet.normalFontColor }}>
            {section}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: DictStyle.fontSet.xSize, color: DictStyle.colorSet.weakFontColor }}>
            {'更多 '}
          </Text>
        </View>
      </View>
    );
  };

  _btnPress = () => {
    console.log(this.ExpandableList);
    this.ExpandableList.setSectionState(0, false);
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <ExpandableList
          ref={instance => this.ExpandableList = instance}
          dataSource={MockData.workbenchData}
          headerKey="title"
          memberKey="member"
          renderRow={this._renderRow}
          headerOnPress={(i, state) => console.log(i, state)}
          renderSectionHeaderX={this._renderSection}
          openOptions={[1, 2,]}
        />
        <Button
          style={{position: 'absolute', bottom: 0, left: 0, width: '100%', height: 50, backgroundColor: 'blue'}}
          onPress={this._btnPress}
          title="Scroll"
          color="red"
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('example', () => Example);
