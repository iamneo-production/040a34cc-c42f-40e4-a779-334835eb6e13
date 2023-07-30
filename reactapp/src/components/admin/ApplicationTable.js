import React,{useState} from 'react'
import {Document, Page, Text, View, Image, StyleSheet, PDFViewer} from '@react-pdf/renderer';
import { request } from '../../auth/Axios';

const styles=StyleSheet.create({
    page:{
      padding:'20px',
      flexDirection:'column',
      height:'100%',
      alignItems:'stretch',
      justifyContent:'flex-start',
      
    },
    section:{
      margin:'20px',
      height:'90%',
      border: '2px solid black',
      
    },
    image:{
      width:200,
      height:200,
      marginBottom:10,
      margin:10,
    },
    title:{
      fontSize:24,
      textAlign: 'center',
      marginBottom:10,
      fontWeight:'bold',
      margin:10,
    },
    text:{
      fontSize:12,
      textAlign:'left',
      margin:10,
      
    }
  });

export default function ApplicationTable({application}) {
    const [showPdf,setShowPdf]=useState(false);
    const [status,setStatus]=useState(application.status);
    const [pdf,setPdf]=useState(null);
    
    const handleAccept=async()=>{
      setStatus('Accepted')
      const loanApplication={
        status:"Accepted",
      }
      try {
<<<<<<< HEAD
        const response = await request('put', `/loans/approve/${application.userId}`);
=======
        const response = await request('put', `/userloans/approve/${application.userId}`);
>>>>>>> Education-loan-portal-karthi-0212
      } catch (error) {
        console.log("Error fetching current user:", error);
      }
      try {
        const response = await request('put', `/loan-applications/status/${application.userId}/${application.id}`,loanApplication);
      } catch (error) {
        console.log("Error fetching current user:", error);
      }

    }
    const handleReject=async()=>{
      setStatus("Rejected");
      const loanApplication={
        status:"Rejected"
      }
      try {
        const response = await request('put', `/loan-applications/status/${application.userId}/${application.id}`,loanApplication);
      } catch (error) {
        console.log("Error fetching current user:", error);
      }
      try {
<<<<<<< HEAD
        const response = await request('delete', `/loans/${application.userId}`);
=======
        const response = await request('delete', `/userloans/${application.userId}`);
>>>>>>> Education-loan-portal-karthi-0212
      } catch (error) {
        console.log("Error fetching current user:", error);
      }
    }


    
    
    const handleGenerateReport=()=>{
      const generatePdf = (
        <Document style={{height:'100%'}}>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
            <Text style={styles.title}>Personal Details</Text>
              <Text style={styles.text}>First Name : {application.firstName}</Text>
              <Text style={styles.text}>Middle Name : {application.middleName}</Text>
              <Text style={styles.text}>Last Name : {application.lastName}</Text>
              <Text style={styles.text}>Date Of Birth : {application.dateOfBirth}</Text>
              <Text style={styles.text}>Age : {application.age}</Text>
              <Text style={styles.text}>Gender : {application.gender}</Text>
              <Text style={styles.text}>Father's Name : {application.fathersName}</Text>
              <Text style={styles.text}>Father's Occupation : {application.fathersOccupation}</Text>
              <Text style={styles.text}>Family Income : {application.familyIncome}</Text>
              <Text style={styles.text}>Category : {application.category}</Text>
              <Text style={styles.text}>Email Id : {application.emailId}</Text>
              <Text style={styles.text}>Contact Number : {application.contactNo}</Text>
              <Text style={styles.text}>Aadhar Number : {application.aadharNo}</Text>
              <Text style={styles.text}>Pan Number : {application.panNo}</Text>
              <Text style={styles.text}>Address : {application.address1}</Text>
              <Text style={styles.text}>Marital Status : {application.maritalStatus}</Text>
              <Text style={styles.text}>Country : {application.country}</Text>
              <Text style={styles.text}>State : {application.state}</Text>
              <Text style={styles.text}>Pincode : {application.pinode}</Text>
            </View>
          </Page>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text style={styles.title}>
                Bank Details
              </Text>
              <Text style={styles.text}>Bank Name : {application.bankName}</Text>
              <Text style={styles.text}>Branch Name : {application.branchName}</Text>
              <Text style={styles.text}>IFSC Code : {application.ifscCode}</Text>
              <Text style={styles.text}>Account Type : {application.accountType}</Text>
              <Text style={styles.text}>Account Number : {application.accountNumber}</Text>
              <Text style={styles.text}>Account Holder Name : {application.accountHolderName}</Text>
              <Text style={styles.title}>
                Education Details
              </Text>
              <Text style={styles.text}>10th School Name : {application.tenthSchoolName}</Text>
              <Text style={styles.text}>10th Percentage : {application.tenthPercentage}</Text>
              <Text style={styles.text}>12th School Name : {application.twelvethSchoolName}</Text>
              <Text style={styles.text}>12th Percentage : {application.twelvethPercentage}</Text>
              <Text style={styles.text}>Under Graduate College : {application.underGradCollege}</Text>
              <Text style={styles.text}>UG Cgpa : {application.underGradCgpa}</Text>
              <Text style={styles.title}>
                Course Details
              </Text>
              <Text style={styles.text}>Current Institution Name : {application.currentInstitutionName}</Text>
              <Text style={styles.text}>CourseName : {application.courseName}</Text>
              <Text style={styles.text}>Course Duration : {application.courseDuration}</Text>
              <Text style={styles.text}>Date of Commencement : {application.dateOfCommencement}</Text>
              <Text style={styles.text}>Date of Completion : {application.dateOfCompletion}</Text>
            </View>
          </Page>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text style={styles.title}>
                Loan Details
              </Text>
              <Text style={styles.text}>Loan Type : {application.loanType}</Text>
              <Text style={styles.text}>1st Year Amount : {application.year1}</Text>
              <Text style={styles.text}>2nd Year Amount : {application.year2}</Text>
              <Text style={styles.text}>3rd Year Amount : {application.year3}</Text>
              <Text style={styles.text}>4th Year Amount : {application.year4}</Text>
              <Text style={styles.text}>Total Loan Amount : {application.totalLoanAmount}</Text>
              <Text style={styles.text}>Loan Purpose : {application.purpose}</Text>
              <Text style={styles.text}>Loan Tenure : {application.tenure}</Text>
            </View>
          </Page>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text style={styles.title}>
                Image Proof
              </Text>
              <Text style={styles.text}>10th Marksheet :</Text>
              <Image src={`data:image/jpeg;base64,${application.tenthMarksheet}`} />
            </View>
          </Page>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text style={styles.text}>12th Marksheet :</Text>
              <Image src={`data:image/jpeg;base64,${application.twelvethMarksheet}`} />
              </View>
          </Page>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text style={styles.text}>UG Marksheet :</Text>
              <Image src={`data:image/jpeg;base64,${application.underGradMarksheet}`} />
            </View>
          </Page>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text style={styles.text}>Proof Of Admission :</Text>
              <Image src={`data:image/jpeg;base64,${application.proofOfAdmission}`} />
              </View>
          </Page>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text style={styles.text}>Land Records :</Text>
              <Image src={`data:image/jpeg;base64,${application.landRecords}`} />
            </View>
          </Page>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text style={styles.text}>applicantsPhoto :</Text>
              <Image src={`data:image/jpeg;base64,${application.applicantsPhoto}`} />
              <Text style={styles.text}>feeStructure :</Text>
              <Image src={`data:image/jpeg;base64,${application.feeStructure}`} />
            </View>
          </Page>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text style={styles.text}>Aadhar Card :</Text>
              <Image src={`data:image/jpeg;base64,${application.aadharCardPhoto}`} />
            </View>
          </Page>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text style={styles.text}>Pan card :</Text>
              <Image src={`data:image/jpeg;base64,${application.panCardPhoto}`} />
            </View>
          </Page>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text style={styles.text}>Proof Of Income :</Text>
              <Image src={`data:image/jpeg;base64,${application.proofOfIncome}`} />
              <Text style={styles.text}>Digital Signature :</Text>
              <Image src={`data:image/jpeg;base64,${application.digitalSignature}`} />
            </View>
          </Page>
        </Document>
      );
      setPdf(generatePdf);
      setShowPdf(true);
    }
  return (
    <>
        <tr>
            <th scope="row">{application.id}</th>
                <td>{application.firstName}</td>
                <td>{application.lastName}</td>
                <td>{application.applyDate && application.applyDate}</td>
                <td>{application.courseDuration}</td>
                <td>{application.totalLoanAmount}</td>
                <td>{application.tenure}</td>
                <td>
                  <button onClick={handleGenerateReport} className="btn btn-primary mx-4">Report</button>
                </td>
                <td>
                  
                  {status==='pending' ?
                  <div>
                  <button type="button" className="btn btn-success mx-4" onClick={handleAccept}>
                    Accept
                  </button>
                  <button type="button" className="btn btn-danger mx-4" onClick={handleReject}>
                    Reject
                  </button>
                  </div> :
                  <button type="button" className={status==='Accepted' ? "btn btn-success mx-4" : "btn btn-danger mx-4"} >
                  {status}
                  </button>
                  }
                </td>               
            </tr> 
        {
          showPdf && 
          <div className='pdf-container'>
            <div className='pdf-content'>
            <div className='pdf-modal' style={{width:'100%',height:'100%'}}>
              <div className='pdf-content' style={{width:'100%',height:'100%'}}>
                <PDFViewer style={{width:'100%',height:'98%'}}>{pdf}</PDFViewer>
                <button className="pdf-close-btn btn btn-danger" style={{float:'right'}} onClick={()=>setShowPdf(false)}>
                  Close PDF
                </button>
              </div>
            </div>
            </div>
            </div>
        }
    </>
  )
}
