                                    <!-- Frontend -->
This project is a web application for job searching that allows users to search for vacancies, receive recommendations based on their profile, and save favorite vacancies. The application is built using the Next.js framework with React for component creation and Tailwind CSS for styling. The application also uses localStorage for storing user profiles and favorite vacancies."
                                    Structure:
<!-- - Components -->
    1. Header.tsx
    2. JobCard.tsx
    3. JobDetails.tsx
    4. JobSearchForm.tsx
    5. LikedJobs.tsx
    6. LoginForm.tsx
    7. NavBar.tsx
    8. ProfileForm.tsx
    9. RegisterForm.tsx
<!-- - Pages -->
    1. create-profile.tsx
    2. jobs.tsx
    3. job-search.tsx
    4. liked.tsx
    5. login.tsx
    6. register.tsx
    7. job-details[id].tsx
<!-- - Styles -->
    1. globals.css
<!-- - App -->
    1. layout.tsx
    2. page.tsx
<!-- - Api -->
    1. login.tsx
    2. register.tsx         
<!-- - Routes   -->
    - / - (root route) The main page of the application                                                    
    - /auth/register - The registration page for new users
    - /auth/login - The login page for user authentication
    - /job-search - This route is likely for displaying jobs that the user has liked or saved. It shows a list of job postings that the user has marked as favorites or saved for later review. This feature allows users to keep track of jobs they're interested in but haven't applied to yet.
    - /liked
    - /create-profile - This route is for creating or editing the user's profile.
    It might include fields for resume information, skills, work experience, and other relevant details.
    This profile could be used to help match users with job openings or to provide information to potential employers
    - /jobs - This route might be an alternative to /job-search or could serve a different purpose.
    It could display a list of all available jobs or a curated selection of jobs.
    It might be used for browsing jobs without specific search criteria
    - /job-details/:id - This is a dynamic route for displaying detailed information about a specific job. The :id part is a parameter that represents the unique identifier of the job.
    When a user clicks on a job listing, they're likely directed to this route with the specific job ID. This page would show comprehensive details about the job, including requirements, responsibilities, company information, and application instructions
<!-- Technologies  -->
    - Next.js 14
    - Typescript
    - Tailwind css  
    - Formik for forms (with the  Yup for validation)
<!-- Links -->
GitHub Link: https://github.com/AnastasiiaMehei/job.git
Vercel Link: https://job-d6ld.vercel.app/job-search
                                    <!-- Backend -->
                                        Structure:
<!-- docs -->
- index.html
- openapi.yaml
- swagger.json
  <!-- constants -->
- index.js
<!-- controllers -->
- auth.js
  db/models
- initMongoConnection.js
- session.js
- user.js
- middlewares
- authenticate.js
- errorHandler.js
- isValidId.js
- multer.js
- notFoundHandler.js
- swaggerDocs.js
- validateBody.js
<!-- routers -->
- auth.js
<!-- services -->
- auth.js
<!-- utils -->
- createDirIfNotExists.js
- createMonthData.js
- createSession.js
- ctrlWrapper.js
- env.js
- saveFileToCloudinary.js
- saveFileToUploadDir.js
<!-- validation -->
- auth.js
<!-- server -->
- index.js
- server.js
<!-- Technologies  -->
- Node.js
- Axios for queries with SWR hooks (useSWR)
- Express.js
- MongoDB
- Mongoose         
- Multer
- MongoDB
- Swagger
- JWT (JSON Web Tokens)
- Bcrypt
- Cors
- Pino
- Nodemon
<!-- Links -->
GitHub Link: https://github.com/AnastasiiaMehei/search-job-server
Render Link: https://search-job-server-11.onrender.com
Swagger Link: https://search-job-server-11.onrender.com/api-docs            
