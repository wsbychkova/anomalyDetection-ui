import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { getAnomalyDetection } from "../../store/actions/machineLearning.thunk";
import Chart from "react-google-charts";
import { getMachineLeagning } from "../../store/selectors";

const Container = styled.div`
  height: 100vh;
`;
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid blue;
  color: blue;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

class MachineLearning extends React.Component {
  state = {
    typeOfChart: "svm",
  };

  componentDidMount() {
    const { data } = this.props.location;
    // this.props.getAnomalyDetection();
    setTimeout(() => {
      this.props.getAnomalyDetection(data);
    }, 5000);
  }

  handleClick = (e) => {
    this.setState({
      typeOfChart: e.target.id,
    });
  };

  renderChart = () => {
    const { data } = this.props;
    const { typeOfChart } = this.state;

    const chartDataHead = ["Property", "isAnomaly"];

    if (typeOfChart === "allData" && data.allData) {
      const allData = [];
      const dataTrain = [];
      const dataTest = [];
      const last = data.allData.data[0].length - 1;

      data.allData.data.forEach((item, index) => {
        allData[index] = [index, item[last]];
      });

      allData.splice(0, 0, chartDataHead);

      data.allData.trainData.forEach((y, index) => {
        dataTrain[index] = [index, Math.round(y)];
      });
      dataTrain.splice(0, 0, chartDataHead);

      data.allData.testData.forEach((y, index) => {
        dataTest[index] = [index, Math.round(y)];
      });
      dataTest.splice(0, 0, chartDataHead);

      return (
        <>
          <Chart
            width={"100%"}
            height={300}
            chartType="ScatterChart"
            loader={<div>Loading Chart</div>}
            data={allData}
            options={{
              intervals: { style: "sticks" },
              legend: "none",
              title: "Исходные данные",
            }}
          />
          <Chart
            width={"100%"}
            height={300}
            chartType="ScatterChart"
            loader={<div>Loading Chart</div>}
            data={dataTrain}
            options={{
              intervals: { style: "sticks" },
              legend: "none",
              title: "Обучающая выборка",
            }}
          />
          <Chart
            width={"100%"}
            height={300}
            chartType="ScatterChart"
            loader={<div>Loading Chart</div>}
            data={dataTest}
            options={{
              intervals: { style: "sticks" },
              legend: "none",
              title: "Прогноз обнаружения аномалий",
            }}
          />
        </>
      );
    } else {
      let chartDataBody = [];
      data[typeOfChart].forEach((y, index) => {
        chartDataBody[index] = [index, Math.round(y)];
      });
      chartDataBody.splice(0, 0, chartDataHead);
      let title = "";
      if (typeOfChart === "svm") {
        title = "Метод опорных векторов";
      } else if (typeOfChart === "randomForest") {
        title = "Метод случайного леса";
      } else if (typeOfChart === "regression") {
        title = "Метод прогнозирования";
      } else if (typeOfChart === "resultOfHybridMethod") {
        title = "Разработанный гибридный метод обнаружения аномалий";
      }

      return (
        <Chart
          width={"100%"}
          height={300}
          chartType="ScatterChart"
          loader={<div>Loading Chart</div>}
          data={chartDataBody}
          options={{
            intervals: { style: "sticks" },
            legend: "none",
            title: title,
          }}
        />
      );
    }
  };

  render() {
    const { data } = this.props;
    if (!!data) {
      return (
        <Container>
          <h1>
            Разработка высокопроизводительного алгоритма обнаружения аномалий
          </h1>
          <Button id="allData" onClick={this.handleClick}>
            Data
          </Button>
          <Button id="svm" onClick={this.handleClick}>
            Support Machine Vector
          </Button>
          <Button id="randomForest" onClick={this.handleClick}>
            Rangom Forest
          </Button>
          <Button id="regression" onClick={this.handleClick}>
            Regression
          </Button>
          <Button id="resultOfHybridMethod" onClick={this.handleClick}>
            Hybrid Method
          </Button>

          {this.renderChart()}
        </Container>
      );
    } else return <div>LOADING...</div>;
  }
}

export default withRouter(
  connect(
    (state) => ({
      data: getMachineLeagning(state),
    }),
    {
      getAnomalyDetection,
    }
  )(MachineLearning)
);
