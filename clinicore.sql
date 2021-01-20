-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 18, 2021 at 11:14 AM
-- Server version: 8.0.22-0ubuntu0.20.10.2
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `clinicore`
--

-- --------------------------------------------------------

--
-- Table structure for table `cb_departments`
--

CREATE TABLE `cb_departments` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `value` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `department_head_name` varchar(255) DEFAULT NULL,
  `head_since` varchar(255) DEFAULT NULL,
  `status` varchar(255) NOT NULL,
  `create_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `cb_departments`
--

INSERT INTO `cb_departments` (`id`, `name`, `value`, `department_head_name`, `head_since`, `status`, `create_at`, `modified_at`) VALUES
(1, 'Accident And Emergency Department', 'This department works 24/7 and is equipped to deal with all sorts of emergencies. The patients are assessed according to the degree of injury or emergency and then provided immediate treatment before being sent to a specialised department for further treatment.', 'Dr. Mizanur Rahman(DX5627)', '13 January 2021', 'Active', '2021-01-17 23:09:51', '2021-01-18 17:08:32'),
(2, 'Aneasthetics', 'Doctors in this department administer anaesthesia for patients for various procedures and surgeries.', 'Dr. Hridoy Ghosh(DX72602)', NULL, 'Active', '2021-01-17 23:09:51', '2021-01-17 23:09:51'),
(3, 'CARDIOLOGY', 'The department as the name suggests deals with problems of the human heart or circulation. It treats people on an inpatient and outpatient basis', 'Dr. Hridoy Kumar(DX6266)', NULL, 'Active', '2021-01-17 23:09:51', '2021-01-17 23:09:51'),
(4, 'CRITICAL CARE', 'This department also known as the Intensive Care Unit (ICU) provides treatment for seriously ill patients.', 'Dr. Bimol Chondro Roy(DX5392)', NULL, 'Active', '2021-01-17 23:09:51', '2021-01-17 23:10:44'),
(5, 'EARS, NOSE AND THROAT', 'As the name suggests, this department deals with ailments concerned with the Ear, nose and throat and it includes treatment of a variety of ailments like: General ear, nose and throat diseases, Neck lumps, Cancers of the head and neck area, Tear duct problems, Facial skin lesions, Balance and hearing disorders, Snoring and sleep apnoea, ENT allergy problems, Salivary gland diseases, Voice disorders,ENT surgical procedures', 'Dr. Niloy Ahmed(DX6200)', NULL, 'Active', '2021-01-17 23:09:51', '2021-01-17 23:11:21'),
(6, 'GERIATRICS', 'This department is usually manned with doctors specialised in geriatric medicine', 'Dr. Abdul Kader(DX2099)', NULL, 'Active', '2021-01-17 23:09:51', '2021-01-17 23:11:44'),
(7, 'GASTROENTEROLOGY', 'This department deals with bowel related-medicine. It is usually run by specialist consultants and they investigate and treat upper and lower gastrointestinal diseases, as well as diseases of the pancreas and bile duct system. It also involves endoscopy and nutritional services.', 'Dr. Ahmed Reza(DX7220)', NULL, 'Active', '2021-01-17 23:09:51', '2021-01-17 23:12:02'),
(8, 'GENERAL SURGERY', 'This department as the name suggests includes a wide variety of surgical procedures that include:  Day surgery  Thyroid surgery  Kidney transplants  Colon surgery  Laparoscopic cholecystectomy (gall bladder removal)  Endoscopy  Breast surgery  Day surgeries see a lot of patients coming in for minor surgeries such as hernia repairs, piles, ... These procedures are normally performed by general surgeons and do not normally require special surgeons', 'Dr. Nilima Chowdhury(DX2201)', NULL, 'Active', '2021-01-17 23:09:51', '2021-01-17 23:12:41'),
(9, 'GYNAECOLOGY', 'This department deals with the investigation and treatment of problems of the female urinary tract and reproductive system.', 'Dr. Naznim Mahbub', '14 October 2020', 'Active', '2021-01-17 23:14:03', '2021-01-17 23:14:03'),
(10, 'HAEMATOLOGY', 'Haematology includes the study of etiology, diagnosis, treatment, prognosis, and prevention of blood diseases that affect the production of blood and its components, such as blood cells, hemoglobin, blood proteins, and the mechanism of coagulation.', 'Dr. Neyamot Ullah(DX7229)', '18 August 2020', 'Active', '2021-01-17 23:17:23', '2021-01-17 23:17:23'),
(11, 'MATERNITY/NEONATAL/PAEDIATRICS', 'All facilities concerning giving birth and child care is provided in this department. In some hospitals these can be divided into three different departments but most general hospitals provide this care under one department itself.', 'Dr. Ahsan Habib(DX62892)', '24 September 2020', 'Active', '2021-01-17 23:20:16', '2021-01-17 23:20:16'),
(12, 'NEUROLOGY', 'Neurology deals with the human nervous system. The doctors in this department investigate and treat patients for problems that affect their brain and spinal cord.', 'Dr. Anawar Haque', '18 November 2020', 'Active', '2021-01-17 23:21:51', '2021-01-17 23:21:51'),
(13, 'ONCOLOGY', 'This department investigates and treats all kinds of cancers and provides a wide range of chemotherapy treatments and radiotherapy for cancerous tumours and blood disorders.', 'Dr. Redwan Haldar(DX8038)', '05 January 2021', 'Inactive', '2021-01-17 23:24:52', '2021-01-17 23:24:52'),
(14, 'OPTHALMOLOGY', 'This department deals with the investigation and treatment of eye problems of adults and children.', 'Dr. Ahnaf-E-Noor(DX6202)', '12 May 2020', 'Inactive', '2021-01-17 23:26:02', '2021-01-17 23:27:25'),
(15, 'ORTHOPEDICS', 'This department deals with problems that affect the musculoskeletal system. That includes treating bones, muscles, tendons, ligaments, and nerves. Services include bone setting, surgeries to repair damaged bones or ligaments or tendons, replacing bones like hip replacement, knee cap replacement .', 'Dr. Sunil Kumar(DX2607)', '17 November 2020', 'Active', '2021-01-17 23:29:03', '2021-01-17 23:29:03'),
(16, 'UROLOGY', 'This department is usually a surgical department led by surgeons that perform certain specific services like: Flexible cystoscopy bladder checks, Urodynamic research, Prostate assessments and biopsies, Shockwave lithotripsy to break up kidney stones.', 'Dr. Abdul Hannan(DX2923)', '18 November 2020', 'Inactive', '2021-01-17 23:30:37', '2021-01-17 23:30:37'),
(17, 'PSYCHIATRY', 'This department deals with investigating and treating patients with a wide range of mental illnesses and disorders.', 'Dr. Mahmud Ullah Khan (DX2210)', '06 October 2020', 'Active', '2021-01-17 23:31:53', '2021-01-17 23:31:53'),
(18, 'OUTPATIENT', 'In this department people come to the hospital only for a consult and not admission. The patients seek medical advice from a specific department depending on their problem and doctors provide a prescription of medication for them to take for a certain period of time.', 'Dr. Ahmed Rahat', '24 December 2020', 'Active', '2021-01-17 23:33:08', '2021-01-17 23:33:08'),
(19, 'INPATIENT', 'This department admits patients at least overnight for treatment. Here a case history of the patient will be taken and the patient will have a case sheet in which his progress will be recorded.', 'Mr. Khan Abdullah', '05 January 2021', 'Active', '2021-01-17 23:37:14', '2021-01-17 23:37:14'),
(20, 'CENTRAL STERILIZATION UNIT', 'This department is in charge of keeping all the instruments used in the hospital clean and sterilised to avoid spreading of infections throughout the hospital.', 'Mr. Hemonto Singh(DX7393)', '14 May 2020', 'Active', '2021-01-17 23:43:13', '2021-01-17 23:43:13'),
(21, 'HOUSEKEEPING', 'This department is in charge of keeping the hospital clean and neat. It involves doing the laundry and cleaning all the rooms of the hospital and effectively disposing of medical waste according to strict hospital disposal procedures.', 'Mrs. Nilufar Yesmin', '26 December 2020', 'Active', '2021-01-17 23:44:39', '2021-01-17 23:44:39'),
(22, 'CATERING AND FOOD SERVICES', 'This department provides food services to inpatients, their families and staff of the hospital based on a nutritional menu provided by the Nutrition Department.', 'Mr. Fazi Abdullah', '14 October 2020', 'Active', '2021-01-17 23:45:29', '2021-01-17 23:45:29'),
(23, 'MEDICAL SOCIAL WORK', 'This department manned with medical social workers help patients and their families deal with a broad range of psychosocial issues and stresses related to coping with illness and maintaining health. This department addresses the challenges families face, increase accessibility to healthcare, and serves as a bridge between the doctors and the individual, family, and community.', 'Mr. Ansarul Haque', '14 January 2021', 'Inactive', '2021-01-17 23:46:47', '2021-01-17 23:46:47'),
(24, 'PHYSIOTHERAPY', 'This department aims at rehabilitating patients. Mostly linked to the orthopaedics department this department offers a wide range of body healing therapies that will help a patient resume normal functioning.', 'Dr. Monsul Alam (DX27202)', '16 December 2020', 'Active', '2021-01-17 23:47:55', '2021-01-17 23:47:55'),
(25, 'PHARMACY', 'Every hospital must be equipped with a pharmacy which provides drugs for the entire hospital. It not only provides medication for patients but also provides other drugs and instruments used by all the departments in the hospital for patient care or surgeries.', 'Mr. Nurul Islam', '13 January 2021', 'Active', '2021-01-17 23:50:54', '2021-01-18 00:06:38'),
(26, 'NUTRITION AND DIETITICS', 'This department is manned with specialist in nutrition and dietetics. They are assigned to provide professional advice on diet for hospital inpatient wards as well as outpatient departments.', 'Dr. Arifa Ahmed', '08 July 2020', 'Active', '2021-01-18 00:08:17', '2021-01-18 00:08:17'),
(27, 'MICROBIOLOGY', 'This department deals with the microbial and viral aspects of medicine.This department is very important as the number of hospital-acquired infections is on the rise.', 'Asraful Alam', '17 November 2020', 'Active', '2021-01-18 00:09:23', '2021-01-18 00:09:23'),
(28, 'Department of Radiology', 'Patients are sent to this department for the above mentioned services as other departments do not have the required devices to perform diagnostic imaging. After the service is provided, reports will be given about the imaging and that report will have to be handed over to the department from which the imaging was requested.', 'Ms. Afsa Alamgir', '18 November 2020', 'Active', '2021-01-18 00:10:46', '2021-01-18 00:10:46'),
(29, 'MEDICAL RECORDS', 'This department deals with recording, and maintaining all the records/files of inpatients as well as outpatients. It is with these records that medical statistics can be formulated and it serves as a reference for future purposes', 'Mr. Khairul Haque', '25 January 2019', 'Active', '2021-01-18 00:11:53', '2021-01-18 00:11:53'),
(30, 'MEDICAL MAINTENANCE & ENGINEERING', 'This department makes sure that the hospital is in operable condition. It makes plans and carries out various projects for the hospital.', 'Mr. Nazmul Hauladar', '27 August 2018', 'Active', '2021-01-18 00:13:40', '2021-01-18 00:13:40'),
(31, 'INFORMATION TECHNOLOGY & COMMUNICATION', 'All hospitals today use computers to keep track of patient records and other medically related affairs. Therefore this department is in charge of providing technical support as when needed and keep the systems updated and provide support when systems crash', 'Eng. Saifur Rahman', '09 December 2020', 'Active', '2021-01-18 00:14:58', '2021-01-18 00:14:58'),
(32, 'HUMAN RESOURCES', 'This department is given the objective of recruiting efficient human resources for the hospital. It also has the duty of creating policies and procedures that the staff have to follow in the hospital. It aims at ensuring employee satisfaction, good working conditions and provision of monetary and non monetary benefits for the employees.', 'Mr. Hanan Mia', '14 January 2021', 'Inactive', '2021-01-18 00:18:59', '2021-01-18 00:18:59'),
(33, 'FINANCE', 'This department looks after the financial aspects of the hospital. They make budgets, financial plans for the future and allocate financial resources to the various departments of the hospital for their upgradation.', 'Mr. Liton Mia', '13 October 2020', 'Active', '2021-01-18 00:20:52', '2021-01-18 00:20:52'),
(34, 'ADMINISTRATION', 'This department is in charge of looking after the day to day operations of the hospital. They look after all the paper work of hospital and ensure that every department follows administrative procedures of the hospital.', 'Md. Harun-Ar-Rashid', '07 September 2010', 'Active', '2021-01-18 00:21:59', '2021-01-18 00:21:59'),
(35, 'djf', 'jsjdklss', 'sjhdjf', '14 January 2021', 'Active', '2021-01-18 17:09:16', '2021-01-18 17:10:13');

-- --------------------------------------------------------

--
-- Table structure for table `cb_options`
--

CREATE TABLE `cb_options` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cb_users`
--

