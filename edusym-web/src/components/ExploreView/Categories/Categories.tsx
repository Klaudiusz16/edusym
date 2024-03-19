import React, { useContext } from 'react'
import { useQuery, gql } from '@apollo/client';
import Loader from '../../Loading/Loader';
import { ThemeContext } from '../../AppLayout/AppLayout';


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
        <div>

        </div>
    )
}


const GET_CATEGORIES = gql`
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
`;

