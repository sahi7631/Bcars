import React from 'react';
import { Input, Button, Icon } from 'antd';
import CityContainerAbstract from './CityContainerAbstract';
 
class CityContainer extends CityContainerAbstract {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
                
            </div>
        )
    }
}

export default CityContainer;