import React from "react";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import "./Styling.css";
import { useNavigate } from "react-router-dom";
import { request } from "../../auth/Axios";

function Applicationform() {
  const currentPath=window.location.pathname;
  const loanId=currentPath.substr(currentPath.lastIndexOf('/')+1);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [dateOfBirth, setDateOfBirth] = useState(null);

  const onSubmit = async(datas) => {
    console.log(datas);
    const formattedDateOfBirth = format(dateOfBirth, "dd/MM/yyyy"); // Format the dateOfBirth value
    datas.dateOfBirth = formattedDateOfBirth; // Update the dateOfBirth value in the datas object
    console.log(datas);
    try {
      const response = await request('post', `/loan-applications/${window.id}`, datas);
      const { userId, id } = response.data; // Extract id and userId from the response data
      const navigateEndpoint = `/user/loan-applications2/${userId}/${id}/${loanId}`;
      navigate(navigateEndpoint);
    } catch (error) {
      console.log(error); 
    }
  };

  const handleDateOfBirthChange = (date) => {
    setDateOfBirth(date);
  };

  return (
    <div className="card form-container">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4 style={{textAlign:'center'}} className="mt-3 ">LOAN APPLICATION FORM</h4><br/>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h3>Personal Information</h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="md-3">
                    <label className="form-lable">
                      FirstName<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("firstName", {
                        required: "Firstname is Required",
                      })}
                    />

                    {errors.name && (
                      <span className="text-danger">{errors.name.message}</span>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-3">
                    <label className="form-lable">MiddleName</label>
                    <input
                      type="text"
                      {...register("middleName")}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-3">
                    <label className="form-lable">
                      LastName<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("lastName", {
                        required: "Lastname is Requitred",
                      })}
                    />
                    {errors.lastname && (
                      <span className="text-danger">
                        {errors.lastname.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-3">
                    <label className="form-lable">
                      Date of Birth<span className="text-danger">*</span>
                    </label>
                    <DatePicker
                      selected={dateOfBirth}
                      onChange={handleDateOfBirthChange}
                      dateFormat="dd/MM/yyyy"
                      className="form-control"
                    >
                      <input
                        type="text"
                        className="form-control"
                        {...register("dateOfBirth")}
                      />
                    </DatePicker>
                    {errors.dateOfBirth && (
                      <span className="text-danger">
                        {errors.dateOfBirth.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-3">
                    <label className="form-lable">
                      Age<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("age", {
                        required: "Age is Required",
                        min: {
                          value: 18,
                          message: "Minimum Required age is 18",
                        },
                        max: {
                          value: 35,
                          message: "Maximum Required age is 18",
                        },
                        pattern: {
                          value: /^[0-9]*$/,
                          message: "Only numbers are allowed",
                        },
                      })}
                    />
                    {errors.age && (
                      <span className="text-danger">{errors.age.message}</span>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-3">
                    <label className="form-lable">
                      Gender<span className="text-danger">*</span>
                    </label>
                    <select
                      name="gender"
                      {...register("gender", {
                        required: "Gender is required",
                      })}
                      className="form-control"
                    >
                      <option value="">--Please Select--</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.gender && (
                      <span className="text-danger">
                        {errors.gender.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-3">
                    <label className="form-lable">
                      Father Name<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("fathersName", {
                        required: "Father Name is Requitred",
                      })}
                    />
                    {errors.fathername && (
                      <span className="text-danger">
                        {errors.fathername.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-3">
                    <label className="form-lable">
                      Father's Occupation<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("fathersOccupation", {
                        required: "Father's Occupation is required",
                      })}
                    />
                    {errors.fatherOccupation && (
                      <span className="text-danger">
                        {errors.fatherOccupation.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-3">
                    <label className="form-lable">
                      Income (in Rupees)
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("familyIncome", {
                        required: "Income is required",
                        pattern: {
                          value: /^\d+$/,
                          message: "Invalid income",
                        },
                      })}
                    />
                    {errors.income && (
                      <span className="text-danger">
                        {errors.income.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-3">
                    <label className="form-lable">
                      Category<span className="text-danger">*</span>
                    </label>
                    <select
                      name="category"
                      {...register("category", {
                        required: "Category is required",
                      })}
                      className="form-control"
                    >
                      <option value="">--Please Select--</option>
                      <option value="General">General</option>
                      <option value="OBC">OBC</option>
                      <option value="SC">SC</option>
                      <option value="ST">ST</option>
                    </select>
                    {errors.category && (
                      <span className="text-danger">
                        {errors.category.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-3">
                    <label className="form-lable">
                      Email<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("emailId", {
                        required: "Email is Required",
                        //pattern: /^[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email ",
                        },
                      })}
                    />
                    {errors.email && (
                      <span className="text-danger">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-3">
                    <label className="form-lable">
                      ContactNumber<span className="text-danger">*</span>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      {...register("contactNo", {
                        required: "Required Contact Number",
                        pattern: {
                          value:
                            /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                          message: "Invalid phone no",
                        },
                      })}
                    />
                    {errors.contactnumber && (
                      <span className="text-danger">
                        {errors.contactnumber.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-3">
                    <label className="form-lable">
                      Aadhar Number
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("aadharNo", {
                        required: "Aadhar number is required",
                        pattern: {
                          value: /^\d{12}$/,
                          message: "Invalid Aadhar number",
                        },
                      })}
                    />
                    {errors.aadhar && (
                      <span className="text-danger">
                        {errors.aadhar.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-3">
                    <label className="form-lable">
                      PAN Number
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("panNo", {
                        required: "PAN number is required",
                        pattern: {
                          value: /^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/,
                          message: "Invalid PAN number",
                        },
                      })}
                    />
                    {errors.pan && (
                      <span className="text-danger">{errors.pan.message}</span>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-3">
                    <label className="form-lable">
                      Address 1<span className="text-danger">*</span>
                    </label>
                    <textarea
                      {...register("address1", {
                        required: "Address1 is required",
                      })}
                      className="form-control"
                    />
                    {errors.address1 && (
                      <span className="text-danger">
                        {errors.address1.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-3">
                    <label className="form-lable">Address 2</label>
                    <textarea
                      name="address2"
                      {...register("address2")}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-3">
                    <label className="form-lable">
                      Marital Status<span className="text-danger">*</span>
                    </label>
                    <select
                      name="maritalstatus"
                      {...register("maritalStatus", {
                        required: "Marital Status is required",
                      })}
                      className="form-control"
                    >
                      <option value="">--Please Select--</option>
                      <option value="Married">Married</option>
                      <option value="Unmarried">Unmarried</option>
                    </select>
                    {errors.maritalstatus && (
                      <span className="text-danger">
                        {errors.maritalstatus.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-3">
                    <label className="form-lable">
                      State<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("state", { required: "State is required" })}
                      className="form-control"
                    />
                    {errors.state && (
                      <span className="text-danger">
                        {errors.state.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-3">
                    <label className="form-lable">
                      Country<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("country", {
                        required: "Country is required",
                      })}
                      className="form-control"
                    />
                    {errors.country && (
                      <span className="text-danger">
                        {errors.country.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-3">
                    <label className="form-lable">
                      Pincode<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("pincode", {
                        required: "Pincode is Required",
                        pattern: {
                          value: /^\d{6}$/,
                          message: "Invalid pincode",
                        },
                      })}
                      className="form-control"
                    />
                    {errors.pincode && (
                      <span className="text-danger">
                        {errors.pincode.message}
                      </span>
                    )}
                  </div>
                </div>

                <h3>Bank Details</h3>

                <div className="col-md-6">
                  <div className="md-3">
                    <label className="form-lable">
                      Bank Name<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("bankName", {
                        required: "Bank Name is required",
                      })}
                    />
                    {errors.bankName && (
                      <span className="text-danger">
                        {errors.bankName.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-3">
                    <label className="form-lable">
                      Bank Branch<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("branchName", {
                        required: "Bank Branch is required",
                      })}
                    />
                    {errors.bankBranch && (
                      <span className="text-danger">
                        {errors.bankBranch.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-3">
                    <label className="form-lable">
                      IFSC Code<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("ifscCode", {
                        required: "IFSC Code is required",
                      })}
                    />
                    {errors.ifscCode && (
                      <span className="text-danger">
                        {errors.ifscCode.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-3">
                    <label className="form-lable">
                      Account Holder Name<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("accountHolderName", {
                        required: "Account Holder Name is required",
                      })}
                    />
                    {errors.accountHolderName && (
                      <span className="text-danger">
                        {errors.accountHolderName.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-3">
                    <label className="form-lable">
                      Account Type<span className="text-danger">*</span>
                    </label>
                    <select
                      name="accountType"
                      {...register("accountType", {
                        required: "Account Type is required",
                      })}
                      className="form-control"
                    >
                      <option value="">--Please Select--</option>
                      <option value="Savings">Savings</option>
                      <option value="Current">Current</option>
                    </select>
                    {errors.accountType && (
                      <span className="text-danger">
                        {errors.accountType.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-3">
                    <label className="form-lable">
                      Account Number<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("accountNumber", {
                        required: "Account Number is required",
                      })}
                    />
                    {errors.accountNumber && (
                      <span className="text-danger">
                        {errors.accountNumber.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className=" mt-3 mb-4">
                  <label className="form-lable"></label>

                  <button className="btn btn-success " type="Submit">
                    Next
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Applicationform;
