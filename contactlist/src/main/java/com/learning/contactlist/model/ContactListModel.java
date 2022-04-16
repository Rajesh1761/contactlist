package com.learning.contactlist.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Data
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ContactListModel {

    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String contactName;
    private String contactUrl;
}
