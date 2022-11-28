import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {web} from '~/Route';
import {getCookie} from '~/Services'
import Layout from './Views/Layout';

function App() {
    return ( 
        <Router>
            <Routes>
                {web.map((route, index) => {
                    return (
                        <Route key={index} path={route.path} element={ <Layout><route.component /></Layout> }>

                        </Route>
                    )
                })}
            </Routes>
        </Router> 
    );
}

export default App;