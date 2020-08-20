import App from '../App.js';

describe('App', () => {
    let component
    beforeEach(() => {
        component = shallow(<App />);
    })

    test("has 4 routes", () => {
        expect(component.find('Route')).toHaveLength(4);
    });
})