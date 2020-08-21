import Questions from "./Questions"

describe ("Questions", () => {
    let component;
    let array = [1,2,3,4,5,6,7,8,9];
    
    beforeEach(() => {
        const infoStub = {
            question: {
                category: 'Sports',
                type: 'multiple',
                difficulty: 'easy',
                question: 'The%20Rio%202016%20Summer%20Olympics%20held%20it%27s%20closing%20ceremony%20on%20what%20date%3F',
                correct_answer: 'August%2021',
                incorrect_answers: [
                    'August%2017',
                    'August%2023',
                    'August%2019',
                    'August%2021'
                ]
            },
            players: [
                "albie",
                "alex",
                "bhuma",
                "despoina"
            ]
        }
        component = shallow(<Questions.WrappedComponent  question={infoStub}/>)
    })

    test("click is a function", () => {
        const click = jest.spyOn(component.instance(), 'click')
        expect(typeof click).toBe( 'function' );
    })

    test("shuffleAnswers returns a shuffled array", () => {
        const mockShuffle = jest.spyOn(component.instance(), 'shuffleAnswers');
        const shuffled = mockShuffle(array);
        expect(typeof shuffled).toBe('array');
        expect(array[0]).not.toEqual(shuffled[0]);
    })

    
})