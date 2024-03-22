import React, { useContext, useEffect } from 'react'
import AppLayout, { ThemeContext } from '../../components/AppLayout/AppLayout'
import { useQuery } from '@apollo/client';
import Loader from '../../components/Loading/Loader';
import { gql } from '../../__generated__';
import CourseTopper from '../../components/CourseView/CourseTopper';
import { useParams } from 'react-router-dom';
import WhatLearn from '../../components/CourseView/WhatLearn';

export default function CourseView() {
    let { id } = useParams();



    const { loading, error, data } = useQuery(GET_COURSE_INFO, {
        variables: {
            iri: `/api/courses/${id}`
        }
    });

    useEffect(() => { document.title = data?.course?.name || "Course" }, [data])

    const { renderMessege } = useContext(ThemeContext);



    if (loading) {
        return <Loader />
    }

    if (error) {
        renderMessege(error.message)
    }

    console.log(data)

    return (
        <div>
            <CourseTopper price={Number(data?.course?.price)} image={data?.course?.miniature || ""} title={data?.course?.name || ""} />
            <div className="grid grid-cols-2">
                <div className="mx-10">
                    <WhatLearn items={data?.course?.whatLearn} />
                </div>
            </div>
        </div>
    )
}



const GET_COURSE_INFO = gql(/* GraphQL */ `
  query GetCourseInfo ($iri: ID!) {
      course (id: $iri) {
              name
              id
              miniature
              date
              whatLearn
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
`);


