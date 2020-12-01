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
    submenu: [
      {
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
  {
    header: 'Apps',
    icon: 'PackageIcon',
    i18n: 'Apps',
    items: [
      {
        url: 'null',
        name: 'Sectors',
		slug: 'sectors',
		tag: '4',
		tagColor: 'success',
        icon: 'GitPullRequestIcon',
		i18n: 'Sectors',
		submenu: [
			{
				url: '/apps/allSectors',
				name: 'All Sectors',
				slug: 'all-sectors',
				i18n: 'All Sectors'
			},
			{
				url: '/apps/addSector',
				name: 'Add Sector',
				slug: 'add-sector',
				i18n: 'Add Sector'
			},
			{
				url: '/apps/removeSectors',
				name: 'Remove Sectors',
				slug: 'remove-sectors',
				i18n: 'Remove Sectors'
			},
			{
				url: '/apps/modifySectors',
				name: 'Modify Sectors',
				slug: 'modify-sectors',
				i18n: 'Modify Sectors'
			}
		]
      },
      {
        url: 'null',
        name: 'Doctors',
		slug: 'Doctors',
		tag: '4',
		tagColor: 'success',
        icon: 'UsersIcon',
		i18n: 'Doctors',
		submenu: [
			{
				url: '/apps/allDoctors',
				name: 'All Doctors',
				slug: 'all-doctors',
				i18n: 'All Doctors'
			},
			{
				url: '/apps/addDoctors',
				name: 'Add Doctor',
				slug: 'add-doctor',
				i18n: 'Add Doctor'
			},
			{
				url: '/apps/removeDoctors',
				name: 'Remove Doctor',
				slug: 'remove-doctor',
				i18n: 'Remove Doctor'
			},
			{
				url: '/apps/modifyDoctors',
				name: 'Modify Doctors',
				slug: 'modify-doctors',
				i18n: 'Modify Doctors'
			}
		]
	  },
	  {
        url: 'null',
        name: 'Patients',
		slug: 'Patients',
		tag: '6',
		tagColor: 'success',
        icon: 'SmileIcon',
		i18n: 'Patients',
		submenu: [
			{
				url: '/apps/allPatients',
				name: 'All Patients',
				slug: 'all-patients',
				i18n: 'All Patients'
			},
			{
				url: '/apps/addPatients',
				name: 'Add Patients',
				slug: 'add-patients',
				i18n: 'Add Patients'
			},
			{
				url: '/apps/removePatients',
				name: 'Remove Patients',
				slug: 'remove-patients',
				i18n: 'Remove Patients'
			},
			{
				url: '/apps/modifyPatients',
				name: 'Modify Patients',
				slug: 'modify-patients',
				i18n: 'Modify Patients'
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
	  {
        url: 'null',
        name: 'Serial',
		slug: 'Serial',
		tag: '4',
		tagColor: 'success',
        icon: 'ListIcon',
		i18n: 'Serial',
		submenu: [
			{
				url: '/apps/allSerial',
				name: 'All Serial',
				slug: 'all-serial',
				i18n: 'All Serial'
			},
			{
				url: '/apps/addSerial',
				name: 'Add Serial',
				slug: 'add-patients',
				i18n: 'Add Serial'
			},
			{
				url: '/apps/removeSerial',
				name: 'Remove Serial',
				slug: 'remove-serial',
				i18n: 'Remove Serial'
			},
			{
				url: '/apps/modifySerial',
				name: 'Modify Serial',
				slug: 'modify-serial',
				i18n: 'Modify Serial'
			}
		]
      },
	  {
        url: 'null',
        name: 'Appointment',
		slug: 'Appointment',
		tag: '6',
		tagColor: 'success',
        icon: 'CoffeeIcon',
		i18n: 'Appointment',
		submenu: [
			{
				url: '/apps/allAppointments',
				name: 'All Appointment',
				slug: 'all-appointment',
				i18n: 'All Appointment'
			},
			{
				url: '/apps/addAppointment',
				name: 'Add Appointment',
				slug: 'add-appointment',
				i18n: 'Add Appointment'
			},
			{
				url: '/apps/removeAppointment',
				name: 'Remove Appointment',
				slug: 'remove-appointment',
				i18n: 'Remove Appointment'
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
	  {
        url: 'null',
        name: 'Prescription',
		slug: 'Prescription',
		tag: '4',
		tagColor: 'success',
        icon: 'FileTextIcon',
		i18n: 'Prescription',
		submenu: [
			{
				url: '/apps/allPrescription',
				name: 'All Prescription',
				slug: 'all-prescription',
				i18n: 'All Prescription'
			},
			{
				url: '/apps/addPrescription',
				name: 'Add Prescription',
				slug: 'add-prescription',
				i18n: 'Add Prescription'
			},
			{
				url: '/apps/removePrescription',
				name: 'Remove Prescription',
				slug: 'remove-Prescription',
				i18n: 'Remove Prescription'
			},
			{
				url: '/apps/modifyPrescription',
				name: 'Modify Prescription',
				slug: 'modify-Prescription',
				i18n: 'Modify Prescription'
			}
		]
      },
	  {
        url: 'null',
        name: 'Medical Records',
		slug: 'medical-records',
		tag: '4',
		tagColor: 'success',
        icon: 'LayersIcon',
		i18n: 'Medical Records',
		submenu: [
			{
				url: '/apps/allRecords',
				name: 'All Records',
				slug: 'all-records',
				i18n: 'All Records'
			},
			{
				url: '/apps/addRecords',
				name: 'Add Records',
				slug: 'add-records',
				i18n: 'Add Records'
			},
			{
				url: '/apps/removeRecords',
				name: 'Remove Records',
				slug: 'remove-records',
				i18n: 'Remove Records'
			},
			{
				url: '/apps/modifyRecords',
				name: 'Modify Records',
				slug: 'modify-records',
				i18n: 'Modify Records'
			}
		]
      },
	  {
        url: 'null',
        name: 'Account Manager',
		slug: 'Account Manager',
		tag: '8',
		tagColor: 'success',
        icon: 'TrendingUpIcon',
		i18n: 'Account Manager',
		submenu: [
			{
				url: '/apps/allAccounts',
				name: 'All Accounts',
				slug: 'all-accounts',
				i18n: 'All Accounts'
			},
			{
				url: '/apps/addAccount',
				name: 'Add Account',
				slug: 'add-account',
				i18n: 'Add Account'
			},
			{
				url: '/apps/removeAccount',
				name: 'Remove Account',
				slug: 'remove-account',
				i18n: 'Remove Account'
			},
			{
				url: '/apps/modifyAccount',
				name: 'Modify Account',
				slug: 'modify-account',
				i18n: 'Modify Account'
			},
			{
				url: '/apps/addPayment',
				name: 'Add Payment',
				slug: 'add-payment',
				i18n: 'Add Payment'
			},
			{
				url: '/apps/allPayments',
				name: 'All Payments',
				slug: 'all-payments',
				i18n: 'All Payments'
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
		]
	  },
	  {
        url: 'null',
        name: 'Invoices',
		slug: 'invoices',
		tag: '3',
		tagColor: 'success',
        icon: 'AlertCircleIcon',
		i18n: 'Invoices',
		submenu: [
			{
				url: '/apps/allInvoices',
				name: 'All Invoices',
				slug: 'all-invoices',
				i18n: 'All Invoices'
			},
			{
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
			}
		]
      },
	  {
        url: 'null',
        name: 'Insurance',
		slug: 'insurance',
		tag: '6',
		tagColor: 'success',
        icon: 'AnchorIcon',
		i18n: 'Insurance',
		submenu: [
			{
				url: '/apps/allInsurance',
				name: 'All Insurance',
				slug: 'all-insurance',
				i18n: 'All Insurance'
			},
			{
				url: '/apps/addInsurance',
				name: 'Add Insurance',
				slug: 'add-insurance',
				i18n: 'Add Insurance'
			},
			{
				url: '/apps/removeInsurance',
				name: 'Remove Insurance',
				slug: 'remove-insurance',
				i18n: 'Remove Insurance'
			},
			{
				url: '/apps/modifyInsurance',
				name: 'Modify Insurance',
				slug: 'modify-insurance',
				i18n: 'Modify Insurance'
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
        submenu: [
          {
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
        submenu: [
          {
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
    items: [
      {
        url: null,
        name: 'Data List',
        tag: 'new',
        tagColor: 'primary',
        icon: 'ListIcon',
        i18n: 'DataList',
        submenu: [
          {
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
        submenu: [
          {
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
        submenu: [
          {
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
        submenu: [
          {
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
        submenu: [
          {
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
    items: [
      {
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
    items: [
      {
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
        submenu: [
          {
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
        submenu: [
          {
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
    items: [
      {
        url: null,
        name: 'Charts',
        icon: 'PieChartIcon',
        tag: '3',
        tagColor: 'success',
        i18n: 'Charts',
        submenu: [
          {
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
    items: [
      {
        url: null,
        name: 'Menu Levels',
        icon: 'MenuIcon',
        i18n: 'MenuLevels',
        submenu: [
          {
            url: null,
            name: 'Menu Level 2.1',
            i18n: 'MenuLevel2p1'
          },
          {
            url: null,
            name: 'Menu Level 2.2',
            i18n: 'MenuLevel2p2',
            submenu: [
              {
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
        submenu: [
          {
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

