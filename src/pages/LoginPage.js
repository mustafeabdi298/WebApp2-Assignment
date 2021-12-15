import React from "react";
import PageTemplate from "../components/templateLoginPage/pageTemplate";

const LoginPage = () => {

return (
        <PageTemplate 
        title="To see the movies, you must first sign in." 
        heading="Welcome"
        
        content="To continue, please log in with Auth0 to this TMDB client. After you've logged in, you can go to the home page."/>
);
};

export default LoginPage;


