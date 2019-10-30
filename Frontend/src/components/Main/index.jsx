import React, { Component, Fragment } from "react";
import Waves from "../Waves";
import ReactSVG from "react-svg";
import styles from "./styles.module.scss";

class Main extends Component {
  render() {
    return (
      <Fragment>
        <div className={"container"} style={{ textAlign: "center" }}>
          <div className={styles.topText}>
            <h3>МЫ ПОСТРОИМ ДЕТСКИЙ ДОМ!</h3>
          </div>
          <div className={styles.logo}>
            <ReactSVG src={"svg/logo.svg"} />
            <h1> VOCRUM</h1>
          </div>
          <div className={styles.bottomText}>
            <h2>
              А здесь мы напишем слоган вокрума, какой же это классный
              техноброкер
            </h2>
          </div>
        </div>
        <Waves
          style={{
            paddingTop: "100px",
            width: "100vw",
            height: "100vh",
            backgroundColor: "black"
          }}
        />
      </Fragment>
    );
  }
}

export default Main;
