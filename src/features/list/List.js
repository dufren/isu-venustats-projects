import axios from "axios"
import { useGetDataQuery } from "./listApiSlice"

const List = () => {

    // const {
    //     data,
    //     isLoading,
    //     isSuccess,
    //     isError,
    //     error
    // } = useGetDataQuery()

    // console.log(error);


    const fetchData = async () => {
        try {
            const resp = await axios.get(process.env.REACT_APP_BASE_URL, {
                headers: {
                    "Authorization": process.env.REACT_APP_AUTH,
                }
            })
            console.log(resp)
        } catch (error) {
            console.log(error);
        }
    }

    fetchData()

    return (
        <div>List</div>
    )
}

export default List