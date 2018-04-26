import React, {Component} from 'react'
import {View} from 'react-native'
import Svg,{ Rect,Defs,LinearGradient,Stop,RadialGradient,Path } from 'react-native-svg'

export default class BorderShadow extends Component {
	render = () => {

		const { setting:{side="bottom",width=0,color="#000",border=0,inset=false,style={}}, children } = this.props
		var {setting: {opacity}} = this.props;
		if (typeof opacity !== 'number') {
			opacity = 1;
		}

		const linear = (key) => {
			return [
				<Stop offset="0" stopColor={color} stopOpacity={opacity} key={key+'Linear0'} />,
				<Stop offset="1" stopColor={color} stopOpacity="0" key={key+'Linear1'} />
			]
		}

		const lineWidth = border

		return (
			<View style={[{position:"relative",width:width},style]}>
				{(()=>{
					switch (side){
						case "top":
							return [
								opacity !== 0 ?
								<Svg height={lineWidth} width={width+lineWidth} style={{position:"absolute",top:(inset?0:-lineWidth)}}>
									<Defs>
										<LinearGradient id="top" x1="0%" x2="0%" y1="100%" y2="0%">{linear('BorderTop')}</LinearGradient>
										<LinearGradient id="top-inset" x1="0%" x2="0%" y1="0%" y2="100%">{linear('BorderTopInset')}</LinearGradient>
									</Defs>
									<Rect x={0} y={0} width={width} height={lineWidth} fill={`url(#top${inset?"-inset":""})`} />
								</Svg> : null,
								...children
							]
						case "bottom":
							return [
								...children,
								opacity !== 0 ?
								<Svg height={lineWidth} width={width+lineWidth} style={{position:"absolute",bottom:(inset?-lineWidth:0)}}>
									<Defs>
										<LinearGradient id="bottom" x1="0%" x2="0%" y1="0%" y2="100%">{linear('BorderBottom')}</LinearGradient>
										<LinearGradient id="bottom-inset" x1="0%" x2="0%" y1="100%" y2="0%">{linear('BorderBottomInset')}</LinearGradient>
									</Defs>
									<Rect x={0} y={0} width={width} height={lineWidth} fill={`url(#bottom${inset?"-inset":""})`} />
								</Svg> : null
							]
						default:
							throw new Error("Wrong Type of Side! We just support 'top' and 'bottom'")
							return null
					}
				})()}
			</View>
		)
	}
}
