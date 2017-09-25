import React from 'react';

class ThemedDecorations extends React.Component {
  render(){
    const childrenWithWrapperDiv = React.Children.map(this.props.children, child => {
      return (
        <div className={this.props.theme}>{child}</div>
      );
    });

    return(
      <div>
        {childrenWithWrapperDiv}
      </div>
    )
  }
}

export default ThemedDecorations;
