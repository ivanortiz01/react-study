import React from 'react';
import './App.css';

function Helloworld(props) {
  console.log(props);
  return (
    <div id="hello">
      <h3>{props.subtitle}</h3>
      
      {props.mytext}
    </div>
  );
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
       <Helloworld  mytext="Hello angela"/>
      </div>
  );
}

export default App;
