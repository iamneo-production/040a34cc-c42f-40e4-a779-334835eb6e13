import React, { useState } from "react";
import "./ApplicationForm2.css";
import { useNavigate, useParams } from "react-router-dom";
import { fileRequest, request } from "../../auth/Axios";

const ApplicationUpload = () => {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [file4, setFile4] = useState(null);
  const [file5, setFile5] = useState(null);
  const [file6, setFile6] = useState(null);
  const [file7, setFile7] = useState(null);
  const [file8, setFile8] = useState(null);
  const [file9, setFile9] = useState(null);
  const [file10, setFile10] = useState(null);
  const [file11, setFile11] = useState(null);
  const [isDataCorrect, setIsDataCorrect] = useState(false);
  const [loanDetails,setLoanDetails]=useState(null);

  var { userId, loanApplicationId, loanId } = useParams();

  const ui = parseInt(userId);
  const i = parseInt(loanApplicationId);
  const loanId2=parseInt(loanId);
  const navigate=useNavigate();

  const handleSubmit = async(event) => {
    event.preventDefault();

    const form = new FormData();

    if (
      file1 &&
      file4 &&
      file6 &&
      file7 &&
      file8 &&
      file9 &&
      file10 &&
      file11
    ) {
      console.log({
        file1,
        file2,
        file3,
        file4,
        file5,
        file6,
        file7,
        file8,
        file9,
        file10,
        file11,
      });
      form.append("file1", file1);
      form.append("file4", file4);
      form.append("file6", file6);
      form.append("file7", file7);
      form.append("file8", file8);
      form.append("file9", file9);
      form.append("file10", file10);
      form.append("file11", file11);

      // Append file2, file3, and file5 only if they are not null
      if (file2) {
        form.append("file2", file2);
      }
      if (file3) {
        form.append("file3", file3);
      }
      if (file5) {
        form.append("file5", file5);
      }

      alert("Form submitted successfully");
    } else {
      alert("Please fill all the details");
    }
    console.log(form);

    try {
        const response = await fileRequest('post', `/image/upload/${ui}/${i}`, form);
        console.log("Success:", response.data);
      } catch (error) {
        console.log(error); 
      }
      const sendUserLoan=async()=>{
      const userLoan={
        userId:window.id,
        loanId:loanId2,
        loanAmount:window.loanAmount,
        loanTenure:window.loanTenure,
        educationPeriod:window.educationPeriod,
        loanStatus:"Pending"
      };
      console.log(userLoan);
      try {
        const response = await request('post', '/loans', userLoan);
        console.log("Success:", response.data);
        navigate("/user/dashboard");
      } catch (error) {
        console.log(error); 
      }
    }
    sendUserLoan();
  };

  const handleFileChange = (e, setFileState) => {
    setFileState(e.target.files[0]);
  };

  return (
    <div className="user-container">
      <div className="user-dashboard-container">
    <form onSubmit={handleSubmit} className="form">
      <label className="headings">
        <h2>Upload Documents</h2>
      </label>

      <label className="label">
        <p className="a">10th Memo:</p>
        <input
          type="file"
          onChange={(e) => handleFileChange(e, setFile1)}
          className="input"
        />
      </label>

      <label className="label">
        <p className="a">12th Memo:</p>
        <input
          type="file"
          onChange={(e) => handleFileChange(e, setFile2)}
          className="input"
        />
      </label>

      <label className="label">
        <p className="a">UnderGrad Memos:</p>
        <input
          type="file"
          multiple
          onChange={(e) => handleFileChange(e, setFile3)}
          className="input"
        />
      </label>

      <label className="label">
        <p className="a"> Admission Card:</p>
        <input
          type="file"
          onChange={(e) => handleFileChange(e, setFile4)}
          className="input"
        />
      </label>

      <label className="label">
        <p className="a"> Land Records:</p>
        <input
          type="file"
          onChange={(e) => handleFileChange(e, setFile5)}
          className="input"
        />
      </label>

      <label className="label">
        <p className="a"> Upload Photo:</p>
        <input
          type="file"
          onChange={(e) => handleFileChange(e, setFile6)}
          className="input"
        />
      </label>

      <label className="label">
        <p className="a"> Fee Structure:</p>
        <input
          type="file"
          onChange={(e) => handleFileChange(e, setFile7)}
          className="input"
        />
      </label>

      <label className="label">
        <p className="a"> Aadhar Card:</p>
        <input
          type="file"
          onChange={(e) => handleFileChange(e, setFile8)}
          className="input"
        />
      </label>

      <label className="label">
        <p className="a"> Pan Card:</p>
        <input
          type="file"
          onChange={(e) => handleFileChange(e, setFile9)}
          className="input"
        />
      </label>

      <label className="label">
        <p className="a"> Salary Proof:</p>
        <input
          type="file"
          onChange={(e) => handleFileChange(e, setFile10)}
          className="input"
        />
      </label>

      <label className="label">
        <p className="a"> Digital Signature:</p>

        <input
          type="file"
          onChange={(e) => handleFileChange(e, setFile11)}
          className="input"
        />
      </label>
      <label className="label1">
        <input
          type="checkbox"
          checked={isDataCorrect}
          onChange={(e) => setIsDataCorrect(e.target.checked)}
          className="input1"
        />
        I hereby declare that the above particulars and information availed
        above are true to the best of my knowledge
      </label>

      <input type="submit" value="Submit" className="input" />
    </form>
    </div>
    </div>
  );
};

export default ApplicationUpload;
