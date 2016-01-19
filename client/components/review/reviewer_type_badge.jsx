import style from './reviewer.scss'; // eslint-disable-line
import React from 'react';

import Avatar from 'client/components/avatar/avatar.jsx';

export default class ReviewerBadge {
    static propTypes = {
        onRemoveClick: React.PropTypes.func,
        reviewer: React.PropTypes.object.isRequired
    };

    onRemoveClick(e) {
        e.preventDefault();

        this.props.onRemoveClick();
    }

    render() {
        var reviewer = this.props.reviewer,
            closeBtn; //eslint-disable-line

        if (!reviewer) return;

        if (this.props.onRemoveClick) {
            closeBtn = (
                <div className='reviewer__remove glyphicon glyphicon-remove text-muted'
                    onClick={ this.onRemoveClick.bind(this) }>
                </div>
            );
        }

        return (
            <a className={ 'reviewer -badge ' + (reviewer.approved ? '-approved' : '') }
                href={ reviewer.html_url }
                key={ reviewer.login }>

                    <div className='reviewer__avatar'>
                        <div className='reviewer__approved'>
                            <i className='glyphicon glyphicon-ok'></i>
                        </div>

                        <Avatar img={ reviewer.avatar_url }/>
                    </div>

                    <div className='reviewer__username text-muted'>
                        { reviewer.login }
                    </div>
            </a>
        );
    }
}
