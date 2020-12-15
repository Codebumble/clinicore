/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
	// {
	//   url: "/apps/email",
	//   name: "Email",
	//   slug: "email",
	//   icon: "MailIcon",
	//   i18n: "Email",
	// },
	{
		url: null,
		name: 'Dashboard',
		tag: '2',
		tagColor: 'warning',
		icon: 'HomeIcon',
		i18n: 'Dashboard',
		submenu: [{
				url: '/dashboard/analytics',
				name: 'Analytics',
				slug: 'dashboard-analytics',
				i18n: 'Analytics'
			},
			{
				url: '/dashboard/ecommerce',
				name: 'eCommerce',
				slug: 'dashboard-ecommerce',
				i18n: 'eCommerce'
			}
		]
	},

	// ********************
	// Sectors Items
	// ********************

	{
		header: 'Apps',
		icon: 'PackageIcon',
		i18n: 'Apps',
		items: [{
				url: 'null',
				name: 'Sectors',
				slug: 'sectors',
				tag: '3',
				tagColor: 'success',
				icon: 'GitPullRequestIcon',
				i18n: 'Sectors',
				submenu: [{
						url: '/apps/addSector',
						name: 'Add-Sector',
						slug: 'add-sector',
						i18n: 'Add Sector'
					},
					{
						url: '/apps/modifySector',
						name: 'Modify Sector',
						slug: 'modify-sector',
						i18n: 'Modify Sector'
					},
					{
						url: '/apps/allSectors',
						name: 'All Sectors',
						slug: 'all-sectors',
						i18n: 'All Sectors'
					}
				]
			},

	// ********************
	// 'Services & Packages Items
	// ********************
			{
				url: 'null',
				name: 'Services & Packages',
				slug: 'services-and-packages',
				tag: '6',
				tagColor: 'success',
				icon: 'PackageIcon',
				i18n: 'Services & Packages',
				submenu: [{
						url: '/apps/addService',
						name: 'Add Service',
						slug: 'add-service',
						i18n: 'Add Service'
					},
					{
						url: '/apps/modifyService',
						name: 'Modify Service',
						slug: 'modify-service',
						i18n: 'Modify Service'
					},
					{
						url: '/apps/allServices',
						name: 'All Services',
						slug: 'all-services',
						i18n: 'All Services'
					},
					{
						url: '/apps/AddPackage',
						name: 'Add Package',
						slug: 'add-package',
						i18n: 'Add Package'
					},
					{
						url: '/apps/modifyPackage',
						name: 'modify Package',
						slug: 'modify-package',
						i18n: 'modify Package'
					},
					{
						url: '/apps/allPackages',
						name: 'All Packages',
						slug: 'all-packages',
						i18n: 'All Packages'
					},
				]
			},

	// ********************
	// Doctors Items
	// ********************

			{
				url: 'null',
				name: 'Doctors',
				slug: 'Doctors',
				tag: '3',
				tagColor: 'success',
				icon: 'UsersIcon',
				i18n: 'Doctors',
				submenu: [{
						url: '/apps/addDoctor',
						name: 'Add Doctor',
						slug: 'add-doctor',
						i18n: 'Add Doctor'
					},
					{
						url: '/apps/modifyDoctor',
						name: 'Modify Doctors',
						slug: 'modify-doctors',
						i18n: 'Modify Doctors'
					},
					{
						url: '/apps/allDoctors',
						name: 'All Doctors',
						slug: 'all-doctors',
						i18n: 'All Doctors'
					}
				]
			},

	// ********************
	// Patients Items
	// ********************

			{
				url: 'null',
				name: 'Patients',
				slug: 'Patients',
				tag: '5',
				tagColor: 'success',
				icon: 'SmileIcon',
				i18n: 'Patients',
				submenu: [{
						url: '/apps/addPatient',
						name: 'Add Patients',
						slug: 'add-patients',
						i18n: 'Add Patients'
					},
					{
						url: '/apps/modifyPatient',
						name: 'Modify Patients',
						slug: 'modify-patients',
						i18n: 'Modify Patients'
					},
					{
						url: '/apps/allPatient',
						name: 'All Patients',
						slug: 'all-patients',
						i18n: 'All Patients'
					},
					{
						url: '/apps/addPatientDocs',
						name: 'Add Patient Document',
						slug: 'add-patient-doc',
						i18n: 'Add Document'
					},
					{
						url: '/apps/allDocs',
						name: 'All Patient Documents',
						slug: 'all-patient-docs',
						i18n: 'All Documents'
					}
				]
			},

	// ********************
	// Admit Patients Items
	// ********************

			{
				url: 'null',
				name: 'Admit Patients',
				slug: 'admit-patients',
				tag: '2',
				tagColor: 'success',
				icon: 'ThermometerIcon',
				i18n: 'Admit Patients',
				submenu: [{
						url: '/apps/admitPatients',
						name: 'Admit Patients',
						slug: 'admit-patients',
						i18n: 'Admit Patients'
					},
					{
						url: '/apps/allAdmittedPatients',
						name: 'All Admitted Patients',
						slug: 'all-admitted-patients',
						i18n: 'All Admitted Patients'
					},
				]
			},

	// ********************
	// Serial Items
	// ********************

			{
				url: 'null',
				name: 'Serial',
				slug: 'Serial',
				tag: '3',
				tagColor: 'success',
				icon: 'ListIcon',
				i18n: 'Serial',
				submenu: [{
						url: '/apps/addSerial',
						name: 'Add Serial',
						slug: 'add-patients',
						i18n: 'Add Serial'
					},
					{
						url: '/apps/allSerial',
						name: 'All Serial',
						slug: 'all-serial',
						i18n: 'All Serial'
					},
					{
						url: '/apps/modifySerial',
						name: 'Modify Serial',
						slug: 'modify-serial',
						i18n: 'Modify Serial'
					}
				]
			},

	// ********************
	// Appointment Items
	// ********************

			{
				url: 'null',
				name: 'Appointment',
				slug: 'Appointment',
				tag: '5',
				tagColor: 'success',
				icon: 'CoffeeIcon',
				i18n: 'Appointment',
				submenu: [{
						url: '/apps/addAppointment',
						name: 'Add Appointment',
						slug: 'add-appointment',
						i18n: 'Add Appointment'
					},
					{
						url: '/apps/allAppointments',
						name: 'All Appointment',
						slug: 'all-appointment',
						i18n: 'All Appointment'
					},
					{
						url: '/apps/modifyAppointment',
						name: 'Modify Appointment',
						slug: 'modify-appointment',
						i18n: 'Modify Appointment'
					},
					{
						url: '/apps/assignedBy',
						name: 'Assigned By',
						slug: 'appointment-assigned-by',
						i18n: 'Appoin. Assigned By'
					},
					{
						url: '/apps/assignedTo',
						name: 'Assigned to Doctor',
						slug: 'assigned-to-doctor',
						i18n: 'Assigned To Doctor'
					}
				]
			},

	// ********************
	// Prescription Items
	// ********************

			{
				url: 'null',
				name: 'Prescription',
				slug: 'Prescription',
				tag: '3',
				tagColor: 'success',
				icon: 'FileTextIcon',
				i18n: 'Prescription',
				submenu: [{
						url: '/apps/addPrescription',
						name: 'Add Prescription',
						slug: 'add-prescription',
						i18n: 'Add Prescription'
					},
					{
						url: '/apps/modifyPrescription',
						name: 'Modify Prescription',
						slug: 'modify-Prescription',
						i18n: 'Modify Prescription'
					},
					{
						url: '/apps/allPrescription',
						name: 'All Prescription',
						slug: 'all-prescription',
						i18n: 'All Prescription'
					}
				]
			},

	// ********************
	// Medical Records Items
	// ********************

			{
				url: 'null',
				name: 'Medical Records',
				slug: 'medical-records',
				tag: '3',
				tagColor: 'success',
				icon: 'LayersIcon',
				i18n: 'Medical Records',
				submenu: [{
						url: '/apps/addRecords',
						name: 'Add Records',
						slug: 'add-records',
						i18n: 'Add Records'
					},
					{
						url: '/apps/modifyRecords',
						name: 'Modify Records',
						slug: 'modify-records',
						i18n: 'Modify Records'
					},
					{
						url: '/apps/allRecords',
						name: 'All Records',
						slug: 'all-records',
						i18n: 'All Records'
					}
				]
			},

	// ********************
	// Account Manager Items
	// ********************

			{
				url: 'null',
				name: 'Account Manager',
				slug: 'account-manager',
				tag: '8',
				tagColor: 'success',
				icon: 'TrendingUpIcon',
				i18n: 'Account Manager',
				submenu: [{
						url: '/apps/addAccount',
						name: 'Add Account',
						slug: 'add-account',
						i18n: 'Add Account'
					},
					{
						url: '/apps/modifyAccount',
						name: 'Modify Account',
						slug: 'modify-account',
						i18n: 'Modify Account'
					},
					{
						url: '/apps/allAccounts',
						name: 'All Accounts',
						slug: 'all-accounts',
						i18n: 'All Accounts'
					},
					{
						url: '/apps/addBill',
						name: 'Add Bill',
						slug: 'add-bill',
						i18n: 'Add Bill'
					},
					{
						url: '/apps/allBills',
						name: 'All Bills',
						slug: 'all-bills',
						i18n: 'All Bills'
					},
					{
						url: '/apps/debits',
						name: 'Debits',
						slug: 'debits',
						i18n: 'Debits'
					},
					{
						url: '/apps/credits',
						name: 'Credits',
						slug: 'credits',
						i18n: 'Credits'
					},
					{
						url: '/apps/accountManagerAnalytics',
						name: 'Accounts Analytics',
						slug: 'accounts-analytics',
						i18n: 'Accounts Analytics'
					},
				]
			},

	// ********************
	// Invoices Items
	// ********************

			{
				url: 'null',
				name: 'Invoices',
				slug: 'invoices',
				tag: '3',
				tagColor: 'success',
				icon: 'AlertCircleIcon',
				i18n: 'Invoices',
				submenu: [{
						url: '/apps/addInvoices',
						name: 'Add Invoices',
						slug: 'add-invoices',
						i18n: 'Add Invoices'
					},
					{
						url: '/apps/removeInvoices',
						name: 'Remove Invoices',
						slug: 'remove-invoices',
						i18n: 'Remove Invoices'
					},
					{
						url: '/apps/allInvoices',
						name: 'All Invoices',
						slug: 'all-invoices',
						i18n: 'All Invoices'
					},
				]
			},

	// ********************
	// Insurance Items
	// ********************

			{
				url: 'null',
				name: 'Insurance',
				slug: 'insurance',
				tag: '5',
				tagColor: 'success',
				icon: 'AnchorIcon',
				i18n: 'Insurance',
				submenu: [{
						url: '/apps/addInsurance',
						name: 'Add Insurance',
						slug: 'add-insurance',
						i18n: 'Add Insurance'
					},
					{
						url: '/apps/modifyInsurance',
						name: 'Modify Insurance',
						slug: 'modify-insurance',
						i18n: 'Modify Insurance'
					},
					{
						url: '/apps/allInsurance',
						name: 'All Insurance',
						slug: 'all-insurance',
						i18n: 'All Insurance'
					},
					{
						url: '/apps/addLimitApproval',
						name: 'Add Limit Approval',
						slug: 'add-limit-approval',
						i18n: 'Add Limit Approval'
					},
					{
						url: '/apps/AllApproval',
						name: 'All Approval',
						slug: 'all-approval',
						i18n: 'All Approval'
					},
				]
			},

	// ********************
	// Payments Items
	// ********************

			{
				url: 'null',
				name: 'Payments',
				slug: 'payments',
				tag: '4',
				tagColor: 'success',
				icon: 'DollarSignIcon',
				i18n: 'Payments',
				submenu: [{
						url: '/apps/addPayment',
						name: 'Add Payment',
						slug: 'add-payment',
						i18n: 'Add Payment'
					},
					{
						url: '/apps/paymentList',
						name: 'Payment List',
						slug: 'payment-list',
						i18n: 'Payment List'
					},
					{
						url: '/apps/addAdvancePayment',
						name: 'Add Advance Payment',
						slug: 'add-advance-payment',
						i18n: 'Add Advance Payment'
					},
					{
						url: '/apps/allAdvancePayment',
						name: 'All Advance Payment',
						slug: 'all-advance-payment',
						i18n: 'All Advance Payment'
					},
				]
			},

	// ********************
	// HR Dept. Items
	// ********************

			{
				url: 'null',
				name: 'HR Dept.',
				slug: 'hr-dept',
				tag: '8',
				tagColor: 'success',
				icon: 'PieChartIcon',
				i18n: 'HR Dept.',
				submenu: [{
						url: '/apps/addEmployee',
						name: 'Add Employee',
						slug: 'add-employee',
						i18n: 'Add Employee'
					},
					{
						url: '/apps/accountant',
						name: 'Accountant',
						slug: 'accountant',
						i18n: 'Accountant'
					},
					{
						url: '/apps/laboratorists',
						name: 'Laboratorists',
						slug: 'laboratorists',
						i18n: 'Laboratorists'
					},
					{
						url: '/apps/nurse',
						name: 'Nurses',
						slug: 'nurses',
						i18n: 'Nurses'
					},
					{
						url: '/apps/pharmacist',
						name: 'Pharmacist',
						slug: 'pharmacist',
						i18n: 'Pharmacist'
					},
					{
						url: '/apps/receptionist',
						name: 'Receptionist',
						slug: 'receptionist',
						i18n: 'Receptionist'
					},
					{
						url: '/apps/representative',
						name: 'Representative',
						slug: 'representative',
						i18n: 'Representative'
					},
					{
						url: '/apps/recordManager',
						name: 'Record Manager',
						slug: 'record-manager',
						i18n: 'Record Manager'
					},
				]
			},

	// ********************
	// Bed Management Items
	// ********************

			{
				url: 'null',
				name: 'Bed Management',
				slug: 'bed-management',
				tag: '5',
				tagColor: 'success',
				icon: 'ColumnsIcon',
				i18n: 'Bed Management',
				submenu: [{
						url: '/apps/addBed',
						name: 'Add Bed',
						slug: 'add-bed',
						i18n: 'Add Bed'
					},
					{
						url: '/apps/allocateBed',
						name: 'Allocate Bed',
						slug: 'allocate-bed',
						i18n: 'Allocate Bed'
					},
					{
						url: '/apps/allocatedBed',
						name: 'Allocated Bed',
						slug: 'allocated-bed',
						i18n: 'Allocated Bed'
					},
					{
						url: '/apps/allBeds',
						name: 'All Beds',
						slug: 'all-beds',
						i18n: 'All Beds'
					},
					{
						url: '/apps/bedAnalytics',
						name: 'Bed Analytics',
						slug: 'bed-analytics',
						i18n: 'Bed Analytics'
					},
				]
			},

	// ********************
	// Pharmacy Items
	// ********************

			{
				url: 'null',
				name: 'Pharmacy',
				slug: 'pharmacy',
				tag: '4',
				tagColor: 'success',
				icon: 'ShoppingBagIcon',
				i18n: 'Pharmacy',
				submenu: [{
						url: '/apps/addCategory',
						name: 'Add Category',
						slug: 'add-category',
						i18n: 'Add Category'
					},
					{
						url: '/apps/allCategories',
						name: 'All Categories',
						slug: 'all-categories',
						i18n: 'All Categories'
					},
					{
						url: '/apps/addMedicine',
						name: 'Add Medicine',
						slug: 'add-medicine',
						i18n: 'Add Medicine'
					},
					{
						url: '/apps/allMedicines',
						name: 'All Medicines',
						slug: 'all-medicines',
						i18n: 'All Medicines'
					},
				]
			},

	// ********************
	// Hospital Activities Items
	// ********************

			{
				url: 'null',
				name: 'Hospital Activities',
				slug: 'hospital-activities',
				tag: '8',
				tagColor: 'success',
				icon: 'ActivityIcon',
				i18n: 'Hospital Activities',
				submenu: [{
						url: '/apps/addBirthReport',
						name: 'Add Birth Report',
						slug: 'add-birth-report',
						i18n: 'Add Birth Report'
					},
					{
						url: '/apps/addDeathReport',
						name: 'Add Death Report',
						slug: 'add-death-report',
						i18n: 'Add Death Report'
					},
					{
						url: '/apps/allBirthReports',
						name: 'All Birth Reports',
						slug: 'all-birth-reports',
						i18n: 'All Birth Reports'
					},
					{
						url: '/apps/allDeathReports',
						name: 'All Death Reports',
						slug: 'all-death-reports',
						i18n: 'All Death Reports'
					},
					{
						url: '/apps/addOperationReport',
						name: 'Add Operation Report',
						slug: 'add-operation-report',
						i18n: 'Add Operation Report'
					},
					{
						url: '/apps/allOperationReports',
						name: 'All Operation Reports',
						slug: 'all-operation-reports',
						i18n: 'All Operation Reports'
					},
					{
						url: '/apps/addInvestigationReport',
						name: 'Add Investigation Report',
						slug: 'add-investigation-report',
						i18n: 'Add Investigation Report'
					},
					{
						url: '/apps/allInvestigationReports',
						name: 'All Investigation Reports',
						slug: 'all-investigation-reports',
						i18n: 'All Investigation Reports'
					},
				]
			},

	// ********************
	// Notice Board Items
	// ********************

			{
				url: 'null',
				name: 'Notice Board',
				slug: 'notice-board',
				tag: '3',
				tagColor: 'success',
				icon: 'ClipboardIcon',
				i18n: 'Notice Board',
				submenu: [{
						url: '/apps/addNotice',
						name: 'Add Notice',
						slug: 'add-notice',
						i18n: 'Add Notice'
					},
					{
						url: '/apps/modifyNotice',
						name: 'Modify Notice',
						slug: 'modify-notice',
						i18n: 'Modify Notice'
					},
					{
						url: '/apps/allNotice',
						name: 'All Notice',
						slug: 'all-notice',
						i18n: 'All Notice'
					},
				]
			},

	// ********************
	// App Settings Items
	// ********************

			{
				url: 'null',
				name: 'App Settings',
				slug: 'app-settings',
				tag: '4',
				tagColor: 'success',
				icon: 'SettingsIcon',
				i18n: 'App Settings',
				submenu: [
					{
						url: '/apps/changeInformation',
						name: 'Change Information',
						slug: 'change-information',
						i18n: 'Chagne Information'
					},
					{
						url: '/apps/language',
						name: 'Language',
						slug: 'language',
						i18n: 'Language'
					},
					{
						url: '/apps/smsGateway',
						name: 'SMS Gateway',
						slug: 'sms-gateway',
						i18n: 'SMS Gateway'
					},
					{
						url: '/apps/mailConfig',
						name: 'Mail Config',
						slug: 'mail-config',
						i18n: 'Mail Config'
					},
				]
			},

	// ********************
	// SMS Items
	// ********************

			{
				url: 'null',
				name: 'SMS',
				slug: 'sms',
				tag: '5',
				tagColor: 'success',
				icon: 'MessageSquareIcon',
				i18n: 'SMS',
				submenu: [
					{
						url: '/apps/smsTemplate',
						name: 'SMS Template',
						slug: 'sms-template',
						i18n: 'SMS Template'
					},
					{
						url: '/apps/scheduleSms',
						name: 'Schedule SMS',
						slug: 'schedule-sms',
						i18n: 'Schedule SMS'
					},
					{
						url: '/apps/sendCustomSms',
						name: 'Send Custom SMS',
						slug: 'send-custom-sms',
						i18n: 'Send Custom SMS'
					},
					{
						url: '/apps/customSmsList',
						name: 'Custom SMS List',
						slug: 'custom-sms-list',
						i18n: 'Custom SMS List'
					},
					{
						url: '/apps/usersSms',
						name: 'Users SMS',
						slug: 'users-sms',
						i18n: 'Users SMS'
					},
				]
			},

	// ********************
	// Messages Items
	// ********************

			{
				url: 'null',
				name: 'Messages',
				slug: 'messages',
				tag: '3',
				tagColor: 'success',
				icon: 'MessageCircleIcon',
				i18n: 'Messages',
				submenu: [
					{
						url: '/apps/newMessage',
						name: 'New Message',
						slug: 'new-message',
						i18n: 'New Message'
					},
					{
						url: '/apps/messageInbox',
						name: 'Message Inbox',
						slug: 'message-inbox',
						i18n: 'Message Inbox'
					},
					{
						url: '/apps/sentMessages',
						name: 'Sent Messages',
						slug: 'sent-messages',
						i18n: 'Sent Messages'
					},
				]
			},

	// ********************
	// Mail Items
	// ********************

			{
				url: 'null',
				name: 'Mail',
				slug: 'mail',
				tag: '3',
				tagColor: 'success',
				icon: 'MailIcon',
				i18n: 'Mail',
				submenu: [
					{
						url: '/apps/composeMail',
						name: 'Compose Mail',
						slug: 'compose-mail',
						i18n: 'Compose Mail'
					},
					{
						url: '/apps/mailInbox',
						name: 'Mail Inbox',
						slug: 'mail-inbox',
						i18n: 'Mail Inbox'
					},
					{
						url: '/apps/sentMail',
						name: 'Sent Mail',
						slug: 'sent-mail',
						i18n: 'Sent Mail'
					},
				]
			},
			{
				url: '/apps/chat',
				name: 'Chat',
				slug: 'chat',
				icon: 'MessageSquareIcon',
				i18n: 'Chat'
			},
			{
				url: '/apps/todo',
				name: 'Todo',
				slug: 'todo',
				icon: 'CheckSquareIcon',
				i18n: 'Todo'
			},
			{
				url: '/apps/calendar/vue-simple-calendar',
				name: 'Calendar',
				slug: 'calendar-simple-calendar',
				icon: 'CalendarIcon',
				tagColor: 'success',
				i18n: 'Calendar'
			},
			{
				url: null,
				name: 'eCommerce',
				icon: 'ShoppingCartIcon',
				i18n: 'eCommerce',
				submenu: [{
						url: '/apps/eCommerce/shop',
						name: 'Shop',
						slug: 'ecommerce-shop',
						i18n: 'Shop'
					},
					{
						url: '/apps/eCommerce/item/',
						name: 'Item Details',
						slug: 'ecommerce-item-detail-view',
						i18n: 'ItemDetails'
					},
					{
						url: '/apps/eCommerce/wish-list',
						name: 'Wish List',
						slug: 'ecommerce-wish-list',
						i18n: 'WishList'
					},
					{
						url: '/apps/eCommerce/checkout',
						name: 'Checkout',
						slug: 'ecommerce-checkout',
						i18n: 'Checkout'
					}
				]
			},
			{
				url: null,
				name: 'User',
				icon: 'UserIcon',
				i18n: 'User',
				submenu: [{
						url: '/apps/user/user-list',
						name: 'List',
						slug: 'app-user-list',
						i18n: 'List'
					},
					{
						url: '/apps/user/user-view/268',
						name: 'View',
						slug: 'app-user-view',
						i18n: 'View'
					},
					{
						url: '/apps/user/user-edit/268',
						name: 'Edit',
						slug: 'app-user-edit',
						i18n: 'Edit'
					}
				]
			}
		]
	},
	{
		header: 'UI',
		icon: 'LayersIcon',
		i18n: 'UI',
		items: [{
				url: null,
				name: 'Data List',
				tag: 'new',
				tagColor: 'primary',
				icon: 'ListIcon',
				i18n: 'DataList',
				submenu: [{
						url: '/ui-elements/data-list/list-view',
						name: 'List View',
						slug: 'data-list-list-view',
						i18n: 'ListView'
					},
					{
						url: '/ui-elements/data-list/thumb-view',
						name: 'Thumb View',
						slug: 'data-list-thumb-view',
						i18n: 'ThumbView'
					}
				]
			},
			{
				url: null,
				name: 'Grid',
				icon: 'LayoutIcon',
				i18n: 'Grid',
				submenu: [{
						url: '/ui-elements/grid/vuesax',
						name: 'Vuesax',
						slug: 'grid-vuesax',
						i18n: 'Vuesax'
					},
					{
						url: '/ui-elements/grid/tailwind',
						name: 'Tailwind',
						slug: 'grid-tailwind',
						i18n: 'Tailwind'
					}
				]
			},
			{
				url: '/ui-elements/colors',
				name: 'Colors',
				slug: 'colors',
				icon: 'DropletIcon',
				i18n: 'Colors'
			},
			{
				url: null,
				name: 'Card',
				icon: 'CreditCardIcon',
				i18n: 'Card',
				submenu: [{
						url: '/ui-elements/card/basic',
						name: 'Basic',
						slug: 'basic-cards',
						i18n: 'Basic'
					},
					{
						url: '/ui-elements/card/statistics',
						name: 'Statistics',
						slug: 'statistics-cards',
						i18n: 'Statistics'
					},
					{
						url: '/ui-elements/card/analytics',
						name: 'Analytics',
						slug: 'analytics-cards',
						i18n: 'Analytics'
					},
					{
						url: '/ui-elements/card/card-actions',
						name: 'Card Actions',
						slug: 'card-actions',
						i18n: 'CardActions'
					},
					{
						url: '/ui-elements/card/card-colors',
						name: 'Card Colors',
						slug: 'card-colors',
						i18n: 'CardColors'
					}
				]
			},
			{
				url: null,
				name: 'Components',
				icon: 'ArchiveIcon',
				i18n: 'Components',
				submenu: [{
						url: '/components/alert',
						name: 'Alert',
						slug: 'component-alert',
						i18n: 'Alert'
					},
					{
						url: '/components/avatar',
						name: 'Avatar',
						slug: 'component-avatar',
						i18n: 'Avatar'
					},
					{
						url: '/components/breadcrumb',
						name: 'Breadcrumb',
						slug: 'component-breadcrumb',
						i18n: 'Breadcrumb'
					},
					{
						url: '/components/button',
						name: 'Button',
						slug: 'component-button',
						i18n: 'Button'
					},
					{
						url: '/components/button-group',
						name: 'Button Group',
						slug: 'component-button-group',
						i18n: 'ButtonGroup'
					},
					{
						url: '/components/chip',
						name: 'Chip',
						slug: 'component-chip',
						i18n: 'Chip'
					},
					{
						url: '/components/collapse',
						name: 'Collapse',
						slug: 'component-collapse',
						i18n: 'Collapse'
					},
					{
						url: '/components/dialogs',
						name: 'Dialogs',
						slug: 'component-dialog',
						i18n: 'Dialogs'
					},
					{
						url: '/components/divider',
						name: 'Divider',
						slug: 'component-divider',
						i18n: 'Divider'
					},
					{
						url: '/components/dropdown',
						name: 'DropDown',
						slug: 'component-drop-down',
						i18n: 'DropDown'
					},
					{
						url: '/components/list',
						name: 'List',
						slug: 'component-list',
						i18n: 'List'
					},
					{
						url: '/components/loading',
						name: 'Loading',
						slug: 'component-loading',
						i18n: 'Loading'
					},
					{
						url: '/components/navbar',
						name: 'Navbar',
						slug: 'component-navbar',
						i18n: 'Navbar'
					},
					{
						url: '/components/notifications',
						name: 'Notifications',
						slug: 'component-notifications',
						i18n: 'Notifications'
					},
					{
						url: '/components/pagination',
						name: 'Pagination',
						slug: 'component-pagination',
						i18n: 'Pagination'
					},
					{
						url: '/components/popup',
						name: 'Popup',
						slug: 'component-popup',
						i18n: 'Popup'
					},
					{
						url: '/components/progress',
						name: 'Progress',
						slug: 'component-progress',
						i18n: 'Progress'
					},
					{
						url: '/components/sidebar',
						name: 'Sidebar',
						slug: 'component-sidebar',
						i18n: 'Sidebar'
					},
					{
						url: '/components/slider',
						name: 'Slider',
						slug: 'component-slider',
						i18n: 'Slider'
					},
					{
						url: '/components/tabs',
						name: 'Tabs',
						slug: 'component-tabs',
						i18n: 'Tabs'
					},
					{
						url: '/components/tooltip',
						name: 'Tooltip',
						slug: 'component-tooltip',
						i18n: 'Tooltip'
					},
					{
						url: '/components/upload',
						name: 'Upload',
						slug: 'component-upload',
						i18n: 'Upload'
					}
				]
			},
			{
				url: null,
				name: 'Extensions',
				icon: 'PlusCircleIcon',
				i18n: 'Extensions',
				submenu: [{
						url: '/extensions/select',
						name: 'Select',
						icon: 'PocketIcon',
						slug: 'extra-component-select',
						i18n: 'Select'
					},
					{
						url: '/extensions/quill-editor',
						name: 'Quill Editor',
						icon: 'EditIcon',
						slug: 'extra-component-quill-editor',
						i18n: 'QuillEditor'
					},
					{
						url: '/extensions/drag-and-drop',
						name: 'Drag & Drop',
						icon: 'DropletIcon',
						slug: 'extra-component-drag-and-drop',
						i18n: 'DragAndDrop'
					},
					{
						url: '/extensions/datepicker',
						name: 'Datepicker',
						icon: 'CalendarIcon',
						slug: 'extra-component-datepicker',
						i18n: 'Datepicker'
					},
					{
						url: '/extensions/datetime-picker',
						name: 'Datetime Picker',
						icon: 'ClockIcon',
						slug: 'extra-component-datetime-picker',
						i18n: 'DatetimePicker'
					},
					{
						url: '/extensions/access-control',
						name: 'Access Control',
						slug: 'extra-component-access-control',
						i18n: 'AccessControl'
					},
					{
						url: '/extensions/i18n',
						name: 'I18n',
						slug: 'extra-component-i18n',
						i18n: 'I18n'
					},
					{
						url: '/extensions/carousel',
						name: 'Carousel',
						icon: 'LayersIcon',
						slug: 'extra-component-carousel',
						i18n: 'Carousel'
					},
					{
						url: '/extensions/clipboard',
						name: 'Clipboard',
						icon: 'CopyIcon',
						slug: 'extra-component-clipboard',
						i18n: 'Clipboard'
					},
					{
						url: '/extensions/context-menu',
						name: 'Context Menu',
						icon: 'MoreHorizontalIcon',
						slug: 'extra-component-context-menu',
						i18n: 'ContextMenu'
					},
					{
						url: '/extensions/star-ratings',
						name: 'Star Ratings',
						icon: 'StarIcon',
						slug: 'extra-component-star-ratings',
						i18n: 'StarRatings'
					},
					{
						url: '/extensions/autocomplete',
						name: 'Autocomplete',
						icon: 'Edit3Icon',
						slug: 'extra-component-autocomplete',
						i18n: 'Autocomplete'
					},
					{
						url: '/extensions/tree',
						name: 'Tree',
						icon: 'GitPullRequestIcon',
						slug: 'extra-component-tree',
						i18n: 'Tree'
					},
					// {
					//   name: "Import/Export",
					//   i18n: "Import/Export",
					//   submenu: [

					//   ]
					// },
					{
						url: '/import-export/import',
						name: 'Import',
						icon: 'HomeIcon',
						slug: 'import',
						i18n: 'Import'
					},
					{
						url: '/import-export/export',
						name: 'Export',
						icon: 'HomeIcon',
						slug: 'export',
						i18n: 'Export'
					},
					{
						url: '/import-export/export-selected',
						name: 'Export Selected',
						icon: 'HomeIcon',
						slug: 'export-selected',
						i18n: 'ExportSelected'
					}
				]
			}
		]
	},
	{
		header: 'Forms & Table',
		icon: 'Edit3Icon',
		i18n: 'FormsAndTable',
		items: [{
				url: null,
				name: 'Form Elements',
				icon: 'CopyIcon',
				i18n: 'FormElements',
				submenu: [
					// {
					//  url: '/forms/form-elements/select',
					//  name: "Select",
					//  slug: "form-element-select",
					//  i18n: "Select",
					// },
					{
						url: '/forms/form-elements/switch',
						name: 'Switch',
						slug: 'form-element-switch',
						i18n: 'Switch'
					},
					{
						url: '/forms/form-elements/checkbox',
						name: 'Checkbox',
						slug: 'form-element-checkbox',
						i18n: 'Checkbox'
					},
					{
						url: '/forms/form-elements/radio',
						name: 'Radio',
						slug: 'form-element-radio',
						i18n: 'Radio'
					},
					{
						url: '/forms/form-elements/input',
						name: 'Input',
						slug: 'form-element-input',
						i18n: 'Input'
					},
					{
						url: '/forms/form-elements/number-input',
						name: 'Number Input',
						slug: 'form-element-number-input',
						i18n: 'NumberInput'
					},
					{
						url: '/forms/form-elements/textarea',
						name: 'Textarea',
						slug: 'form-element-textarea',
						i18n: 'Textarea'
					}
				]
			},
			{
				url: '/forms/form-layouts',
				name: 'Form Layouts',
				icon: 'PackageIcon',
				slug: 'forms-form-layouts',
				i18n: 'FormLayouts'
			},
			{
				url: '/forms/form-wizard',
				name: 'Form Wizard',
				icon: 'PackageIcon',
				slug: 'extra-component-form-wizard',
				i18n: 'FormWizard'
			},
			{
				url: '/forms/form-validation',
				name: 'Form Validation',
				icon: 'CheckCircleIcon',
				slug: 'extra-component-form-validation',
				i18n: 'FormValidation'
			},
			{
				url: '/forms/form-input-group',
				name: 'Form Input Group',
				icon: 'MenuIcon',
				slug: 'extra-component-form-input-group',
				i18n: 'FormInputGroup'
			},
			{
				url: '/ui-elements/table',
				name: 'Table',
				slug: 'table',
				icon: 'GridIcon',
				i18n: 'Table'
			},
			{
				url: '/ui-elements/ag-grid-table',
				name: 'agGrid Table',
				slug: 'ag-grid-table',
				icon: 'GridIcon',
				i18n: 'agGridTable'
			}
		]
	},
	{
		header: 'Pages',
		icon: 'FileIcon',
		i18n: 'Pages',
		items: [{
				url: '/pages/profile',
				slug: 'page-profile',
				name: 'Profile',
				icon: 'UserIcon',
				i18n: 'Profile'
			},
			{
				url: '/pages/user-settings',
				slug: 'page-user-settings',
				name: 'User Settings',
				icon: 'SettingsIcon',
				i18n: 'UserSettings'
			},
			{
				url: '/pages/faq',
				slug: 'page-faq',
				name: 'FAQ',
				icon: 'HelpCircleIcon',
				i18n: 'FAQ'
			},
			{
				url: '/pages/knowledge-base',
				slug: 'page-knowledge-base',
				name: 'Knowledge Base',
				icon: 'InfoIcon',
				i18n: 'KnowledgeBase'
			},
			{
				url: '/pages/search',
				slug: 'page-search',
				name: 'Search',
				icon: 'SearchIcon',
				i18n: 'Search'
			},
			{
				url: '/pages/invoice',
				slug: 'page-invoice',
				name: 'Invoice',
				icon: 'InfoIcon',
				i18n: 'Invoice'
			},
			{
				url: null,
				name: 'Authentication',
				icon: 'PieChartIcon',
				i18n: 'Authentication',
				submenu: [{
						url: '/pages/login',
						name: 'Login',
						slug: 'pages-login',
						i18n: 'Login',
						target: '_blank'
					},
					{
						url: '/pages/register',
						name: 'Register',
						slug: 'pages-register',
						i18n: 'Register',
						target: '_blank'
					},
					{
						url: '/pages/forgot-password',
						name: 'Forgot Password',
						slug: 'pages-forgot-password',
						i18n: 'ForgotPassword',
						target: '_blank'
					},
					{
						url: '/pages/reset-password',
						name: 'Reset Password',
						slug: 'pages-reset-password',
						i18n: 'ResetPassword',
						target: '_blank'
					},
					{
						url: '/pages/lock-screen',
						name: 'Lock Screen',
						slug: 'pages-lock-screen',
						i18n: 'LockScreen',
						target: '_blank'
					}
				]
			},
			{
				url: null,
				name: 'Miscellaneous',
				icon: 'CoffeeIcon',
				i18n: 'Miscellaneous',
				submenu: [{
						url: '/pages/not-authorized',
						name: 'Not Authorized',
						slug: 'page-not-authorized',
						icon: 'XCircleIcon',
						i18n: 'NotAuthorized',
						target: '_blank'
					},
					{
						url: '/pages/maintenance',
						name: 'Maintenance',
						slug: 'page-maintenance',
						icon: 'AnchorIcon',
						i18n: 'Maintenance',
						target: '_blank'
					},
					{
						url: '/pages/comingsoon',
						slug: 'page-coming-soon',
						name: 'Coming Soon',
						icon: 'ClockIcon',
						i18n: 'ComingSoon',
						target: '_blank'
					},
					{
						url: '/pages/error-404',
						name: '404',
						slug: 'page-error-404',
						i18n: '404',
						target: '_blank'
					},
					{
						url: '/pages/error-500',
						name: '500',
						slug: 'page-error-500',
						i18n: '500',
						target: '_blank'
					}
				]
			}
		]
	},
	{
		header: 'Charts & Maps',
		icon: 'PieChartIcon',
		i18n: 'ChartsAndMaps',
		items: [{
				url: null,
				name: 'Charts',
				icon: 'PieChartIcon',
				tag: '3',
				tagColor: 'success',
				i18n: 'Charts',
				submenu: [{
						url: '/charts-and-maps/charts/apex-charts',
						name: 'Apex Charts',
						slug: 'extra-component-charts-apex-charts',
						i18n: 'ApexCharts'
					},
					{
						url: '/charts-and-maps/charts/echarts',
						name: 'echarts',
						slug: 'extra-component-charts-echarts',
						i18n: 'echarts'
					}
				]
			},
			{
				url: '/charts-and-maps/maps/google-map',
				name: 'Google Map',
				icon: 'MapIcon',
				slug: 'extra-component-maps-google-map',
				i18n: 'GoogleMap'
			}
		]
	},
	{
		header: 'Others',
		icon: 'MoreHorizontalIcon',
		i18n: 'Others',
		items: [{
				url: null,
				name: 'Menu Levels',
				icon: 'MenuIcon',
				i18n: 'MenuLevels',
				submenu: [{
						url: null,
						name: 'Menu Level 2.1',
						i18n: 'MenuLevel2p1'
					},
					{
						url: null,
						name: 'Menu Level 2.2',
						i18n: 'MenuLevel2p2',
						submenu: [{
								url: null,
								name: 'Menu Level 3.1',
								i18n: 'MenuLevel3p1'
							},
							{
								url: null,
								name: 'Menu Level 3.2',
								i18n: 'MenuLevel3p2'
							}
						]
					}
				]
			},
			{
				url: null,
				name: 'Disabled Menu',
				icon: 'EyeOffIcon',
				i18n: 'DisabledMenu',
				isDisabled: true
			},
			{
				url: null,
				name: 'Support',
				icon: 'SmileIcon',
				i18n: 'Support',
				submenu: [{
						url: 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation/',
						name: 'Documentation',
						icon: 'BookOpenIcon',
						slug: 'external',
						i18n: 'Documentation',
						target: '_blank'
					},
					{
						url: 'https://pixinvent.ticksy.com/',
						name: 'Raise Support',
						icon: 'LifeBuoyIcon',
						slug: 'external',
						i18n: 'RaiseSupport',
						target: '_blank'
					}
				]
			}
		]
	}
]
