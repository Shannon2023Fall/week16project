import React, {useState, useEffect} from 'react';
/* import axios from 'axios'; */
import events from './ESaccidents.json';
import './Blog.css';

const Blog = () => {
    const [acciData, setAcciData] = useState([]);
    console.log(acciData);
    /* add search field at the left top */
    const [searchTerm, setSearchTerm] = useState('');
    /* displayed cards with data */
    const [filteredData, setFilteredData] = useState([]);
    /* add new event form at the left stiky bar */
    const [addData, setAddData] = useState({
        email: '',
        gender: '',
        age: '',
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
        const searchTermLowerCase = searchTerm.toLowerCase();
        const filtered = acciData.filter(acci => {
            for (const key in acci) {
                if (acci.hasOwnProperty(key)) {
                    const value = acci[key];
                    if (value && value.toString().toLowerCase().includes(searchTermLowerCase)) {
                        return true; // If any property includes the search term, include the item in the result
                    }
                }
            }
            return false; // If none of the properties include the search term, exclude the item
        });
        setFilteredData(filtered);
    };

    const handleFilterByGender = (gender) => {
        const filtered = acciData.filter(acci => acci.gender === gender);
        setFilteredData(filtered);
    };

    const handleSortByAge = () => {
        const sorted = [...filteredData].sort((a, b) => a.age - b.age);
        setFilteredData(sorted);
    };

    const handleSortByMonth = () => {
        const sorted = [...filteredData].sort((a, b) => a.month - b.month);
        setFilteredData(sorted);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Add the new event to the acciData state
            const newEvent = {
                email: addData.email,
                gender: addData.gender,
                age: addData.age,
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
                age: '',
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
                        <div className="search-bar">
                            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                            <button type="button" class="btn btn-info" onClick={handleSearch}><i className="fa fa-search"></i>Search</button>
                        </div>
                        <div className="sorting">
                        <h4>Sorters</h4>
                        <button type="button" class="btn btn-secondary me-3 mb-2" onClick={() => handleSortByAge()}>Sort by Age</button>
                        <button type="button" class="btn btn-secondary me-3 mb-2" onClick={() => handleSortByMonth()}>Sort by Month</button>
                        </div>
                        <div className="filtering">
                        <h4>Filters</h4>
                        <button type="button" class="btn btn-secondary me-3 mb-2" onClick={() => handleFilterByGender('male')}>Filter by Male</button>
                        <button type="button" class="btn btn-secondary me-3 mb-2" onClick={() => handleFilterByGender('female')}>Filter by Female</button>
                        </div>
                        {/* Form for adding a new event */}
                        <div className="form-container">
                             <h4>Add new event here</h4>
                             <form onSubmit={handleSubmit}>
                                <input type="text" placeholder="Email" value={addData.email} onChange={(e) => setAddData({ ...addData, email: e.target.value })} />
                                <input type="text" placeholder="Gender" value={addData.gender} onChange={(e) => setAddData({ ...addData, gender: e.target.value })} />
                                <input type="number" placeholder="Age" value={addData.age} onChange={(e) => setAddData({ ...addData, age: e.target.value })} />
                                <input type="text" placeholder="Year" value={addData.year} onChange={(e) => setAddData({ ...addData, year: e.target.value })} />
                                <input type="text" placeholder="Month" value={addData.month} onChange={(e) => setAddData({ ...addData, month: e.target.value })} />
                                <input type="text" placeholder="Day" value={addData.day} onChange={(e) => setAddData({ ...addData, day: e.target.value })} />
                                <button type="submit">Submit</button>
                            </form> 
                        </div>
                    </div>
                </div>
                <div className="card-container mt-3 mb-5">
                    <h2>E-Scooter Accidents in Bochum reported in 2022</h2>
                    <div className="card">
                        {filteredData.map((acci) => (
                            <div className="col-md-auto" key={acci.email}>
                                <div className="card">
                                    <div className="card-header">
                                        <h6>Email: {acci.email}</h6>
                                    </div>
                                    <ul class="list-group list-group-flush">
                            {acci.editable ? (
                                <>
                                    <li class="list-group-item" >Gender<input type="text" value={acci.gender} onChange={e => handleChange(acci.email, "gender", e.target.value)} /></li>
                                    <li class="list-group-item" >Age <input type="number" value={acci.age} onChange={e => handleChange(acci.email, "age", e.target.value)} /></li>
                                    <li class="list-group-item" >Month<input type="text" value={acci.month} onChange={e => handleChange(acci.email, "month", e.target.value)} /></li>
                                    <li class="list-group-item" >Day<input type="text" value={acci.day} onChange={e => handleChange(acci.email,"day", e.target.value)} /></li>                            
                            
                                </>
                            ) : (
                                <>
                                <li className="list-group-item">Gender: {acci.gender}</li>
                                <li className="list-group-item">Age: {acci.age}</li>
                                <li className="list-group-item">Year: {acci.year}</li>
                                <li className="list-group-item">Month: {acci.month}</li>
                                <li className="list-group-item">Day: {acci.day}</li>
                                </>
                            )}                            
                        </ul>
                        <div>
                            {acci.editable ? (
                                <>
                            <button type="button" class="btn btn-outline-dark  btn-sm me-2 mt-3" onClick={()=>handleSave(acci.email)}>Save</button>
                            <button type="button" class="btn btn-outline-dark btn-sm me-2 mt-3" onClick={()=>handleCancel(acci.email)}>Cancel</button>                                
                                </>
                            ) : (
                                <>
                                <button type="button" class="btn btn-outline-dark  btn-sm me-2 mt-3" onClick={()=>handleEdit(acci.email)}>Edit</button>
                                <button type="button" class="btn btn-outline-dark btn-sm me-2 mt-3" onClick={()=>handleDelete(acci.email)}>Delete</button>       
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

export default Blog;
