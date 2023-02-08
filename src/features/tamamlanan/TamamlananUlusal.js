import { PulseLoader } from 'react-spinners';
import Proje from './Proje';
import { useGetTamamlananProjelerQuery } from './tamamlananApiSlice';

const TamamlananUlusal = () => {
    const {
        data,
        isLoading,
        isSuccess,
        isError,
        isFetching
    } = useGetTamamlananProjelerQuery()

    let content

    if (isLoading | isFetching | isError) {
        return <PulseLoader className='text-center mt-72' size={50} color={"#828282"} />
    }

    if (isSuccess) {
        const filteredUlusal = data?.filter((proje) => (
            proje.ddlFonTuru.toLowerCase().includes("ulusal")
        ))

        let tableContent = filteredUlusal?.length && filteredUlusal.map(proje => <Proje key={proje.id} proje={proje} />)
        content = (
            <table className='w-full'>
                <thead className='bg-gray-100 border border-gray-300'>
                    <tr>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Fon Sağlayan Kuruluş</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Çağrı Kodu</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Projenin Adı</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Başlangıç Tarihi</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Bitiş Tarihi</th>
                    </tr>
                </thead>
                <tbody>
                    {tableContent}
                </tbody>
            </table>
        )
        return content
    }
}

export default TamamlananUlusal