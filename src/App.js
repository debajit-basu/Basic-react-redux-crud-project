import React, { Component } from 'react';
import PostForm from './PostForm';
import AllPost from './AllPost';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
        <div className="App">

          <div className="container mt-5">
              <div className="d-flex justify-content-center">
                  <PostForm />
              </div>

            <AllPost />

          </div>

        </div>
    );
  }
}
export default App;


