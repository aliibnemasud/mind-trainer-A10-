import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className="text-center my-5">Question & Answers</h1>
            <h2><span className='text-success'>Question 01:</span> Difference between authorization and authentication.</h2>
            <p><span className='fw-bold text-primary'>Authentication</span> <br />
                Authentication is the process of verifying who someone is.
                Authentication does the first step to verifying the user.
                Authentication depends on the user for verifying and passing the authorization. <br />

                <span className='fw-bold text-primary'>Authorization</span> <br />
                Authorization is the process of verifying what specific applications, files, and data a user has access to.
                Authorization work after verifying the user by the authentication.
                Authorization depends on the authentication for verifying the user.
            </p>
            <h2><span className='text-success'>Question 02:</span> Why are you using firebase? What other options do you have to implement authentication?</h2>
            <p><span className='fw-bold text-primary'>Firebase</span> <br />
                I am using firebase to store user secrete data and host our site. Also, for getting the best security by storing data to them because it is google provides gives us the most security for this data. <br />
                <span className='fw-bold text-primary'>We have different types of authentication services without firebase</span><br />
                <ol>
                    <li>Prove</li>
                    <li>Dou</li>
                    <li>HID</li>
                    <li>Ping Intelligent</li>
                    <li>Okta</li>                    
                </ol>
                and many more....                
            </p>

            <h2><span className='text-success'>Question 03:</span> What other services does firebase provide other than authentication</h2>
            
            <p>
            <span className='fw-bold text-primary'>Firebase provides other than authentication</span> <br />
            
            <ol>
                <li>Cloud Firestore</li>
                <li>Cloud Functions</li>
                <li>Hosting</li>
                <li>Cloud Storage</li>
                <li>Google Analytics</li>
                <li>Cloud Messaging</li>
                <li>Predictions</li>
            </ol>
            </p>

        </div>
    );
};

export default Blogs;