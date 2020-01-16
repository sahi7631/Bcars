import React from "react";
import DatePicker from "react-datepicker";

class DatePickerComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className = "react-date-picker">
                 <DatePicker
                    onChange={this.props.onChange}
                    selected={this.props.date}
                />
            </div>
        )
    }
}
export default DatePickerComponent;
