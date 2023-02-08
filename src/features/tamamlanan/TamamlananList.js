import { useGetTamamlananProjelerQuery } from './tamamlananApiSlice';
import axios from 'axios';

const TamamlananList = () => {
    const {
        data,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetTamamlananProjelerQuery()

    console.log(data)

    return (
        <div>Tamamlanan</div>
    )
}

export default TamamlananList