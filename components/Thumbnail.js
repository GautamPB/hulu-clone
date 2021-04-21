import Image from 'next/image'

const Thumbnail = ({ result }) => {
    const BASE_URL = 'https://image.tmdb.org/t/p/original/'

    return (
        <div>
            <Image
                layout="responsive"
                src={
                    `${BASE_URL}${
                        result.backdrop_path || result.poster__path
                    }` || `${result.poster__path}`
                }
                width={1920}
                height={1080}
            />
        </div>
    )
}

export default Thumbnail
