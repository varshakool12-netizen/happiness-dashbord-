# happiness-dashbord-
📦 1. Install Required Software
✔ Install Node.js

Download from:
https://nodejs.org

✔ Install MySQL + MySQL Workbench

Download MySQL Installer from:
https://dev.mysql.com/downloads/installer/

During installation, make sure to install:

MySQL Server

MySQL Workbench

You will be asked to set a root password — remember it.

🗂 2. Clone the Repository
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

🛢 3. Set Up the MySQL Database

Open MySQL Workbench, connect to your MySQL server, then run:

CREATE DATABASE mood_dashboard;
USE mood_dashboard;

CREATE TABLE moods (
    id INT AUTO_INCREMENT PRIMARY KEY,
    current_mood VARCHAR(50),
    main_reason TEXT,
    mood_three_days_ago VARCHAR(50),
    mood_one_week_ago VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


If you have a .sql file from a previous version, you can import it:

MySQL Workbench → Server → Data Import → Import from Self-Contained File

📁 4. Install Dependencies

Inside the project folder, run:

npm install


This installs:

express

mysql2

body-parser

cors

⚙️ 5. Configure the Backend

Open server.js and make sure your MySQL credentials are correct:

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "YOUR_PASSWORD",   // replace with your MySQL password
    database: "mood_dashboard"
});

▶️ 6. Start the Server
node server.js


If everything is working, you will see:

Connected to MySQL database!
Server running on http://localhost:3000

🌐 7. Open the Application

Go to your browser and open:

http://localhost:3000/index.html


You can now:

Submit mood surveys

View charts & summaries

See MySQL data shown in real time

📊 API Endpoints
Submit mood survey
POST /submit

Get mood data for charts
GET /mood-data

❗ Troubleshooting
❌ Error: Cannot connect to MySQL

Check that MySQL Server is running

Verify your password in server.js

MySQL Workbench should be able to connect

❌ Port already in use

Run:

npx kill-port 3000


Then restart the server.
