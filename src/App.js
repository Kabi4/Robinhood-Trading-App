import './App.css';
import Header from './Container/Header';
import Newsfeed from './Container/Newsfeed';
import Stats from './Container/Stats';

function App() {
    return (
        <div className="app">
            <div className="app_header">
                <Header />
            </div>
            <div className="app_body">
                <div className="app_body_container">
                    <Newsfeed />
                    <Stats />
                </div>
            </div>
        </div>
    );
}

export default App;
