"use client";
import React from 'react'
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()
  return (
    <div>
      <h1 style={{
        fontSize: "2rem",
      }}>Insurance Application Form</h1>
      <form>
        <div className="row">
          <div className="column">
            <label htmlFor="city">City:</label>
            <input type="text" id="city" name="city" required />
          </div>
          <div className="column">
            <label htmlFor="dob">Date of Birth:</label>
            <input type="date" id="dob" name="dob" required />
          </div>
        </div>

        <div className="row">
          <div className="column">
            <label htmlFor="householdIncome">Household Income:</label>
            <input
              type="number"
              id="householdIncome"
              name="householdIncome"
              required
            />
          </div>
          <div className="column">
            <label htmlFor="householdSize">Household Size:</label>
            <input
              type="number"
              id="householdSize"
              name="householdSize"
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="column">
            <label htmlFor="state">State:</label>
            <input type="text" id="state" name="state" required />
          </div>
          <div className="column">
            <label htmlFor="zip">ZIP Code:</label>
            <input type="text" id="zip" name="zip" pattern="[0-9]{5}" required />
          </div>
        </div>

        <div className="row">
          <div className="column">
            <label htmlFor="currentlyInsured">Currently Insured:</label>
            <select id="currentlyInsured" name="currentlyInsured">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="column">
            <label htmlFor="dui">DUI:</label>
            <select id="dui" name="dui">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <label htmlFor="education">Education:</label>
            <select id="education" name="education">
              <option value="highSchool">High School</option>
              <option value="bachelor">Bachelor&apos;s Degree</option>
              <option value="master">Master&apos;s Degree</option>
              <option value="phd">PhD</option>
            </select>
          </div>
          <div className="column">
            <label htmlFor="gender">Gender:</label>
            <select id="gender" name="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <label htmlFor="heightFeet">Height (Feet):</label>
            <input
              type="number"
              id="heightFeet"
              name="heightFeet"
              min="1"
              max="8"
              required
            />
          </div>
          <div className="column">
            <label htmlFor="heightInches">Height (Inches):</label>
            <input
              type="number"
              id="heightInches"
              name="heightInches"
              min="0"
              max="11"
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="column">
            <label htmlFor="maritalStatus">Marital Status:</label>
            <select id="maritalStatus" name="maritalStatus">
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </select>
          </div>
          <div className="column">
            <label htmlFor="occupation">Occupation:</label>
            <input type="text" id="occupation" name="occupation" />
          </div>
        </div>

        <div className="row">
          <div className="column">
            <label htmlFor="previouslyDenied">Previously Denied Insurance:</label>
            <select id="previouslyDenied" name="previouslyDenied">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="column">
            <label htmlFor="relativeCancer">Relative with Cancer:</label>
            <select id="relativeCancer" name="relativeCancer">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <label htmlFor="relativeHeart">Relative with Heart Disease:</label>
            <select id="relativeHeart" name="relativeHeart">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="column">
            <label htmlFor="requestedCoverageType">Requested Coverage Type:</label>
            <select id="requestedCoverageType" name="requestedCoverageType">
              <option value="basic">Basic</option>
              <option value="standard">Standard</option>
              <option value="premium">Premium</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <label htmlFor="residenceType">Residence Type:</label>
            <select id="residenceType" name="residenceType">
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
            </select>
          </div>
          <div className="column">
            <label htmlFor="tobaccoUse">Tobacco Use:</label>
            <select id="tobaccoUse" name="tobaccoUse">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        <label htmlFor="weight">Weight (lbs):</label>
        <input type="number" id="weight" name="weight" required />

        <div className="row">
          <div className="column">
            <label htmlFor="stayInYear">Stay in Year:</label>
            <input
              type="number"
              id="stayInYear"
              name="stayInYear"
              min="1900"
              max="2100"
            />
          </div>
          <div className="column">
            <label htmlFor="stayInMonth">Stay in Month:</label>
            <input
              type="number"
              id="stayInMonth"
              name="stayInMonth"
              min="1"
              max="12"
            />
          </div>
        </div>

        <div className="row">
          <div className="column">
            <label htmlFor="isStudent">Is Student:</label>
            <select id="isStudent" name="isStudent">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="column">
            <label htmlFor="medicalCondition">Medical Condition:</label>
            <input type="text" id="medicalCondition" name="medicalCondition" />
          </div>
        </div>

        <label htmlFor="expectantParent">Expectant Parent:</label>
        <select id="expectantParent" name="expectantParent">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
        }}>

          <button type="button" onClick={() => {
            // setSteps((prev) => prev > 1 ? prev - 1 : prev)
          }}>Previous</button>
          <button type="button" onClick={() => {
            // setSteps((prev) => prev < 1 ? prev + 1 : prev)
            router.push('/posting')

          }}>Next</button>
        </div>
      </form>

    </div>
  )
}

export default Page