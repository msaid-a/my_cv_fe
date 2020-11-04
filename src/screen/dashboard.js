import React from 'react'
import Container from '../component/Container'
import DashboardView from '../component/Dashboard'

const Dashboard = () => {
    return (
        <Container isdashboard={true}>
            <DashboardView />
        </Container>
    )
}

export default Dashboard