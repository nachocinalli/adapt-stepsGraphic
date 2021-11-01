import ItemsComponentModel from 'core/js/models/ItemsComponentModel';

export default class StepsGraphicModel extends ItemsComponentModel {

  toggleItemsState(index) {
    const item = this.getItem(index);
    this.setActiveItem(index);
    item.toggleVisited(true);

  }
}
