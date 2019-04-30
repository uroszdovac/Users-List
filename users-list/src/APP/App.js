import React, { Component } from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';
import './App.css';
import SearchBox from './partials/SearchBox';
import Animation from './partials/Animation';
import Userlist from './users/Userlist';
import dataServices from "./services/dataService";

class App extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      isCardView: false,
      users: [],
      date: new Date(),
      loading: true
    }
  }

  handleClick = () => {
    localStorage.setItem("value", !this.state.isCardView)
    this.setState((prevState, props) => {
      return {
        isCardView: !prevState.isCardView
      }
    })
  }

  loadUsers() {
    let users = localStorage.getItem('users')

    if (users) {
      this.setState({
        users: JSON.parse(users),
        loading: false
      })
    } else {
      dataServices.getUser().then(data => {
        localStorage.setItem('users', JSON.stringify(data));
        this.setState({
          users: data,
          loading: false
        })
      })
    }
  }

  loadUsersRefresh() {
    dataServices.getUser().then(data => {
      localStorage.setItem('users', JSON.stringify(data));
      this.setState({
        users: data,
        loading: false
      })
    })
  }

  componentDidMount() {
    let time = localStorage.getItem('currentDate')
    if (time) {
      this.setState({
        date: new Date(time)
      })
    } else {
      this.setState({
        date: new Date()
      })
    }

    this.loadUsers();
    this.refreshLocalStorage();
  }

  refreshPage = () => {
    this.setState(() => {
      return {
        date: new Date(),
      }
    })
    localStorage.setItem('currentDate', this.state.date);

    this.loadUsersRefresh()
  }

  refreshLocalStorage() {
    const isCardViewFromStorage = localStorage.getItem('value');

    if (isCardViewFromStorage !== undefined) {
      const isCardView = JSON.parse(isCardViewFromStorage);    //parsiramo da bi "true" preveli u boolean
      this.state.isCardView = isCardView;
    }
  }

  search = (searchText) => {
    this.setState({
      searchText: searchText
    })
  }


  render() {
    return (
      <div className="App">
        <Header handler={this.handleClick} isCardView={this.state.isCardView} refresh={this.refreshPage} />
        {(this.state.loading) ? '' : <SearchBox search={this.search} />}
        {(this.state.loading) ? <Animation /> : <Userlist isCardView={this.state.isCardView} users={this.state.users} searchText={this.state.searchText} />}

        <Footer currentDate={this.state.date} />
      </div>
    );
  }
}

export default App;
