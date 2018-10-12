let visibility= false;

const toggleVisibility = () =>{
    visibility = !visibility;
    render();
};


const appRoot= document.getElementById('app'); //set destination to id 'app' at index.html

const render = () =>{
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>{visibility? 'Hide details' : 'Show details'}</button>
            {
                visibility && (
                    <div>
                        <p>Hey. These are some details you can now see!!!</p>
                    </div>
                )
            }
        </div>
    );

    ReactDOM.render(template, appRoot); //render anything inside template at 'app' index.html
};

render();