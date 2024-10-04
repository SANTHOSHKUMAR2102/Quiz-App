import { Component, h } from "@stencil/core";
import { createRouter, Route } from 'stencil-router-v2';

const Router = createRouter();

@Component({
  tag: "app-root",
})

export class AppRoot{
  render(){
    return[
      <Router.Switch>
        <Route path="/">
          <home-page></home-page>
        </Route>
        <Route path="/main">
          <main-component></main-component>
        </Route>
        <Route path="/about">
          <about-page></about-page>
        </Route>
      </Router.Switch>
    ]
  }
}