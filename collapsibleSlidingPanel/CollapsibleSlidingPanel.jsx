import React from "react";
import { PropTypes } from "prop-types";
import "../resources/_collapsibleSlidingPanel.scss";

class CollapsibleSlidingPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsiblePanelOpen: props.collapsiblePanelOpen || false
    };
    this.onExpandToggle = this.onExpandToggle.bind(this);
  }
  static get propTypes() {
    return {
      collapseCallback: PropTypes.func,
      slidingPanelContent: PropTypes.any,
      children: PropTypes.any,
      slidingPanelClassName: PropTypes.any,
      slidingPanelClosedClassName: PropTypes.any,
      expanderHandleClassName: PropTypes.any,
      collapsiblePanelOpen: PropTypes.bool,
      tooltipText: PropTypes.shape({
        expand: PropTypes.string.isRequired,
        collapse: PropTypes.string.isRequired
      })
    };
  }
  static get defaultProps() {
    return {
      tooltipText: {
        expand: "Expand",
        collapse: "Collapse"
      }
    };
  }
  onExpandToggle(onCollapseCallback) {
    let collapsiblePanelOpen = this.state.collapsiblePanelOpen;

    if (collapsiblePanelOpen) {
      collapsiblePanelOpen = false;
    } else {
      collapsiblePanelOpen = true;
    }

    this.setState({ collapsiblePanelOpen });

    if (onCollapseCallback) {
      // only call the callback if one was provided
      onCollapseCallback(collapsiblePanelOpen);
    }
  }

  getPanelClassName(panelClassName, panelClosedClassName) {
    let panelClass = panelClassName;
    let collapsiblePanelOpen = this.state.collapsiblePanelOpen;
    if (!collapsiblePanelOpen) {
      panelClass = panelClass + " " + panelClosedClassName;
    }

    return panelClass;
  }

  getExpanderClassName(expanderHandleClassName, panelClosedClassName) {
    let expanderClass = expanderHandleClassName;
    let collapsiblePanelOpen = this.state.collapsiblePanelOpen;
    if (!collapsiblePanelOpen) {
      expanderClass = expanderClass + " " + panelClosedClassName;
    }

    return expanderClass;
  }

  render() {
    let slidingPanelClass = this.getPanelClassName(
      this.props.slidingPanelClassName,
      this.props.slidingPanelClosedClassName
    );
    let expanderClassName = this.getExpanderClassName(
      this.props.expanderHandleClassName,
      this.props.slidingPanelClosedClassName
    );

    return (
      <div className="collapsible-sliding-panel-main-content">
        <div
          id="collapsible-sliding-panel-expander"
          title={
            this.state.collapsiblePanelOpen ? this.props.tooltipText.collapse : this.props.tooltipText.expand
          }
          className={expanderClassName}
          onClick={() => this.onExpandToggle(this.props.collapseCallback)}
        />
        <div className={slidingPanelClass}>
          {this.props.slidingPanelContent}
        </div>
        <div className="main-panel-class">{this.props.children}</div>
      </div>
    );
  }
}

export default CollapsibleSlidingPanel;
