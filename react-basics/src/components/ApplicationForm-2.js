
import React, { useState } from 'react';
import './ApplicationForm-2.css'; 

const ApplicationForm = () => {

    const [schoolName,setSchoolName]=useState("");
    const [tenthScore, setTenthScore] = useState("");
    const [twethSchoolName,settwethSchoolName]=useState("");
    const [twelfthPercentage, setTwelfthPercentage] = useState("");
    const [underGradClg,setunderGragClg]=useState("");
    const [undergradCGPA, setUndergradCGPA] = useState("");
    const [universityName, setUniversityName]=useState("");
    const [course,setCourse]=useState("");
    const [duration,setDuration]=useState("");
    const [commence,setCommence]=useState("");
    const [end,setEnd]=useState("");
    const [salary,setSalary]=useState(null);
    const [photo, setPhoto] = useState(null);
    const [memos, setMemos] = useState(null);
    const [digitalSignature, setDigitalSignature] = useState(null);

    const [isDataCorrect, setIsDataCorrect] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

       
        if (schoolName && tenthScore && twethSchoolName && twelfthPercentage &&  underGradClg && undergradCGPA && universityName && course && duration && commence && end  && photo && memos && salary && digitalSignature) {
            console.log({schoolName,tenthScore,twethSchoolName,twelfthPercentage,underGradClg,undergradCGPA,universityName,course,duration,commence,end, photo, memos,salary, digitalSignature});
            alert('Form submitted successfully');
        } else {
            alert('Please fill all the details');
        }
    };

    const handleFileChange = (e, setFileState) => {
        setFileState(e.target.files[0]);
    }

    return (
        <form onSubmit={handleSubmit} className="form">
        <label className="headings"><h2>Previous Education</h2></label>
        <label className='label'>
        <p className="a"> 10th School Name:</p> 
           <input type="text" value={schoolName} onChange={(e) => setSchoolName(e.target.value)} className="input"/>
   
           
        </label>
        <label className="label">
        <p className="a"> 10th Score:</p>
            
            <input type="number" value={tenthScore} onChange={(e) => setTenthScore(e.target.value)} className="input" />
        </label>
        <label className='label'>
        <p className="a"> 12th School Name:</p>
            
            <input type="text" value={twethSchoolName} onChange={(e) => settwethSchoolName(e.target.value)} className="input" />
        </label>
        <label className="label">
            <p className="a">12th Percentage:</p>
            <input type="number" value={twelfthPercentage} onChange={(e) => setTwelfthPercentage(e.target.value)} className="input" />
        </label>
        <label className='label' >
        <p className="a">  Undergrad College:</p>
           
            <input type="text" value={underGradClg} onChange={(e) => setunderGragClg(e.target.value)} className="input" />
        </label>
        <label className="label">
        <p className="a"> Undergrad CGPA:</p>
            
            <input type="number" step="0.01" value={undergradCGPA} onChange={(e) => setUndergradCGPA(e.target.value)} className="input" />
        </label>
        <label className="headings"><h2>Course Details</h2></label>
        <label className="label">
        <p className="a"> University/College Name:</p>
            
            <input type="text" value={universityName} onChange={(e) => setUniversityName(e.target.value)} className="input"/>
        </label>
        <label className="label">
        <p className="a"> Course Name:</p>
            
            <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} className="input"/>
        </label>
        <label className="label">
        <p className="a"> Duration of Course:</p>
            
            <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} className="input"/>
        </label>
        <label className="label">
        <p className="a"> Start date:</p>
            
            <input type="date" value={commence} onChange={(e) => setCommence(e.target.value)} className="input"/>
        </label>
        <label className="label">
        <p className="a"> Completion date:</p>
            
            <input type="date" value={end} onChange={(e) => setEnd(e.target.value)} className="input"/>
        </label>
        <label className="headings"><h2>Upload Documents</h2></label>
       
            <label className="label">
            <p className="a"> Upload Photo:</p>
                
                <input type="file" onChange={(e) => handleFileChange(e, setPhoto)} className="input" />
            </label>
             <label className="label">
             <p className="a">Upload Memos:</p>
                
                <input type="file" multiple onChange={(e) => handleFileChange(e, setMemos)} className="input" />
            </label>
            <label className='label'>
            <p className="a"> Salary Proof:</p>
                
                <input type="file" onChange={(e)=>handleFileChange(e,setSalary)} className="input"/>
            </label>
            <label className="label">
            <p className="a"> Digital Signature:</p>
                
                <input type="file" onChange={(e) => handleFileChange(e, setDigitalSignature)} className="input" />
            </label>
            <label className="label1">
                <input type="checkbox" checked={isDataCorrect} onChange={(e) => setIsDataCorrect(e.target.checked)} className="input1" />
                I hereby declare that the above particulars and information availed above are true to the best of my knowledge 

            </label>
            
            <input type="submit" value="Submit" className="input" /> 
        </form>
    );
};

export default ApplicationForm;
