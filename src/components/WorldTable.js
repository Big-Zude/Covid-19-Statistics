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
            { title: 'Total Cases', field: 'cases' },
            { title: 'Current Cases', field: 'todayCases' },
            { title: 'Total Deaths', field: 'deaths', type: 'text' },
            { title: 'Current Deaths', field: 'todayDeaths' },
            { title: 'Recovered Patients', field: 'recovered' },
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
        <br/>
        <p>For a more Detailed Visualization of the information above follow the link below</p>
        <a style={{textDecoration:'none', fontWeight:'bold', fontSize:'20px'}} 
        href="https://experience.arcgis.com/experience/685d0ace521648f8a5beeeee1b9125cd">COVID-19 Situation Dashboard</a>

      </React.Fragment>
    )
  }
}
export default WorldTable;