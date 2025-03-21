import React from 'react';
import { useParams } from 'react-router-dom';
import Contact from './Contact';

const Center = {
  "chandigarh": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7063.840207289006!2d76.77749769359873!3d30.740263719711834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0afe5003d3%3A0x8f47abe9f2044934!2sSector%2017%2C%20Chandigarh!5e1!3m2!1sen!2sin!4v1739947143342!5m2!1sen!2sin",
  "jaipur": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40910.01770265038!2d-0.21839765136720116!3d51.521847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761be77a00a831%3A0xce4770d2503bd791!2sRegent%20College%20London%20%7C%20Central%20London!5e1!3m2!1sen!2sin!4v1739947310673!5m2!1sen!2sin",
  "delhi": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113200.22162505842!2d-96.37442288628672!3d30.587525326167178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8646848619463ca3%3A0xc969c74db6bf6ac9!2sCollege%20Station%2C%20TX%2C%20USA!5e1!3m2!1sen!2sin!4v1739947386042!5m2!1sen!2sin",
  "banglour": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10243.239008068482!2d-2.6111426279253442!3d51.45175237071845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718dd6da1d49cb%3A0xb5e4d90097615aaf!2sCollege%20Green%2C%20Bristol%20BS1%205TJ%2C%20UK!5e1!3m2!1sen!2sin!4v1739947423354!5m2!1sen!2sin",
  "mohali": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10243.239008068482!2d-2.6111426279253442!3d51.45175237071845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718dd6da1d49cb%3A0xb5e4d90097615aaf!2sCollege%20Green%2C%20Bristol%20BS1%205TJ%2C%20UK!5e1!3m2!1sen!2sin!4v1739947423354!5m2!1sen!2sin",
  "canada": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10243.239008068482!2d-2.6111426279253442!3d51.45175237071845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718dd6da1d49cb%3A0xb5e4d90097615aaf!2sCollege%20Green%2C%20Bristol%20BS1%205TJ%2C%20UK!5e1!3m2!1sen!2sin!4v1739947423354!5m2!1sen!2sin"
};

const CenterLocation = () => {
  const { title } = useParams();
  const CenterLocation = Center[title];

  return (
    <div className="container mt-5">
      <h1 className="text-center fw-bold text-primary mb-4">
        {title.toUpperCase()} Center
      </h1>
      <p className="text-center fs-5 text-muted">
        Best environment for studying in {title}.
      </p>
      <div className="d-flex justify-content-center">
        <iframe
          className="shadow-lg rounded-3"
          src={CenterLocation}
          width="1000"
          height="500"
          style={{ border: 0, maxWidth: "100%", borderRadius: "12px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <Contact />
    </div>
  );
};

export default CenterLocation;
