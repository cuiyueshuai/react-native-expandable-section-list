react-native-expandable-section-list
================================================
  
react-native-expandable-section-list 是一个纯js编写的可伸缩列表，类似于QQ列表形式，作为ListView的简单扩展组件，能同时运行在android和iOS双平台下,

![](https://github.com/cuiyueshuai/react-native-expandable-section-list/raw/master/showCase.gif)

安装
----------------------------------------------

```bash
npm install react-native-expandable-section-list --save
```

**注意**: 
 
 * 如你使用的版本是react-native 0.43之后，另推荐使用[react-native-expandable-section-flatlist](https://github.com/cuiyueshuai/react-native-expandable-section-flatlist),他是类似的FlatList组件扩展的可伸缩列表
 * react-native-expandable-section-list 本就是对分组列表所做的扩展，因而不建议再导入原ListView使用分组的各种属性和数据格式。

用法
--------------------------------------------

**数据源：**

```
  const MockData = [
        ...
        {
            header: 'sectionHeader',
            member: [
            ...
                {
                    title: 'memberTitle',
                    content: 'content',
                },
            ...
            ]
        },
        ...
    ]
```

**使用：**

```javascript
import ExpanableList from 'react-native-expandable-section-list';

class Example extends React.PureComponent {
  _renderRow = (rowItem, rowId, sectionId) => <Text>{rowItem.title}</Text>;
  _renderSection = (section, sectionId)  => <Text>{section}</Text>;

  render() {
    return (
      <ExpanableList
        dataSource={MockData}
        headerKey="title"
        memberKey="member"
        renderRow={this._renderRow}
        renderSectionHeaderX={this._renderSection}
        openOptions={[1,2,]}
      />
    );
  }
}
```
**扩展：** 用法详细可参见源代码中example


属性
-------------------------------------------

| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| dataSource | - | `array` | 指定导入的数据源，格式规范如上所述，必需属性 |
| headerKey | 'header' | `string` | 指定数据源中组头数据的键值 |
| memberKey | 'member' | `string` | 指定数据源中组成员数据的键值 |
| renderSectionHeaderX | - | `function` | 每一个列表分组组头的渲染回调 |
| renderRow | - | `function` | 列表分组中每个成员行的渲染回调 |
| renderSectionFooterX | - | `function` | 每一个列表分组组尾的渲染回调 |
| headerOnPress | false | `boolean` | 点击打开关闭列表分组组头的回调 |
| isOpen | false | `boolean` | 默认是否打开全部分组 |
| openOptions | - | `array` | 可选单独打开某几个分组 |


Licence
-------------------------------------------

(MIT)


