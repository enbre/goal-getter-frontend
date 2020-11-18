import React, {Component} from 'react';

export default class Goals extends Component {
    render() {
        const {id, title} = this.props.goals
        return (
            <div className="goals">
                <p style={{textDecoration: this.props.goals.completed ? 'line-through' : 'none'}} >
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                    {title}
                </p>
                <button className="btn" onClick={this.props.delGoal.bind(this, id)} >X</button>
            </div>
        )
    }
}