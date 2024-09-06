import React from 'react';

export default function ContactPage() {
    return (
        <div style={{
            fontFamily: 'Arial, sans-serif',
            lineHeight: 1.6,
            color: '#333',
            maxWidth: '600px',
            margin: '0 auto',
            padding: '20px',
            backgroundColor: '#f4f4f4',
        }}>
            <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>Contact Information</h1>
            <form style={{
                backgroundColor: '#fff',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }} htmlFor="firstName">First Name:</label>
                <input style={{
                    width: '100%',
                    padding: '8px',
                    marginBottom: '15px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    boxSizing: 'border-box',
                }} type="text" id="firstName" name="firstName" required />

                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }} htmlFor="lastName">Last Name:</label>
                <input style={{
                    width: '100%',
                    padding: '8px',
                    marginBottom: '15px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    boxSizing: 'border-box',
                }} type="text" id="lastName" name="lastName" required />

                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }} htmlFor="email">Email:</label>
                <input style={{
                    width: '100%',
                    padding: '8px',
                    marginBottom: '15px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    boxSizing: 'border-box',
                }} type="email" id="email" name="email" required />

                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }} htmlFor="homePhone">Home Phone:</label>
                <input style={{
                    width: '100%',
                    padding: '8px',
                    marginBottom: '15px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    boxSizing: 'border-box',
                }} type="tel" id="homePhone" name="homePhone" required />

                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }} htmlFor="address">Address:</label>
                <input style={{
                    width: '100%',
                    padding: '8px',
                    marginBottom: '15px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    boxSizing: 'border-box',
                }} type="text" id="address" name="address" required />

                <div style={{ marginBottom: '15px' }}>
                    <label style={{ fontWeight: 'normal', display: 'flex', alignItems: 'center' }}>
                        <input type="checkbox" id="consent" name="consent" required style={{ marginRight: '10px' }} />
                        By clicking &quot;I Agree,&quot; you are providing your ESIGN signature and
                        express written consent to be contacted by the Connected Solar,
                        including text (SMS/MMS) messaging or calls made using an automatic
                        telephone dialing system or prerecorded or artificial voice messages
                        related to the product or service inquired about.
                    </label>
                </div>

                <h2 style={{ textAlign: 'center', color: '#2c3e50' }}>Potential Buyers</h2>
                <p>Please select the buyers you&apos;re interested in:</p>
                <div style={{ marginBottom: '15px' }}>
                    {['Acme Insurance Co.', 'Safe Haven Insurance', 'Reliable Coverage Inc.', 'Guardian Shield Insurance', 'Sunshine Insurance Group'].map((buyer, index) => (
                        <label key={index} style={{ fontWeight: 'normal', display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                            <input type="checkbox" name="buyers" value={`buyer${index + 1}`} style={{ marginRight: '10px' }} />
                            {buyer}
                        </label>
                    ))}
                </div>

                <button type="submit" style={buttonStyle}>Submit</button>
            </form>
        </div>
    );
}



const buttonStyle = {
    backgroundColor: '#3498db',
    color: '#fff',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    width: '100%',
};