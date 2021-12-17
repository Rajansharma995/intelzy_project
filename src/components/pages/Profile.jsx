import React,{useState} from 'react'

const Profile = () => {
    
    
    return (
        <div>
            <div>
                coverImage
                <img src="" alt="" />
            </div>
            <div>
                {localStorage.getItem('walletAddress')}
            </div>
        </div>
    )
}

export default Profile
