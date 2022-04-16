package com.learning.contactlist.service;

import com.learning.contactlist.exception.ContactNameNotFoundException;
import com.learning.contactlist.model.ContactListModel;
import com.learning.contactlist.repo.ContactListModelRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactListService {

    @Autowired
    ContactListModelRepo contactListModelRepo;

    public Page<ContactListModel> findAllContactLists(Pageable pageable) {
        return contactListModelRepo.findAll(pageable);
    }

    public List<ContactListModel> findContactByName(String contactName) throws ContactNameNotFoundException {
        List<ContactListModel> contactByName =  contactListModelRepo.findByContactName(contactName);
        if(contactByName.isEmpty()){
            throw new ContactNameNotFoundException(contactName+" name not found");
        }
        return contactByName;
    }
}
