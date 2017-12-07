import React, {Component} from 'react';

import CollapsibleSlidingPanel from '../collapsibleSlidingPanel/CollapsibleSlidingPanel.jsx';
import './resources/_collapsibleSlidingPanel.scss';

export default class CollapsibleSlidingPanelTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leftPanelExpanded: false
    };

    this.onCollapse = this.onCollapse.bind(this);
  }

  onCollapse(isOpen) {
    let leftPanelExpanded = isOpen;
    this.setState({leftPanelExpanded});
  }

  getMenuContent() {
    return (
      <div className='menu-content'>
        <p>this is in the collapsible panel content</p>
        <p>this is in the collapsible panel content</p>
        <p>this is in the collapsible panel content</p>
        <p>this is in the collapsible panel content</p>
      </div>
    );
  }

  render() {
    let menuContent = this.getMenuContent();
    return (
      <div className='collapsible-sliding-panel-container'>
        <div className='collapsible-sliding-panel-header'>
          <h1>Collapsible Sliding Panel</h1>
          <p>The sliding panel is {this.state.leftPanelExpanded ? 'open' : 'closed'}</p>
        </div>
        <CollapsibleSlidingPanel
          slidingPanelClassName='collapsible-sliding-panel'
          slidingPanelClosedClassName='collapsible-sliding-panel-is-closed'
          expanderHandleClassName='collapsible-sliding-panel-expander'
          slidingPanelContent={menuContent}
          collapseCallback={this.onCollapse}>
          <div className='content-container'>
            <p>this is the main area content</p>
            <p>this is the main area content</p>
            <p>this is the main area content</p>
            <p>this is the main area content</p>
            <p>this is the main area content</p>
            <p>this is the main area content</p>
            <p>this is the main area content</p>
          </div>
        </CollapsibleSlidingPanel>
      </div>
    );
  }
}
