import React from 'react';
import Counter from '../Counter';
import { shallow } from 'enzyme';


describe('Testing Counter component', ()=>{

    it('should render Counter component without error', ()=>{
        
        const wrapper = shallow(<Counter />);
        const actual = wrapper.find('h3').text();
        const expected = 'Counter is 0';

        expect(actual).toBe(expected);
    });

    it('should incrment the value of count', ()=>{
        
        const wrapper = shallow(<Counter />);
        
        let expected = 'Counter is 0';
        let actual = wrapper.find('h3').text();
        expect(actual).toBe(expected);
        
        const btn = wrapper.find('button.incr');
        btn.simulate('click');
        btn.simulate('click');
        actual = wrapper.find('h3').text();
        expected = 'Counter is 2';
        expect(actual).toBe(expected);
    });


    it('should decrment the value of count', ()=>{
        
        const wrapper = shallow(<Counter />);
        
        let expected = 'Counter is 0';
        let actual = wrapper.find('h3').text();
        expect(actual).toBe(expected);
        
        const btn = wrapper.find('button.decr');
        btn.simulate('click');
        btn.simulate('click');
        actual = wrapper.find('h3').text();
        expected = 'Counter is -2';
        expect(actual).toBe(expected);
    });

    
});