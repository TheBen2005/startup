import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
        <div className='body'>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<landing />} exact />
                    <Route path="/tutors" element={<tutors />} exact />
                    <Route path="/times" element={<times />} exact />
                    <Route path="signup" element={<signup />} exact />
                    <Route path="/setavailability" element={<setavailability />} exact />
                    <Route path="/payment" element={<payment />} exact />
                    <Route path="/login" element={<login />} exact />
                    <Route path="/info" element={<info />} exact />
                </Routes>
                <footer>
                    <p>Ben Myers</p>
                    <a href="https://github.com/TheBen2005/startup">Ben's Github</a>
                </footer>
            </BrowserRouter>
            
        </div>
    );
}
