class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption= this.handleAddOption.bind(this);
        this.handleDeleteOption= this.handleDeleteOption.bind(this);
        this.state ={
            options: props.options
        };
    }
    // 3 important lifecycles
    //will fire up for component that doesnt change (static)
    componentDidMount(){
        console.log('fetching data!');
    }
    //will fire up for component that always update (dynamic)
    componentDidUpdate(prevProps, prevState){
        console.log('save data!');
    }
    //will fire up when changing pages/ rerendered somthg new (dynamic)
    componentWillUnmount (){
        console.log('componentWillUnmount!');
    }
    handleDeleteOptions(){
        this.setState(() => ({ options: [] }));
    }
    handleDeleteOption(optiontoRemove){
        this.setState((prevState)=>({options: prevState.options.filter((option) => optiontoRemove != option)}));
    }
    handlePick(){
        this.setState(()=>{
            const randomNum = Math.floor(Math.random() * this.state.options.length);
            const option =  this.state.options[randomNum];
            alert(option); 
        });
    }
    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add item';
        } else if(this.state.options.indexOf(option) > -1){
            return ('This option already exists')
        }

        this.setState((prevState) =>({ options: prevState.options.concat(option) }));
    }
    render(){
        const subtitle = 'Put your life in the hands of a computer';

        return(
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}/>
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}/>
                <AddOption
                    handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};

const Header = (props) => {
        return (
            <div>
                <h1>{props.title}</h1>
                {props.subtitle && <h2>{props.subtitle}</h2>}
            </div>
        );
};

Header.defaultProps = {
    title: 'Indecision'
};

const Action = (props) => {
        return (
            <div>
                <button onClick={props.handlePick} disabled={!props.hasOptions}>
                    What should I do ?
                </button>
            </div>
        );
};

const Options = (props) => {
        return (
            <div>
                <h3>Number of options: {props.options.length}</h3>
                <button onClick={props.handleDeleteOptions}>Remove All</button>
                {
                    props.options.map((option)=>(
                        <Option 
                            key={option} 
                            optionText={option}
                            handleDeleteOption={props.handleDeleteOption}/>
                    ))
                }
            </div>
        );
};

const Option = (props) => {
        return(
            <div>
                {props.optionText}
                <button 
                    onClick={(e) =>{
                        props.handleDeleteOption(props.optionText);
                    }}>
                    remove
                </button>
            </div>
        );
}

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption= this.handleAddOption.bind(this);
        this.state= {
            error: undefined
        };
    }
    handleAddOption(e){
        e.preventDefault();

        // remove unwanted spacess before and after strings
        const option= e.target.elements.option.value.trim(); 
        
        const error= this.props.handleAddOption(option);

        this.setState(() =>({ error })); 
    }
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

// // stateless functional component
// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };
//ReactDOM.render(<User name="Amal Syahmi" age={21} />, document.getElementById('app'));

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));