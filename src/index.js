import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    state = { lat: null, errorMessage: '' };

//    always call super first
//    constructor(props) {
//        super(props);
//    }

    // avoid having multiple returns in "render" - use helper methods
    renderContent() {
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: { this.state.errorMessage }</div>
        }
        if(!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay  lat={ this.state.lat }/>
        }
        return <Spinner message="Please accept location request"/>
    }


    render () {
        return (
            <div>
                { this.renderContent() }
            </div>
        );
    }

    componentDidMount() {
        // data loading potentially
       window.navigator.geolocation.getCurrentPosition(
           (position) => this.setState({ lat: position.coords.latitude }),
           (error) => this.setState({ errorMessage: error.message })
       );
    }

    componentDidUpdate() {
        //right after render()
        console.log('Component did update');
    }

    componentWillUnmount() {
        console.log('Component will unmount');
    }

//    almost never used
//    shouldComponentUpdate()
//    getDerivedStateFromProps()
//    getSnapshotBeforeUpdate()
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);