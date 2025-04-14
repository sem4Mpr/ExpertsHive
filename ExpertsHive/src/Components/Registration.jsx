"use client"

import { useState } from "react"

function Registration() {
  const [activeStep, setActiveStep] = useState(0)
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",

    // Service Details
    serviceCategory: "",
    serviceSubcategory: "",
    serviceDescription: "",
    servicePrice: "",
    serviceUnit: "",

    // Experience
    yearsOfExperience: "",
    qualifications: "",
    certifications: "",
    previousWorkplace: "",

    // Availability
    availableDays: [],
    startTime: "",
    endTime: "",
    serviceRadius: "",

    // Payment Info
    accountHolderName: "",
    accountNumber: "",
    ifscCode: "",
    bankName: "",
    panNumber: "",
  })

  const [errors, setErrors] = useState({})

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  // Handle checkbox changes for available days
  const handleDayChange = (day) => {
    const currentDays = [...formData.availableDays]
    if (currentDays.includes(day)) {
      setFormData({
        ...formData,
        availableDays: currentDays.filter((d) => d !== day),
      })
    } else {
      setFormData({
        ...formData,
        availableDays: [...currentDays, day],
      })
    }
  }

  // Validate current step
  const validateStep = () => {
    const newErrors = {}

    switch (activeStep) {
      case 0: // Personal Info
        if (!formData.firstName) newErrors.firstName = "First name is required"
        if (!formData.lastName) newErrors.lastName = "Last name is required"
        if (!formData.email) newErrors.email = "Email is required"
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
        if (!formData.phone) newErrors.phone = "Phone number is required"
        if (!formData.address) newErrors.address = "Address is required"
        if (!formData.city) newErrors.city = "City is required"
        if (!formData.state) newErrors.state = "State is required"
        if (!formData.pincode) newErrors.pincode = "Pincode is required"
        break

      case 1: // Service Details
        if (!formData.serviceCategory) newErrors.serviceCategory = "Service category is required"
        if (!formData.serviceSubcategory) newErrors.serviceSubcategory = "Service subcategory is required"
        if (!formData.serviceDescription) newErrors.serviceDescription = "Service description is required"
        if (!formData.servicePrice) newErrors.servicePrice = "Service price is required"
        if (!formData.serviceUnit) newErrors.serviceUnit = "Service unit is required"
        break

      case 2: // Experience
        if (!formData.yearsOfExperience) newErrors.yearsOfExperience = "Years of experience is required"
        if (!formData.qualifications) newErrors.qualifications = "Qualifications are required"
        break

      case 3: // Availability
        if (formData.availableDays.length === 0) newErrors.availableDays = "At least one day must be selected"
        if (!formData.startTime) newErrors.startTime = "Start time is required"
        if (!formData.endTime) newErrors.endTime = "End time is required"
        if (!formData.serviceRadius) newErrors.serviceRadius = "Service radius is required"
        break

      case 4: // Payment Info
        if (!formData.accountHolderName) newErrors.accountHolderName = "Account holder name is required"
        if (!formData.accountNumber) newErrors.accountNumber = "Account number is required"
        if (!formData.ifscCode) newErrors.ifscCode = "IFSC code is required"
        if (!formData.bankName) newErrors.bankName = "Bank name is required"
        if (!formData.panNumber) newErrors.panNumber = "PAN number is required"
        break

      default:
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle next step
  const nextStep = () => {
    if (validateStep()) {
      setActiveStep(activeStep + 1)
    }
  }

  // Handle previous step
  const prevStep = () => {
    setActiveStep(activeStep - 1)
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateStep()) {
      console.log("Form submitted:", formData)
      alert("Form submitted successfully!")
      // Here you would typically send the data to your backend
    }
  }

  // Service categories and subcategories data
  const serviceCategories = [
    { id: "beauty", name: "Beauty & Spa" },
    { id: "cleaning", name: "Cleaning & Household" },
    { id: "repair", name: "Repair & Maintenance" },
    { id: "health", name: "Health & Wellness" },
    { id: "events", name: "Events & Occasions" },
  ]

  const subcategories = {
    beauty: [
      { id: "haircut", name: "Haircut & Styling" },
      { id: "makeup", name: "Makeup & Cosmetics" },
      { id: "spa", name: "Spa & Massage" },
      { id: "nails", name: "Nail Care" },
    ],
    cleaning: [
      { id: "home", name: "Home Cleaning" },
      { id: "carpet", name: "Carpet Cleaning" },
      { id: "pest", name: "Pest Control" },
      { id: "laundry", name: "Laundry Services" },
    ],
    repair: [
      { id: "plumbing", name: "Plumbing" },
      { id: "electrical", name: "Electrical" },
      { id: "appliance", name: "Appliance Repair" },
      { id: "furniture", name: "Furniture Repair" },
    ],
    health: [
      { id: "yoga", name: "Yoga Instructor" },
      { id: "fitness", name: "Fitness Trainer" },
      { id: "nutrition", name: "Nutritionist" },
      { id: "therapy", name: "Physiotherapy" },
    ],
    events: [
      { id: "photography", name: "Photography" },
      { id: "catering", name: "Catering" },
      { id: "decoration", name: "Decoration" },
      { id: "entertainment", name: "Entertainment" },
    ],
  }

  // Days of the week
  const days = [
    { id: "monday", label: "Monday" },
    { id: "tuesday", label: "Tuesday" },
    { id: "wednesday", label: "Wednesday" },
    { id: "thursday", label: "Thursday" },
    { id: "friday", label: "Friday" },
    { id: "saturday", label: "Saturday" },
    { id: "sunday", label: "Sunday" },
  ]

  // Generate time options (24-hour format)
  const generateTimeOptions = () => {
    const options = []
    for (let i = 0; i < 24 * 4; i++) {
      const hour = Math.floor(i / 4)
      const minute = (i % 4) * 15
      const formattedHour = hour.toString().padStart(2, "0")
      const formattedMinute = minute.toString().padStart(2, "0")
      options.push(`${formattedHour}:${formattedMinute}`)
    }
    return options
  }

  const timeOptions = generateTimeOptions()

  // Render form based on active step
  const renderForm = () => {
    switch (activeStep) {
      case 0:
        return (
          <div style={styles.formStep}>
            <h2 style={styles.stepTitle}>Personal Information</h2>

            <div style={styles.formRow}>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="firstName">
                  First Name
                </label>
                <input
                  style={errors.firstName ? { ...styles.input, ...styles.inputError } : styles.input}
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && <span style={styles.errorMessage}>{errors.firstName}</span>}
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="lastName">
                  Last Name
                </label>
                <input
                  style={errors.lastName ? { ...styles.input, ...styles.inputError } : styles.input}
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && <span style={styles.errorMessage}>{errors.lastName}</span>}
              </div>
            </div>

            <div style={styles.formRow}>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="email">
                  Email
                </label>
                <input
                  style={errors.email ? { ...styles.input, ...styles.inputError } : styles.input}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span style={styles.errorMessage}>{errors.email}</span>}
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="phone">
                  Phone Number
                </label>
                <input
                  style={errors.phone ? { ...styles.input, ...styles.inputError } : styles.input}
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <span style={styles.errorMessage}>{errors.phone}</span>}
              </div>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="address">
                Address
              </label>
              <input
                style={errors.address ? { ...styles.input, ...styles.inputError } : styles.input}
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
              {errors.address && <span style={styles.errorMessage}>{errors.address}</span>}
            </div>

            <div style={styles.formRow}>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="city">
                  City
                </label>
                <input
                  style={errors.city ? { ...styles.input, ...styles.inputError } : styles.input}
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
                {errors.city && <span style={styles.errorMessage}>{errors.city}</span>}
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="state">
                  State
                </label>
                <input
                  style={errors.state ? { ...styles.input, ...styles.inputError } : styles.input}
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                />
                {errors.state && <span style={styles.errorMessage}>{errors.state}</span>}
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="pincode">
                  Pincode
                </label>
                <input
                  style={errors.pincode ? { ...styles.input, ...styles.inputError } : styles.input}
                  type="text"
                  id="pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                />
                {errors.pincode && <span style={styles.errorMessage}>{errors.pincode}</span>}
              </div>
            </div>
          </div>
        )

      case 1:
        return (
          <div style={styles.formStep}>
            <h2 style={styles.stepTitle}>Service Details</h2>

            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="serviceCategory">
                Service Category
              </label>
              <select
                style={errors.serviceCategory ? { ...styles.select, ...styles.inputError } : styles.select}
                id="serviceCategory"
                name="serviceCategory"
                value={formData.serviceCategory}
                onChange={handleChange}
              >
                <option value="">Select a service category</option>
                {serviceCategories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              {errors.serviceCategory && <span style={styles.errorMessage}>{errors.serviceCategory}</span>}
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="serviceSubcategory">
                Service Subcategory
              </label>
              <select
                style={errors.serviceSubcategory ? { ...styles.select, ...styles.inputError } : styles.select}
                id="serviceSubcategory"
                name="serviceSubcategory"
                value={formData.serviceSubcategory}
                onChange={handleChange}
                disabled={!formData.serviceCategory}
              >
                <option value="">Select a subcategory</option>
                {formData.serviceCategory &&
                  subcategories[formData.serviceCategory]?.map((subcategory) => (
                    <option key={subcategory.id} value={subcategory.id}>
                      {subcategory.name}
                    </option>
                  ))}
              </select>
              {errors.serviceSubcategory && <span style={styles.errorMessage}>{errors.serviceSubcategory}</span>}
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="serviceDescription">
                Service Description
              </label>
              <textarea
                style={errors.serviceDescription ? { ...styles.textarea, ...styles.inputError } : styles.textarea}
                id="serviceDescription"
                name="serviceDescription"
                value={formData.serviceDescription}
                onChange={handleChange}
                rows={4}
              ></textarea>
              {errors.serviceDescription && <span style={styles.errorMessage}>{errors.serviceDescription}</span>}
            </div>

            <div style={styles.formRow}>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="servicePrice">
                  Service Price
                </label>
                <input
                  style={errors.servicePrice ? { ...styles.input, ...styles.inputError } : styles.input}
                  type="number"
                  id="servicePrice"
                  name="servicePrice"
                  value={formData.servicePrice}
                  onChange={handleChange}
                />
                {errors.servicePrice && <span style={styles.errorMessage}>{errors.servicePrice}</span>}
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="serviceUnit">
                  Price Unit
                </label>
                <select
                  style={errors.serviceUnit ? { ...styles.select, ...styles.inputError } : styles.select}
                  id="serviceUnit"
                  name="serviceUnit"
                  value={formData.serviceUnit}
                  onChange={handleChange}
                >
                  <option value="">Select price unit</option>
                  <option value="per_hour">Per Hour</option>
                  <option value="per_day">Per Day</option>
                  <option value="per_service">Per Service</option>
                  <option value="per_person">Per Person</option>
                </select>
                {errors.serviceUnit && <span style={styles.errorMessage}>{errors.serviceUnit}</span>}
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div style={styles.formStep}>
            <h2 style={styles.stepTitle}>Experience</h2>

            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="yearsOfExperience">
                Years of Experience
              </label>
              <select
                style={errors.yearsOfExperience ? { ...styles.select, ...styles.inputError } : styles.select}
                id="yearsOfExperience"
                name="yearsOfExperience"
                value={formData.yearsOfExperience}
                onChange={handleChange}
              >
                <option value="">Select years of experience</option>
                <option value="0-1">Less than 1 year</option>
                <option value="1-3">1-3 years</option>
                <option value="3-5">3-5 years</option>
                <option value="5-10">5-10 years</option>
                <option value="10+">More than 10 years</option>
              </select>
              {errors.yearsOfExperience && <span style={styles.errorMessage}>{errors.yearsOfExperience}</span>}
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="qualifications">
                Qualifications
              </label>
              <textarea
                style={errors.qualifications ? { ...styles.textarea, ...styles.inputError } : styles.textarea}
                id="qualifications"
                name="qualifications"
                value={formData.qualifications}
                onChange={handleChange}
                rows={3}
              ></textarea>
              {errors.qualifications && <span style={styles.errorMessage}>{errors.qualifications}</span>}
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="certifications">
                Certifications (Optional)
              </label>
              <textarea
                style={styles.textarea}
                id="certifications"
                name="certifications"
                value={formData.certifications}
                onChange={handleChange}
                rows={3}
              ></textarea>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="previousWorkplace">
                Previous Workplace (Optional)
              </label>
              <input
                style={styles.input}
                type="text"
                id="previousWorkplace"
                name="previousWorkplace"
                value={formData.previousWorkplace}
                onChange={handleChange}
              />
            </div>
          </div>
        )

      case 3:
        return (
          <div style={styles.formStep}>
            <h2 style={styles.stepTitle}>Availability</h2>

            <div style={styles.formGroup}>
              <label style={styles.label}>Available Days</label>
              <div style={styles.checkboxGroup}>
                {days.map((day) => (
                  <div key={day.id} style={styles.checkboxItem}>
                    <input
                      style={styles.checkbox}
                      type="checkbox"
                      id={day.id}
                      checked={formData.availableDays.includes(day.id)}
                      onChange={() => handleDayChange(day.id)}
                    />
                    <label style={styles.checkboxLabel} htmlFor={day.id}>
                      {day.label}
                    </label>
                  </div>
                ))}
              </div>
              {errors.availableDays && <span style={styles.errorMessage}>{errors.availableDays}</span>}
            </div>

            <div style={styles.formRow}>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="startTime">
                  Start Time
                </label>
                <select
                  style={errors.startTime ? { ...styles.select, ...styles.inputError } : styles.select}
                  id="startTime"
                  name="startTime"
                  value={formData.startTime}
                  onChange={handleChange}
                >
                  <option value="">Select start time</option>
                  {timeOptions.map((time) => (
                    <option key={`start-${time}`} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                {errors.startTime && <span style={styles.errorMessage}>{errors.startTime}</span>}
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="endTime">
                  End Time
                </label>
                <select
                  style={errors.endTime ? { ...styles.select, ...styles.inputError } : styles.select}
                  id="endTime"
                  name="endTime"
                  value={formData.endTime}
                  onChange={handleChange}
                >
                  <option value="">Select end time</option>
                  {timeOptions.map((time) => (
                    <option key={`end-${time}`} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                {errors.endTime && <span style={styles.errorMessage}>{errors.endTime}</span>}
              </div>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="serviceRadius">
                Service Radius (in km)
              </label>
              <input
                style={errors.serviceRadius ? { ...styles.input, ...styles.inputError } : styles.input}
                type="number"
                id="serviceRadius"
                name="serviceRadius"
                value={formData.serviceRadius}
                onChange={handleChange}
              />
              {errors.serviceRadius && <span style={styles.errorMessage}>{errors.serviceRadius}</span>}
            </div>
          </div>
        )

      case 4:
        return (
          <div style={styles.formStep}>
            <h2 style={styles.stepTitle}>Payment Information</h2>

            <div style={styles.alert}>
              Your payment information is secure and will only be used for service payments.
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="accountHolderName">
                Account Holder Name
              </label>
              <input
                style={errors.accountHolderName ? { ...styles.input, ...styles.inputError } : styles.input}
                type="text"
                id="accountHolderName"
                name="accountHolderName"
                value={formData.accountHolderName}
                onChange={handleChange}
              />
              {errors.accountHolderName && <span style={styles.errorMessage}>{errors.accountHolderName}</span>}
            </div>

            <div style={styles.formRow}>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="accountNumber">
                  Account Number
                </label>
                <input
                  style={errors.accountNumber ? { ...styles.input, ...styles.inputError } : styles.input}
                  type="text"
                  id="accountNumber"
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleChange}
                />
                {errors.accountNumber && <span style={styles.errorMessage}>{errors.accountNumber}</span>}
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="ifscCode">
                  IFSC Code
                </label>
                <input
                  style={errors.ifscCode ? { ...styles.input, ...styles.inputError } : styles.input}
                  type="text"
                  id="ifscCode"
                  name="ifscCode"
                  value={formData.ifscCode}
                  onChange={handleChange}
                />
                {errors.ifscCode && <span style={styles.errorMessage}>{errors.ifscCode}</span>}
              </div>
            </div>

            <div style={styles.formRow}>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="bankName">
                  Bank Name
                </label>
                <input
                  style={errors.bankName ? { ...styles.input, ...styles.inputError } : styles.input}
                  type="text"
                  id="bankName"
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleChange}
                />
                {errors.bankName && <span style={styles.errorMessage}>{errors.bankName}</span>}
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="panNumber">
                  PAN Number
                </label>
                <input
                  style={errors.panNumber ? { ...styles.input, ...styles.inputError } : styles.input}
                  type="text"
                  id="panNumber"
                  name="panNumber"
                  value={formData.panNumber}
                  onChange={handleChange}
                />
                {errors.panNumber && <span style={styles.errorMessage}>{errors.panNumber}</span>}
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  // Inline styles
  const styles = {
    container: {
      maxWidth: "800px",
      margin: "0 auto",
      padding: "20px",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    },
    formTabs: {
      display: "flex",
      borderBottom: "1px solid #ddd",
      marginBottom: "20px",
      overflowX: "auto",
    },
    tab: {
      padding: "10px 15px",
      cursor: "pointer",
      opacity: 0.6,
      borderBottom: "2px solid transparent",
      transition: "all 0.3s",
    },
    activeTab: {
      opacity: 1,
      borderBottom: "2px solid #4f46e5",
      fontWeight: 600,
    },
    formStep: {
      marginBottom: "20px",
    },
    stepTitle: {
      marginBottom: "20px",
      fontSize: "1.5rem",
      color: "#333",
    },
    formRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      marginBottom: "15px",
    },
    formGroup: {
      flex: 1,
      minWidth: "200px",
      marginBottom: "15px",
    },
    label: {
      display: "block",
      marginBottom: "5px",
      fontWeight: 500,
    },
    input: {
      width: "100%",
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "16px",
    },
    select: {
      width: "100%",
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "16px",
      backgroundColor: "#fff",
    },
    textarea: {
      width: "100%",
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "16px",
      resize: "vertical",
    },
    inputError: {
      borderColor: "#e53e3e",
    },
    errorMessage: {
      color: "#e53e3e",
      fontSize: "14px",
      marginTop: "5px",
      display: "block",
    },
    checkboxGroup: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
      gap: "10px",
    },
    checkboxItem: {
      display: "flex",
      alignItems: "center",
    },
    checkbox: {
      marginRight: "8px",
    },
    checkboxLabel: {
      fontWeight: "normal",
    },
    alert: {
      backgroundColor: "#f8f9fa",
      borderLeft: "4px solid #4f46e5",
      padding: "15px",
      marginBottom: "20px",
      borderRadius: "4px",
    },
    formButtons: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "30px",
    },
    button: {
      padding: "10px 20px",
      borderRadius: "4px",
      fontSize: "16px",
      cursor: "pointer",
      transition: "all 0.3s",
    },
    primaryButton: {
      backgroundColor: "#4f46e5",
      color: "white",
      border: "none",
    },
    secondaryButton: {
      backgroundColor: "transparent",
      color: "#4f46e5",
      border: "1px solid #4f46e5",
    },
  }

  return (
    <div style={styles.container}>
      <div style={styles.formTabs}>
        <div
          style={activeStep === 0 ? { ...styles.tab, ...styles.activeTab } : styles.tab}
          onClick={() => activeStep > 0 && setActiveStep(0)}
        >
          Personal Info
        </div>
        <div
          style={activeStep === 1 ? { ...styles.tab, ...styles.activeTab } : styles.tab}
          onClick={() => activeStep > 1 && setActiveStep(1)}
        >
          Service Details
        </div>
        <div
          style={activeStep === 2 ? { ...styles.tab, ...styles.activeTab } : styles.tab}
          onClick={() => activeStep > 2 && setActiveStep(2)}
        >
          Experience
        </div>
        <div
          style={activeStep === 3 ? { ...styles.tab, ...styles.activeTab } : styles.tab}
          onClick={() => activeStep > 3 && setActiveStep(3)}
        >
          Availability
        </div>
        <div
          style={activeStep === 4 ? { ...styles.tab, ...styles.activeTab } : styles.tab}
          onClick={() => activeStep > 4 && setActiveStep(4)}
        >
          Payment Info
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {renderForm()}

        <div style={styles.formButtons}>
          {activeStep > 0 && (
            <button type="button" onClick={prevStep} style={{ ...styles.button, ...styles.secondaryButton }}>
              Previous
            </button>
          )}

          {activeStep < 4 ? (
            <button type="button" onClick={nextStep} style={{ ...styles.button, ...styles.primaryButton }}>
              Next
            </button>
          ) : (
            <button type="submit" style={{ ...styles.button, ...styles.primaryButton }}>
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default Registration
