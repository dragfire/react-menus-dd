import React, { Component } from 'react';
import { Menu, Menus } from 'react-menus';

function TriggerComponent({ toggleMenus, label }) {
  return (
    <button onClick={toggleMenus}>{label}</button>
  );
}

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      visible: false,
      helloMenusVisible: false,
    }
  }

  onClick = (text) => {
    console.info("Text:", text);
  }
  
  render() {
    const HelloMenus = (
      <Menus label="Hello Menus" triggerComponent={TriggerComponent}>
        <Menu text="Hello" />
        <Menu text="Hello">
          <SubMenus>
            <Menu text="There" />
            <Menu text="There" />
            <Menu text="There" />
          </SubMenus>
        </Menu>
      </Menus>
    )
    return (
      <div className="App" style={{ padding: 100 }}>
        {/*<div>
          <button onClick={()=>this.setState({helloMenusVisible: !this.state.helloMenusVisible})}>
            Hello
          </button>
          <div style={{ display: this.state.helloMenusVisible? 'block' : 'none'}}>
            {HelloMenus}
          </div>
        </div>*/}
        <Menus label="Entertainment" triggerComponent={TriggerComponent}>
          <Menu text="Music" />
          <Menu text="Videos">
            <SubMenus style={{ border: '1px solid red' }}>
              <Menu link="/comedy" text="Comedy" style={{color: '#ac1234'}} />
              <Menu text="Music" onClick={this.onClick} >
                <SubMenus>
                  <Menu text="Rock" />
                  <Menu text="Electro" >
                    <SubMenus>
                      <Menu text="Infected Mushrooms" />
                      <Menu text="Skrillex" />
                      <Menu text="Hyped" />
                    </SubMenus>
                  </Menu>
                  <Menu text="Alternative Rock" />
                </SubMenus>
              </Menu>
              <Menu text="TV Shows">
                <SubMenus>
                  <Menu text="Animation">
                    <SubMenus>
                      <Menu text="Rick & Morty" />
                      <Menu text="Naruto" />
                      <Menu text="Simpsons" />
                    </SubMenus>
                  </Menu>
                  <Menu text="Comedy">
                    <SubMenus>
                      <Menu text="How I Met Your Mother" />
                      <Menu text="Friends" />
                      <Menu text="Sienfeld" />
                      <Menu text="Two And Half Men" />
                    </SubMenus>
                  </Menu>
                  <Menu text="Thriller" />
                </SubMenus>
              </Menu>
            </SubMenus>
          </Menu>
          <Menu text="Entertainment" />
          <Menu text="Games" />
          <Menu text="Mp3">
            <SubMenus>
              <div>
                <h5>Hello</h5>
                <small>There</small>
                <ul>
                  <li>Tom</li>
                  <li>Is</li>
                  <li>A</li>
                  <li>Good</li>
                  <li>Boy</li>
                </ul>
              </div>
            </SubMenus>
          </Menu>
        </Menus>
        {HelloMenus}
      </div>
    );
  }
}

export default App;
