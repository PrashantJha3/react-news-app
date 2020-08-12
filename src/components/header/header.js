import React, { Component } from "react";
import Cinema from "../cinema/cinema";
import Stories from "../stories/stories";
import Upcomingmovies from "../upcomingmovies/upcomingmovies";
import Carousel from "../carousel/carousel";
import Footer from "../footer/footer";
import "./header.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Route from "react-router-dom/Route";
import LTnews from "../LTnews/LTnews";
export default class header extends Component {
  render() {
    return (
      <Router>
        <div>
          <header style={{ position: "fixed", backgroundColor: "black" }}>
            <div className="container">
              <div className="brand">
                <h2 style={{ fontStyle: "italic" }}>
                  {" "}
                  <NavLink to="/">News</NavLink>
                </h2>
              </div>

              <div className="cart">
                <h2 style={{ fontStyle: "italic" }}>
                  {" "}
                  <NavLink to="/cinema">Cinema</NavLink>
                </h2>
              </div>
              <div className="search">
                <h2 style={{ fontStyle: "italic" }}>
                  <NavLink to="/upcomingmovies"> Movies</NavLink>
                </h2>
              </div>

              <div className="cart">
                <h2 style={{ fontStyle: "italic" }}>
                  <NavLink to="/stories">Stories</NavLink>
                </h2>
              </div>
            </div>
          </header>

          <Route
            path="/cinema"
            exact
            strict
            render={() => {
              return <Cinema />;
            }}
          />
          <Route
            path="/upcomingmovies"
            exact
            strict
            render={() => {
              return <Upcomingmovies />;
            }}
          />
          <Route
            path="/stories"
            exact
            strict
            render={() => {
              return <Stories />;
            }}
          />
          <LTnews />
          <Footer />
        </div>
      </Router>
    );
  }
}
