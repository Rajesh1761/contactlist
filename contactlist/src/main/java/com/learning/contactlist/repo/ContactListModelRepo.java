package com.learning.contactlist.repo;

import com.learning.contactlist.model.ContactListModel;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContactListModelRepo extends PagingAndSortingRepository<ContactListModel,Long> {

    Page<ContactListModel> findByContactName(String name, Pageable pageable);

    List<ContactListModel> findByContactName(String name);
}
