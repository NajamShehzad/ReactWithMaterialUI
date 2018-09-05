import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import * as contentful from 'contentful';
import Course from './Course';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button'

const Space_ID = '';
const Access_Token = '';
const client = contentful.createClient({
    space: Space_ID,
    accessToken: Access_Token
});

class CourseList extends Component {
    state = {
        courses: [],
        searchString: ''
    }
    constructor() {
        super();
        this.getCourse();
        
    }
    getCourse = () => {
        client.getEntries({
            content_type: 'course',
            query: this.state.searchString
        }).then((response) => {
            this.setState({
                courses: response.items
            })
        })
            .catch(err => console.log('SomeThing Went Wrong', err));
    }
    onInputChange = (event) => {
        if (event.target.value) {
            this.setState({ searchString: event.target.value })
        } else {
            this.setState({ searchString: '' })
        }
        this.getCourse()
    }



    render() {
        return (
            <div>
                {this.state.courses ? (
                    <div>
                        <div style={{float:'left'}}>
                        <Button style={{position:'fixed',right:20,bottom:20}} variant="fab" color="primary" aria-label="Add">
                             <AddIcon />
                        </Button>
                        <TextField style={{padding: 24}}
                            id="searchInput"
                            placeholder="Search for Courses"
                            margin="normal"
                            autoFocus
                            onChange={this.onInputChange} />
                        </div>
                        <Grid container spacing={24} style={{padding:23}} >
                            {this.state.courses.map(currentCourse => {
                                return(
                                    <Grid item xs={12} sm={6} lg={4} xl={3} >
                                        <Course course={currentCourse} />
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </div>
                ) : "No courses found" }
            </div>
        )
    }
}
export default CourseList;
