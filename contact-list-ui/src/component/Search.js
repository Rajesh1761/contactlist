import React,{useState} from 'react';
import ContactListService from '../service/ContactListService';

export const Search = () => {
  let styles = {
    height: '104px',
    width:'120px'
  };
  let tableStyle ={
    marginTop: '20px'
  };
  const [contacts, setContacts] = useState([]);
  const [txtContact,setTxtContact] = useState('');
  const searchContact= (e) => {
    e.preventDefault();
        if(txtContact === ''){
            alert("Please provide contact name to search");
        }else{
            ContactListService.contactListByName(txtContact).then((response) => {
                const receivedData = response.data;
                if(receivedData.includes('name not found')){
                  alert(receivedData);
                }else{
                  setContacts(receivedData);
                }
            }).catch((error) => {
                    alert(error.response.data.message);
            });
         }
}
  return (
    <div>
    <br/>
    <div className='container'>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
            <br/>
                 <h2 className='text-center'> Search Contact</h2>
                 <div className='card-body'>
                     <form>
                          <div className='form-group mb-2'>
                            <div className='form-group mb-2'>
                            <label className='form-label'>Enter complete name to search:</label>
                                <input type="text"
                                 placeholder="Enter name to search "
                                name="txtContact"
                                className="form-control"
                                autocomplete="off"
                                value={txtContact}
                                onChange={(e)=>setTxtContact(e.target.value)}
                                />
                              </div>
                          </div>
                          <div className='text-center'>
                             <button className='btn btn-primary' onClick={(e)=>searchContact(e)}>Search contact</button>
                          </div>
                     </form>
                 </div>
            </div>
            <br/>
            <div>
                <table className='table table-bordered table-striped text-center' style={tableStyle}>
                <thead>
                    <th>Name</th>
                    <th>Image</th>
                </thead>
                <tbody>
                    {
                        contacts.map(
                            contact=>
                            <tr key={contact.contactName}>
                                <td>{contact.contactName}</td>
                                <td><img src={contact.contactUrl} className="card-img-top" alt="Loading.." style={styles}></img></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        </div>
    </div>
</div>
  )
}

export default Search;