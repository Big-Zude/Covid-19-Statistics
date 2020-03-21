import React from 'react';
import MaterialTable from 'material-table';

class WorldTable extends React.Component {
  constructor(props) {
    super(props);
    this.tableRef = React.createRef();
  }
  state = {
    loading:false,
    stats: [],
  }

  componentDidMount() {
    this.setState({ loading: true })
    fetch('https://corona.lmao.ninja/countries') //data source
        .then(response => response.json())
        .then(res => {
            this.setState({ stats: res, loading: false }, () => console.log(res))
        })
        .catch(error => {
            console.log(error)
        })
}
  render() {
    return (
      <React.Fragment>
        <MaterialTable style={{marginLeft:'10px', marginRight:'10px'}}
          title="Worldwide Covid-19 Stats"
          columns={[
            { title: 'Country', field: 'country' },
            { title: 'Cases', field: 'cases' },
            { title: 'Current Cases', field: 'todayCases' },
            { title: 'Deaths', field: 'deaths', type: 'text' },
            { title: 'Current Deaths', field: 'todayDeaths' },
            { title: 'Recovered', field: 'recovered' },
            { title: 'Active Patients', field: 'active' },
            { title: 'Critical Patients', field: 'critical' },
            { title: 'Cases/million', field: 'casesPerOneMillion' },
            
          ]}
          data={this.state.stats}
          actions={[
            {
              icon: 'refresh',
              tooltip: 'Refresh',
              isFreeAction: true,
              onClick: () => this.tableRef.current && this.tableRef.current.onQueryChange(),
            }, 
          ]}
          options={{
            
            headerStyle: {
              backgroundColor: '#3f51b5',
              color: '#FFF'
            }}
          }
          
        />
        <br/><br/><br/>
      </React.Fragment>
    )
  }
}
export default WorldTable;