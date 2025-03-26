import React, { Component } from 'react'

export default class Logo extends Component {
    render() {
        const { size, color, padding, showVersion } = this.props;
        const style = {
            fontSize: size,
            fontWeight: 'bold',
            color: color,
            textAlign: 'center',
            padding: padding,            
        }

        return (
            <div className="logo" style={{display: 'flex', justifyContent: 'center', alignItems: 'baseline'}}>
                <div style={style}>✨🧑‍🏫 tom.ai</div>
                {showVersion ? ` v${'1.0.0'}` : ''}
            </div>
            
        )
    }
}
