package com.learning.contactlist;

import com.learning.contactlist.model.ContactListModel;
import com.learning.contactlist.repo.ContactListModelRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class ContactlistApplication implements CommandLineRunner {

	@Autowired
	ResourceLoader resourceLoader;

	@Autowired
	ContactListModelRepo contactListModelRepo;

	public static void main(String[] args) {
		SpringApplication.run(ContactlistApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		Resource resource = resourceLoader.getResource("classpath:people.csv");
		contactListModelRepo.saveAll(readAndFetchContactListData(resource));
	}

	private List<ContactListModel> readAndFetchContactListData(Resource resource) throws IOException {
		List<ContactListModel> contactListModelList = new ArrayList<>();
		File file = resource.getFile();
		BufferedReader br = new BufferedReader(new FileReader(file));
		String line = "";
		String splitBy = ",";
		int count =0;
		while ((line = br.readLine()) != null){
			if(count!=0){
				String[] people = line.split(splitBy);
				String contactUrl = people[1].trim();
//				if(people[1].trim().equalsIgnoreCase("Jr.")){
//					contactUrl= people[2].trim();
//				}
				contactListModelList.add(ContactListModel.
						builder().contactName(people[0].trim()).
						contactUrl(contactUrl).build());
			}
			count++;
		}
		return contactListModelList;
	}
}
