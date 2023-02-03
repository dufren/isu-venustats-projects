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

    console.log(error);

    return (
        <div>DevamEdenList</div>
    )
}

export default DevamEdenList