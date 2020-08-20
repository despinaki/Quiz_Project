import App from '../App.js';

describe('App', () => {
    let component
    beforeEach(() => {
        component = shallow(<App />);
    })

    test("it renders", () => {
        expect(component.find('#app')).toHaveLength(1);
    });
})