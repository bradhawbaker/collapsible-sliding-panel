/*
 * Copyright © 2016-2017 European Support Limited
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React, { Component } from "react";

import CollapsibleSlidingPanel from "../../collapsibleSlidingPanel/CollapsibleSlidingPanel.jsx";

export default class CollapsibleSlidingPanelTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leftPanelExpanded: false
    };
  }

  onFilter(filterValues) {
    this.setState({ filterValues: filterValues });
  }

  onCollapse(isOpen) {
    let leftPanelExpanded = isOpen;
    this.setState({ leftPanelExpanded });
  }

  getMenuContent() {
    return (
      <div className="menu-content">
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
      <div className="collapsible-sliding-panel-container">
        <div className="collapsible-sliding-panel-header">
          <h1>Collapsible Sliding Panel</h1>
          <p>
            The sliding panel is{" "}
            {this.state.leftPanelExpanded ? "open" : "closed"}
          </p>
        </div>
        <CollapsibleSlidingPanel
          slidingPanelClassName="collapsible-sliding-panel"
          slidingPanelClosedClassName="collapsible-sliding-panel-is-closed"
          expanderHandleClassName="collapsible-sliding-panel-expander"
          slidingPanelContent={menuContent}
          collapseCallback={this.onCollapse.bind(this)}
          collapsiblePanelOpen={true}
          tooltipText={{
            expand: "Expandir",
            collapse: "Contraer"
          }}
        >
          <div className="content-container">
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