CREATE TABLE `cb_users` (
  `id` int NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `created_date` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `modified_date` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `cb_users`
--

INSERT INTO `cb_users` (`id`, `username`, `password`, `email`, `created_date`, `modified_date`) VALUES
(3, 'shakilofficial', '$2y$12$aMn0zRDrNJ0.AubbHLqDsu4f2y9Ao.5cBgZDDPffgaadrC2GK3T/O ', 'shakilofficial0@gmail.com', '2021-01-16 14:44:25', '');

-- --------------------------------------------------------

--
-- Table structure for table `cb_users_details`
--

CREATE TABLE `cb_users_details` (
  `id` int NOT NULL,
  `custom_id` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `date_of_birth` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `sub_department` varchar(255) DEFAULT NULL,
  `nationality` varchar(255) DEFAULT NULL,
  `educational_data` varchar(255) NOT NULL,
  `Others Data` varchar(255) NOT NULL,
  `cv_link` varchar(255) DEFAULT NULL,
  `profile_picture_link` varchar(255) DEFAULT NULL,
  `modified_date` varchar(255) NOT NULL,
  `modified_by` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cb_departments`
--
ALTER TABLE `cb_departments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cb_options`
--
ALTER TABLE `cb_options`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cb_users`
--
ALTER TABLE `cb_users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cb_users_details`
--
ALTER TABLE `cb_users_details`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cb_departments`
--
ALTER TABLE `cb_departments`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `cb_options`
--
ALTER TABLE `cb_options`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cb_users`
--
ALTER TABLE `cb_users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `cb_users_details`
--
ALTER TABLE `cb_users_details`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
