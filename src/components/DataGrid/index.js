import React, { Component } from 'react';
import { Grid, Container, TableHeader } from './style';
// import * as data from '../../constants/fair-json';
import database from '../Firebase/firebase'

class DataGrid extends Component  {
    state = {
        data: [],
        isLoading: true
    }
    componentDidMount() {
    database.collection(this.props.displayText)
            .get()
            .then(snapshot => {
              snapshot.docs.map(x => this.setState({
                  data: [...this.state.data, x.data()]
              }))
            })
            .then(this.setState({
                isLoading: false
            }))
    }
    render() {
        return(
            <Container>
                <Grid>
                    <TableHeader>INDICATOR</TableHeader>
                    <TableHeader>BASELINE</TableHeader>
                    <TableHeader>UPDATE</TableHeader>
                </Grid>
            {this.state.data.map(elem => { 
                return(
                        <Grid>  
                            <div>{elem.x.INDICATOR}</div>
                            <div>{elem.x.BASELINE}</div>
                            <div>{elem.x.UPDATE}</div>
                        </Grid>  
                )
            })}
            </Container>
        )
        }
}

export default DataGrid;


