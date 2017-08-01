import React, { Component } from 'react';

const Data = require('../homepage.json');
console.log(Data);

class HPBody extends Component {
  constructor() {
    super();
    this.state = {
      data: Data
    };
  }
  render() {
    return (
      <div>
        <div>Hello World</div>
        <div>background color: {this.state.data.theme.background_color}</div>
        <Coupon />
        <CigarBands customize_data = {this.state.data.customize} />
      </div>
    );
  }
}


class Coupon extends Component {
  render() {
    return (
      <div id="coupon">
        <HPTitle>10% OFF YOUR FIRST ORDER</HPTitle>
        <p>Simply enter your email here and look for an email with a code to use on your first order.</p>
      </div>
    );
  }
}

class CigarBands extends Component {
  render() {
    const customize_data = this.props.customize_data;
    const carousel_items = customize_data.map( c_data =>
      <div className="owl-carousel">
        <CustomBand band_img={c_data.image} />
        <CustomButton 
          button_text={c_data.button_text}
        />
      </div>
    );
    return (
      <div id="cigarbands">
        <HPTitle>MOST POPULAR CIGAR BANDS</HPTitle>
        <div id="custom-carousel">
          {carousel_items}
        </div>
      </div>
    );
  }
}

class HPTitle extends Component {
  render() {
  	return (
  	  <h1>{this.props.children}</h1>
  	);
  } 
}

class CustomBand extends Component {
  render() {
    return (
      <img className="custom_band" src={this.props.band_img} alt=""/>
    );
  }
}

class CustomButton extends Component {
  handleClick() {
    alert('click');
  }
  render() {
    return (
      <button className="custom_button" onClick={ () => this.handleClick() }>
        {this.props.button_text}
      </button>
  );
  }
}

// class EmailForm extends Component {
//   constructor() {
//     super();
//     this.state = {
//       value: this.props.value
//     }
//   }
//   onChange() {
//     this.setState(
//       {value: this.state.value}
//     );
//   }
//   render() {
//     return (
//       <div id="formnewsletter_pop">
//         <input type="text" value="Enter Your Email" onChange={ () => this.onChange() }/>
//         <button class="submitemail" id="submitNewsletter_pop"><img src="/image/data/arrow-right.png" alt="right arrow" class="arrow-right-submit" /></button>
//         <img id="loading_img_pop" src="image/data/loading1.gif" alt="loading" />
//       </div>
//     );
//   }
// }

export { HPBody };
