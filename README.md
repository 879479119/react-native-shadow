# react-native-shadow
[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]
---
### Attention：

**There are many users who are using different verion of `react` and `react-native`, so we have removed the dependency of `react-native-svg` in `package.json` since `1.1.3`, and you must add the correct version of `react-native-svg` as they suggested. :sorry:**

---

Since there is no "shadow" attribute in style list of Android,if we want to add a shadow effect on a component,we must patch a PNG-24 picture,but it's so non-graceful;therefore here comes a SVG shadow plugin to help with this problem. **We suggest you to use native shadow on iOS**

![Effect](http://7xsm7w.com1.z0.glb.clouddn.com/20161015151531.png)

There are two BoxShadow Elements in the picture which support `border-radius`,and the Line at the bottom is generated with `BorderShadow` which provide with a top or bottom shadow(can also be inset shadow)


## HOW TO USE IT

### First
you must run the command to install the plugin and its dependences in you project
```bash
yarn add react-native-shadow
``` 

### Second
you have to config your project to support the SVG component we use( `react-native-svg` - [Link](https://github.com/react-native-community/react-native-svg)):

```bash
yarn add react-native-svg@X.X.X
``` 
**You must get the correct verion for your project! Or there will be some unknown exception**


Run `yarn run android` to install the lastest version on your phone

### Third

After config the SVG component,you can simply use it in your project(*show ES6 only*):

1. `import {BoxShadow} from 'react-native-shadow'`(For BorderShadow,import it as 'BoxShadow')
2. set an opption object:
```js
const shadowOpt = {
	width:100,
	height:100,
	color:"#000",
	border:2,
	radius:3,
	opacity:0.2,
	x:0,
	y:3,
	style:{marginVertical:5}
}
```
3.create a shadow element and set the object to `setting`,and you 

**MUST SET ITS PARENTELEMENT RELATIVE**:

**MUST SET ITS PARENTELEMENT RELATIVE**:
```js
render = () => {
	return (
		<View>
			<Shadow setting={shadowOpt}>
				<View style={{width:100,height:100}}/>
			</Shadow>
		</View>
	)
}
```

## Sample
Here is a simple use of the component:
```js
import React, {Component} from 'react'
import {
	StyleSheet,
	View,
	Text,
	ScrollView,
	Image,
	TouchableHighlight
} from 'react-native'

import {BoxShadow} from 'react-native-shadow'

export default class VideoCell extends Component {
	render = () => {
		const shadowOpt = {
			width:160,
			height:170,
			color:"#000",
			border:2,
			radius:3,
			opacity:0.2,
			x:0,
			y:3,
			style:{marginVertical:5}
		}

		return (
			<BoxShadow setting={shadowOpt}>
				<TouchableHighlight style={{
					position:"relative",
					width: 160,
					height: 170,
					backgroundColor: "#fff",
					borderRadius:3,
					// marginVertical:5,
					overflow:"hidden"}}>
					…………………………
				</TouchableHighlight>
			</BoxShadow>
		)
	}
}
```

## Manual

#### the attribute we supported now:

###BoxShadow
+ **width**: you must set the value the same as your child component
+ **height**: the same as above
+ **color**: the color of shadow,it **doesn't support rgba now**,you may use opacity
+ **border**: the width of shadow , cannot less than 0
+ **radius**: the same value as the "borderRadius" of chileElement
+ **opacity**: the opacity of shadow
+ **x**: the offsetX of shadow
+ **y**: the offsetY of shadow
+ **style**: the style you want to add to the wrapper box

###BorderShadow
+ **width**,**color**,**border**,**opacity**,**style**: these attributes are the same as above
+ **side**: "top" or "bottom",you can choose where the shadow shows
+ **inset**: `true` or `false`,this is similar to CSS - `shadow: color inset`

#### what to notice

This component is so simple,and we are making efforts to make it better;
if you met any problem when using it,you can try solving yourself by reading the source code or post an issue,thanks ~~


[npm-url]: https://npmjs.org/package/react-native-shadow
[downloads-image]: http://img.shields.io/npm/dm/react-native-shadow.svg
[npm-image]: http://img.shields.io/npm/v/react-native-shadow.svg
