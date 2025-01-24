# SpeedTest Application Documentation

![speedapp_home](https://github.com/Judhunja/ics_2203_internet_application_programming/blob/master/end_year_project/speed_test_app/images/speed_app_1.png?raw=true)

![speedapp_login](https://github.com/Judhunja/ics_2203_internet_application_programming/blob/master/end_year_project/speed_test_app/images/speed_app_2.png?raw=true)

![speedapp_speedtest](https://github.com/Judhunja/ics_2203_internet_application_programming/blob/master/end_year_project/speed_test_app/images/speed_app_3.png?raw=true)

## Project Overview
The SpeedTest application is a web-based tool built using Django that allows users to measure their internet connection speed, including download and upload speeds, as well as latency (ping). Users must be authenticated to access the speed testing functionality.

## Distinctiveness and Complexity

### Distinctiveness
This project is unique because it provides an interactive and user-friendly interface for testing internet speed directly from a web application. This application integrates user authentication, session management, and personalized test results.

### Complexity
The project involves several complex aspects, including:
- **User Authentication:** Secure user login and signup system with session management.
- **SpeedTest Integration:** Using the `speedtest` Python library to fetch and display real-time internet speed metrics.
- **Django Framework:** Implementation of Django's views, templates, and URL routing to provide a seamless experience.
- **Error Handling:** Managing exceptions when internet connectivity is poor or speed test servers are unavailable.

## Design Approach

### Why This Approach?
The project follows the MVC (Model-View-Controller) pattern provided by Django to separate concerns and maintain scalability. The decision to use Django was driven by its powerful authentication system and ease of integration with third-party libraries like `speedtest`.

### Key Design Choices
- **Authentication System:** Used Django's built-in authentication features for secure login and signup.
- **Minimalist UI:** Focused on a clean, straightforward design to emphasize usability.
- **Efficient API Calls:** Optimized speed test execution to minimize server load.

## File Descriptions

### `views.py`
- Handles the logic for user authentication, homepage rendering, and speed test execution.
- Contains the following views:
  - `home`: Renders the homepage.
  - `signup`: Manages user registration.
  - `login_view`: Handles user login.
  - `index`: Authenticated page to perform speed tests.
  - `run_speedtest`: Fetches speed test results via JSON response.

### `urls.py`
- Defines URL patterns for routing the application.
- URL patterns include:
  - `/` (home page)
  - `/signup/` (user registration)
  - `/login/` (user login)
  - `/speedtest/` (speed test page)
  - `/run-speedtest/` (speed test API endpoint)

### `templates/`
- Contains HTML files for rendering pages.
- Files include:
  - `home.html`: Landing page for users.
  - `registration/signup.html`: Signup form.
  - `registration/login.html`: Login form.
  - `index.html`: Speed test page.

### `static/`
- Includes CSS and JavaScript files for frontend styling and functionality.
  - **`static/js/speedtest.js`**: Handles the speed test functionality by making an API call to the server to fetch the speed test results and display them to the user. When the user clicks the "run-test" button, it triggers a `fetch` request to the `/speedtest/run-speedtest/` endpoint, retrieves the download speed, upload speed, and ping values, and displays them on the page.
  - **`static/css/`**: Contains the CSS files for styling the HTML pages.

### `settings.py`
- Django settings configuration, including database setup, authentication, and static file handling.

## How to Run the Application

1. **Clone the Repository:**
   ```
   git clone https://github.com/Judhunja/ics_2203_internet_application_programming
   cd speedtest-app
   ```

2. **Create a Virtual Environment:**
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install Dependencies:**
   ```
   pip install -r requirements.txt
   ```

4. **Run Migrations:**
   ```
   python manage.py migrate
   ```

5. **Create a Superuser (Optional):**
   ```
   python manage.py createsuperuser
   ```

6. **Run the Development Server:**
   ```
   python manage.py runserver
   ```

7. **Access the Application:**
   Open `http://127.0.0.1:8000` in your web browser.

## Additional Information
- Ensure that you have an active internet connection before running speed tests.
- If you encounter issues, check the logs for debugging information using:
  ```
  python manage.py runserver -
  ```

---
