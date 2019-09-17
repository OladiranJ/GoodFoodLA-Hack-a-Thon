import React from 'react';
import { Grid } from './style';
import * as data from '../../constants/fair-json';

const DataGrid = () =>  {
    return(
        <Grid>
          {data.fairJSON.map(x => { 
            return <div>
                      {x.INDICATOR}<br />
                      {x.BASELINE}<br />
                      {x.UPDATE}<br />
                  </div>
          })}
        </Grid>
    )
}

export default DataGrid;


