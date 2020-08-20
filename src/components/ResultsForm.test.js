import ResultsForm from './ResultsForm'


describe('ResultsForm', () => {
    let component
    beforeEach(() => {
        component = shallow(<ResultsForm.WrappedComponent history={ historyMock } />);
        const historyMock = { push: jest.fn() }
    })

    test("has title", () => {
        expect(component.find('h1').text()).toContain("And the winner is...");
    })

    test('simulate click', () => {
        component.find('#results-submit').simulate('click');
        expect(historyMock.push.mock.calls[0]).toEqual(['./'])
    })
})