import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import { Menus, Menu } from '../index';

const Component = () => (
    <Menus>
        <Menu>Hello</Menu>
        <Menu>Hello</Menu>
        <Menu>Hello</Menu>
    </Menus>
);

describe('Shallow Rendering: <Component />', () => {
    it('should render 1 Menus component', () => {
        const wrapper = shallow(<Component />);
        expect(wrapper.find(Menus)).to.have.length(1);
    });

    it("should render 3 Menu child component", () => {
        const wrapper = shallow(<Component />);
        expect(wrapper.find(Menu)).to.have.length(3);
    })

    it('simulates click events on Menu component', () => {
        const onClick = sinon.spy();
        const wrapper = shallow(
            <Menu onClick={onClick}>
                Hello
            </Menu>
        );
        wrapper.find('.menu-link').simulate('click');
        expect(onClick.calledOnce).to.equal(true);
    });
});

describe('Full DOM Rendering: <Menus />', () => {
    it('should be able to set list prop', () => {
        const wrapper = mount(
            <Menus list={false}>
                <div>
                    <p>Hello</p>
                </div>
            </Menus>
        );
        expect(wrapper.props().list).to.equal(false);
        wrapper.setProps({ list: true });
        expect(wrapper.props().list).to.equal(true);
    });
});

// Static Rendered Markup
// https://github.com/airbnb/enzyme/blob/master/docs/api/render.md
// describe('Static Rendered Markup', () => {

//     it('renders three `.icon-test`s', () => {
//         const wrapper = render(<MyComponent />);
//         expect(wrapper.find('.icon-test').length).to.equal(3);
//     });

// });