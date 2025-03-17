import Pagination from 'react-bootstrap/Pagination';
import { useData } from '../hooks/useData';

function PaginationComponent() {
    const { handleChangePageNumbaer, pageNumber } = useData()
    return (
        <div className='d-flex justify-content-center mt-3'>
            <Pagination>
                <Pagination.First onClick={() => {
                    handleChangePageNumbaer(1)
                }} />
                <Pagination.Prev onClick={() => {
                    handleChangePageNumbaer(pageNumber - 1)
                }} />
                {
                    [...Array(7)].map((_, index) => <Pagination.Item key={index} active={pageNumber == index + 1} onClick={() => {
                        handleChangePageNumbaer(index + 1)
                    }}>{index + 1}</Pagination.Item>)
                }
                <Pagination.Next onClick={() => {
                    handleChangePageNumbaer(pageNumber + 1)
                }} />
                <Pagination.Last onClick={() => {
                    handleChangePageNumbaer(7)
                }} />
            </Pagination>
        </div>
    );
}

export default PaginationComponent;