import React, { Component } from "react";
import UserService from "../services/user.service";
import Navbar from '../components/Layout/Navbar';
//import MegaMenu from '../components/Layout/MegaMenu';
import MegaMenu from '../components/Layout/SideAdmin';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';
import BlogGridTwoColumn from '../components/blog/BlogGridTwoColumn';
import AuthService from "../services/auth.service";
import { Grid } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import Widget from "../components/Widget/Widget";
import Table from "../components/Table/Table";
import {Sidebar, InputItem, DropdownItem, Icon, Item, Logo, LogoText} from 'react-sidebar-ui'
import 'react-sidebar-ui/dist/index.css';
import Link from 'next/link';

// data
import mock from "./mock";
import SideAdmin from "../components/Layout/SideAdmin";
import {Doughnut} from 'react-chartjs-2';
import DataTable, { createTheme } from 'react-data-table-component';
 
createTheme('solarized', {
  text: {
    primary: '#268bd2',
    secondary: '#2aa198',
  },
  background: {
    default: '#002b36',
  },
  context: {
    background: '#cb4b16',
    text: '#FFFFFF',
  },
  divider: {
    default: '#073642',
  },
  action: {
    button: 'rgba(0,0,0,.54)',
    hover: 'rgba(0,0,0,.08)',
    disabled: 'rgba(0,0,0,.12)',
  },
});
 
const MyComponent = () => (
  <DataTable
    title="Arnold Movies"
    columns={columns}
    theme="solarized"
  />
);

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getState = () => ({
  labels: [
    'Red',
    'Green',
    'Yellow'
  ],
  datasets: [{
    data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
    backgroundColor: [
    '#CCC',
    '#36A2EB',
    '#FFCE56'
    ],
    hoverBackgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ]
  }]
});


 
const data = [{ id: 1, title: 'Conan the Barbarian', year: '1982' }];
const columns = [
  {
    name: 'Title',
    selector: 'title',
    sortable: true,
  },
  {
    name: 'Year',
    selector: 'year',
    sortable: true,
    right: true,
  },
  ,
  {
    name: 'Year',
    selector: 'year',
    sortable: true,
    right: true,
  },
  ,
  {
    name: 'Year',
    selector: 'year',
    sortable: true,
    right: true,
  },
  ,
  {
    name: 'Year',
    selector: 'year',
    sortable: true,
    right: true,
  },
];

export default class DynamicDoughnut extends React.Component{

	getInitialState() {
		return getState();
	}

	componentWillMount() {
		setInterval(() => {
			this.setState(getState());
		}, 1000);
	}

  render() {
    return (
        <React.Fragment>
        <div className="admin">
      <Navbar />
      <div className="container">
       <div className="row">
      <div id="side" className="col-lg-3 col-md-12">
       <SideAdmin /> 
</div>
<div className="col-lg-9 col-md-12">

      <div className="chart">
        <h2>Dynamicly refreshed Doughnut Example</h2>
        <Doughnut
          data={this.state}
        />
      </div>
   
                 <DataTable className="admin-table"
        title="Arnold Movies"
        columns={columns}
        data={data}
        expandableRows= {true} 
        expandOnRowClicked={true}
        onSelectedRowsChange={()=>{
            console.log("saara");
        }
        }
        selectableRows={true}
        onRowClicked={()=>{
            console.log("sara");
        }}


      />
      <button onClick={()=>{
          console.log(this.props);
      }}></button>
   </div>
 </div>
 
     </div>
     </div>
    </React.Fragment>
    );
  }
}