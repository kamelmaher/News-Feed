import Form from 'react-bootstrap/Form';
import { categories } from '../data/categories';
import { useData } from '../hooks/useData';
import { useState } from 'react';
const Nav = () => {
    const { handleSearchTerm, handleChangeTopic } = useData()
    const [search, setSearch] = useState("")
    return (
        <div className="p-3 d-flex justify-content-between align-items-center section" >
            <div className="d-flex gap-2 align-items-center" >
                <h3 className="text-white" style={{ fontSize: "20px", textWrap: "nowrap" }}>News Feed App</h3>
                <Form.Select size='sm' className='pointer' onChange={e => handleChangeTopic(e.target.value)}>
                    <option value={"general"}>All Topics</option>
                    {
                        categories.map(category => <option key={category} value={category}>{category.toUpperCase()}</option>)
                    }
                </Form.Select>
            </div>
            <div>
                <form onSubmit={e => {
                    e.preventDefault()
                    handleSearchTerm(search)

                }}>
                    <Form.Control className='hidden' value={search} size='sm' placeholder='search...' onChange={e => setSearch(e.target.value)} ></Form.Control>
                </form>
            </div>
        </div >
    )
}

export default Nav
