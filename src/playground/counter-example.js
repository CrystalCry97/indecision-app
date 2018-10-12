let count= 0;
const addOne = () =>{
    count++;
    renderCounterApp();
};
const minusOne = () =>{
    count--;
    renderCounterApp();
};
const reset = () =>{
    count= 0;
    renderCounterApp();
};

const appRoot= document.getElementById('app'); //set destination to id 'app' at index.html

const renderCounterApp = () =>{
    const template2 = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

    ReactDOM.render(template2, appRoot); //render anything inside template at 'app' index.html
};

renderCounterApp();