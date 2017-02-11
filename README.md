# react-menus-dd

**A highly configurable dropdown menu in React**

## Demo  
<img src="example/Menus.gif" width="500" height="300"/>

## Usage

```javascript
import React, { Component } from 'react';
import { Menu, Menus } from 'react-menus-dd';

class App extends Component {
  constructor(props, context) {
    super(props, context);
  }
  
  render() {
    return (
      <div className="App">
        <Menus>
          <Menu text="Music" />
          <Menu text="Videos">
            <Menus>
              <Menu link="/comedy" text="Comedy" />
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
          <Menu text="Mp3" />
        </Menus>
      </div>
    );
  }
}

export default App;
```
## License

MIT
