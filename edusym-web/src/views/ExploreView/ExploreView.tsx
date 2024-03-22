
import React from 'react'
import Categories from '../../components/ExploreView/Categories/Categories'
import Bestsellers from '../../components/ExploreView/Bestsellers/Bestsellers'

export default function ExploreView() {
    return (
        <>
            <Categories />
            <div className="my-10"></div>
            <Bestsellers />
        </>
    )
}
