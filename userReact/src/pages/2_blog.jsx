import React, {useState, useEffect} from 'react';
import axios from 'axios';
import events from './ESaccidents.json';

const blog = () => {
    const [acciData, setAcciData] = useState([]);
    console.log(acciData);
    const [searchTerm, setSearchTerm] = useState('');
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

    const fetchData = () => {

            setAcciData(events); // Set acciData to local JSON data
            setFilteredData(events); // Initialize filteredData with all data
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

    /* const handleChange = (e) => {
        const {name, value} = e.target;
        setAddData({...addData, [name]: value});
    }; */

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Add the new event to the acciData state
            const newEvent = {
                email: addData.email,
                gender: addData.gender,
                year: addData.year,
                month: addData.month,
                day: addData.day,
                id: acciData.length + 1 // Generate a unique ID for the new event
            };
            setAcciData([...acciData, newEvent]);
            setFilteredData([...acciData, newEvent]); // Update filteredData too
    
            // Clear the form fields
            setAddData({
                email: '',
                gender: '',
                year: '',
                month: '',
                day: ''
            });
        } catch (error) {
            console.error('Error adding event:', error);
        }
    };

    const handleEdit = (email) => {
        console.log("Edit",email);
        // Find the index of the card to be edited due to batch placed buttons
        const index = acciData.findIndex(acci => acci.email === email);
        // Create a copy of the acciData array
        const updatedAcciData = [...acciData];
        // Set the 'editable' property of the card to true
        updatedAcciData[index].editable = true;
        // Update the state with the updatedAcciData
        setAcciData(updatedAcciData);
      };
      
    const handleSave = (email) => {
        const index = acciData.findIndex(acci => acci.email === email);
        const updatedAcciData = [...acciData];
        updatedAcciData[index].editable = false;
        setAcciData(updatedAcciData);
    };
  
    const handleCancel = (email) => {
        const index = acciData.findIndex(acci => acci.email === email);
        const updatedAcciData = [...acciData];
        updatedAcciData[index].editable = false;
        setAcciData(updatedAcciData);
    };    
  
    const handleChange = (email, field, value) => {
        const index = acciData.findIndex(acci => acci.email === email);
        const updatedAcciData = [...acciData];
        updatedAcciData[index][field] = value;
        setAcciData(updatedAcciData);
    };

    const handleDelete = (email) => {
        console.log("Delete", email);
        try {
            // Filter out the event with the specified Email
            const updatedData = acciData.filter(event => event.email !== email);
            setAcciData(updatedData);
            setFilteredData(updatedData);
        } catch (error) {
            console.error('Error deleting event:', error);
        }  
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
                                <button type="submit" aria-placeholder="Enter your email to search">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <h2>Blog</h2>
                    <div className="row">
                        {filteredData.map((acci) => (
                            <div className="col-md-auto" key={acci.email}>
                                <div className="card">
                                    <div className="card-header">
                                        <h6>Email {acci.email}</h6>
                                    </div>
                                    <ul class="list-group list-group-flush">
                            {acci.editable ? (
                                <>
                                    <li class="list-group-item" ><input type="text" value={acci.gender} onChange={e => handleChange(acci.id, "gender", e.target.value)} /></li>
                                    <li class="list-group-item" >Age <input type="number" value={acci.age} onChange={e => handleChange(acci.id, "age", e.target.value)} /></li>
                                    <li class="list-group-item" ><input type="text" value={acci.month} onChange={e => handleChange(acci.id, "month", e.target.value)} /></li>                            
                                </>
                            ) : (
                                <>
                                <li className="list-group-item">{acci.gender}</li>
                                <li className="list-group-item">Age {acci.age}</li>
                                <li className="list-group-item">{acci.month}</li>
                                </>
                            )}                            
                        </ul>
                        <div>
                            {acci.editable ? (
                                <>
                            <button type="button" class="btn btn-outline-dark  btn-sm me-2 mt-3" onClick={()=>handleSave(acci.id)}>Save</button>
                            <button type="button" class="btn btn-outline-dark btn-sm me-2 mt-3" onClick={()=>handleCancel(acci.id)}>Cancel</button>                                
                                </>
                            ) : (
                                <>
                                <button type="button" class="btn btn-outline-dark  btn-sm me-2 mt-3" onClick={()=>handleEdit(acci.id)}>Edit</button>
                                <button type="button" class="btn btn-outline-dark btn-sm me-2 mt-3" onClick={()=>handleDelete(acci.id)}>Delete</button>       
                                </>
                            )}
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
