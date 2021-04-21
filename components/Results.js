import Thumbnail from '../components/Thumbnail'

const Results = ({ results }) => {
    return (
        <div>
            {results.map((result) => (
                <Thumbnail key={result.id} result={result} />
            ))}
        </div>
    )
}

export default Results
