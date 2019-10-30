import React, { Component, Fragment } from "react";
import classNames from "classnames";
import Waves from "../Waves";
import styles from "./styles.module.scss";

const emailRe = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

class Submit extends Component {
  state = {
    name: "",
    email: "",
    comment: "",
    isActive: false
  };

  handleChange = e => {
    const { name, value } = e.target;
    if (value.length < 100) {
        this.setState({
            [name]: value,
            isActive: this.state.name.length > 3 && emailRe.test(this.state.email)
        });
    }
  };

  handleSubmit = () => {
    const { name, email, comment } = this.state;
    if (name.length > 3 && emailRe.test(email)) {
      fetch("/api/submit", {
        method: "POST",
        body: JSON.stringify({ name, email, comment })
      }).then(() => alert("Вы отправили заявку"));
    }
  };

  render() {
    return (
      <Fragment>
        <div className={classNames("container")}>
          <div className={styles.submit}>
            <div className={styles.left}>
              <h1>C нами можно связаться</h1>
              <p className={styles.left__text}>
                Our team has led, scaled and delivered large scale software and
                design projects at multiple startups and high-growth
                environments like Uber, Airbnb and Coinbase.
              </p>
            </div>
            <div className={styles.right}>
              <input
                name={"name"}
                placeholder={"Имя"}
                onChange={this.handleChange}
              />
              <input
                name={"email"}
                placeholder={"Почта"}
                onChange={this.handleChange}
              />
              <input
                name={"comment"}
                placeholder={"Комментарий"}
                onChange={this.handleChange}
              />
              <button
                disabled={!this.state.isActive}
                onClick={this.handleSubmit}
              >
                Оставить заявку
              </button>
            </div>
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

export default Submit;
