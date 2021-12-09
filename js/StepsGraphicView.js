import ComponentView from 'core/js/views/componentView';

class StepsGraphicView extends ComponentView {

  preRender() {
    this.onStepClick = this.onStepClick.bind(this);
    this.onControlClick = this.onControlClick.bind(this);
    this.listenTo(this.model.getChildren(), 'change:_isActive', this.onItemsActiveChange);
  }

  postRender () {
    this.$('.component__widget').imageready(() => {
      this.setReadyStatus();
      if (this.model.get('_hasEqualHeight')) {
        const mainGraphicHeight = this.$('.stepsgraphic__graphic-intro').find('.stepsgraphic__image-container').height();
        this.$('.stepsgraphic__item-graphic-container').height(mainGraphicHeight);
      }
    });
    if (this.model.get('_setCompletionOn') === 'inview') {
      this.setupInviewCompletion('.component__widget');
    }

    const items = this.model.getChildren();
    if (!items || !items.length) return;
    const activeItem = this.model.getActiveItem();
    if (!activeItem) {
      this.model.toggleItemsState(0);
    } else {
      items.trigger('change:_isActive', activeItem, true);
    }
  }

  onStepClick(event) {
    const $btn = $(event.currentTarget);
    const itemIndex = $btn.data('index');
    this.model.toggleItemsState(itemIndex);
  }

  onControlClick(event) {
    const $btn = $(event.currentTarget);
    let index = this.model.getActiveItem().get('_index');
    $btn.data('direction') === 'right' ? index++ : index--;
    this.model.toggleItemsState(index);
  }

}

StepsGraphicView.template = 'steps-graphic.jsx';

export default StepsGraphicView;
