import React from "react";


class Class extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo : {
            },
        };
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/AkshayShetgar");
        const json = await data.json();
        this.setState({
            userInfo : json,
        })
    }

    render(){
        const {name, location, id, avatar_url} = this.state.userInfo;
        return(
            <div className="user-card">
                <h2>Name : {name}</h2>
                <h2>Location : {location}</h2>
                <h2>Location : {id}</h2>
                <img src={avatar_url}></img>
            </div>
        )
    }
}

export default Class;