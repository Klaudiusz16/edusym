import React from 'react'
import { SERVER } from './../../../config';
import { Button, Typography } from 'antd';
const { Title } = Typography

export default function CourseTopper({ image, title, price }: { image: string, title: string, price: number }) {
    return (
        <div className='w-full'>
            <img src={SERVER + image} alt="" className='w-full object-cover h-[40vh]' />
            <div className="mx-10 grid grid-cols-2">
                <div className="-mt-24 p-5 bg-white">
                    <Title level={1}>{title}</Title>
                </div>
                <div className="-mt-24"> <Button className='bg-primary border-none text-white group text-center hover:text-additional text-xl h-24'>
                    Dodaj do kolekcji
                    <div className="flex justify-center mt-1 gap-2 items-center text-white group-hover:text-additional duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-coins"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 14c0 1.657 2.686 3 6 3s6 -1.343 6 -3s-2.686 -3 -6 -3s-6 1.343 -6 3z" /><path d="M9 14v4c0 1.656 2.686 3 6 3s6 -1.344 6 -3v-4" /><path d="M3 6c0 1.072 1.144 2.062 3 2.598s4.144 .536 6 0c1.856 -.536 3 -1.526 3 -2.598c0 -1.072 -1.144 -2.062 -3 -2.598s-4.144 -.536 -6 0c-1.856 .536 -3 1.526 -3 2.598z" /><path d="M3 6v10c0 .888 .772 1.45 2 2" /><path d="M3 11c0 .888 .772 1.45 2 2" /></svg> {price}</div>
                </Button></div>
            </div>
        </div>
    )
}
