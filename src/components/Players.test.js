import Players from "./Players"

describe("Players",()=>{
    let component, form, add;

    beforeEach (()=> {
        add= jest.fn()
        component = shallow(<Players.WrappedComponent/>)
    })

    test("state changes with input", ()=>{
        const handleChange = jest.spyOn(component.instance(), 'handleChange')
        expect(typeof handleChange).toBe( 'function' );
    })

    test("input form exists", () => {
        expect(component.find('#playersForm')).toHaveLength(1);
    })

    test('it calls on add prop on form submission', () => {
        form = component.find('form');
        component.setState({ names: "Bhuma" });
        form.simulate('submit', { preventDefault: jest.fn() });
        expect(add).toHaveBeenNthCalledWith(1, 'Bhuma');
    })

    test('it updates state on user input', () => {
        form = component.find('form');
        const textInput = form.find('input').first();
        const initState = component.state('names');
        textInput.simulate('change', { target: { value: "Bhuma" } })
        const newState = component.state('names');
        expect(newState).toEqual(initState);
    });
})