import React, { Component } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

class Wrapper extends Component {
  static defaultProps = {
    withGradient: false,
    withContainer: false,
    dark: false
  };

  render() {
    return (
      <div
        className={classNames(
          styles.wrapper,
          this.props.className,
          this.props.dark && styles.dark,
          this.props.withGradient && styles.withGradient
        )}
      >
        {this.props.withContainer ? (
          <Container>{this.props.children}</Container>
        ) : (
          this.props.children
        )}
      </div>
    );
  }
}

export class Container extends Component {
  render() {
    return (
      <div className={"container"}>
        <div className={styles.innerWrapper}>{this.props.children}</div>
      </div>
    );
  }
}

export default Wrapper;
