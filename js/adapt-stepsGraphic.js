import Adapt from 'core/js/adapt';
import StepsGraphicModel from './StepsGraphicModel';
import StepsGraphicView from './StepsGraphicView';

export default Adapt.register('stepsGraphic', {
  model: StepsGraphicModel,
  view: StepsGraphicView
});
