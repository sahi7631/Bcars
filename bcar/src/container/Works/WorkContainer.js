import React from 'react';
import WorkContainerAbstract from './WorkContainerAbstract';

class WorkContainer extends WorkContainerAbstract {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style = {{ marginTop: '30px', padding: '20px'}}>
                <h1>How it Work</h1>
                <div style = {{display: 'flex' , justifyContent: 'space-around'}}>
                    <div>
                        <p style = {{ fontSize: '100px'}}><span class="glyphicon glyphicon-envelope"></span></p>
                    </div>
                    <div>
                        <p style = {{ fontSize: '100px'}}><span class="glyphicon glyphicon-envelope"></span></p>
                    </div>
                    <div>
                        <p style = {{ fontSize: '100px'}}><span class="glyphicon glyphicon-envelope"></span></p>
                    </div>
                    <div>
                        <p style = {{ fontSize: '100px'}}><span class="glyphicon glyphicon-envelope"></span></p>
                    </div>
                    <div>
                        <p style = {{ fontSize: '100px'}}><span class="glyphicon glyphicon-envelope"></span></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default WorkContainer;