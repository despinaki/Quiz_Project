import Quiz from './Quiz'

describe('Quiz', () => {
    let component;
    const historyMock = { push: jest.fn() }
    beforeEach(() => { 
        component = shallow(<Quiz.WrappedComponent history={ historyMock }/>);
    });

    test('renders question container', () => {
        expect(component.find('#container')).toHaveLength(1);
    })

    test('has a title', () => {
        expect(component.find('h1').text()).toContain('Questions : ')
    })

    test('simulate click', () => {
        component.find('#submit-end').simulate('click');
        expect(historyMock.push.mock.calls[0]).toEqual(['./results'])
    })
})