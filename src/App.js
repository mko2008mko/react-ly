import React from 'react';
import AppHeader from './components/app-header';
import TopNav from './components/top-nav';
import RouterMap from './router';

class App extends React.Component {
    render() {
        return (
            <div>
                <AppHeader></AppHeader>
                <TopNav />
                <RouterMap />
            </div>
        )
    }
}

export default App;