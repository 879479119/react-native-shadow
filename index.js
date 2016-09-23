/**
 * @author rocksama
 * @last-modified 2016-09-23
 * @repo
 */

import React, {Component} from 'react'
import {View} from 'react-native'
import Svg,{ Rect,Defs,LinearGradient,Stop,RadialGradient,Path } from 'react-native-svg'

export default class Shadow extends Component{
	
	render = () => {
		//get the shadow settings and give them default values
		const { setting:{width=0,height=0,color="#fff",border=0,radius=0,opacity=1,x=0,y=0,style={}}, children } = this.props

		//define the lengths
		const lineWidth = border,
			rectWidth = width-radius*2,
			rectHeight = height-radius*2

		//the same parts for gradients
		const linear = [
			<Stop offset="0" stopColor={color} stopOpacity={opacity} />,
			<Stop offset="1" stopColor={color} stopOpacity="0" />
		], radial = [
			<Stop offset="0" stopColor={color} stopOpacity={opacity} />,
			<Stop offset={(radius/(lineWidth+radius)).toString()} stopColor={color} stopOpacity={opacity} />,
			<Stop offset="1" stopColor={color} stopOpacity="0" />
		]

		const outerWidth = lineWidth+radius

		//return a view ,whose background is a svg picture
		return (
			<View style={[{position:"relative",width:width,height:height},style]}>
				<Svg height={height+lineWidth*2+radius*2} width={width+lineWidth*2+radius*2} style={{position:"absolute",top:y-lineWidth,left:x-lineWidth}}>
					<Defs>
						<LinearGradient id="top" x1="0" y1={lineWidth} x2="0" y2="0">{linear}</LinearGradient>
						<LinearGradient id="bottom" x1="0" y1={rectHeight+lineWidth+2*radius} x2="0" y2={rectHeight+2*lineWidth+2*radius}>{linear}</LinearGradient>
						<LinearGradient id="left" x1={lineWidth} y1="0" x2="0" y2="0">{linear}</LinearGradient>
						<LinearGradient id="right" x1={rectWidth+lineWidth+2*radius} y1="0" x2={rectWidth+lineWidth*2+2*radius} y2={0}>{linear}</LinearGradient>
						<RadialGradient id="border-left-top" r={outerWidth} cx={outerWidth} cy={outerWidth}>{radial}</RadialGradient>
						<RadialGradient id="border-left-bottom" r={outerWidth} cx={outerWidth} cy={lineWidth+radius+rectHeight}>{radial}</RadialGradient>
						<RadialGradient id="border-right-top" r={outerWidth} cx={lineWidth+radius+rectWidth} cy={outerWidth}>{radial}</RadialGradient>
						<RadialGradient id="border-right-bottom"  r={outerWidth} cx={lineWidth+radius+rectWidth} cy={lineWidth+radius+rectHeight}>{radial}</RadialGradient>
					</Defs>

					<Path d={`M 0 ${outerWidth},Q 0 0 ${outerWidth} 0,v ${lineWidth},q ${-radius} 0 ${-radius} ${radius},h ${-lineWidth},z`} fill="url(#border-left-top)"/>
					<Path d={`M ${rectWidth+lineWidth+radius} 0,q ${outerWidth} 0 ${outerWidth} ${outerWidth},h ${-lineWidth},q 0 ${-radius} ${-radius} ${-radius},v ${-lineWidth},z`} fill="url(#border-right-top)"/>
					<Path d={`M ${rectWidth+lineWidth+2*radius} ${rectHeight+lineWidth+radius},h ${lineWidth},q 0 ${outerWidth} -${outerWidth} ${outerWidth},v ${-lineWidth},q ${radius} 0 ${radius} ${-radius},z`} fill="url(#border-right-bottom)"/>
					<Path d={`M 0 ${rectHeight+lineWidth+radius},q 0 ${outerWidth} ${outerWidth} ${outerWidth},v ${-lineWidth},q ${-radius} 0 ${-radius} ${-radius},h ${-lineWidth},z`} fill="url(#border-left-bottom)"/>

					<Rect x={outerWidth} y="0" width={rectWidth} height={lineWidth} fill="url(#top)" />
					<Rect x="0" y={outerWidth} width={lineWidth} height={rectHeight} fill="url(#left)" />
					<Rect x={rectWidth+lineWidth+2*radius} y={outerWidth} width={lineWidth} height={rectHeight} fill="url(#right)" />
					<Rect x={outerWidth} y={rectHeight+lineWidth+2*radius} width={rectWidth} height={lineWidth} fill="url(#bottom)" />

					<Path d={`M ${outerWidth} ${lineWidth},h ${rectWidth},q ${radius} 0 ${radius} ${radius},v ${rectHeight},q 0 ${radius} -${radius} ${radius},h -${rectWidth},q -${radius} 0 -${radius} -${radius},v -${rectHeight},q 0 -${radius} ${radius} -${radius}`} fill={`rgba(0,0,0,${opacity || 1})`}/>
				</Svg>
				{children}
			</View>
		)
	}
}