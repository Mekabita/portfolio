import React, {Component} from 'react';

import http from './utils/http';
import Header from './components/Header';
import Loader from './components/Loader';
import Banner from './components/Banner';
import About from './components/About';
import Repository from './components/Repository';
import Repos from './components/Repos';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            data: [],
            error: '',
            userInfo: [],
            repoInfo: []
        }
    }
    componentDidMount() {
        this.setState({loading: true})
        Promise.all([http.get(), http.get('/repos')]).then(([userData, repoData]) => {
            console.log(userData);
            console.log(repoData);
            this.setState({userInfo: userData});
            this.setState({repoInfo: repoData, loading: false});
        });
    }
    render() {
        if (this.state.loading) {
            return (
                <Loader/>)
        }
        return (
            <div className="container">
                <Header/>
                <Banner userInfo={
                    this.state.userInfo
                }/>
                <About userInfo={
                    this.state.userInfo
                }/>
                <Repository userInfo={
                    this.state.userInfo
                }/>
                <Repos repoInfo={
                    this.state.repoInfo
                }/>
            </div>
        )
    }
}

export default App;
