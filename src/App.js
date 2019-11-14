import React,{Component} from 'react';
import { Button } from "antd-mobile"
class App extends Component {
  render() {
    return (
      <div>
        <Button type="primary">primary disabled</Button>
        <div><h1>test</h1></div>
      </div>
    );
  }
}
export default App
