import logo from './logo.svg';
import './App.css';

function disp(arg)
{
    if(arg>3)
    return 'no greater than 3';
    else
    return'no less than 3'
}
const a=window.prompt("enter no ")
function App()
{
    return(
        <h1>{disp(a)}</h1>
    );
}

export default App;