/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  Object Strucutre:
                    path => router path
                    name => router name
                    component(lazy loading) => component to load
                    meta : {
                      rule => which user can have access (ACL)
                      breadcrumb => Add breadcrumb to specific page
                      pageTitle => Display title besides breadcrumb
                    }
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'
import auth from '@/auth/authService'

import firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [

    {
    // =============================================================================
    // MAIN LAYOUT ROUTES
    // =============================================================================
      path: '',
      component: () => import('./layouts/main/Main.vue'),
      children: [
        // =============================================================================
        // Theme Routes
        // =============================================================================
        {
          path: '/',
          redirect: '/dashboard/analytics'
        },
        {
          path: '/dashboard/analytics',
          name: 'dashboard-analytics',
          component: () => import('./views/DashboardAnalytics.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/dashboard/ecommerce',
          name: 'dashboard-ecommerce',
          component: () => import('./views/DashboardECommerce.vue'),
          meta: {
            rule: 'admin'
          }
        },


        // =============================================================================
        // Application Routes
        // =============================================================================
        // {
        //   path: '/apps/todo',
        //   redirect: '/apps/todo/all',
        //   name: 'todo'
        // },
        // {
        //   path: '/apps/todo/:filter',
        //   component: () => import('./views/apps/todo/Todo.vue'),
        //   meta: {
        //     rule: 'editor',
        //     parent: 'todo',
        //     no_scroll: true
        //   }
        // },
        // {
        //   path: '/apps/chat',
        //   name: 'chat',
        //   component: () => import('./views/apps/chat/Chat.vue'),
        //   meta: {
        //     rule: 'editor',
        //     no_scroll: true
        //   }
		// },


		// ********************
		// Sector Path
		// ********************
        {
          path: '/apps/addSector',
          name: 'Add-Sector',
          component: () => import('./views/apps/sectors/addSector.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Sectors' },
              { title: 'Add Sector', active: true }
            ],
            rule: 'editor',
            no_scroll: false,
            pageTitle: 'Add Sector'
          }
        },
        {
          path: '/apps/modifySector',
          name: 'Modify Sector',
          component: () => import('./views/apps/sectors/modifySector.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Sectors' },
              { title: 'Modify Sector', active: true }
            ],
            rule: 'editor',
            no_scroll: false,
            pageTitle: 'Modify Sector'
          }
        },
        {
          path: '/apps/allSectors',
          name: 'All Sectors',
          component: () => import('./views/apps/sectors/allSectors.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Sectors' },
              { title: 'Sector List', active: true }
            ],
            rule: 'editor',
            no_scroll: false,
            pageTitle: 'Sector List'
          }
		},


		// **************************
		// Services & Package Path
		// **************************

        {
          path: '/apps/addService',
          name: 'Add Service',
          component: () => import('./views/apps/services-packages/addService.vue'),
          meta: {
            rule: 'editor',
            no_scroll: false
          }
        },
        {
          path: '/apps/modifyService',
          name: 'Modify Service',
          component: () => import('./views/apps/services-packages/modifyService.vue'),
          meta: {
            rule: 'editor',
            no_scroll: false
          }
        },
        {
          path: '/apps/allServices',
          name: 'All Services',
          component: () => import('./views/apps/services-packages/allServices.vue'),
          meta: {
            rule: 'editor',
            no_scroll: false
          }
        },
        {
          path: '/apps/addPackage',
          name: 'Add Package',
          component: () => import('./views/apps/services-packages/addPackage.vue'),
          meta: {
            rule: 'editor',
            no_scroll: false
          }
        },
        {
          path: '/apps/modifyPackage',
          name: 'Modify Package',
          component: () => import('./views/apps/services-packages/modifyPackage.vue'),
          meta: {
            rule: 'editor',
            no_scroll: false
          }
        },
        {
          path: '/apps/allPackages',
          name: 'All Packages',
          component: () => import('./views/apps/services-packages/allPackages.vue'),
          meta: {
            rule: 'editor',
            no_scroll: false
          }
		},

		// ********************
		// Doctor Path
		// ********************

        {
          path: '/apps/addDoctor',
          name: 'Add Doctor',
          component: () => import('./views/apps/doctors/addDoctor.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Doctor' },
              { title: 'Add Doctor', active: true }
            ],
            rule: 'editor',
            no_scroll: false,
            pageTitle: 'Add A Doctor'
          }
        },
        {
          path: '/apps/modifyDoctor',
          name: 'Modify Doctor',
          component: () => import('./views/apps/doctors/modifyDoctor.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Doctor' },
              { title: 'Modify Doctor', active: true }
            ],
            rule: 'editor',
            no_scroll: false,
            pageTitle: 'Modify A Doctor'
          }
        },
        {
          path: '/apps/allDoctors',
          name: 'All Doctors',
          component: () => import('./views/apps/doctors/allDoctors.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Doctor' },
              { title: 'Doctor List', active: true }
            ],
            rule: 'editor',
            no_scroll: false,
            pageTitle: 'List of All Doctor'
          }
		},

		// ********************
		// Patient Path
		// ********************

        {
          path: '/apps/addPatient',
          name: 'All Patient',
          component: () => import('./views/apps/patients/addPatient.vue'),
          meta: {
            rule: 'editor',
            no_scroll: false
          }
        },
        {
          path: '/apps/modifyPatient',
          name: 'Modify Patient',
          component: () => import('./views/apps/patients/modifyPatient.vue'),
          meta: {
            rule: 'editor',
            no_scroll: false,
            pageTitle: 'Modify Sector'
          }
        },
        {
          path: '/apps/allPatient',
          name: 'All Patients',
          component: () => import('./views/apps/patients/allPatients.vue'),
          meta: {
            rule: 'editor',
            no_scroll: false
          }
        },
        {
          path: '/apps/addPatientDocs',
          name: 'Add Patient Document',
          component: () => import('./views/apps/patients/addPatientDocs.vue'),
          meta: {
            rule: 'editor',
            no_scroll: false
          }
        },
        {
          path: '/apps/allDocs',
          name: 'All Patient Document',
          component: () => import('./views/apps/patients/allDocs.vue'),
          meta: {
            rule: 'editor',
            no_scroll: false
          }
		},

		// ********************
		// Admit Patients Path
		// ********************

        {
          path: '/apps/admitPatients',
          name: 'Admit Patients',
          component: () => import('./views/apps/admit-patient/admitPatients.vue'),
          meta: {
            rule: 'editor',
            no_scroll: false
          }
        },
        {
          path: '/apps/allAdmittedPatients',
          name: 'All Admitted Patients',
          component: () => import('./views/apps/admit-patient/allAdmittedPatients.vue'),
          meta: {
            rule: 'editor',
            no_scroll: false
          }
        },

		// ********************
		// Serial Path
		// ********************

		{
			path: '/apps/addSerial',
			name: 'Add Serial',
			component: () => import('./views/apps/serial/addSerial.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/allSerial',
			name: 'All Serial',
			component: () => import('./views/apps/serial/allSerial.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/modifySerial',
			name: 'Modify Serial',
			component: () => import('./views/apps/serial/modifySerial.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},

		// ********************
		// Appointment Path
		// ********************

		{
			path: '/apps/addAppointment',
			name: 'Add Appointment',
			component: () => import('./views/apps/appointment/addAppointment.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/allAppointments',
			name: 'All Appointment',
			component: () => import('./views/apps/appointment/allAppointments.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/modifyAppointment',
			name: 'Modify Appointment',
			component: () => import('./views/apps/appointment/modifyAppointment.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/assignedTo',
			name: 'Assigned to Doctor',
			component: () => import('./views/apps/appointment/assignedTo.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},

		// ********************
		// Prescription Path
		// ********************

		{
			path: '/apps/addPrescription',
			name: 'Add Prescription',
			component: () => import('./views/apps/prescription/addPrescription.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/modifyPrescription',
			name: 'Modify Prescription',
			component: () => import('./views/apps/prescription/modifyPrescription.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/allPrescription',
			name: 'All Prescription',
			component: () => import('./views/apps/prescription/allPrescription.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/samplePrescription',
			name: 'Sample Prescription',
			component: () => import('./views/apps/prescription/samplePrescription.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},

		// ********************
		// Medical Records Path
		// ********************

		{
			path: '/apps/addRecords',
			name: 'Add Records',
			component: () => import('./views/apps/medical-records/addRecords.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/modifyRecords',
			name: 'Modify Records',
			component: () => import('./views/apps/medical-records/modifyRecords.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/allRecords',
			name: 'All Records',
			component: () => import('./views/apps/medical-records/allRecords.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
    },
    {
			path: '/apps/demoPrescription',
			name: 'deemo-prescription',
			component: () => import('./views/apps/prescription/samplePrescription.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},

		// ********************
		// Account Manager Path
		// ********************

		{
			path: '/apps/addAccount',
			name: 'Add Account',
			component: () => import('./views/apps/account-manager/addAccount.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/modifyAccount',
			name: 'Modify Account',
			component: () => import('./views/apps/account-manager/modifyAccount.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/allAccounts',
			name: 'All Accounts',
			component: () => import('./views/apps/account-manager/allAccounts.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/makePayment',
			name: 'Make Payment',
			component: () => import('./views/apps/account-manager/makePayment.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/paymentList',
			name: 'Payment List',
			component: () => import('./views/apps/account-manager/paymentList.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/debits',
			name: 'Debits',
			component: () => import('./views/apps/account-manager/debits.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/credits',
			name: 'Credits',
			component: () => import('./views/apps/account-manager/credits.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},


		// ********************
		// Invoices Path
		// ********************

		{
			path: '/apps/addInvoices',
			name: 'Add Invoices',
			component: () => import('./views/apps/invoices/addInvoices.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/allInvoices',
			name: 'All Invoices',
			component: () => import('./views/apps/invoices/allInvoices.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},


		// ********************
		// Insurance Path
		// ********************

		{
			path: '/apps/addInsurance',
			name: 'Add Insurance',
			component: () => import('./views/apps/insurance/addInsurance.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/modifyInsurance',
			name: 'Modify Insurance',
			component: () => import('./views/apps/insurance/modifyInsurance.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/allInsurance',
			name: 'All Insurance',
			component: () => import('./views/apps/insurance/allInsurance.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/addLimitApproval',
			name: 'Add Limit Approval',
			component: () => import('./views/apps/insurance/addLimitApproval.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/AllApproval',
			name: 'All Approval',
			component: () => import('./views/apps/insurance/AllApproval.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},

		// ********************
		// Bill Path
		// ********************
		{
			path: '/apps/addBill',
			name: 'Add Bill',
			component: () => import('./views/apps/bills/addBill.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/allBills',
			name: 'All Bills',
			component: () => import('./views/apps/bills/allBills.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/addAdvanceBill',
			name: 'Add Advance Bill',
			component: () => import('./views/apps/bills/addAdvanceBill.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/allAdvanceBill',
			name: 'All Advance Bill',
			component: () => import('./views/apps/bills/allAdvanceBill.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},



		// ********************
		// HR Dept Path
		// ********************

		{
			path: '/apps/addEmployee',
			name: 'Add Employee',
			component: () => import('./views/apps/hr-dept/addEmployee.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/accountant',
			name: 'Accountant',
			component: () => import('./views/apps/hr-dept/accountant.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/laboratorists',
			name: 'Laboratorists',
			component: () => import('./views/apps/hr-dept/laboratorists.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/nurse',
			name: 'Nurses',
			component: () => import('./views/apps/hr-dept/nurse.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/pharmacist',
			name: 'Pharmacist',
			component: () => import('./views/apps/hr-dept/pharmacist.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/receptionist',
			name: 'Receptionist',
			component: () => import('./views/apps/hr-dept/receptionist.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/representative',
			name: 'Representative',
			component: () => import('./views/apps/hr-dept/representative.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/recordManager',
			name: 'Record Manager',
			component: () => import('./views/apps/hr-dept/recordManager.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},


		// ********************
		// Bed Management Path
		// ********************

		{
			path: '/apps/addBed',
			name: 'Add Bed',
			component: () => import('./views/apps/bed-management/addBed.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/allocateBed',
			name: 'Allocate Bed',
			component: () => import('./views/apps/bed-management/allocateBed.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/allocatedBed',
			name: 'Allocated Bed',
			component: () => import('./views/apps/bed-management/allocatedBed.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/allBeds',
			name: 'All Beds',
			component: () => import('./views/apps/bed-management/allBeds.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/bedAnalytics',
			name: 'Bed Analytics',
			component: () => import('./views/apps/bed-management/bedAnalytics.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},

		// ********************
		// Pharmacy Path
		// ********************

		{
			path: '/apps/pharmacyCategories',
			name: 'Categories',
			component: () => import('./views/apps/pharmacy/pharmacyCategories.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false,
			  pageTitle: 'Categories',
			},
		},
		{
			path: '/apps/medicines',
			name: 'Medicines',
			component: () => import('./views/apps/pharmacy/medicines.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/units',
			name: 'Units',
			component: () => import('./views/apps/pharmacy/units.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/manufacturerControl',
			name: 'Manufacturer Control',
			component: () => import('./views/apps/pharmacy/manufacturerControl.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/addPurchase',
			name: 'Add Purchase',
			component: () => import('./views/apps/pharmacy/addPurchase.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/managePurchase',
			name: 'Manage Purchase',
			component: () => import('./views/apps/pharmacy/managePurchase.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/supplierManagement',
			name: 'Supplier Management',
			component: () => import('./views/apps/pharmacy/supplierManagement.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/newInvoice',
			name: 'New Invoice',
			component: () => import('./views/apps/pharmacy/newInvoice.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/PosInvoice',
			name: 'POS Invoice',
			component: () => import('./views/apps/pharmacy/PosInvoice.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/stockManagement',
			name: 'Stock Management',
			component: () => import('./views/apps/pharmacy/stockManagement.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/ledger',
			name: 'Ledger',
			component: () => import('./views/apps/pharmacy/ledger.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},

		// **************************
		// Hospital Activities Path
		// **************************

		{
			path: '/apps/addBirthReport',
			name: 'Add Birth Report',
			component: () => import('./views/apps/hospital-activities/addBirthReport.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/addDeathReport',
			name: 'Add Death Report',
			component: () => import('./views/apps/hospital-activities/addDeathReport.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/allBirthReports',
			name: 'All Birth Reports',
			component: () => import('./views/apps/hospital-activities/allBirthReports.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/allDeathReports',
			name: 'All Death Reports',
			component: () => import('./views/apps/hospital-activities/allDeathReports.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/addOperationReport',
			name: 'Add Operation Report',
			component: () => import('./views/apps/hospital-activities/addOperationReport.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/allOperationReports',
			name: 'All Operation Reports',
			component: () => import('./views/apps/hospital-activities/allOperationReports.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/addInvestigationReport',
			name: 'Add Investigation Report',
			component: () => import('./views/apps/hospital-activities/addInvestigationReport.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/allInvestigationReports',
			name: 'All Investigation Reports',
			component: () => import('./views/apps/hospital-activities/allInvestigationReports.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},


		// **************************
		// Notice Board Path
		// **************************

		{
			path: '/apps/addNotice',
			name: 'Add Notice',
			component: () => import('./views/apps/notice-board/addNotice.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/modifyNotice',
			name: 'Modify Notice',
			component: () => import('./views/apps/notice-board/modifyNotice.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/allNotice',
			name: 'All Notice',
			component: () => import('./views/apps/notice-board/allNotice.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},

		// **************************
		// App Settings Path
		// **************************

		{
			path: '/apps/changeInformation',
			name: 'Change Information',
			component: () => import('./views/apps/app-settings/changeInformation.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/language',
			name: 'Language',
			component: () => import('./views/apps/app-settings/language.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/smsGateway',
			name: 'SMS Gateway',
			component: () => import('./views/apps/app-settings/smsGateway.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/mailConfig',
			name: 'Mail Config',
			component: () => import('./views/apps/app-settings/mailConfig.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},

		// **************************
		// SMS Path
		// **************************

		{
			path: '/apps/smsTemplate',
			name: 'SMS Template',
			component: () => import('./views/apps/sms/smsTemplate.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/scheduleSms',
			name: 'Schedule SMS',
			component: () => import('./views/apps/sms/scheduleSms.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/sendCustomSms',
			name: 'Send Custom SMS',
			component: () => import('./views/apps/sms/sendCustomSms.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/customSmsList',
			name: 'Custom SMS List',
			component: () => import('./views/apps/sms/customSmsList.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/usersSms',
			name: 'Users SMS',
			component: () => import('./views/apps/sms/usersSms.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},

		// **************************
		// Messages Path
		// **************************

		{
			path: '/apps/newMessage',
			name: 'New Message',
			component: () => import('./views/apps/messages/newMessage.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/messageInbox',
			name: 'Message Inbox',
			component: () => import('./views/apps/messages/messageInbox.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/sentMessages',
			name: 'Sent Messages',
			component: () => import('./views/apps/messages/sentMessages.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},


		// **************************
		// Mail Path
		// **************************

		{
			path: '/apps/composeMail',
			name: 'Compose Mail',
			component: () => import('./views/apps/mail/composeMail.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/mailInbox',
			name: 'Mail Inbox',
			component: () => import('./views/apps/mail/mailInbox.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},
		{
			path: '/apps/sentMail',
			name: 'Sent Mail',
			component: () => import('./views/apps/mail/sentMail.vue'),
			meta: {
			  rule: 'editor',
			  no_scroll: false
			}
		},


        {
          path: '/apps/email',
          redirect: '/apps/email/inbox',
          name: 'email'
        },
        {
          path: '/apps/email/:filter',
          component: () => import('./views/apps/email/Email.vue'),
          meta: {
            rule: 'editor',
            parent: 'email',
            no_scroll: true
          }
        },
        {
          path: '/apps/calendar/vue-simple-calendar',
          name: 'calendar-simple-calendar',
          component: () => import('./views/apps/calendar/SimpleCalendar.vue'),
          meta: {
            rule: 'editor',
            no_scroll: true
          }
        },
        {
          path: '/apps/eCommerce/shop',
          name: 'ecommerce-shop',
          component: () => import('./views/apps/eCommerce/ECommerceShop.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'eCommerce'},
              { title: 'Shop', active: true }
            ],
            pageTitle: 'Shop',
            rule: 'editor'
          }
        },
        {
          path: '/apps/eCommerce/wish-list',
          name: 'ecommerce-wish-list',
          component: () => import('./views/apps/eCommerce/ECommerceWishList.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'eCommerce', url:'/apps/eCommerce/shop'},
              { title: 'Wish List', active: true }
            ],
            pageTitle: 'Wish List',
            rule: 'editor'
          }
        },
        {
          path: '/apps/eCommerce/checkout',
          name: 'ecommerce-checkout',
          component: () => import('./views/apps/eCommerce/ECommerceCheckout.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'eCommerce', url:'/apps/eCommerce/shop'},
              { title: 'Checkout', active: true }
            ],
            pageTitle: 'Checkout',
            rule: 'editor'
          }
        },
        /*
                  Below route is for demo purpose
                  You can use this route in your app
                    {
                        path: '/apps/eCommerce/item/',
                        name: 'ecommerce-item-detail-view',
                        redirect: '/apps/eCommerce/shop',
                    }
                */
        {
          path: '/apps/eCommerce/item/',
          redirect: '/apps/eCommerce/item/5546604'
        },
        {
          path: '/apps/eCommerce/item/:item_id',
          name: 'ecommerce-item-detail-view',
          component: () => import('./views/apps/eCommerce/ECommerceItemDetailView.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'eCommerce'},
              { title: 'Shop', url: {name: 'ecommerce-shop'} },
              { title: 'Item Details', active: true }
            ],
            parent: 'ecommerce-item-detail-view',
            pageTitle: 'Item Details',
            rule: 'editor'
          }
        },
        {
          path: '/apps/user/user-list',
          name: 'app-user-list',
          component: () => import('@/views/apps/user/user-list/UserList.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'User' },
              { title: 'List', active: true }
            ],
            pageTitle: 'User List',
            rule: 'editor'
          }
        },
        {
          path: '/apps/user/user-view/:userId',
          name: 'app-user-view',
          component: () => import('@/views/apps/user/UserView.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'User' },
              { title: 'View', active: true }
            ],
            pageTitle: 'User View',
            rule: 'editor'
          }
        },
        {
          path: '/apps/user/user-edit/:userId',
          name: 'app-user-edit',
          component: () => import('@/views/apps/user/user-edit/UserEdit.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'User' },
              { title: 'Edit', active: true }
            ],
            pageTitle: 'User Edit',
            rule: 'editor'
          }
        },
        // =============================================================================
        // UI ELEMENTS
        // =============================================================================
        {
          path: '/ui-elements/data-list/list-view',
          name: 'data-list-list-view',
          component: () => import('@/views/ui-elements/data-list/list-view/DataListListView.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Data List'},
              { title: 'List View', active: true }
            ],
            pageTitle: 'List View',
            rule: 'editor'
          }
        },
        {
          path: '/ui-elements/data-list/thumb-view',
          name: 'data-list-thumb-view',
          component: () => import('@/views/ui-elements/data-list/thumb-view/DataListThumbView.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Data List'},
              { title: 'Thumb View', active: true }
            ],
            pageTitle: 'Thumb View',
            rule: 'editor'
          }
        },
        {
          path: '/ui-elements/grid/vuesax',
          name: 'grid-vuesax',
          component: () => import('@/views/ui-elements/grid/vuesax/GridVuesax.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Grid'},
              { title: 'Vuesax', active: true }
            ],
            pageTitle: 'Grid',
            rule: 'editor'
          }
        },
        {
          path: '/ui-elements/grid/tailwind',
          name: 'grid-tailwind',
          component: () => import('@/views/ui-elements/grid/tailwind/GridTailwind.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Grid'},
              { title: 'Tailwind', active: true }
            ],
            pageTitle: 'Tailwind Grid',
            rule: 'editor'
          }
        },
        {
          path: '/ui-elements/colors',
          name: 'colors',
          component: () => import('./views/ui-elements/colors/Colors.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Colors', active: true }
            ],
            pageTitle: 'Colors',
            rule: 'editor'
          }
        },
        {
          path: '/ui-elements/card/basic',
          name: 'basic-cards',
          component: () => import('./views/ui-elements/card/CardBasic.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Card' },
              { title: 'Basic Cards', active: true }
            ],
            pageTitle: 'Basic Cards',
            rule: 'editor'
          }
        },
        {
          path: '/ui-elements/card/statistics',
          name: 'statistics-cards',
          component: () => import('./views/ui-elements/card/CardStatistics.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Card' },
              { title: 'Statistics Cards', active: true }
            ],
            pageTitle: 'Statistics Card',
            rule: 'editor'
          }
        },
        {
          path: '/ui-elements/card/analytics',
          name: 'analytics-cards',
          component: () => import('./views/ui-elements/card/CardAnalytics.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Card' },
              { title: 'Analytics Card', active: true }
            ],
            pageTitle: 'Analytics Card',
            rule: 'editor'
          }
        },
        {
          path: '/ui-elements/card/card-actions',
          name: 'card-actions',
          component: () => import('./views/ui-elements/card/CardActions.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Card' },
              { title: 'Card Actions', active: true }
            ],
            pageTitle: 'Card Actions',
            rule: 'editor'
          }
        },
        {
          path: '/ui-elements/card/card-colors',
          name: 'card-colors',
          component: () => import('./views/ui-elements/card/CardColors.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Card' },
              { title: 'Card Colors', active: true }
            ],
            pageTitle: 'Card Colors',
            rule: 'editor'
          }
        },
        {
          path: '/ui-elements/table',
          name: 'table',
          component: () => import('./views/ui-elements/table/Table.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Table', active: true }
            ],
            pageTitle: 'Table',
            rule: 'editor'
          }
        },
        {
          path: '/ui-elements/ag-grid-table',
          name: 'ag-grid-table',
          component: () => import('./views/ui-elements/ag-grid-table/AgGridTable.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'agGrid Table', active: true }
            ],
            pageTitle: 'agGrid Table',
            rule: 'editor'
          }
        },

        // =============================================================================
        // COMPONENT ROUTES
        // =============================================================================
        {
          path: '/components/alert',
          name: 'component-alert',
          component: () => import('@/views/components/vuesax/alert/Alert.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Components' },
              { title: 'Alert', active: true }
            ],
            pageTitle: 'Alert',
            rule: 'editor'
          }
        },
        {
          path: '/components/avatar',
          name: 'component-avatar',
          component: () => import('@/views/components/vuesax/avatar/Avatar.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Components' },
              { title: 'Avatar', active: true }
            ],
            pageTitle: 'Avatar',
            rule: 'editor'
          }
        },
        {
          path: '/components/breadcrumb',
          name: 'component-breadcrumb',
          component: () => import('@/views/components/vuesax/breadcrumb/Breadcrumb.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Components' },
              { title: 'Breadcrumb', active: true }
            ],
            pageTitle: 'Breadcrumb',
            rule: 'editor'
          }
        },
        {
          path: '/components/button',
          name: 'component-button',
          component: () => import('@/views/components/vuesax/button/Button.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Components' },
              { title: 'Button', active: true }
            ],
            pageTitle: 'Button',
            rule: 'editor'
          }
        },
        {
          path: '/components/button-group',
          name: 'component-button-group',
          component: () => import('@/views/components/vuesax/button-group/ButtonGroup.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Components' },
              { title: 'Button Group', active: true }
            ],
            pageTitle: 'Button Group',
            rule: 'editor'
          }
        },
        {
          path: '/components/chip',
          name: 'component-chip',
          component: () => import('@/views/components/vuesax/chip/Chip.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Components' },
              { title: 'Chip', active: true }
            ],
            pageTitle: 'Chip',
            rule: 'editor'
          }
        },
        {
          path: '/components/collapse',
          name: 'component-collapse',
          component: () => import('@/views/components/vuesax/collapse/Collapse.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Components' },
              { title: 'Collapse', active: true }
            ],
            pageTitle: 'Collapse',
            rule: 'editor'
          }
        },
        {
          path: '/components/dialogs',
          name: 'component-dialog',
          component: () => import('@/views/components/vuesax/dialogs/Dialogs.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Components' },
              { title: 'Dialogs', active: true }
            ],
            pageTitle: 'Dialogs',
            rule: 'editor'
          }
        },
        {
          path: '/components/divider',
          name: 'component-divider',
          component: () => import('@/views/components/vuesax/divider/Divider.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Components' },
              { title: 'Divider', active: true }
            ],
            pageTitle: 'Divider',
            rule: 'editor'
          }
        },
        {
          path: '/components/dropdown',
          name: 'component-drop-down',
          component: () => import('@/views/components/vuesax/dropdown/Dropdown.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Components' },
              { title: 'Dropdown', active: true }
            ],
            pageTitle: 'Dropdown',
            rule: 'editor'
          }
        },
        {
          path: '/components/list',
          name: 'component-list',
          component: () => import('@/views/components/vuesax/list/List.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Components' },
              { title: 'List', active: true }
            ],
            pageTitle: 'List',
            rule: 'editor'
          }
        },
        {
          path: '/components/loading',
          name: 'component-loading',
          component: () => import('@/views/components/vuesax/loading/Loading.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Components' },
              { title: 'Loading', active: true }
            ],
            pageTitle: 'Loading',
            rule: 'editor'
          }
        },
        {
          path: '/components/navbar',
          name: 'component-navbar',
          component: () => import('@/views/components/vuesax/navbar/Navbar.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Components' },
              { title: 'Navbar', active: true }
            ],
            pageTitle: 'Navbar',
            rule: 'editor'
          }
        },
        {
          path: '/components/notifications',
          name: 'component-notifications',
          component: () => import('@/views/components/vuesax/notifications/Notifications.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Components' },
              { title: 'Notifications', active: true }
            ],
            pageTitle: 'Notifications',
            rule: 'editor'
          }
        },
        {
          path: '/components/pagination',
          name: 'component-pagination',
          component: () => import('@/views/components/vuesax/pagination/Pagination.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Components' },
              { title: 'Pagination', active: true }
            ],
            pageTitle: 'Pagination',
            rule: 'editor'
          }
        },
        {
          path: '/components/popup',
          name: 'component-popup',
          component: () => import('@/views/components/vuesax/popup/Popup.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Components' },
              { title: 'Popup', active: true }
            ],
            pageTitle: 'Popup',
            rule: 'editor'
          }
        },
        {
          path: '/components/progress',
          name: 'component-progress',
          component: () => import('@/views/components/vuesax/progress/Progress.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Components' },
              { title: 'Progress', active: true }
            ],
            pageTitle: 'Progress',
            rule: 'editor'
          }
        },
        {
          path: '/components/sidebar',
          name: 'component-sidebar',
          component: () => import('@/views/components/vuesax/sidebar/Sidebar.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Components' },
              { title: 'Sidebar', active: true }
            ],
            pageTitle: 'Sidebar',
            rule: 'editor'
          }
        },
        {
          path: '/components/slider',
          name: 'component-slider',
          component: () => import('@/views/components/vuesax/slider/Slider.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Components' },
              { title: 'Slider', active: true }
            ],
            pageTitle: 'Slider',
            rule: 'editor'
          }
        },
        {
          path: '/components/tabs',
          name: 'component-tabs',
          component: () => import('@/views/components/vuesax/tabs/Tabs.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Components' },
              { title: 'Tabs', active: true }
            ],
            pageTitle: 'Tabs',
            rule: 'editor'
          }
        },
        {
          path: '/components/tooltip',
          name: 'component-tooltip',
          component: () => import('@/views/components/vuesax/tooltip/Tooltip.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Components' },
              { title: 'Tooltip', active: true }
            ],
            pageTitle: 'Tooltip',
            rule: 'editor'
          }
        },
        {
          path: '/components/upload',
          name: 'component-upload',
          component: () => import('@/views/components/vuesax/upload/Upload.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Components' },
              { title: 'Upload', active: true }
            ],
            pageTitle: 'Upload',
            rule: 'editor'
          }
        },


        // =============================================================================
        // FORMS
        // =============================================================================
        // =============================================================================
        // FORM ELEMENTS
        // =============================================================================
        {
          path: '/forms/form-elements/select',
          name: 'form-element-select',
          component: () => import('./views/forms/form-elements/select/Select.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Form Elements' },
              { title: 'Select', active: true }
            ],
            pageTitle: 'Select',
            rule: 'editor'
          }
        },
        {
          path: '/forms/form-elements/switch',
          name: 'form-element-switch',
          component: () => import('./views/forms/form-elements/switch/Switch.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Form Elements' },
              { title: 'Switch', active: true }
            ],
            pageTitle: 'Switch',
            rule: 'editor'
          }
        },
        {
          path: '/forms/form-elements/checkbox',
          name: 'form-element-checkbox',
          component: () => import('./views/forms/form-elements/checkbox/Checkbox.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Form Elements' },
              { title: 'Checkbox', active: true }
            ],
            pageTitle: 'Checkbox',
            rule: 'editor'
          }
        },
        {
          path: '/forms/form-elements/radio',
          name: 'form-element-radio',
          component: () => import('./views/forms/form-elements/radio/Radio.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Form Elements' },
              { title: 'Radio', active: true }
            ],
            pageTitle: 'Radio',
            rule: 'editor'
          }
        },
        {
          path: '/forms/form-elements/input',
          name: 'form-element-input',
          component: () => import('./views/forms/form-elements/input/Input.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Form Elements' },
              { title: 'Input', active: true }
            ],
            pageTitle: 'Input',
            rule: 'editor'
          }
        },
        {
          path: '/forms/form-elements/number-input',
          name: 'form-element-number-input',
          component: () => import('./views/forms/form-elements/number-input/NumberInput.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Form Elements' },
              { title: 'Number Input', active: true }
            ],
            pageTitle: 'Number Input',
            rule: 'editor'
          }
        },
        {
          path: '/forms/form-elements/textarea',
          name: 'form-element-textarea',
          component: () => import('./views/forms/form-elements/textarea/Textarea.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Form Elements' },
              { title: 'Textarea', active: true }
            ],
            pageTitle: 'Textarea',
            rule: 'editor'
          }
        },
        // -------------------------------------------------------------------------------------------------------------------------------------------
        {
          path: '/forms/form-layouts',
          name: 'forms-form-layouts',
          component: () => import('@/views/forms/FormLayouts.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Forms' },
              { title: 'Form Layouts', active: true }
            ],
            pageTitle: 'Form Layouts',
            rule: 'editor'
          }
        },
        {
          path: '/forms/form-wizard',
          name: 'extra-component-form-wizard',
          component: () => import('@/views/forms/form-wizard/FormWizard.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Extra Components' },
              { title: 'Form Wizard', active: true }
            ],
            pageTitle: 'Form Wizard',
            rule: 'editor'
          }
        },
        {
          path: '/forms/form-validation',
          name: 'extra-component-form-validation',
          component: () => import('@/views/forms/form-validation/FormValidation.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Extra Components' },
              { title: 'Form Validation', active: true }
            ],
            pageTitle: 'Form Validation',
            rule: 'editor'
          }
        },
        {
          path: '/forms/form-input-group',
          name: 'extra-component-form-input-group',
          component: () => import('@/views/forms/form-input-group/FormInputGroup.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Extra Components' },
              { title: 'Form Input Group', active: true }
            ],
            pageTitle: 'Form Input Group',
            rule: 'editor'
          }
        },

        // =============================================================================
        // Pages Routes
        // =============================================================================
        {
          path: '/profile/:userId',
          name: 'page-profile',
          component: () => import('@/views/pages/Profile.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Profile', active: true }
            ],
            pageTitle: 'Profile',
            rule: 'editor'
          }
		},
		{
			path: '/profile/:userId/edit',
			name: 'page-profile-edit',
			component: () => import('@/views/pages/ProfileEdit.vue'),
			meta: {
			  breadcrumb: [
				{ title: 'Home', url: '/' },
				{ title: 'Profile' },
				{ title: 'Edit', active: true }
			  ],
			  pageTitle: 'User Edit',
			  rule: 'editor'
			}
		  },
        {
          path: '/pages/user-settings',
          name: 'page-user-settings',
          component: () => import('@/views/pages/user-settings/UserSettings.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Pages' },
              { title: 'User Settings', active: true }
            ],
            pageTitle: 'Settings',
            rule: 'editor'
          }
		},
		{
			path: '/test',
			name: 'page-test',
			component: () => import('@/views/pages/testshakil.vue'),
			meta: {
			  breadcrumb: [
				{ title: 'Home', url: '/' },
				{ title: 'Profile', active: true }
			  ],
			  pageTitle: 'Profile',
			  rule: 'editor'
			}
		  },
        {
          path: '/pages/faq',
          name: 'page-faq',
          component: () => import('@/views/pages/Faq.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Pages' },
              { title: 'FAQ', active: true }
            ],
            pageTitle: 'FAQ',
            rule: 'editor'
          }
        },
        {
          path: '/pages/knowledge-base',
          name: 'page-knowledge-base',
          component: () => import('@/views/pages/KnowledgeBase.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Pages' },
              { title: 'KnowledgeBase', active: true }
            ],
            pageTitle: 'KnowledgeBase',
            rule: 'editor'
          }
        },
        {
          path: '/pages/knowledge-base/category',
          name: 'page-knowledge-base-category',
          component: () => import('@/views/pages/KnowledgeBaseCategory.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Pages' },
              { title: 'KnowledgeBase', url: '/pages/knowledge-base' },
              { title: 'Category', active: true }
            ],
            parent: 'page-knowledge-base',
            rule: 'editor'
          }
        },
        {
          path: '/pages/knowledge-base/category/question',
          name: 'page-knowledge-base-category-question',
          component: () => import('@/views/pages/KnowledgeBaseCategoryQuestion.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Pages' },
              { title: 'KnowledgeBase', url: '/pages/knowledge-base' },
              { title: 'Category', url: '/pages/knowledge-base/category' },
              { title: 'Question', active: true }
            ],
            parent: 'page-knowledge-base',
            rule: 'editor'
          }
        },
        {
          path: '/pages/search',
          name: 'page-search',
          component: () => import('@/views/pages/Search.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Pages' },
              { title: 'Search', active: true }
            ],
            pageTitle: 'Search',
            rule: 'editor'
          }
        },
        {
          path: '/pages/invoice',
          name: 'page-invoice',
          component: () => import('@/views/pages/Invoice.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Pages' },
              { title: 'Invoice', active: true }
            ],
            pageTitle: 'Invoice',
            rule: 'editor'
          }
        },

        // =============================================================================
        // CHARTS & MAPS
        // =============================================================================
        {
          path: '/charts-and-maps/charts/apex-charts',
          name: 'extra-component-charts-apex-charts',
          component: () => import('@/views/charts-and-maps/charts/apex-charts/ApexCharts.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Charts & Maps' },
              { title: 'Apex Charts', active: true }
            ],
            pageTitle: 'Apex Charts',
            rule: 'editor'
          }
        },
        {
          path: '/charts-and-maps/charts/echarts',
          name: 'extra-component-charts-echarts',
          component: () => import('@/views/charts-and-maps/charts/echarts/Echarts.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Charts & Maps' },
              { title: 'echarts', active: true }
            ],
            pageTitle: 'echarts',
            rule: 'editor'
          }
        },
        {
          path: '/charts-and-maps/maps/google-map',
          name: 'extra-component-maps-google-map',
          component: () => import('@/views/charts-and-maps/maps/google-map/GoogleMap.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Charts & Maps' },
              { title: 'Google Map', active: true }
            ],
            pageTitle: 'Google Map',
            rule: 'editor'
          }
        },


        // =============================================================================
        // EXTENSIONS
        // =============================================================================
        {
          path: '/extensions/select',
          name: 'extra-component-select',
          component: () => import('@/views/components/extra-components/select/Select.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Extra Components' },
              { title: 'Select', active: true }
            ],
            pageTitle: 'Select',
            rule: 'editor'
          }
        },
        {
          path: '/extensions/quill-editor',
          name: 'extra-component-quill-editor',
          component: () => import('@/views/components/extra-components/quill-editor/QuillEditor.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Extra Components' },
              { title: 'Quill Editor', active: true }
            ],
            pageTitle: 'Quill Editor',
            rule: 'editor'
          }
        },
        {
          path: '/extensions/drag-and-drop',
          name: 'extra-component-drag-and-drop',
          component: () => import('@/views/components/extra-components/drag-and-drop/DragAndDrop.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Extra Components' },
              { title: 'Drag & Drop', active: true }
            ],
            pageTitle: 'Drag & Drop',
            rule: 'editor'
          }
        },
        {
          path: '/extensions/datepicker',
          name: 'extra-component-datepicker',
          component: () => import('@/views/components/extra-components/datepicker/Datepicker.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Extra Components' },
              { title: 'Datepicker', active: true }
            ],
            pageTitle: 'Datepicker',
            rule: 'editor'
          }
        },
        {
          path: '/extensions/datetime-picker',
          name: 'extra-component-datetime-picker',
          component: () => import('@/views/components/extra-components/datetime-picker/DatetimePicker.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Extra Components' },
              { title: 'Datetime Picker', active: true }
            ],
            pageTitle: 'Datetime Picker',
            rule: 'editor'
          }
        },
        {
          path: '/extensions/access-control',
          name: 'extra-component-access-control',
          component: () => import('@/views/components/extra-components/access-control/AccessControl.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Extensions' },
              { title: 'Access Control', active: true }
            ],
            pageTitle: 'Access Control',
            rule: 'editor'
          }
        },
        {
          path: '/extensions/i18n',
          name: 'extra-component-i18n',
          component: () => import('@/views/components/extra-components/I18n.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Extensions' },
              { title: 'I18n', active: true }
            ],
            pageTitle: 'I18n',
            rule: 'editor'
          }
        },
        {
          path: '/extensions/carousel',
          name: 'extra-component-carousel',
          component: () => import('@/views/components/extra-components/carousel/Carousel.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Extensions' },
              { title: 'Carousel', active: true }
            ],
            pageTitle: 'Carousel',
            rule: 'editor'
          }
        },
        {
          path: '/extensions/clipboard',
          name: 'extra-component-clipboard',
          component: () => import('@/views/components/extra-components/clipboard/Clipboard.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Extensions' },
              { title: 'Clipboard', active: true }
            ],
            pageTitle: 'Clipboard',
            rule: 'editor'
          }
        },
        {
          path: '/extensions/context-menu',
          name: 'extra-component-context-menu',
          component: () => import('@/views/components/extra-components/context-menu/ContextMenu.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Extensions' },
              { title: 'Context Menu', active: true }
            ],
            pageTitle: 'Context Menu',
            rule: 'editor'
          }
        },
        {
          path: '/extensions/star-ratings',
          name: 'extra-component-star-ratings',
          component: () => import('@/views/components/extra-components/star-ratings/StarRatings.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Extensions' },
              { title: 'Star Ratings', active: true }
            ],
            pageTitle: 'Star Ratings',
            rule: 'editor'
          }
        },
        {
          path: '/extensions/autocomplete',
          name: 'extra-component-autocomplete',
          component: () => import('@/views/components/extra-components/autocomplete/Autocomplete.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Extensions' },
              { title: 'Autocomplete', active: true }
            ],
            pageTitle: 'Autocomplete',
            rule: 'editor'
          }
        },
        {
          path: '/extensions/tree',
          name: 'extra-component-tree',
          component: () => import('@/views/components/extra-components/tree/Tree.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Extensions' },
              { title: 'Tree', active: true }
            ],
            pageTitle: 'Tree',
            rule: 'editor'
          }
        },
        {
          path: '/import-export/import',
          name: 'import-excel',
          component: () => import('@/views/components/extra-components/import-export/Import.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Extensions' },
              { title: 'Import/Export' },
              { title: 'Import', active: true }
            ],
            pageTitle: 'Import Excel',
            rule: 'editor'
          }
        },
        {
          path: '/import-export/export',
          name: 'export-excel',
          component: () => import('@/views/components/extra-components/import-export/Export.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Extensions' },
              { title: 'Import/Export' },
              { title: 'Export', active: true }
            ],
            pageTitle: 'Export Excel',
            rule: 'editor'
          }
        },
        {
          path: '/import-export/export-selected',
          name: 'export-excel-selected',
          component: () => import('@/views/components/extra-components/import-export/ExportSelected.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Extensions' },
              { title: 'Import/Export' },
              { title: 'Export Selected', active: true }
            ],
            pageTitle: 'Export Excel',
            rule: 'editor'
          }
        }
      ]
    },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
    {
      path: '',
      component: () => import('@/layouts/full-page/FullPage.vue'),
      children: [
        // =============================================================================
        // PAGES
        // =============================================================================
        {
          path: '/callback',
          name: 'auth-callback',
          component: () => import('@/views/Callback.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/pages/login',
          name: 'page-login',
          component: () => import('@/views/pages/login/Login.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/pages/register',
          name: 'page-register',
          component: () => import('@/views/pages/register/Register.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/pages/forgot-password',
          name: 'page-forgot-password',
          component: () => import('@/views/pages/ForgotPassword.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/pages/reset-password',
          name: 'page-reset-password',
          component: () => import('@/views/pages/ResetPassword.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/pages/lock-screen',
          name: 'page-lock-screen',
          component: () => import('@/views/pages/LockScreen.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/pages/comingsoon',
          name: 'page-coming-soon',
          component: () => import('@/views/pages/ComingSoon.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/pages/error-404',
          name: 'page-error-404',
          component: () => import('@/views/pages/Error404.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/pages/error-500',
          name: 'page-error-500',
          component: () => import('@/views/pages/Error500.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/pages/not-authorized',
          name: 'page-not-authorized',
          component: () => import('@/views/pages/NotAuthorized.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/pages/maintenance',
          name: 'page-maintenance',
          component: () => import('@/views/pages/Maintenance.vue'),
          meta: {
            rule: 'editor'
          }
        }
      ]
    },
    // Redirect to 404 page, if no match found
    {
      path: '*',
      redirect: '/pages/error-404'
    }
  ]
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

router.beforeEach((to, from, next) => {
  firebase.auth().onAuthStateChanged(() => {

    // get firebase current user
    const firebaseCurrentUser = firebase.auth().currentUser

    if (
        to.path === "/pages/login" ||
        to.path === "/pages/forgot-password" ||
        to.path === "/pages/error-404" ||
        to.path === "/pages/error-500" ||
        to.path === "/pages/register" ||
        to.path === "/callback" ||
        to.path === "/pages/comingsoon" ||
        (auth.isAuthenticated() || firebaseCurrentUser)
    ) {
        return next();
    }

    // If auth required, check login. If login fails redirect to login page
    if (to.meta.authRequired) {
      if (!(auth.isAuthenticated() || firebaseCurrentUser)) {
        router.push({ path: '/pages/login', query: { to: to.path } })
      }
    }

    return next()
    // Specify the current path as the customState parameter, meaning it
    // will be returned to the application after auth
    // auth.login({ target: to.path });

  })

})

export default router
