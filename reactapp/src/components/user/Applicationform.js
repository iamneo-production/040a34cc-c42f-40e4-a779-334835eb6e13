import React from "react";
import DatePicker from "react-datepicker";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import "./Styling.css";

function Applicationform() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [selectedDate, setSelectedDate] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
  };
  const handleDateOfBirthChange = (date) => {
    setDateOfBirth(date);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="card">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4 className="mt-3 ">LOAN APPLICATION FORM</h4>
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
                      {...register("name", {
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
                    <label className="form-lable">
                      MiddleName<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("middlename", {
                        required: "MiddleName is Requitred",
                      })}
                    />
                    {errors.middlename && (
                      <small className="text-danger">
                        {errors.middlename.message}
                      </small>
                    )}
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
                      {...register("lastname", {
                        required: "Lastname is Requitred",
                      })}
                    />
                    {errors.lastname && (
                      <small className="text-danger">
                        {errors.lastname.message}
                      </small>
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
                      {...register("fathername", {
                        required: "Father Name is Requitred",
                      })}
                    />
                    {errors.fathername && (
                      <small className="text-danger">
                        {errors.fathername.message}
                      </small>
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
                      {...register("income", {
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
                      {...register("email", {
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
                      {...register("contactnumber", {
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
                      {...register("aadhar", {
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
                      {...register("pan", {
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
                    <label className="form-lable">
                      Date of Birth<span className="text-danger">*</span>
                    </label>
                    <br />
                    <DatePicker
                      selected={dateOfBirth}
                      onChange={handleDateOfBirthChange}
                      dateFormat="dd/MM/yyyy"
                      className="form-control"
                    >
                      <input
                        type="text"
                        className="form-control"
                        {...register("dob", {
                          required: "Date of Birth is required",
                        })}
                      />
                    </DatePicker>
                    {errors.dob && (
                      <span className="text-danger">{errors.dob.message}</span>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-3">
                    <label className="form-lable">Address 2</label>
                    <textarea name="address2" className="form-control" />
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
                      <option value="Married">Male</option>
                      <option value="Unmarried">Female</option>
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
                <div className="col-md-6">
                  <div className="md-3">
                    <label className="form-lable">
                      Loan Amount <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("amount", {
                        required: "Amount is Required",
                      })}
                    />
                    {errors.amount && (
                      <span className="text-danger">
                        {errors.amount.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-3">
                    <label className="form-lable">
                      Interest Amount (%)<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("amount", {
                        required: "Amount is required",
                      })}
                      className="form-control"
                    />
                    {errors.amount && (
                      <span className="text-danger">
                        {errors.amount.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-3">
                    <label className="form-lable">
                      Loan Type<span className="text-danger">*</span>
                    </label>
                    <select
                      name="loanType"
                      {...register("loanType", {
                        required: "Loan Type is required",
                      })}
                      className="form-control"
                    >
                      <option value="">--Please Select--</option>
                      <option value="Personal Loan">Semester Fee</option>
                      <option value="Home Loan">Annual Fee</option>
                    </select>
                    {errors.loanType && (
                      <span className="text-danger">
                        {errors.loanType.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-3">
                    <label className="form-lable">
                      Loan Repayment Frequency
                      <span className="text-danger">*</span>
                    </label>
                    <select
                      name="repaymentFrequency"
                      {...register("repaymentFrequency", {
                        required: "Repayment Frequency is required",
                      })}
                      className="form-control"
                    >
                      <option value="">--Please Select--</option>
                      <option value="Monthly">Monthly</option>
                    </select>
                    {errors.repaymentFrequency && (
                      <span className="text-danger">
                        {errors.repaymentFrequency.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-3">
                    <label className="form-lable">
                      Tenure in Years<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("termsInYears", {
                        required: "Tenure in Years is required",
                        
                      })}
                    />
                    {errors.termsInYears && (
                      <span className="text-danger">
                        {errors.termsInYears.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-3">
                    <label className="form-lable">
                      Date of Application<span className="text-danger">*</span>
                    </label>
                    <br />
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleDateChange}
                      dateFormat="dd/MM/yyyy"
                      className="form-control"
                    >
                      <input
                        type="text"
                        className="form-control"
                        {...register("doa", {
                          required: "Date of Application is required",
                        })}
                      />
                    </DatePicker>
                    {errors.doa && (
                      <span className="text-danger">{errors.doa.message}</span>
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
                      Date of Application<span className="text-danger">*</span>
                    </label>
                    <br />
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleDateChange}
                      dateFormat="dd/MM/yyyy"
                      className="form-control"
                    >
                      <input
                        type="text"
                        className="form-control"
                        {...register("doa", {
                          required: "Date of Application is required",
                        })}
                      />
                    </DatePicker>
                    {errors.doa && (
                      <span className="text-danger">{errors.doa.message}</span>
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
