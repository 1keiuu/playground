import React from 'react'
import { render } from 'react-dom';
import TestPage from "./pages/TestPage"
class App extends React.Component {
    render() {
      return <TestPage></TestPage>;
    }
}
render(<App/>, document.getElementById('app'));