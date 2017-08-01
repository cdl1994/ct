// redux: reducers 

import {combineReducers} from 'redux';
import ActiveCategoryReducer from './chooseTemplate/step1CategoryReducer';
import ActiveTemplateReducer from './chooseTemplate/step1TemplateReducer';
import TextReducer from './design_tool/FontReducer';
import ImageReducer from './design_tool/ImageReducer';
import ColorReducer from './design_tool/ColorReducer';
import SVGReducer from './design_tool/SVGReducer';
// import SelectTextReducer from './design_tool/SelectTextReducer';

const allReducers = combineReducers({
  activeCategory: ActiveCategoryReducer,
  activeTemplate: ActiveTemplateReducer,
  textStyle: TextReducer,
  svgSelected: ImageReducer,
  selectedColor: ColorReducer,
  svgImage: SVGReducer,
});

export default allReducers;