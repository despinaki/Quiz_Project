import Home from './Home'

describe('Home', () => {
    let component
    beforeEach(() => {
        component = shallow(<Home />);
    })

    test("has title", () => {
        expect(component.find('h1').text()).toContain("Crown");
    })
})