import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component{
    state ={
        options: [], //all options data in array
        selectedOption: undefined //data that will be selected based on random generator from handlePick
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    }
    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined}));
    }
    handleDeleteOption = (optiontoRemove) => {
        this.setState((prevState)=>({options: prevState.options.filter((option) => optiontoRemove != option)}));
    }
    handlePick = () => {
        this.setState(()=>{
            const randomNum = Math.floor(Math.random() * this.state.options.length);
            const option =  this.state.options[randomNum];
            this.setState(()=> ({
                selectedOption: option
            }));
        });
    }
    handleAddOption = (option) => {
        if(!option){
            return 'Enter valid value to add item';
        } else if(this.state.options.indexOf(option) > -1){
            return ('This option already exists')
        }

        this.setState((prevState) =>({ options: prevState.options.concat(option) }));
    }

    // 3 important lifecycles
    //will fire up for component that doesnt change (static)
    componentDidMount= () =>{
        try{
            const json= localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options){
                this.setState(() => ({ options }));
                console.log('fetching data!');
            }
        }catch (e){
            // Do nothing at all
        }
        
        
    }
    //will fire up for component that always update (dynamic)
    componentDidUpdate (prevProps, prevState){
        if(prevState.options.length != this.state.options.length){
            const json= JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
            console.log('save data!');
        }
        
    }
    //will fire up when changing pages/ rerendered somthg new (dynamic)
    componentWillUnmount (){
        console.log('componentWillUnmount!');
    }
    
    render(){
        const subtitle = 'Put your life in the hands of a computer';

        return(
            <div>
                <Header subtitle={subtitle}/> {/* Call header with parameter subtitle (just4exercise. you can just put props in header.js also) */}
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0} //send yes if option(s) exist
                        handlePick={this.handlePick}/> {/* send function handlePick to Action.js */}
                    <div className="widget">
                        <Options 
                            options={this.state.options} //send options data
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}/>
                        <AddOption
                            handleAddOption={this.handleAddOption}/>
                    </div>
                </div>
                <OptionModal 
                    selectedOption= {this.state.selectedOption}
                    handleClearSelectedOption= {this.handleClearSelectedOption}
                />
            </div>
        );
    }
}