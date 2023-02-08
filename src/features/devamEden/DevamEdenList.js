import { useGetDevamEdenProjelerQuery } from "./devamEdenApiSlice";

import React from 'react'

const DevamEdenList = () => {

    const {
        data,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetDevamEdenProjelerQuery()

    return (
        <div>DevamEdenList</div>
    )
}

export default DevamEdenList