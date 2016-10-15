# react-native-shadow
[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]
---

Since there is no "shadow" attribute in style list of Android,if we want to add a shadow effect on a component,we must patch a PNG-24 picture,but it's so non-graceful;therefore here comes a SVG shadow plugin to help with this problem. **We suggest you to use native shadow on iOS**

![Effect](http://7xsm7w.com1.z0.glb.clouddn.com/20161015151531.png)

There are two BoxShadow Elements in the picture which support `border-radius`,and the Line at the bottom is generated with `BorderShadow` which provide with a top or bottom shadow(can also be inset shadow)


## HOW TO USE IT

### First
you must run the command to install the plugin and its dependences in you project
```bash
npm install react-native-shadow --save
``` 

### Second
you have to config your project to support the SVG component we use( `react-native-svg` - [Link](https://github.com/react-native-community/react-native-svg)):
Link native code

```bash
react-native link react-native-svg
```
react-native@0.29.0 and 0.29.1 cannot work with Android link properly:[here](https://github.com/facebook/react-native/pull/8612)

Or use rnpm instead

```bash
rnpm link react-native-svg
```

**The commands above may add some code to your android and ios dir,if those commands don't make sense,you can try the ways below(for Android): **

#### Edit  `./android/settings.gradle`

If you haven't add any other component,it's like:
```gradle
rootProject.name = 'reactNative'

include ':app'
```
you can manually add the react-native-svg:
```gradle
rootProject.name = 'reactNative'

include ':app', ':react-native-svg'
project(':react-native-svg').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-svg/android')
```
*if you have other components,don't try deleting theme*

#### Edit `./android/app/build.gradle`
find the dependence part like
```gradle
dependencies {
    compile fileTree(dir: "libs", include: ["*.jar"])
    compile "com.android.support:appcompat-v7:23.0.1"
    compile "com.facebook.react:react-native:+"  // From node_modules
}
``` 
after add:
```gradle
dependencies {
    compile fileTree(dir: "libs", include: ["*.jar"])
    compile "com.android.support:appcompat-v7:23.0.1"
    compile "com.facebook.react:react-native:+"  // From node_modules
    compile project(':react-native-svg')
}
``` 
#### Edit `./android/app/src/main/java/com/*name*/MainApplication.java`
add package after the imports:
```java
import com.horcrux.svg.RNSvgPackage;
```
AND add a method `getPackages` in class MainApplication:
```java
protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new RNSvgPackage()
      );
  }
```

#### run `react-native run-android` to install the lastest version on your phone

## Third

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
3.create a shadow element and set the object to `settihg`,and you 

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