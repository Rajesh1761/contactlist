import axios from 'axios';

const HOST = 'http://localhost:8080'
const CONTACT_LIST_BY_PAGE = HOST+'/contactLists';
const CONTACT_LIST_BY_NAME = HOST+'/contactName/';

class ContactListService{
   contactListByPage(page){
        return  axios.get(CONTACT_LIST_BY_PAGE+`?page=${page}&size=10`);
    }
    contactListByName(name){
        return  axios.get(CONTACT_LIST_BY_NAME+`${name}`);
    }
}
export default new ContactListService();