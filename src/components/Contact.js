import React from 'react'
import './header.css'
export default function Contact() {
    return (
        <div className="contactdiv">
            <div className="text-title1">
                <h1 className="text-title"> <span>Contact US</span></h1>
            </div>
            <div className="container-contact">
                <form action="">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name..." />
                    <label htmlFor="fname">Last</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your Last Name..." />
                    <label htmlfor="country">Country</label>
                    <select id="country" name="country">
                        <option value="australia">Pakistan</option>
                        <option value="canada">Turky</option>
                        <option value="usa">UK</option>
                    </select>
                    <label htmlfor="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>
        <div className="btn-cont">
        <input type="submit" value="Submit"></input>

        </div>
                </form>
            </div>
        </div>
    )
}
