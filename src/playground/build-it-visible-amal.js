let buttonName= 'Show details';
let details= '';
let count= 0;
const showText = () =>{
    count++;
    if(count%2==1){
        buttonName= 'Hide details';
        details= 'Hey. These are some details you can now see!';
    }   
    else{
        buttonName= 'Show details';
        details= '';
    }
        
    render();
};


const appRoot= document.getElementById('app'); //set destination to id 'app' at index.html

const render = () =>{
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={showText}>{buttonName}</button>
            <p>{details}</p>
        </div>
    );

    ReactDOM.render(template, appRoot); //render anything inside template at 'app' index.html
};

render();