package com.examly.springapp.model;

import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="images")
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class LoanApplication3 {

	//documents to be uploaded
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long imageId;

	private Long id;
	private Long userId;
	
	
	// 10th Marksheet
    private String tenthMarksheetFileName;

    @Lob
    @Basic(fetch = FetchType.LAZY)
    @Column(columnDefinition = "LONGBLOB")
    private byte[] tenthMarksheet;
    
    
    // 12th Marksheet
    private String twelvethMarksheetFileName;

    @Lob
    @Basic(fetch = FetchType.LAZY)
    @Column(columnDefinition = "LONGBLOB")
    private byte[] twelvethMarksheet;
    
    
    // Proof Of Admission
    private String proofOfAdmissionFileName;

    @Lob
    @Basic(fetch = FetchType.LAZY)
    @Column(columnDefinition = "LONGBLOB")
    private byte[] proofOfAdmission;
    
    
    // Land Records
    private String landRecordsFileName;

    @Lob
    @Basic(fetch = FetchType.LAZY)
    @Column(columnDefinition = "LONGBLOB")
    private byte[] landRecords;
    
    
    // Applicants Photo
    private String applicantsPhotoFileName;

    @Lob
    @Basic(fetch = FetchType.LAZY)
    @Column(columnDefinition = "LONGBLOB")
    private byte[] applicantsPhoto;
    
    
    // Fee Structure
    private String feeStructureFileName;

    @Lob
    @Basic(fetch = FetchType.LAZY)
    @Column(columnDefinition = "LONGBLOB")
    private byte[] feeStructure;
    
    
    // Aadhar Card Photo
    private String aadharCardPhotoFileName;

    @Lob
    @Basic(fetch = FetchType.LAZY)
    @Column(columnDefinition = "LONGBLOB")
    private byte[] aadharCardPhoto;
    
    
    // Pan Card Photo
    private String panCardPhotoFileName;

    @Lob
    @Basic(fetch = FetchType.LAZY)
    @Column(columnDefinition = "LONGBLOB")
    private byte[] panCardPhoto;
    
    
    // Proof Of Income
    private String proofOfIncomeFileName;

    @Lob
    @Basic(fetch = FetchType.LAZY)
    @Column(columnDefinition = "LONGBLOB")
    private byte[] proofOfIncome;
	
}
