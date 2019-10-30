import React, { Fragment } from "react";
import Wrapper from "./components/Wrapper";
import Main from "./components/Main";
import GeneralInfo from "./components/GeneralInfo";
import FeatureContainer from "./components/FeatureContainer";
import Submit from "./components/Submit";
import "./App.css";

const text =
  "description description description description description\n" +
  "          description description description description\n" +
  "          description description description description description\n" +
  "          description description description description\n" +
  "          description description description description description\n" +
  "          description description description description\n" +
  "          description description description description description\n" +
  "          description description description description\n" +
  "          description description description description description\n" +
  "          description description description description";

function App() {
  return (
    <Fragment>
      <Wrapper dark withGradient>
        <Main />
      </Wrapper>

      <Wrapper withContainer>
        <GeneralInfo />
      </Wrapper>

      <Wrapper dark withContainer>
        <FeatureContainer title={"Разработка AI решений"} src={"/svg/1.svg"}>
          {text}
        </FeatureContainer>
      </Wrapper>

      <Wrapper withContainer>
        <FeatureContainer title={"Разработка AI решений"} src={"/svg/2.svg"}>
          {text}
        </FeatureContainer>
      </Wrapper>

      <Wrapper dark withContainer>
        <FeatureContainer title={"Разработка AI решений"} src={"/svg/3.svg"}>
          {text}
        </FeatureContainer>
      </Wrapper>

      <Wrapper withContainer>
        <FeatureContainer title={"Разработка AI решений"} src={"/svg/4.svg"}>
          {text}
        </FeatureContainer>
      </Wrapper>

      <Wrapper dark withGradient>
          <Submit/>
      </Wrapper>
    </Fragment>
  );
}

export default App;
