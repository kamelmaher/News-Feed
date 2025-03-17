import Spinner from 'react-bootstrap/Spinner';

const loading = () => {
    return (
        <div className='feed-back'>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
}

export default loading;