import React from 'react'
import image from '../static/images/home.png'

const Dashboard = () => {
    return (
        <div>
            <h2 className="text-title-center-h2">Welcome to Dashboard</h2>
            <img src={image} className="home-dashboard-img" />
            <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, distinctio, veniam molestiae culpa blanditiis qui nisi minus odio voluptate provident assumenda nam officiis laudantium, at consectetur molestias! Esse, provident officiis?</p>
        </div>
    )
}

export default Dashboard