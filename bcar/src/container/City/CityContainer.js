import React from 'react';
import { Input, Button, Icon } from 'antd';
import CityContainerAbstract from './CityContainerAbstract';
import city1 from '../../images/city1.png';
import city2 from '../../images/city2.png';
import city3 from '../../images/city3.png';
import city4 from '../../images/city4.png';
import city5 from '../../images/city5.png';
 
class CityContainer extends CityContainerAbstract {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px', borderBottom: '2px solid #eee' , paddingBottom: '30px'}}>
                <div style = {{ border: '2px solid #eee', padding: '20px', boxSizing: 'border-box', boxShadow: '5px 5px 5px #ccc'}}>
                  <img src={city1} style = {{height: '150px'}} />
                </div>
                <div style = {{ border: '2px solid #eee', padding: '20px', boxSizing: 'border-box', boxShadow: '5px 5px 5px #ccc'}}>
                  <img src={city2} style = {{height: '150px'}} />
                </div>
                <div style = {{ border: '2px solid #eee', padding: '20px', boxSizing: 'border-box', boxShadow: '5px 5px 5px #ccc'}}>
                  <img src={city3} style = {{height: '150px'}}/>
                </div>
                <div style = {{ border: '2px solid #eee', padding: '20px', boxSizing: 'border-box', boxShadow: '5px 5px 5px #ccc'}}>
                  <img src={city4} style = {{height: '150px'}} />
                </div>
                <div style = {{ border: '2px solid #eee', padding: '20px', boxSizing: 'border-box', boxShadow: '5px 5px 5px #ccc'}}>
                  <img src={city5} style = {{height: '150px'}}/>
                </div>
            </div>
        )
    }
}

export default CityContainer;