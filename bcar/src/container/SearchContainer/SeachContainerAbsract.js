import React from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';

class SearchContainerAbstract extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
            date: new Date(),
        }
    }
    
    onChange = () => {

    }
    render() {
        return null;
    }
}

export default SearchContainerAbstract