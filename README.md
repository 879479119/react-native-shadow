# react-native-shadow

---

### Attention：

**对 react-native-svg 库根据自身的需求增加了结束颜色，其他和原仓库没区别**

---

## 为什么有这个仓库

1. https://github.com/879479119/react-native-shadow 这个仓库不再更新了，无法满足我的需求

2. https://github.com/SrBrahma/react-native-shadow-2 本想使用这个仓库，但这个仓库对于低版本的 react-native-svg 并不友好，至少我的 svg5.5.1 版本无法使用这个库 PS:这个仓库实现的没有问题只是我的 svg 版本太低，无法使用，所以如果版本无问题的话，可以去使用这个。但我个人认为使用 react-native-shadow 会有一个更强兼容性的好处。所以看个人的选择。

3. react-native-svg 本身实现的就已经可以了，只是没有人维护导致无法满足需求，所以我根据我的需求增加了一些属性和代码

---

## 这个仓库和 react-native-svg 的区别

在原仓库的`BoxShadow`组件使用过程中我发现，渐变的开始颜色和结束颜色都使用的是 color 属性，但这样在真机上阴影的外边界中是无法融入背景的，导致的结果是仿佛没有扩散开。

所以我学习了 react-native-svg-2 里多了一个结束颜色的设定，增加了结束颜色的属性

---

## 如何使用

目前此仓库仅在`BoxShadow`组件中增加了结束颜色`endColor`的属性，所以在使用上和 [react-native-svg](https://github.com/879479119/react-native-shadow) 这个没有区别

```javascript
<BoxShadow
  setting={{
    width: 335,
    height: 70,
    color: "#FFFFFF",
    endColor: "#EEF0F4",
    border: 9,
    radius: 10,
    opacity: 0.8,
    x: -2,
    y: -2,
  }}
>
  <View style={{ width: 335, height: 70 }} />
</BoxShadow>
```

---

## 写在最后

第一次进行 npm 包的上传和参与开源社区，所以不清楚配置或者什么流程是否正规。以上
