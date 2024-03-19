import React, { useContext } from 'react'
import { useQuery } from '@apollo/client';
import Loader from '../../Loading/Loader';
import { ThemeContext } from '../../AppLayout/AppLayout';
import { gql } from '../../../__generated__';
import CategoryItem from './CategoryItem';
import { Typography } from 'antd';
const { Title } = Typography;



export default function Categories() {
    const { loading, error, data } = useQuery(GET_CATEGORIES);
    const { renderMessege } = useContext(ThemeContext);


    if (loading) {
        return <Loader />
    }

    if (error) {
        renderMessege(error.message)
    }

    return (
        <>
            <Title level={2}>Categories</Title>
            <div className='grid mt-10 grid-cols-4 gap-5'>
                {data?.categories?.edges?.map(cat =>
                    <CategoryItem name={cat?.node?.name} icon={cat?.node?.image} link={`/category/${cat?.node?.id}`} />
                )}
            </div>
        </>
    )
}

const GET_CATEGORIES = gql(/* GraphQL */ `
  query GetCategories {
    categories {
        edges {
            node {
                name
                id
                image
            }
        }
    }
  }
`);


