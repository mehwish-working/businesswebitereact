import React, { useState } from 'react'

const Contact = () => {
  const [data, setdata] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setdata((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }
  const fromSubmit = (e) => {
    e.preventDefault();
    alert(`Your Name Is "${data.fullname}". Your Mobile Number Is "${data.phone}". Your Email is "${data.email}" and Your message "${data.message}" Has Been Submitted! `);
  }
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>

      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={fromSubmit}>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Full Name </label>
                <input type="text" class="form-control" id="exampleFormControlInput1"
                  name="fullname" value={data.fullname}
                  onChange={InputEvent} placeholder="Enter Your Name:" />
                required          </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email Address</label>
                <input type="text" class="form-control" id="exampleFormControlInput1"
                  name="email" value={data.email}
                  onChange={InputEvent} placeholder="Enter Your Email:" />required           </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Phone Number:</label>
                <input type="number" class="form-control" id="exampleFormControlInput1"
                  name="phone" value={data.phone}
                  onChange={InputEvent} placeholder="Enter Your Phone Number:" required />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                  name="message"
                  value={data.message}
                  onChange={InputEvent} required></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">Submit Form 👍</button>
              </div>

            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default Contact
