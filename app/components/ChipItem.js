import React from 'react'

const ChipItem = ({ data }) => {
    console.log(data)

    return (
        <span className=' px-2 m-1 ml-0 rounded-lg border border-gray-200 bg-slate-100 text-blue-500  font-semibold'>

            {data}

        </span>
    )
}

export default ChipItem;