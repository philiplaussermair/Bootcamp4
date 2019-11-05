import React from 'react';

class RemoveBuilding extends React.Component {
    render() {

        return (
        <div>

            <button onClick={this.props.RemoveBuilding}>
                Remove this Building
            </button>

        </div>

        );

    }
}
export default RemoveBuilding;