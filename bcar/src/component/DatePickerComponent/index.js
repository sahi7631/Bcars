import React from "react"; 
import DatePickerComponent  from './DatePickerComponent';

class Dpicker extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <DatePickerComponent {...this.props} />
        )
    }
} 
export default Dpicker;