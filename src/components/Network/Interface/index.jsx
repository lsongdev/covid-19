import React from 'react';
import { Button } from 'antd';

import './index.css';

class Interface extends React.Component {
  render(){
    const { iface, onClick } = this.props;
    return (
      <div className="interface" >
        <div className="interface-label" >
          <div className="interface-upload" >100k/s</div>
          <div className="interface-download" >200k/s</div>
          <div className="interface-expand" onClick={ e => onClick(iface) } >i</div>
        </div>
        <h3 className="interface-name">{ iface.name }</h3>
      </div>
    );
  }
}

class Interfaces extends React.Component {
  state = {}
  componentDidMount(){
    fetch('/network/interfaces')
    .then(res => res.json())
    .then(interfaces => {
      return Object
        .keys(interfaces)
        .map(name => {
          const iface = interfaces[name];
          iface.name = name;
          return iface;
        })
    })
    .then(interfaces => {
      console.log(interfaces);
      this.setState({ interfaces });
    })
  }
  onExpand(iface){
    this.setState({ iface });
  }
  render(){
    const { interfaces = [], iface } = this.state;
    return (
      <div >
        <h2>Interfaces</h2>
        <div className="interfaces" >
          { interfaces.map(iface => 
            <Interface key={iface.name} iface={ iface } onClick={ this.onExpand.bind(this) } />)
          }
        </div>
        {
          iface && (
            <div className="interface-view">
              <h3>{ iface.name }</h3>
            </div>
          )
        }
      </div>
    );
  }
}


export default Interfaces;