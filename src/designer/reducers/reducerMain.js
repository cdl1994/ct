// redux: reducers 
// the main file of the reducer part, combine all reducers

import { combineReducers } from 'redux';
import ActiveCategoryReducer from './choose_template/step1CategoryReducer';
import ActiveTemplateReducer from './choose_template/step1TemplateReducer';
import TextReducer from './design_tool/FontReducer';
import ImageReducer from './design_tool/ImageReducer';
import ColorReducer from './design_tool/ColorReducer';
import SVGReducer from './design_tool/SVGReducer';
import UploadedImageReducer from './design_tool/UploadedImageReducer';

const allReducers = combineReducers({
  activeCategory: ActiveCategoryReducer,
  activeTemplate: ActiveTemplateReducer,
  textStyle: TextReducer,
  svgSelected: ImageReducer,
  selectedColor: ColorReducer,
  svgImage: SVGReducer,
  uploadedImages: UploadedImageReducer,
});

export default allReducers;
