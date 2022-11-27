import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {web} from '~/Route';
import {getCookie} from '~/Services'

function App() {
    return ( 
        <Router>
            <Routes>
                {web.map((route, index) => {
                    return (
                        <Route key={index} path={route.path} element={ <route.component /> }>

                        </Route>
                    )
                })}
            </Routes>
        </Router> 
    );
}

export default App;