import React from 'react';
import { html, classes, compile, templates } from 'core/js/reactHelpers';

export default function StepsGraphic (props) {
  const {
    _graphic,
    _hasDescriptionBelowNavigation,
    _items,
    onStepClick,
    onControlClick
  } = props;
  let _activeIndex = 0;

  const itemActive = props.model.getActiveItem();
  if (itemActive) {
    _activeIndex = itemActive.get('_index');
  };
  return (
    <div className='component__inner stepsgraphic__inner'>
      <templates.header {...props} />
      <div className='stepsgraphic__controls'>
        <button onClick={onControlClick} data-direction='left'
          className={classes([
            'btn-icon',
            'stepsgraphic__controls-left',
            _activeIndex === 0 && 'is-disabled'
          ])}
          aria-label=''
          disabled={_activeIndex === 0 }>

          <div className='icon icon-controls-left'></div>
        </button>
        <button onClick={onControlClick} data-direction='right'
          className={classes([
            'btn-icon',
            'stepsgraphic__controls-right',
            (_activeIndex === _items.length - 1) && 'is-disabled'
          ])}
          aria-label=''
          disabled={(_activeIndex === _items.length - 1)}>
          <div className='icon icon-controls-right'></div>
        </button>
      </div>
      <div className={classes([
        'component__widget', 'stepsgraphic__widget'])}>

        <div className={classes([
          'stepsgraphic__graphic-intro'

        ])}>
          <templates.image {..._graphic}

            classNamePrefixes={['component', 'stepsgraphic']}
            attributionClassNamePrefixes={['component', 'stepsgraphic']}
          />
        </div>
        <div className={classes([
          'stepsgraphic__item-graphic-container'

        ])}>
          {_items.map(({ title, body, _graphic, _classes, _index, _isVisited, _hasPin, _pinTop, _pinLeft, _pinClass, _isNumeric, _isActive }) =>
            <div className={classes([
              'stepsgraphic__item',
              _isVisited && 'is-visited',
              _isActive && 'is-active',
              _classes
            ])}
            key={_index}
            data-index={_index}>
              <templates.image {..._graphic}
                classNamePrefixes={['component__item', 'stepsgraphic__item']}
                attributionClassNamePrefixes={['component', 'stepsgraphic']}
              />
              {_hasPin &&
                <div
                  className={classes(['stepsgraphic__item-pin', 'icon', _pinClass, (_isNumeric ? 'is-numeric' : null)])}
                  style={ { top: `${_pinTop}%`, left: `${_pinLeft}%` }} >
                  {_isNumeric && <div>{html(compile(`${_index + 1}`))}</div>}

                </div>}
              {!_hasDescriptionBelowNavigation &&
                <div className="stepsgraphic__item-description">
                  <div className="stepsgraphic__item-title">
                    {html(compile(title))}
                  </div>
                  <div className="stepsgraphic__item-body">
                    {html(compile(body))}
                  </div>
                </div>
              }
            </div>

          )}
        </div>
        <div className='stepsgraphic__nav'>

          {_items.map(({ title, _index, _isVisited, _isActive }) =>

            <button onClick={onStepClick} key={_index}
              className={classes([
                'btn-text',
                'js-stepgraphic-item',
                _isVisited && 'is-visited',
                _isActive && 'is-active'
              ])}
              data-index={_index}>
              {html(compile(title))}
            </button>
          )}
        </div>
        {_hasDescriptionBelowNavigation && <div className='stepsgraphic__item-container stepsgraphic__break'>
          {_items.map(({ title, body, _classes, _index, _isVisited, _isActive }) =>
            <div className={classes([
              'stepsgraphic__item',
              _isVisited && 'is-visited',
              _isActive && 'is-active',
              _classes
            ])}
            key={_index}
            data-index={_index}>
              <div className="stepsgraphic__item-description">
                <div className="stepsgraphic__item-title">
                  {html(compile(title))}
                </div>
                <div className="stepsgraphic__item-body">
                  {html(compile(body))}
                </div>
              </div>
            </div>
          )}
        </div>
        }
      </div>
    </div>
  );
}
