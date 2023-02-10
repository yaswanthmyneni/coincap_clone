import React from "react";
import { connect } from "react-redux";
import { Avatar, Button, Spin, Table } from "antd";
import { getDataFetch } from "../../redux-management/slices/homeSlice/homeSlice";
import { Footer, Info, NavigationBar } from "../../components";
import "./Home.css";

const mapStateToProps = (state) => ({
  cryptoData: state.home.data,
  isLoading: state.home.isLoading,
  errorFetching: state.home.errorFetching,
});

const mapDispatchToProps = (dispatch) => ({
  dataFetch: () => dispatch(getDataFetch()),
});

class Home extends React.Component {
  state = { data: [] };

  precision = (string) => {
    let val = string.split(".")[0];
    let valArray = val.split("");
    let decimal = "";
    let symbol;
    if (valArray.length > 12) {
      symbol = "t";
      for (let i = 0; i < 12; i++) {
        if (i > 9) {
          decimal += valArray.pop();
        } else {
          valArray.pop();
        }
      }
    }
    if (valArray.length > 9) {
      symbol = "b";
      for (let i = 0; i < 9; i++) {
        if (i > 6) {
          decimal += valArray.pop();
        } else {
          valArray.pop();
        }
      }
    }
    if (valArray.length > 6) {
      symbol = "m";
      for (let i = 0; i < 6; i++) {
        if (i > 3) {
          decimal += valArray.pop();
        } else {
          valArray.pop();
        }
      }
    }
    if (valArray.length > 3) {
      symbol = "k";
      for (let i = 0; i < 3; i++) {
        if (i > 0) {
          decimal += valArray.pop();
        } else {
          valArray.pop();
        }
      }
    }
    return (
      <p key={string}>
        ${valArray.join("")}.{decimal}
        {symbol}
      </p>
    );
  };

  componentDidMount() {
    this.props.dataFetch();
  }

  componentDidUpdate(_, prevState) {
    if (prevState.data.length === 0 && this.props.cryptoData.length !== 0) {
      this.setState(() => ({
        data: this.props.cryptoData.slice(0, 50),
      }));
    }
  }

  render() {
    const columns = [
      {
        title: "Rank",
        dataIndex: "rank",
        key: "rank",
        sorter: (a, b) => a.rank - b.rank,
        width: 100,
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        width: 250,
        render: (name, obj) => {
          const url = `https://assets.coincap.io/assets/icons/${obj.symbol.toLowerCase()}@2x.png`;
          return (
            <div className="flex-row" key={name}>
              <Avatar src={url} />
              <div className="flex-col">
                <p>{name}</p>
                <p>{obj.symbol}</p>
              </div>
            </div>
          );
        },
      },
      {
        title: "Price",
        dataIndex: "priceUsd",
        key: "priceUsd",
        width: 120,

        render: (price) => {
          return <p key={price}>${Number(price).toFixed(2)}</p>;
        },
      },
      {
        title: "Market Cap",
        dataIndex: "marketCapUsd",
        key: "marketCapUsd",
        width: 120,
        responsive: ["md"],
        render: (marketCapUsd) => this.precision(marketCapUsd),
      },
      {
        title: "VWAP (24HR)",
        dataIndex: "vwap24Hr",
        key: "vwap24Hr",
        width: 120,
        responsive: ["md"],
        render: (vwap24Hr) => {
          return <p key={vwap24Hr}>${Number(vwap24Hr).toFixed(2)}</p>;
        },
      },
      {
        title: "Supply",
        dataIndex: "supply",
        key: "supply",
        width: 100,
        responsive: ["md"],
        render: (supply) => this.precision(supply),
      },
      {
        title: "Volume (24HR)",
        dataIndex: "volumeUsd24Hr",
        key: "volumeUsd24Hr",
        width: 100,
        responsive: ["md"],
        render: (volumeUsd24Hr) => this.precision(volumeUsd24Hr),
      },
      {
        title: "Change (24HR)",
        dataIndex: "changePercent24Hr",
        key: "changePercent24Hr",
        width: 100,
        responsive: ["md"],
        render: (changePercent24Hr) => {
          let val = changePercent24Hr.split(".")[0];
          let decimal = changePercent24Hr.split(".")[1];
          let color;
          if (val[0] === "-") {
            color = "red";
          } else {
            color = "green";
          }
          return (
            <p style={{ color }} key={changePercent24Hr}>
              {val}.{decimal.split("")[0]}
              {decimal.split("")[1]}%
            </p>
          );
        },
      },
    ];

    return (
      <>
        <NavigationBar />
        {this.props.isLoading === true ? (
          <Spin tip="Loading" className="loading" size="large">
            <div className="content" />
          </Spin>
        ) : this.props.errorFetching ? (
          <h2 className="error">
            {this.props.errorFetching}, please try again!
          </h2>
        ) : (
          <>
            <Info />
            <div className="table-position">
              <Table
                columns={columns}
                dataSource={this.state.data}
                className="table-border"
                pagination={false}
                scroll={{
                  x: 1010,
                }}
              />
            </div>
            {this.state.data.length !== 100 && (
              <div className="btn">
                <Button
                  onClick={() =>
                    this.setState(() => ({
                      data: this.props.cryptoData,
                    }))
                  }
                  type="primary"
                >
                  view more
                </Button>
              </div>
            )}
            <Footer />
          </>
        )}
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
