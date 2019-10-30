import React, { Component } from "react";
import ReactSVG from "react-svg";
import styles from "./styles.module.scss";

export default class FeatureContainer extends Component {
  render() {
    return (
      <div className={styles.feature}>
        <div className={styles.left}>
          <div>
            <h1>{this.props.title}</h1>
          </div>
          <div style={{ fontSize: "1em" }}>{this.props.children}</div>
          <div>
            <button onClick={() => window.scrollBy(0, 9999)}>Оставить заявку</button>
          </div>
        </div>

        <div className={styles.right}>
          <ReactSVG src={this.props.src} />
        </div>
      </div>
    );
  }
}
