import { connect } from 'react-redux';
import Step2Presnt from '../components/Step2Presnt';

function mapStateToProps(state) {
  return {
    template: state.activeTemplate,
    svgImage: state.svgImage,
    // textContent: state.fontStyle.textContent,
    // textFont: state.fontStyle.textFont,
    // textSize: state.fontStyle.textSize,
    // textColor: state.fontStyle.textColor,
    // textRotate: state.fontStyle.textRotate,
  }
}

const PresntStep2 = connect(mapStateToProps)(Step2Presnt);

export default PresntStep2;