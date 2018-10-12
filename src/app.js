// const obj ={
//     name: 'Vikram',
//     getName(){
//         return this.name;
//     }
// };

// const getName= obj.getName.bind(obj);

// console.log(getName());

class IndecisionApp extends React.Component{
    render(){
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Thing one','Thing two','Thing four'];
        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action/>
                <Options options={options}/>
                <AddOption/>
            </div>
        );
    }
}

class Header extends React.Component{
    render(){
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick(){
        alert('handlePick');
    }
    render(){
        return (
            <div>
                <button onClick={this.handlePick}>What should I do ?</button>
            </div>
        );

    }
}

class Options extends React.Component {
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this); //use to bind this once without repeat it manually
    }
    handleRemoveAll(){
        console.log(this.props.options);
        // alert('handleRemoveAll');
    }
    render(){
        return (
            <div>
                <h3>Number of options: {this.props.options.length}</h3>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {
                    this.props.options.map((option)=><Option key={option} optionText={option}/>)
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render(){
        return(
            <div>
                {this.props.optionText}
            </div>
        );
    }
}

class AddOption extends React.Component {
    handleAddOption(e){
        e.preventDefault();

        // remove unwanted spacess before and after strings
        const option= e.target.elements.option.value.trim(); 

        if(option){
            alert(option);
        }
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));