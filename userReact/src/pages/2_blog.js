import React, {useState, useEffect} from 'react';
import axios from 'axios';

const blog = () => {
    const [acciData, setAcciData] = useState([]);

    const [searchData, setSearchData] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [addData, setAddData] = useState({
        email: '',
        gender: '',
        year: '',
        month: '',
        day: ''
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('your-api-endpoint-here');
            setAcciData(response.data); // Assuming your API response contains accident data
            setFilteredData(response.data); // Initialize filteredData with all data initially
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSearch = () => {
        const filtered = acciData.filter(acci => acci.email.includes(searchTerm));
        setFilteredData(filtered);
    };

    const handleFilterByGender = (gender) => {
        const filtered = acciData.filter(acci => acci.gender === gender);
        setFilteredData(filtered);
    };

 /*    const handleFilterByMonth = (month) => {
        const filtered = acciData.filter(acci => acci.month === month);
        setFilteredData(filtered);
    }; */

    const handleSortByAge = () => {
        const sorted = [...filteredData].sort((a, b) => a.age - b.age);
        setFilteredData(sorted);
    };

    const handleSortByMonth = () => {
        const sorted = [...filteredData].sort((a, b) => a.month - b.month);
        setFilteredData(sorted);
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setAddData({...addData, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('your-backend-endpoint', formData);
            setFormData({
                id: '',
                email: '',
                gender: '',
                year: '',
                month: '',
                day: ''
            });
            fetchData();
        } catch (error) {
            console.error('Error adding event:', error);
        }
    };

    const handleEdit = (id) => {
        // Link to edit method in backend
    };

    const handleDelete = (id) => {
        // Link to delete method in backend
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="sticky-sidebar">
                        <h3>Search</h3>
                        <div className="search-bar">
                            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                            <button onClick={handleSearch}><i className="fa fa-search"></i></button>
                        </div>
                        <h3>Sorters</h3>
                        <button type="button" class="btn btn-secondary me-3 mb-2" onClick={() => handleSortByAge()}>Sort by Age</button>
                        <button type="button" class="btn btn-secondary me-3 mb-2" onClick={() => handleSortByMonth()}>Sort by Month</button>

                        <h3>Filters</h3>
                        <button type="button" class="btn btn-secondary me-3 mb-2" onClick={() => handleFilterByGender('male')}>Filter by Male</button>
                        <button type="button" class="btn btn-secondary me-3 mb-2" onClick={() => handleFilterByGender('female')}>Filter by Female</button>
                        {/* <button onClick={() => handleFilterByMonth(1)}>Filter by January</button>
                        <button onClick={() => handleFilterByMonth(2)}>Filter by February</button> */}

                        {/* Form for adding a new event */}
                        <div className="form-container">
                            <h2>Add new event here</h2>
                            <form onSubmit={handleSubmit}>
                                {/* Form fields */}
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <h2>Blog</h2>
                    <div className="row">
                        {filteredData.map((acci) => (
                            <div className="col-md-auto" key={acci.id}>
                                <div className="card">
                                    <div className="card-header">
                                        <h6>ID {acci.id}</h6>
                                    </div>
                                    <div className="card-footer">
                                        <button type="button" class="btn btn-outline-dark btn-sm me-2 mt-3" onClick={() => handleEdit(acci.id)}>Edit</button>
                                        <button type="button" class="btn btn-outline-dark btn-sm me-2 mt-3" onClick={() => handleDelete(acci.id)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default blog;
