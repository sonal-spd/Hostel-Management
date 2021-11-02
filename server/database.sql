CREATE DATABASE hostel;

CREATE TABLE hostel_details(
    hostel_id VARCHAR(10) PRIMARY KEY,
    hostel_name VARCHAR(30),
    hostel_address VARCHAR(50),
    hostel_image VARCHAR(100)
);

CREATE TABLE notice (
    notice_id SERIAL PRIMARY KEY,
    notice_headline VARCHAR(100),
    hostel_id VARCHAR(10),
    notice_file VARCHAR(200) NOT NULL,
    CONSTRAINT fk_hostel FOREIGN KEY(hostel_id) REFERENCES hostel_details(hostel_id)
);

CREATE TABLE complain_applications (
    application_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    enrollment_no VARCHAR(10),
    hostel_id VARCHAR(10),
    app_reason VARCHAR(200),
    PRIMARY KEY(application_date,enrollment_no),
    CONSTRAINT fk_hostel FOREIGN KEY(hostel_id) REFERENCES hostel_details(hostel_id),
    CONSTRAINT fk_enrollment FOREIGN KEY(enrollment_no) REFERENCES hostel_resident(enrollment_no)
);

CREATE TABLE leave_application(
    application_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    enrollment_no VARCHAR(10),
    hostel_id VARCHAR(10),
    address_ VARCHAR(80) NOT NULL,
    reason VARCHAR(100) NOT NULL,
    leave_date DATE NOT NULL,
    arrival_date DATE NOT NULL,
    PRIMARY KEY(application_date, enrollment_no),
    CONSTRAINT fk_hostel FOREIGN KEY(hostel_id) REFERENCES hostel_details(hostel_id),
    CONSTRAINT fk_enrollment FOREIGN KEY(enrollment_no) REFERENCES hostel_resident(enrollment_no)
);

-- CREATE TABLE student_attendance(
--     enrollment_no PRIMARY KEY,
--     hostel_id VARCHAR(10),
--     attend_days INT NOT NULL,
--     CONSTRAINT fk_hostel FOREIGN KEY(hostel_id) REFERENCES hostel_details(hostel_id)
-- );

CREATE TABLE attendance(
    attend_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    enrollment_no VARCHAR(10),
    PRIMARY KEY(attend_date, enrollment_no),
    CONSTRAINT fk_Sid FOREIGN KEY(enrollment_no) REFERENCES hostel_resident(enrollment_no)
);

CREATE TABLE faculty(
    faculty_id VARCHAR(10) PRIMARY KEY,
    hostel_id VARCHAR(10) NOT NULL,
    designation VARCHAR(30) NOT NULL,
    fac_photo VARCHAR(30),
    fac_email VARCHAR(30),
    fac_name VARCHAR(30),
    fac_contactNo INT,
    CONSTRAINT fk_hostel FOREIGN KEY(hostel_id) REFERENCES hostel_details(hostel_id)
);

CREATE TABLE proctor_team(
    enrollment_no VARCHAR(10),
    hostel_id VARCHAR(10) NOT NULL,
    designation VARCHAR(30) NOT NULL,
    fac_photo VARCHAR(30),
    fac_email VARCHAR(30),
    fac_name VARCHAR(30),
    fac_contactNo INT,
    PRIMARY KEY(enrollment_no,hostel_id),
    CONSTRAINT fk_hostel FOREIGN KEY(hostel_id) REFERENCES hostel_details(hostel_id),
    CONSTRAINT fk_Sid FOREIGN KEY(enrollment_no) REFERENCES hostel_resident(enrollment_no)
);

CREATE TABLE hostel_resident(
    enrollment_no VARCHAR(10) PRIMARY KEY,
    course VARCHAR(30),
    faculty_no VARCHAR(10) UNIQUE,
    hostel_id VARCHAR(10),
    resident_name VARCHAR(30) NOT NULL,
    resident_address VARCHAR(80) NOT NULL,
    resident_image VARCHAR(200) NOT NULL UNIQUE,
    resident_room INT NOT NULL,
    contact BIGINT UNIQUE,
    email VARCHAR(30) UNIQUE,
    CONSTRAINT fk_hostel FOREIGN KEY(hostel_id) REFERENCES hostel_details(hostel_id)
);

-- CREATE DATABASE Profile;

-- CREATE TABLE user(
--     enrollment_no VARCHAR(10) PRIMARY KEY,
--     faculty_roll VARCHAR(10),
--     hostel_id VARCHAR(10),
--     contact INT,
--     email VARCHAR(30),
--     student_room INT,
--     hostel_name VARCHAR(30)
--     semester INT,
--     address VARCHAR(50)
-- );

-- CREATE TABLE attendance(
--     enrollment_no VARCHAR(10),
--     hostel_id VARCHAR(10),
--     student_room INT,
--     attend_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
--     CONSTRAINT fk_Sid FOREIGN KEY(enrollment_no, hostel_id) REFERENCES user,
--     PRIMARY KEY(enrollment_no, student_room)
-- );

-- CREATE TABLE complain_applications (
--     application_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
--     enrollment_no VARCHAR(10),
--     hostel_id VARCHAR(10),
--     application_type VARCHAR(30) NOT NULL,
--     applicant_room INT NOT NULL,
--     app_subject VARCHAR(30) NOT NULL,
--     app_body VARCHAR(100) NOT NULL,
--     PRIMARY KEY(application_date,enrollment_no),
--     CONSTRAINT fk_hostel FOREIGN KEY(hostel_id) REFERENCES user(hostel_id),
--     CONSTRAINT fk_enrollment FOREIGN KEY(enrollment_no) REFERENCES user(enrollment_no)
-- );

-- CREATE TABLE leave_application(
--     application_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
--     enrollment_no VARCHAR(10),
--     hostel_id VARCHAR(10),
--     address_ VARCHAR(50),
--     reason VARCHAR(50),
--     leave_date VARCHAR(20),
--     arrival_date VARCHAR(20),
--     PRIMARY KEY(application_date, enrollment_no),
--     CONSTRAINT fk_hostel FOREIGN KEY(hostel_id) REFERENCES hostel_details(hostel_id),
--     CONSTRAINT fk_enrollment FOREIGN KEY(enrollment_no) REFERENCES hostel_resident(enrollment_no)
-- );

-- <!DOCTYPE html>
-- <html>
-- <body>

-- <?php>

-- <form action='' method='POST'>
--   Name:<input type="text" name="name" value="<?php echo $name;?>"><br>
-- Enrollment No.:<input type="text" name="en_no" value="<?php echo $en_no;?>"><br>
-- Room No.: <input type="integer" name="room_no" value="<?php echo $room_no;?>"><br>
-- Hostel Name:<input type="text" name="hostel_name" value="<?php echo $hostel_name;?>"><br>
-- Ward Name:<input type="text" name="ward_name" value="<?php echo $ward_name;?>"><br>
-- Leave Date: <input type="text" name="leave_date" value="<?php echo $leave_date;?>"><br>
-- Time Duration: <input type="text" name="time_dura" value="<?php echo $time_dura;?>"><br>
-- Address: <textarea name="comment" rows="5" cols="40"><?php echo $add;?></textarea><br>
-- Reason: <textarea name="comment" rows="9" cols="60"><?php echo $reason;?></textarea><br>
-- <br>
-- <button type="submit" class="btn btn-primary">Submit</button>
-- </form>

-- </body>
-- </html>