import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Account } from "./account/Account";
import { PaidUser } from "./account/PaidUser";
import { LoginView } from "./modules/user/LoginView";
import { RegisterView } from "./modules/user/RegisterView";
import { Header } from "./shared/Header";

export class Routes extends React.PureComponent {
  public render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/login" component={LoginView} />
          <Route
            path="/"
            render={() => (
              <React.Fragment>
                <Header />
                <div>
                  <Route path="/register" component={RegisterView} />
                  <Route path="/account" component={Account} />
                  <Route path="/paid-user" component={PaidUser} />
                  <Route
                    exact={true}
                    path="/"
                    render={() => <div>Homepage</div>}
                  />
                </div>
              </React.Fragment>
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
