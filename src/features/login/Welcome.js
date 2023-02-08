import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <div className='bg-slate-400 min-h-screen text-white text-center'>
            <p className='text-2xl text-gray-700'><Link to="/devam-eden-ulusal">Devam Eden Ulusal</Link></p>
            <p className='text-2xl mt-5 text-gray-700'><Link to="/devam-eden-uluslararası">Devam Eden Uluslararası</Link></p>
            <p className='text-2xl mt-5 text-gray-700'><Link to="/tamamlanan-ulusal">Tamamlanan Ulusal</Link></p>
            <p className='text-2xl mt-5 text-gray-700'><Link to="/tamamlanan-uluslararası">Tamamlanan Uluslararası</Link></p>
        </div>
    )
}

export default Welcome