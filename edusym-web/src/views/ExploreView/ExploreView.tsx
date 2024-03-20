
import React from 'react'
import AppLayout from '../../components/AppLayout/AppLayout'
import Categories from '../../components/ExploreView/Categories/Categories'
import Bestsellers from '../../components/ExploreView/Bestsellers/Bestsellers'

export default function ExploreView() {
    return (
        <AppLayout>
            <Categories />
            <div className="my-10"></div>
            <Bestsellers />
        </AppLayout>
    )
}
