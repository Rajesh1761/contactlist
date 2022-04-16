package com.learning.contactlist.controller;

import com.learning.contactlist.exception.ContactNameNotFoundException;
import com.learning.contactlist.model.ContactListModel;
import com.learning.contactlist.repo.ContactListModelRepo;
import com.learning.contactlist.service.ContactListService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import javax.naming.InvalidNameException;

@RestController
@Log4j2
@CrossOrigin(origins = "http://localhost:3000")
public class ContactListController {

    @Autowired
    ContactListService contactListService;

    @GetMapping("/contactLists")
    public Page<ContactListModel> getContactLists(Pageable pageable){
        return contactListService.findAllContactLists(pageable);
    }
    @GetMapping("/contactName/{contactName}")
    public ResponseEntity getFindByName(@PathVariable String contactName) {
        try {
            return ResponseEntity.ok(contactListService.findContactByName(contactName));
        }catch (ContactNameNotFoundException exception){
            return ResponseEntity.ok(exception.getMessage());
        }catch (Exception exception){
            log.error(exception.getStackTrace());
            return ResponseEntity.ok(exception.getMessage());
        }
    }
}

