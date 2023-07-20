import React from "react";
import { useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import "./Styling.css";
import axios from 'axios';

function Applicationform() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  

  const onSubmit=async (data)=> {
    await axios.post("http://localhost:8017/loanform", data);
    console.log(data);
    console.log(register);
    console.log(data.dob);
}
    

  return (
    <div className="card">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="mt-3 ">LOAN APPLICATION FORM</h2>
            <div className="application-form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Personal Information</h3>

                <div className="col-md-4">
                  <label className="form-label">
                    FirstName<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("name", {
                      required: "Firstname is Required",
                    })}
                  />

                  {errors.name && (
                    <span className="text-danger">{errors.name.message}</span>
                  )}
                </div>

                <div className="col-md-4">
                  <label className="form-label">MiddleName</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col-md-4">
                  <label className="form-label">
                    LastName<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("lastname", {
                      required: "Lastname is Requitred",
                    })}
                  />
                  {errors.lastname && (
                    <span className="text-danger">
                      {errors.lastname.message}
                    </span>
                  )}
                </div>

                <div className="col-md-4">
                  <label className="form-label">
                    Date of Birth<span className="text-danger">*</span>
                  </label>

                  <input
  type="date"
  className="form-control"
  {...register("dob", {
    required: "Date of Birth is required",
    validate: (value) => {
      const selectedDate = new Date(value);
      const currentDate = new Date();
      const age = Math.floor(
        (currentDate - selectedDate) / (365.25 * 24 * 60 * 60 * 1000)
      );
      return age >= 18 ? undefined : "Minimum age required is 18";
    },
  })}
/>


                  {errors.dob && (
                    <span className="text-danger">{errors.dob.message}</span>
                  )}
                </div>

                <div className="col-md-4">
                  <label className="form-label">
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
                        value: /^[\d])*$/,
                        message: "Only numbers are allowed",
                      },
                    })}
                  />
                  {errors.age && (
                    <span className="text-danger">{errors.age.message}</span>
                  )}
                </div>

                <div className="col-md-4">
                  <label className="form-label">
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
                    <span className="text-danger">{errors.gender.message}</span>
                  )}
                </div>

                <div className="col-md-4">
                  <label className="form-label">
                    Father Name<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("fathername", {
                      required: "Father Name is Requitred",
                    })}
                  />
                  {errors.fathername && (
                    <span className="text-danger">
                      {errors.fathername.message}
                    </span>
                  )}
                </div>

                <div className="col-md-4">
                  <label className="form-label">
                    Father's Occupation<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("fatherOccupation", {
                      required: "Father's Occupation is required",
                    })}
                  />
                  {errors.fatherOccupation && (
                    <span className="text-danger">
                      {errors.fatherOccupation.message}
                    </span>
                  )}
                </div>

                <div className="col-md-4">
                  <label className="form-label">
                    Income (in Rupees)
                    <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("income", {
                      required: "Income is required",
                      pattern: {
                        value: /^\d+$/,
                        message: "Invalid income",
                      },
                    })}
                  />
                  {errors.income && (
                    <span className="text-danger">{errors.income.message}</span>
                  )}
                </div>

                <div className="col-md-4">
                  <label className="form-label">
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

                <div className="col-md-4">
                  <label className="form-label">
                    Email<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("email", {
                      required: "Email is Required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email ",
                      },
                    })}
                  />
                  {errors.email && (
                    <span className="text-danger">{errors.email.message}</span>
                  )}
                </div>

                <div className="col-md-4">
                  <label className="form-label">
                    ContactNumber<span className="text-danger">*</span>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    {...register("contactnumber", {
                      required: "Required Contact Number",
                      pattern: {
                        value:
                        /^\s*(?:+?(\d{1,3}))?[-.\s](\d{3})[-.\s](\d{3})[-.\s](\d{4})(?:\sx(\d+))?\s*$/,
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

                <div className="col-md-4">
                  <label className="form-label">
                    Aadhar Number
                    <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("aadhar", {
                      required: "Aadhar number is required",
                      pattern: {
                        value: /^\d{12}$/,
                        message: "Invalid Aadhar number",
                      },
                    })}
                  />
                  {errors.aadhar && (
                    <span className="text-danger">{errors.aadhar.message}</span>
                  )}
                </div>

                <div className="col-md-4">
                  <label className="form-label">
                    PAN Number
                    <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("pan", {
                      required: "PAN number is required",
                      pattern: {
                        value: /^([A-Z]){5}([\d])){4}([A-Z])?$/,
                        message: "Invalid PAN number",
                      },
                    })}
                  />
                  {errors.pan && (
                    <span className="text-danger">{errors.pan.message}</span>
                  )}
                </div>

                <div className="col-md-4">
                  <label className="form-label">
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
                      {errors.address1.message}</span>
                    
                  )}
                </div>

                <div className="col-md-4">
                  <label className="form-label">Address 2</label>
                  <textarea name="address2" className="form-control" />
                </div>

                <div className="col-md-4">
                  <label className="form-label">
                    Marital Status<span className="text-danger">*</span>
                  </label>
                  <select
                    name="maritalstatus"
                    {...register("maritalstatus", {
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

                <div className="col-md-4">
                  <label className="form-label">
                    State<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("state", { required: "State is required" })}
                    className="form-control"
                  />
                  {errors.state && (
                    <span className="text-danger">{errors.state.message}</span>
                  )}
                </div>

                <div className="col-md-4">
                  <label className="form-label">
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

                <div className="col-md-6">
                  <label className="form-label">
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

                <h3>Bank Details</h3>

                <div className="col-md-4">
                  <label className="form-label">
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

                <div className="col-md-4">
                  <label className="form-label">
                    Bank Branch<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("bankBranch", {
                      required: "Bank Branch is required",
                    })}
                  />
                  {errors.bankBranch && (
                    <span className="text-danger">
                      {errors.bankBranch.message}
                    </span>
                  )}
                </div>

                <div className="col-md-4">
                  <label className="form-label">
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

                <div className="col-md-4">
                  <label className="form-label">
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

                <div className="col-md-4">
                  <label className="form-label">
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

                <div className="col-md-4">
                  <label className="form-label">
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

                <div className="button-container">
                  <button className="custom-button" type="Submit">
                    Next
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Applicationform;
