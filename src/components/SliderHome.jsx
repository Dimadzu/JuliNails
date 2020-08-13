import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
  height: '500px',
  color: 'white',
  lineHeight: '160px',
  textAlign: 'center',
  background: 'black',
};

class SliderHome extends React.Component {
  state = {
    dotPosition: 'right',
  };

  handlePositionChange = ({ target: { value: dotPosition } }) => this.setState({ dotPosition });

  render() {
    const { dotPosition } = this.state;
    return (
      <>
     
        <Carousel autoplay dotPosition={dotPosition}>
          <div>
          <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </>
    );
  }
}


export default SliderHome;