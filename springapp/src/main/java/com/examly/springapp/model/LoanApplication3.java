package com.examly.springapp.model;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;
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

    public Long getImageId() {
        return imageId;
    }

    public void setImageId(Long imageId) {
        this.imageId = imageId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getTenthMarksheetFileName() {
        return tenthMarksheetFileName;
    }

    public void setTenthMarksheetFileName(String tenthMarksheetFileName) {
        this.tenthMarksheetFileName = tenthMarksheetFileName;
    }

    public byte[] getTenthMarksheet() {
        return tenthMarksheet;
    }

    public void setTenthMarksheet(byte[] tenthMarksheet) {
        this.tenthMarksheet = tenthMarksheet;
    }

    public String getTwelvethMarksheetFileName() {
        return twelvethMarksheetFileName;
    }

    public void setTwelvethMarksheetFileName(String twelvethMarksheetFileName) {
        this.twelvethMarksheetFileName = twelvethMarksheetFileName;
    }

    public byte[] getTwelvethMarksheet() {
        return twelvethMarksheet;
    }

    public void setTwelvethMarksheet(byte[] twelvethMarksheet) {
        this.twelvethMarksheet = twelvethMarksheet;
    }

    public String getProofOfAdmissionFileName() {
        return proofOfAdmissionFileName;
    }

    public void setProofOfAdmissionFileName(String proofOfAdmissionFileName) {
        this.proofOfAdmissionFileName = proofOfAdmissionFileName;
    }

    public byte[] getProofOfAdmission() {
        return proofOfAdmission;
    }

    public void setProofOfAdmission(byte[] proofOfAdmission) {
        this.proofOfAdmission = proofOfAdmission;
    }

    public String getLandRecordsFileName() {
        return landRecordsFileName;
    }

    public void setLandRecordsFileName(String landRecordsFileName) {
        this.landRecordsFileName = landRecordsFileName;
    }

    public byte[] getLandRecords() {
        return landRecords;
    }

    public void setLandRecords(byte[] landRecords) {
        this.landRecords = landRecords;
    }

    public String getApplicantsPhotoFileName() {
        return applicantsPhotoFileName;
    }

    public void setApplicantsPhotoFileName(String applicantsPhotoFileName) {
        this.applicantsPhotoFileName = applicantsPhotoFileName;
    }

    public byte[] getApplicantsPhoto() {
        return applicantsPhoto;
    }

    public void setApplicantsPhoto(byte[] applicantsPhoto) {
        this.applicantsPhoto = applicantsPhoto;
    }

    public String getFeeStructureFileName() {
        return feeStructureFileName;
    }

    public void setFeeStructureFileName(String feeStructureFileName) {
        this.feeStructureFileName = feeStructureFileName;
    }

    public byte[] getFeeStructure() {
        return feeStructure;
    }

    public void setFeeStructure(byte[] feeStructure) {
        this.feeStructure = feeStructure;
    }

    public String getAadharCardPhotoFileName() {
        return aadharCardPhotoFileName;
    }

    public void setAadharCardPhotoFileName(String aadharCardPhotoFileName) {
        this.aadharCardPhotoFileName = aadharCardPhotoFileName;
    }

    public byte[] getAadharCardPhoto() {
        return aadharCardPhoto;
    }

    public void setAadharCardPhoto(byte[] aadharCardPhoto) {
        this.aadharCardPhoto = aadharCardPhoto;
    }

    public String getPanCardPhotoFileName() {
        return panCardPhotoFileName;
    }

    public void setPanCardPhotoFileName(String panCardPhotoFileName) {
        this.panCardPhotoFileName = panCardPhotoFileName;
    }

    public byte[] getPanCardPhoto() {
        return panCardPhoto;
    }

    public void setPanCardPhoto(byte[] panCardPhoto) {
        this.panCardPhoto = panCardPhoto;
    }

    public String getProofOfIncomeFileName() {
        return proofOfIncomeFileName;
    }

    public void setProofOfIncomeFileName(String proofOfIncomeFileName) {
        this.proofOfIncomeFileName = proofOfIncomeFileName;
    }

    public byte[] getProofOfIncome() {
        return proofOfIncome;
    }

    public void setProofOfIncome(byte[] proofOfIncome) {
        this.proofOfIncome = proofOfIncome;
    }
	
}
