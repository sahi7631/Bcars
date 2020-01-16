import React from 'react';
import SearchContainerAbstract from './SeachContainerAbsract';
import Dpicker from '../../component/DatePickerComponent';
import PlacesAutocomplete from 'react-places-autocomplete';
import { Button ,DatePicker, Input} from 'antd';

class SearchContainer extends SearchContainerAbstract {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '130px' }}>
                <div style={{ border: '2px solid green', borderRadius: '5px', height: '50px', padding: '10px', width: '70%' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
                        <div style = {{ width: '30%'}}>
                            <PlacesAutocomplete
                                value={this.state.address}
                                onChange={this.handleChange}
                                onSelect={this.handleSelect}
                            >
                                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                    <div>
                                        <Input
                                            {...getInputProps({
                                                placeholder: 'Search City ...',
                                                className: 'location-search-input',
                                            })}
                                        />
                                        <div className="autocomplete-dropdown-container" style={{ height: '60px' }}>
                                            {loading && <div>Loading...</div>}
                                            {suggestions.map(suggestion => {
                                                const className = suggestion.active
                                                    ? 'suggestion-item--active'
                                                    : 'suggestion-item';
                                                const style = suggestion.active
                                                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                                return (
                                                    <div
                                                        {...getSuggestionItemProps(suggestion, {
                                                            className,
                                                            style,
                                                        })}
                                                    >
                                                        <span>{suggestion.description}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </PlacesAutocomplete>
                        </div>
                        <div style = {{ width: '30%'}}>
                            <DatePicker onChange={this.onChange}  showTime  placeholder="Start Date & Time"/>
                        </div>
                        <div style = {{ width: '30%'}}>
                            <DatePicker onChange={this.onChange}  showTime placeholder="End Date & Time"/>
                        </div>
                        <div style = {{ width: '10%'}}>
                            <Button type="primary" shape="circle" icon="search" />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default SearchContainer;