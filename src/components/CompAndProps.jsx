import React, { Component } from "react";
import '../App.css';
function Square(props) {
    return (
        <div>
            <h2> Hai hehe</h2>
            <p>Saya components {props.komponen}</p>
            <a href={props.link}>Click here</a>
        </div>
    );
}
export default class CompAndProps extends Component {
    render() {
        const bgColor = {
            backgroundColor: this.props.bgColor

        }
        return (
            <div className="wrapper">
                <div className="User-info1">
                    <Square komponen='Didi' link='/Didi' />
                </div>
                <div className="User-info2" >
                    <Square komponen='Ida' link='/Ida' />
                </div>
                <div className="User-info3" >
                    <Square komponen='Alya' link='/Alya' />
                </div>
                <div className="User-info4" >
                    <Square komponen='Erina' link='/Erina' />
                </div>
            </div>
        )
    }
}