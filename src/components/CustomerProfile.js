import React from 'react'
import profilePic from '../assets/bot.png'
import chicken from '../assets/chicken.jpg'
import beer from '../assets/beer.jpg'
import oriental from '../assets/oriental.jpg'
import rum from '../assets/rum.jpg'
import spicy from '../assets/spicy.jpg'
import fish from '../assets/fish.jpeg'

function CustomerProfile({ profile }) {

    const likes = [chicken, beer, spicy]
    const dislikes = [fish, rum, oriental]

    return (
        <>
            {profile &&
                <div className='row no-gutters' style={{ height: '93vh' }}>

                    {/* ---------- Left Side ------------ */}
                    <div className='custom-bg col-md-4 col-sm-12 bg-primary p-5 text-light' style={{ fontSize: 20 }}>

                        {/* ----- user data ------ */}
                        <div className='row no-gutters align-items-center justify-content-center'>
                            <img src={profilePic} alt='customer name' className='profile-pic bg-light'></img>
                        </div>
                        <div className='row no-gutters align-items-center justify-content-center mt-3'>
                            <big className='font-weight-bold'>
                                {profile.name}
                            </big>
                        </div>
                        <div className='row no-gutters align-items-center justify-content-center mt-4 about'>
                            <span className='text-center'>{profile.about}</span>
                        </div>

                        <div className='row no-gutters align-items-center mt-5'>
                            <b className='mr-2'>Id :</b>
                            <span>{profile.id}</span>
                        </div>
                        <div className='row no-gutters align-items-center'>
                            <span>
                                <b className='mr-2'>Address :</b>{profile.address}
                            </span>
                        </div>
                        <div className='row no-gutters align-items-center'>
                            <b className='mr-2'>Contact no :</b>
                            <span>{profile.phone}</span>
                        </div>

                    </div>

                    {/* ---------- Right Side ----------- */}
                    <div className='col-md-8 col-sm-12 px-5 pt-3 pb-4' style={{ fontSize: 20 }}>

                        <div className='row no-gutters justify-content-end mt-3'>
                            <button className='btn btn-dark'>Edit Profile</button>
                        </div>

                        <div className='row no-gutters mt-5 pl-3'>

                            {/* likes */}
                            <div className='col-md-6 col-sm-12'>
                                <div className=''>
                                    <p className='mr-2 font-weight-bold'>Likes :</p>
                                    {profile.likes.map((item, ind) => {
                                        return (
                                            <div key={item} className='p-2'>
                                                <img src={likes[ind]} height={80} width={90} alt='food img'></img>
                                                <span className='ml-4'>{item}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* dislikes */}
                            <div className='col-md-6 col-sm-12'>
                                <div className='align-items-center'>
                                    <p className='mr-2 font-weight-bold'>Disikes :</p>
                                    {profile.dislikes.map((item, ind) => {
                                        return (
                                            <div key={item} className='p-2'>
                                                <img src={dislikes[ind]} height={80} width={90} alt='food img'></img>
                                                <span className='ml-4'>{item}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            }
        </>
    )
}

export default CustomerProfile
