import React, { useState } from 'react';
import ImageGrid from './comps/ImageGrid';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import Model from './comps/Modal';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/login';
import Footer from './comps/footer';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Title />
            <ImageGrid setSelectedImg={setSelectedImg} />
            {selectedImg && <Model selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
