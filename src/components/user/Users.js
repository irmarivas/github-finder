import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
};

const Users = props => {
    const { isLoading, users } = props;
    return isLoading ? <Spinner /> : (
        <div style={userStyle}>
        {
           users.map(
                user => (
                    <UserItem 
                        key={user.id} 
                        user={user}
                    />
                )
            )
        } 
        </div>
    );
}

export default Users;
