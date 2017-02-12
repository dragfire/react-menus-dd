# react-menus-dd

**A highly configurable dropdown menu in React**

## Demo  
<img src="example/Menus.gif" width="500" height="300"/>

## Installation
`npm i -S react-menus-dd`  
  or    
`yarn add react-menus-dd`

## Usage

```javascript
import React, { Component } from 'react';
import { Menu, Menus } from 'react-menus-dd';
// or
const DDMenus = require('react-menus-dd');
const Menus = DDMenus.Menus;
const Menu = DDMenus.Menu;

class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  handleMenuClick = (value) => {
    console.info("Clicked Menus's value:", value);
  }
  
  render() {
    const Styles = {
      menusStyle: {
        boxShadow: '1px 1px 2px rgba(90, 90, 90, 0.7)',
        border: '1px solid rgba(0, 0, 0, 0.05)',
      },
      menuStyle: {
        color: 'blue',
        padding: 2,
      },
    };

    return (
      <div className="App">
        <Menus style={Styles.menusStyle}>
          <Menu text="Music" style={Styles.menuStyle} onClick={this.handleMenuClick} />
          <Menu text="Videos" onClick={this.handleMenuClick}>
            <Menus>
              <Menu link="/comedy" text="Comedy" onClick={this.handleMenuClick} />
              <Menu text="Music" >
                <Menus>
                  <Menu text="Rock" />
                  <Menu text="Electro" >
                    <Menus>
                      <Menu text="Infected Mushrooms" />
                      <Menu text="Skrillex" />
                      <Menu text="Hyped" />
                    </Menus>
                  </Menu>
                  <Menu text="Alternative Rock" />
                </Menus>
              </Menu>
              <Menu text="TV Shows">
                <Menus>
                  <Menu text="Animation">
                    <Menus>
                      <Menu text="Rick & Morty" />
                      <Menu text="Naruto" />
                      <Menu text="Simpsons" />
                    </Menus>
                  </Menu>
                  <Menu text="Comedy">
                    <Menus>
                      <Menu text="How I Met Your Mother" />
                      <Menu text="Friends" />
                      <Menu text="Sienfeld" />
                      <Menu text="Two And Half Men" />
                    </Menus>
                  </Menu>
                  <Menu text="Thriller" />
                </Menus>
              </Menu>
            </Menus>
          </Menu>
          <Menu text="Entertainment" />
          <Menu text="Games" />
          <Menu text="Mp3">
            <Menus>
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
            </Menus>
          </Menu>
        </Menus>
      </div>
    );
  }
}

export default App;
```

## Properties

All properties are optional  
### Menus
- **`style`** _(Object)_ — Custom style properties which will be added to already existing styles.

### Menu
- **`style`** _(Object)_ — Custom style properties which will be added to already existing styles.

- **`link`** _(String)_ — Link which is equivalent to *href*.

- **`onClick`** _(Func)_ — Invokes when a menu is clicked and text from `<a>Text</a>` is passed as parameter.

## License

MIT
