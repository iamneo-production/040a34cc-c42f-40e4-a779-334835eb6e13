import React, { useState } from "react";
import "./ApplicationForm2.css";
import { useNavigate, useParams } from "react-router-dom";
import { request } from "../../auth/Axios";

const ApplicationFormContinue = () => {
  const [tenthSchoolName, setTenthSchoolName] = useState("");
  const [tenthPercentage, setTenthPercentage] = useState("");
  const [twelvethSchoolName, setTwelvethSchoolName] = useState("");
  const [twelvethPercentage, setTwelvethPercentage] = useState("");
  const [underGradCollege, setUnderGradCollege] = useState("");
  const [underGradCgpa, setUnderGradCgpa] = useState("");
  const [currentInstitutionName, setCurrentInstitutionName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseDuration, setCourseDuration] = useState("");
  const [dateOfCommencement, setDateOfCommencement] = useState("");
  const [dateOfCompletion, setDateOfCompletion] = useState("");
  const [loanType, setLoanType] = useState("");
  const [year1, setYear1] = useState("");
  const [year2, setYear2] = useState("");
  const [year3, setYear3] = useState("");
  const [year4, setYear4] = useState("");
  const [totalLoanAmount, setTotalLoanAmount] = useState("");
  const [purpose, setPurpose] = useState("");
  // const [date,setDate]=useState("");
  const [tenure, setTenure] = useState("");

  const navigate = useNavigate();

  var { userId, loanApplicationId, loanId } = useParams();

  var form2;

  const ui = parseInt(userId);
  const i = parseInt(loanApplicationId);
  const loanId2=parseInt(loanId);

  const handleSubmit = async(event) => {
    event.preventDefault();

    const formattedStartDate = new Date(dateOfCommencement).toLocaleDateString(
      "en-GB"
    );
    const formattedEndDate = new Date(dateOfCompletion).toLocaleDateString(
      "en-GB"
    );

    if (
      tenthSchoolName &&
      tenthPercentage &&
      twelvethSchoolName &&
      twelvethPercentage &&
      underGradCollege &&
      underGradCgpa &&
      currentInstitutionName &&
      courseName &&
      courseDuration &&
      dateOfCommencement &&
      dateOfCompletion &&
      loanType &&
      year1 &&
      year2 &&
      year3 &&
      year4 &&
      totalLoanAmount &&
      purpose &&
      tenure
    ) {
      console.log({
        tenthSchoolName,
        tenthPercentage,
        twelvethSchoolName,
        twelvethPercentage,
        underGradCollege,
        underGradCgpa,
        currentInstitutionName,
        courseName,
        courseDuration,
        dateOfCommencement,
        dateOfCompletion,
        loanType,
        year1,
        year2,
        year3,
        year4,
        totalLoanAmount,
        purpose,
        tenure,
      });

      form2 = {
        tenthSchoolName,
        tenthPercentage,
        twelvethSchoolName,
        twelvethPercentage,
        underGradCollege,
        underGradCgpa,
        currentInstitutionName,
        courseName,
        courseDuration,
        dateOfCommencement: formattedStartDate,
        dateOfCompletion: formattedEndDate,
        loanType,
        year1,
        year2,
        year3,
        year4,
        totalLoanAmount,
        purpose,
        tenure,
      };
    } else {
      alert("Please fill all the details");
    }
    window.loanAmount=totalLoanAmount;
    window.loanTenure=tenure;
    window.educationPeriod=courseDuration;

    try {
      const response = await request('post', `/loan-applications2/${ui}/${i}`, form2);
      const { userId } = response.data; // Extract id and userId from the response data
        const { id } = response.data.id2;
        const userId1 = parseInt(userId); // Convert userId to a number
        const navigateEndpoint = `/user/image/upload/${userId1}/${i}/${loanId2}`;
        navigate(navigateEndpoint);
    } catch (error) {
      console.log(error); 
    }
  };

  return (
    <div className="user-container">
      <div className="user-dashboard-container">
        <form onSubmit={handleSubmit} className="form">
        <label className="headings">
          <h2>Previous Education</h2>
        </label>

      <label className="label">
        <p className="a"> 10th School Name:</p>
        <input
          type="text"
          value={tenthSchoolName}
          onChange={(e) => setTenthSchoolName(e.target.value)}
          className="input"
        />
      </label>

      <label className="label">
        <p className="a"> 10th Score:</p>

        <input
          type="number"
          value={tenthPercentage}
          onChange={(e) => setTenthPercentage(e.target.value)}
          className="input"
        />
      </label>
      <label className="label">
        <p className="a"> 12th School Name:</p>

        <input
          type="text"
          value={twelvethSchoolName}
          onChange={(e) => setTwelvethSchoolName(e.target.value)}
          className="input"
        />
      </label>
      <label className="label">
        <p className="a">12th Percentage:</p>
        <input
          type="number"
          value={twelvethPercentage}
          onChange={(e) => setTwelvethPercentage(e.target.value)}
          className="input"
        />
      </label>
      <label className="label">
        <p className="a"> Undergrad College:</p>

        <input
          type="text"
          value={underGradCollege}
          onChange={(e) => setUnderGradCollege(e.target.value)}
          className="input"
        />
      </label>
      <label className="label">
        <p className="a"> Undergrad CGPA:</p>
        <input
          type="number"
          step="0.01"
          value={underGradCgpa}
          onChange={(e) => setUnderGradCgpa(e.target.value)}
          className="input"
        />
      </label>
      <label className="headings">
        <h2>course Details</h2>
      </label>
      <label className="label">
        <p className="a"> University/College Name:</p>

        <input
          type="text"
          value={currentInstitutionName}
          onChange={(e) => setCurrentInstitutionName(e.target.value)}
          className="input"
        />
      </label>
      <label className="label">
        <p className="a"> course Name:</p>

        <input
          type="text"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          className="input"
        />
      </label>
      <label className="label">
        <p className="a"> Duration of course:</p>

        <input
          type="number"
          value={courseDuration}
          onChange={(e) => setCourseDuration(e.target.value)}
          className="input"
        />
      </label>
      <label className="label">
        <p className="a"> Start date:</p>

        <input
          type="date"
          value={dateOfCommencement}
          onChange={(e) => setDateOfCommencement(e.target.value)}
          className="input"
        />
      </label>

      <label className="label">
        <p className="a"> Completion date:</p>

        <input
          type="date"
          value={dateOfCompletion}
          onChange={(e) => setDateOfCompletion(e.target.value)}
          className="input"
        />
      </label>

      <label className="headings">
        <h2>Loan Details</h2>
      </label>
      <label className="label">
        <p className="a"> Loan Type:</p>
        <input
          type="type"
          value={loanType}
          onChange={(e) => setLoanType(e.target.value)}
          className="input"
        />
      </label>

      <label className="label">
        <p className="a"> First Year:</p>
        <input
          type="number"
          value={year1}
          onChange={(e) => setYear1(e.target.value)}
          className="input"
        />
      </label>

      <label className="label">
        <p className="a"> Second Year:</p>
        <input
          type="number"
          value={year2}
          onChange={(e) => setYear2(e.target.value)}
          className="input"
        />
      </label>

      <label className="label">
        <p className="a"> Third Year:</p>
        <input
          type="number"
          value={year3}
          onChange={(e) => setYear3(e.target.value)}
          className="input"
        />
      </label>

      <label className="label">
        <p className="a"> Fourth Year:</p>
        <input
          type="number"
          value={year4}
          onChange={(e) => setYear4(e.target.value)}
          className="input"
        />
      </label>

      <label className="label">
        <p className="a"> Loan Amount:</p>
        <input
          type="number"
          value={totalLoanAmount}
          onChange={(e) => setTotalLoanAmount(e.target.value)}
          className="input"
        />
      </label>

      <label className="label">
        <p className="a"> Purpose:</p>
        <input
          type="text"
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
          className="input"
        />
      </label>

      {/* <label className="label">
        <p className="a"> Application Date:</p>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="input"/>
        </label> */}

      <label className="label">
        <p className="a"> Loan Term:</p>
        <input
          type="number"
          value={tenure}
          onChange={(e) => setTenure(e.target.value)}
          className="input"
        />
      </label>

      <input type="submit" value="Next" className="inputSubmit" />
    </form>
    </div>
  </div>
  );
};

export default ApplicationFormContinue;
