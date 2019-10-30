import React, { Component, Fragment } from "react";
import styles from "./styles.module.scss";

class GeneralInfo extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <h4>О компании</h4>
        </div>
        <div>
          <h1>С нами ваш дедушка никогда не заболеет</h1>
        </div>

        <div className={styles.features}>
          <div className={styles.features__item}>
            <div>icon</div>
            <ul>
              <li>Решаем задачи классные</li>
              <li>Помогаем маме, гуляем с собакой</li>
              <li>Зависаем на компах</li>
            </ul>
          </div>
          <div className={styles.features__item}>
            <div>icon</div>
            <ul>
              <li>Решаем задачи классные</li>
              <li>Помогаем маме, гуляем с собакой</li>
              <li>Зависаем на компах</li>
            </ul>
          </div>
          <div className={styles.features__item}>
            <div>icon</div>
            <ul>
              <li>Решаем задачи классные</li>
              <li>Помогаем маме, гуляем с собакой</li>
              <li>Зависаем на компах</li>
            </ul>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default GeneralInfo;
