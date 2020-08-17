import React, { Component } from 'react';
import { connect } from "react-redux";

class AnswersForm extends Component {

    render() {

        return (
            <div>               
                <input type="radio" name="MultipleChoice" value = "A" />
                <label for="A"> A </label>
                <input type="radio" name="MultipleChoice" value = "B" />
                <label for="B"> B </label>
                <input type="radio" name="MultipleChoice" value = "C" />
                <label for="C"> C </label>
                <input type="radio" name="MultipleChoice" value = "D" />
                <label for="D"> D </label>

            </div>
        )
    }
}


export default AnswersForm;