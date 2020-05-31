import React from 'react';
import './App.css';

// function Helloworld(props) {
//   console.log(props);
//   return (
//     <div id="hello">
//       <h3>{props.subtitle}</h3>

//       {props.mytext}
//     </div>
//   );
// }

class Helloworld extends React.Component {

  state = {
    show: true
  }

  toogleShow = () => {
    this.setState({ show: !this.state.show })
  }

  render() {
    if (this.state.show) {
      return (
        <div id="hello">
          <h3>{this.props.subtitle}</h3>

          {this.props.mytext}

          <button onClick={() => this.toogleShow()}>Toggle Show</button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>There are no elements</h1>

          <button onClick={() => this.toogleShow()}>Toggle Show</button>
        </div>
      )
    }
  }
}

//const App = () => <div>this is my component: <Helloworld /></div>

// class App extends React.Component {
//   render() {
//     return (
//       <div>this is my component: <Helloworld /></div>
//     );
//   }
// }

function App() {
  return (
    <div>
      this is my component:
      <Helloworld mytext="Hello ivan" subtitle="lorem ipsum" />
      <Helloworld mytext="Hello heidy" subtitle="Componente 2" />
      <Helloworld mytext="Hello angela" />
    </div>
  );
}

export default App;
