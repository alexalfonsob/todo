import React, { Component } from "react";
import ListItems from '../ListItems';
import Imput from '../ImputBar';
import Footer from '../Footer';


class Main extends Component {
    constructor() {
        super()
        this.state = {
            newList: '',
            lists: []


        }

        this.handleSend = this.handleSend.bind(this);
        this.deletLi = this.deletLi.bind(this);
        this.newListChanged = this.newListChanged.bind(this);
    }

    newListChanged(e) {
        this.setState({
            newList: e.target.value


        });

    }

    handleSend(e) {
        e.preventDefault();

        if (this.state.newList !== '') {

            this.setState({
                newList: '',
                lists: [...this.state.lists, {
                    lista: this.state.newList
                }]
            })


            e.target.reset();

        }
        else {
            return;
        }


    }


    deletLi = i => {
        this.setState(state => {
            const lists = state.lists.filter((item, j) => i !== j);

            return {
                lists
            };
        });
    };



    render() {

        return (
            <div>
            <Imput 
            newlist={this.state.newlist}
            SendText = {this.handleSend}
            newListChanged={this.newListChanged}
            />
             <div>

            <ListItems   lists={this.state.lists} delete= {this.deletLi}     />
            </div>
            
             <div className="count">
    	        <Footer 
    	         lists={this.state.lists} 
    	        />
        	</div>

            
            
            </div>

        );
    }
}


export default Main
