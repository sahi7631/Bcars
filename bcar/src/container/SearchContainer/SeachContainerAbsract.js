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
    handleChange = address => {
        this.setState({ address });
    };
    handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error));
    };
    onChange = () => {

    }
    render() {
        return null;
    }
}

export default SearchContainerAbstract