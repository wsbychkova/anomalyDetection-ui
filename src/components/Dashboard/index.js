import React from "react";
import { Link } from "react-router-dom";

class Dashboard extends React.Component {
  state = {
    data: "",
  };

  showFile = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;
      this.setState({
        data: text,
      });
    };
    reader.readAsText(e.target.files[0]);
  };

  render() {
    const {data} = this.state;
    return (
      <>
        <h1>Dashboard</h1>
        <div>Upload data</div>
        <input type="file" onChange={(e) => this.showFile(e)} />
        <div>
          <Link to={{ pathname: "machineLearning", data: data }}>Machine Learning</Link>
        </div>
      </>
    );
  }
}

export default Dashboard;
