# react-native-shadow-fy

---

### Attention：

**对 react-native-svg 库根据自身的需求增加了属性，其他和原仓库没区别**

|   New Param   | Describe                                                                           | Default |
| :-----------: | ---------------------------------------------------------------------------------- | ------- |
|   endColor    | end color                                                                          | #fff    |
| useSvgOpacity | Whether to enable svg container transparency                                       | false   |
|  svgOpacity   | svg container transparency                                                         | 0.57    |
|   useNative   | Whether to use the ios shadow attribute in the ios environment, and svg in Android | false   |

---

## 为什么有这个仓库

1. https://github.com/879479119/react-native-shadow 这个仓库不再更新了，无法满足我的需求

2. https://github.com/SrBrahma/react-native-shadow-2 本想使用这个仓库，但这个仓库对于低版本的 react-native-svg 并不友好，至少我的 `react-native-svg@5.5.1` 版本无法使用这个库 PS:这个仓库实现的没有问题只是我的 svg 版本太低，无法使用，所以如果版本无问题的话，可以去使用这个。但我个人认为使用 react-native-shadow 会有一个更强兼容性的好处。所以看个人的选择。

3. react-native-svg 本身实现的就已经可以了，只是没有人维护导致无法满足需求，所以我根据我的需求增加了一些属性和代码

---

## 这个仓库和 react-native-svg 的区别

在原仓库的`BoxShadow`组件使用过程中我发现，渐变的开始颜色和结束颜色都使用的是 color 属性，但这样在真机上阴影的外边界中是无法融入背景的，导致的结果是仿佛没有扩散开。

所以我学习了 react-native-svg-2 里多了一个结束颜色的设定，增加了结束颜色的属性

同时在与原生 ios 效果的对比中认为整体的 svg 亮度偏亮，所以在整体的 svg 容器上增加了 `useSvgOpacity`和`svgOpacity`属性，启用`useSvgOpacity`后会默认在 svg 上加上`svgOpacity = 0.57`的透明度，视觉效果会更贴近原生。但我没有理论依据在证明这点，所以作为了一个开启参数提供使用。详情看下面的示例。

---

## [这是 expo 使用示例](https://snack.expo.dev/@fuyun/react-native-shadow-fy)

---

## 如何使用

[react-native-shadow](https://github.com/879479119/react-native-shadow) 具体使用就是在此仓库上增加了一些属性。

```javascript
npm i react-native-shadow-fy
// or
yarn add react-native-shadow-fy
```

```javascript
import { BoxShadow } from "react-native-shadow-fy";
<BoxShadow
  // useNative={true}
  useSvgOpacity={true}
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
</BoxShadow>;
```

---

## 思考

`react-native-shadow`的实现把一个容器分成 4 个方位，四条边使用的是 linear 渐变，四个角使用使用 radial 渐变来共同模拟了一个阴影半径扩散的效果。但这样存在的一个问题是最外面的那块的颜色是存在边界的，而原生的使用的是偏椭圆形的扩散，从实现的角度似乎就决定了无法做的和原生一模一样，除非去理解原生的实现，完整的去模拟过程。目前只能说尽量让视觉效果相似。

---

## 写在最后

第一次进行 npm 包的上传和参与开源社区，所以不清楚配置或者什么流程是否正规。以上
