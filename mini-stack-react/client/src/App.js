import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import SimpleStorageContract from "./contracts/SimpleStorage.json";
// import getWeb3 from "./utils/getWeb3";

import AdminDashboard from './components/admin-dashboard';
import StoresPage from './components/stores';
import ApplicationManager from './components/applicationmanager';
import LoginComponent from './components/login';
import StoresCreationPage from './components/storecreation';
import StoreOwnerDashbarad from './components/store-dashboard';
import StoreFront from './components/storefront';
import StoreProductAuction from './components/product-auction';
import StoreProfileSettings from './components/profile-settings'
import StoreFundsTransfer from './components/funds-transfer';
import PrivateRoute from './components/private-route';

class App extends Component {
  // state = { storageValue: 0, web3: null, accounts: null, contract: null };

  // componentDidMount = async () => {
  //   try {
  //     // Get network provider and web3 instance.
  //     const web3 = await getWeb3();

  //     // Use web3 to get the user's accounts.
  //     const accounts = await web3.eth.getAccounts();

  //     // Get the contract instance.
  //     const networkId = await web3.eth.net.getId();
  //     const deployedNetwork = SimpleStorageContract.networks[networkId];
  //     const instance = new web3.eth.Contract(
  //       SimpleStorageContract.abi,
  //       deployedNetwork && deployedNetwork.address,
  //     );

  //     // Set web3, accounts, and contract to the state, and then proceed with an
  //     // example of interacting with the contract's methods.
  //     this.setState({ web3, accounts, contract: instance }, this.runExample);
  //   } catch (error) {
  //     // Catch any errors for any of the above operations.
  //     alert(
  //       `Failed to load web3, accounts, or contract. Check console for details.`,
  //     );
  //     console.error(error);
  //   }
  // };

  // runExample = async () => {
  //   const { accounts, contract } = this.state;

  //   // Stores a given value, 5 by default.
  //   await contract.methods.set(5).send({ from: accounts[0] });

  //   // Get the value from the contract to prove it worked.
  //   const response = await contract.methods.get().call();

  //   // Update state with the result.
  //   this.setState({ storageValue: response });
  // };

  render() {
    // if (!this.state.web3) {
    //   return <div>Loading Web3, accounts, and contract...</div>;
    // }
    return (
      <Router>
        <Route exact path="/login" component={LoginComponent} />
        <PrivateRoute path="/admin" component={AdminDashboard} />
        <Route path="/stores" component={StoresPage} />
        <Route path="/appmanager" component={ApplicationManager} />
        <Route path="/addstore" component={StoresCreationPage} />
        <Route path="/store_owner" component={StoreOwnerDashbarad}/>
        <Route path="/store_front" component={StoreFront}/>
        <Route path="/store_auction" component={StoreProductAuction}/>
        <Route path="/funds_transfer" component={StoreFundsTransfer}/>
        <Route path="/profile_settings" component={StoreProfileSettings}/>
      </Router>
    );
  }
}

export default App;
