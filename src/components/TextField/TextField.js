import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';


class TextInput extends Component {
    constructor() {
        super();
        this.state = {
            field: ""
        }
        this.change = this.change.bind(this);
    }
    change(event){
        const field = event.target.value;
        this.setState({field})
        
    }
    render() {
        return (
            <div>
                <TextField style={{ padding: 24 }}
                    id="searchInput"
                    value={this.state.field}
                    onChange={this.change}
                    placeholder="Search for Courses"
                   
                />
            </div>
        )
    }
}
export default TextInput;