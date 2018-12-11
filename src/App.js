import React from 'react';
import AppHeader from './components/app-header';
import TopNav from './components/top-nav';
import AppDownloadBar from './components/app-download';
import RouterMap from './router';


class App extends React.Component {

    componentDidMount() {
     
    }

    render() {
        return (
            <div >
                    <AppDownloadBar/>
                    <AppHeader></AppHeader>
                    <TopNav />
                    <RouterMap />
               
            </div>
        )
    }
}

export default App;