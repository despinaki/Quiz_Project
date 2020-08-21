import Form from './Form'

describe('Form', () => {
    let component, userInput, form;
    const historyMock = { push: jest.fn() }
    
    beforeEach(() => {
        component = shallow(<Form.WrappedComponent />);
    })

    test("input form exists", () => {
        expect(component.find('#settingsForm')).toHaveLength(1);
    })
    
    test("state changes with input", () => {
        const handleInput = jest.spyOn(component.instance(), 'handleInput')
        expect(typeof handleInput).toBe( 'function' );
    })

    test("state changes with input", () => {
        const handleSubmit = jest.spyOn(component.instance(), 'handleSubmit')
        expect(typeof handleSubmit).toBe( 'function' );
    })

    test('it updates state on user input', () => {
        form = component.find('form');
        const numberInput = form.find('input').first();
        const initState = component.state('questions');
        numberInput.simulate('change', { target: { value: 1 } })
        const newState = component.state('questions');
        expect(newState).toEqual(initState);
    });


    test("prevents default on click", ()=>{
        const fakeEvent = { preventDefault: () => console.log('preventDefault') };
        component.find("#settingsForm").simulate("submit", fakeEvent);
        expect(component.find(Notification).length).toBe(1)
        expect(historyMock.push.mock.calls[0]).toEqual(['./players'])
    })

})

