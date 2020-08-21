import Questions from "./Questions"

describe ("Questions", () => {
    let component;
    
    beforeEach(() => {
        component = shallow (<Questions.WrappedComponent />)
    })

    test("click is a function", () => {
        const click = jest.spyOn(component.instance(), 'click')
        expect(typeof click).toBe( 'function' );
    })
})