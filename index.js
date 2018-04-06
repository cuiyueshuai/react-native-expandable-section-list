/**
 * Created by dpcui on 27/05/2017.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ListView,
  ScrollView,
  LayoutAnimation,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';

class ExpandableList extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    let map = new Map();
    if (props.dataSource && props.isOpen) {
      props.dataSource.map((item, i) => map.set(i.toString(), true))
    }

    if (props.openOptions) {
      props.openOptions.map((item) => map.set(item.toString(), true))
    }
    this.state = {
      memberOpened: map
    }
  }

  static propTypes = {
    dataSource: PropTypes.array.isRequired,
    headerKey: PropTypes.string,
    memberKey: PropTypes.string,
    renderRow: PropTypes.func,
    renderSectionHeaderX: PropTypes.func,
    renderSectionFooterX: PropTypes.func,
    headerOnPress: PropTypes.func,
    isOpen: PropTypes.bool,
    openOptions: PropTypes.array,
  };

  static defaultProps = {
    headerKey: 'header',
    memberKey: 'member',
    isOpen: false,
  };

  _onPress = (i) => {
    this.setState((state) => {
      const memberOpened = new Map(state.memberOpened);
      memberOpened.set(i, !memberOpened.get(i)); // toggle
      return { memberOpened };
    });

    if (this.props.headerOnPress) {
      this.props.headerOnPress(i, !(!!this.state.memberOpened.get(i)));
    }

    LayoutAnimation.easeInEaseOut();
  };

  _renderRow = (rowData, sectionId, rowId) => { // eslint-disable-line
    const { renderRow, renderSectionHeaderX, renderSectionFooterX, headerKey, memberKey } = this.props;
    let memberArr = rowData[memberKey];

    if (!this.state.memberOpened.get(rowId) || !memberArr) {
      memberArr = [];
    }

    return (
      <View>
        <TouchableOpacity onPress={() => this._onPress(rowId)}>
          { renderSectionHeaderX ? renderSectionHeaderX(rowData[headerKey], rowId,
              !!this.state.memberOpened.get(rowId)) : null}
        </TouchableOpacity>
        <ScrollView scrollEnabled={false}>
          {
            memberArr.map((rowItem, index) => {
              return (
                <View key={index}>
                  {renderRow ? renderRow(rowItem, index, sectionId) : null}
                </View>
              );
            })
          }
          { memberArr.length > 0 && renderSectionFooterX ? renderSectionFooterX(rowData, sectionId) : null }
        </ScrollView>
      </View>
    );
  }

  render() {
    const { dataSource } = this.props;
    return (
      <ListView
        {...this.props}
        dataSource={this.ds.cloneWithRows(dataSource || [])}
        renderRow={this._renderRow}
        enableEmptySections={true}
      />
    );
  }
}

export default ExpandableList;