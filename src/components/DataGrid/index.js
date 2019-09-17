import React, { Component } from 'react';
import { Grid } from './style';
import * as data from '../../constants/fair-json';
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
            <Grid>
            {this.state.data.map(elem => { 
                return <div>
                        {elem.x.INDICATOR}<br />
                        {elem.x.BASELINE}<br />
                        {elem.x.UPDATE}<br />
                    </div>
            })}
            </Grid>
        )
        }
}

export default DataGrid;


