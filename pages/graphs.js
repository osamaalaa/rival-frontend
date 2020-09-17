import React , { Component } from 'react'
import {Sidebar, InputItem, DropdownItem, Icon, Item, Logo, LogoText} from 'react-sidebar-ui'
import 'react-sidebar-ui/dist/index.css';
import Dounght from './Dounght';
import Line from './Line';
import Dynamic from './Dynamic';
import Link from 'next/link';

class graph  extends Component {
    render() {
  return (
    <React.Fragment  >
       <div>
      <Sidebar bgColor='black' isCollapsed={false}>
      <Logo
          image='../images/logo.png'
          imageName='Rival logo'/>
        <LogoText>Rival Store </LogoText>
        {/* <DropdownItem
          values={['First', 'Second', 'Third']}
          bgColor={'violet'}>
          Menu
        </DropdownItem> */}
   <br/>
   <br/>
        <Item  bgColor='black'>
        <Link href="/graphs">
              <a>  <Icon><i className="fas fa-home"/></Icon> Graphs</a>
        </Link>
         
       
        </Item>
        <br/>
        <Item bgColor='black'>
          
          <Link href="/FormGrid">
              <a> <Icon><i className="fas fa-info"/></Icon> Add products</a>
        </Link>
        </Item>
        <br/>
        <Item bgColor='black'>
        <Link href="/index">
              <a> <Icon><i className="fas fa-sitemap"/></Icon> My website</a>
        </Link>
        </Item>
        <br/>
        <Item bgColor='black'>
        <Link href="/board-admin">
              <a> <Icon><i className="fas fa-sitemap"/></Icon> users</a>
        </Link>
        </Item>
        <br/>
        {/* <Item bgColor='black'>
          <Icon><i className="fas fa-rss-square"/></Icon>
          Blog
        </Item> */}
        <InputItem type='text' placeholder={'Search...'}/>
      </Sidebar>
    </div>
    <div Style="margin-left:400px; margin-top:100px; margin-right:100px;" >
   <Dounght/>
   </div>
   <div Style="margin-left:400px; margin-top:100px; margin-right:100px;" >
   <Line/>
   </div>
   <div Style="margin-left:400px; margin-top:100px; margin-right:100px;" >
   <Dynamic/>
   </div>
    </React.Fragment>
  );
  
}
}

export default (graph);