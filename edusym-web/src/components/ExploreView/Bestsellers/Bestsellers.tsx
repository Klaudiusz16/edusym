import React, { useContext, useRef } from 'react'
import { useQuery } from '@apollo/client';
import Loader from '../../Loading/Loader';
import { ThemeContext } from '../../AppLayout/AppLayout';
import { gql } from '../../../__generated__';
import { Carousel, Typography } from 'antd';
import CourseShortcut from '../../CourseShortcut/CourseShortcut';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { CarouselRef } from 'antd/es/carousel';
const { Title } = Typography;



export default function Bestsellers() {
    const { loading, error, data } = useQuery(GET_BESTSELLERS);
    const { renderMessege } = useContext(ThemeContext);
    if (loading) {
        return <Loader />
    }

    if (error) {
        renderMessege(error.message)
    }

    const caruselRef = useRef<CarouselRef>(null)


    return (
        <>
            <Title level={2}>Bestsellers</Title>
            <div className="flex justify-end mb-10 gap-5 pr-10">
                <LeftOutlined className='text-xl text-primary hover:text-secondary cursor-pointer' onClick={() => caruselRef?.current?.prev()} />
                <RightOutlined className='text-xl text-primary hover:text-secondary cursor-pointer' onClick={() => caruselRef?.current?.next()} />
            </div>
            <Carousel ref={caruselRef} autoplay slidesToShow={4} dots={false}>
                {data?.courses?.edges?.map(course => <div className="px-2"><CourseShortcut key={course?.node?.id} data={{
                    name: course?.node?.name || "",
                    thumbnail: course?.node?.miniature || "",
                    link: `course/${course?.node?.id}`,
                    id: Number(course?.node?.id) || 0,
                    price: Number(course?.node?.price) || 0
                }} /></div>)}
            </Carousel>

        </>
    )
}

const GET_BESTSELLERS = gql(/* GraphQL */ `
  query GetBestsellers  {
      courses (isBestseller:true) {
		edges{
            node {
              name
              id
              miniature
              date
              price
              category{
                edges{
				    node{
                        id
                        name
					}
                }
              }
			}
		}
    }
}
`);


