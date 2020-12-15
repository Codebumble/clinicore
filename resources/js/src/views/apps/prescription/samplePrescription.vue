<!-- =========================================================================================
    File Name: Invoice.vue
    Description: Invoice Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="invoice-page">

        <div class="flex flex-wrap items-center justify-between">
          <vx-input-group class="mb-base mr-3">
            <vs-input v-model="mailTo" placeholder="Email" />

            <template slot="append">
              <div class="append-text btn-addon">
                <vs-button type="border" @click="mailTo = ''" class="whitespace-no-wrap">Send Prescription</vs-button>
              </div>
            </template>
          </vx-input-group>
          <div class="flex items-center">
            <vs-button class="mb-base mr-3" type="border" icon-pack="feather" icon="icon icon-download">Download</vs-button>
            <vs-button class="mb-base mr-3" icon-pack="feather" icon="icon icon-file" @click="printInvoice">Print</vs-button>
          </div>
        </div>

        <vx-card id="invoice-container">

            <!-- INVOICE METADATA -->
            <div class="vx-row leading-loose p-base">
                <div class="vx-col w-1/2 mt-5">
                    <img src="@assets/images/logo/logo.png" alt="vuexy-logo">
                </div>
                <div class="vx-col w-1/2 text-right">
                    <h1>Clinicore Inc.</h1>
                    <div class="invoice__invoice-detail mt-5">
                        <h6>Prescription NO.</h6>
                        <p>{{ invoiceDetails.invoiceNo }}</p>

                        <h6 class="mt-4">Issue Date</h6>
                        <p>{{ invoiceDetails.invoiceDate | date(true) }}</p>
                    </div>
                </div>
                <div class="vx-col w-1/2 mt-1">
                    <h2>Patient </h2>
                    <div class="invoice__recipient-info my-4">
                        <p>{{ recipientDetails.fullName }}</p>
                        <p>{{ recipientDetails.addressLine1 }}</p>
                        <p>{{ recipientDetails.addressLine2 }}</p>
                        <p>{{ recipientDetails.zipcode }}</p>
                    </div>
                    <div class="invoice__recipient-contact ">
                        <p class="flex items-center">
                            <feather-icon icon="MailIcon" svgClasses="h-4 w-4"></feather-icon>
                            <span class="ml-2">{{ recipientDetails.mailId }}</span>
                        </p>
                        <p class="flex items-center">
                            <feather-icon icon="PhoneIcon" svgClasses="h-4 w-4"></feather-icon>
                            <span class="ml-2">{{ recipientDetails.mobile }}</span>
                        </p>
                    </div>
                </div>
                <div class="vx-col w-1/2 mt-base text-right mt-12">
                    <h4>{{ companyDetails.name }}</h4>
                    <div class="invoice__company-info my-1">
                        <p>{{ companyDetails.degree }}</p>
                        <p>{{ companyDetails.details }}</p>
                        <p>{{ companyDetails.position }}</p>
                        <p>{{ companyDetails.hospiname }}</p>
                    </div>
                    <div class="invoice__company-contact">
                        <p class="flex items-center justify-end">
                            <feather-icon icon="MailIcon" svgClasses="h-4 w-4"></feather-icon>
                            <span class="ml-2">{{ companyDetails.mailId }}</span>
                        </p>
                        <p class="flex items-center justify-end">
                            <feather-icon icon="PhoneIcon" svgClasses="h-4 w-4"></feather-icon>
                            <span class="ml-2">{{ companyDetails.mobile }}</span>
                        </p>
                    </div>

                </div>
            </div>
 <vs-divider color="primary"></vs-divider>
            <!-- INVOICE CONTENT -->
<div class="flex mt-4 mb-3">
            <div class="vx-col w-1/3 grid justify-items-start my-4">  
                    <div class="invoice__recipient-info my-4 mt-6">
                    <h5>## CC:</h5>
                    <div class="invoice__recipient-info my-1">
                    <p>{{ cc.details1}}</p>
                    <p>{{ cc.details2}}</p>
                    <p>{{ cc.details3}}</p>
                        
                        <p>{{ cc.bp }} mmHg</p>
                        </div>
                    </div>

                    <div class="invoice__recipient-info my-1 mt-1">
                    <h5>## Gen Exam:</h5>
                    <div class="invoice__recipient-info my-1">
                    <p>{{ genexam.details1 }}</p>
                        <p>{{ genexam.details2 }}</p>
                        <p>{{genexam.details3 }}</p>
                        <p>{{ genexam.details4 }}</p>
                        </div>
                    </div>

                    <div class="invoice__recipient-info my-1 mt-1">
                    <h5>## Investigation:</h5>
                    <div class="invoice__recipient-info my-1">
                    <p>{{ inves.details1 }}</p>
                        
                        </div>
                    </div>

                    <div class="invoice__recipient-info my-1 mt-1">
                    <h5>## Advise:</h5>
                    <div class="invoice__recipient-info my-1">
                    <p>{{ advise.details1}}</p>
                        <p>{{ advise.details2 }}</p>
                        <p>{{ advise.details3 }}</p>
                        </div>
                    </div>


            </div>
            <div class="vx-col w-2/3 grid justify-items-end mt-5">
                <!-- INVOICE TASKS TABLE -->
                <vs-table hoverFlat :data="invoiceData.tasks">
                    <!-- HEADER -->
                    <template slot="thead">
                        <vs-th class="pointer-events-none">Medicine Name</vs-th>
                        <vs-th class="pointer-events-none">Morning</vs-th>
                        <vs-th class="pointer-events-none">Noon</vs-th>
                        <vs-th class="pointer-events-none">Night</vs-th>
                        <vs-th class="pointer-events-none"></vs-th>
                    </template>

                    <!-- DATA -->
                    <template slot-scope="{data}">
                        <vs-tr v-for="(tr, index) in data" :key="index">
                            <vs-td :data="data[index].name">{{ data[index].name}}</vs-td>
                            <vs-td :data="data[index].morning">{{ data[index].morning }}</vs-td>
                            <vs-td :data="data[index].noon">{{ data[index].noon }}</vs-td>
                            <vs-td :data="data[index].night">{{ data[index].night }}</vs-td>
                            <vs-td :data="data[index].days">{{ data[index].days }} Days {{ data[index].after }}</vs-td>
                        </vs-tr>
                    </template>
                </vs-table>

               
            </div>
    </div>

            <!-- INVOICE FOOTER -->
            <div class="invoice__footer text-right p-base">
                <p class="mb-4">Please Visit Again After 14 days .Take Rest , God Bless You.</p>
                <p>
                    <span class="mr-8">Phone: <span class="font-semibold">01816248267</span></span>
                    <span>Email: <span class="font-semibold"> support@clinicore.net </span></span>
                </p>
            </div>
        </vx-card>
    </div>
</template>

<script>

export default{
  data () {
    return {
      mailTo: '',
      companyDetails: {
        name: 'Prof. Dr. Shakil Ahmed.',
        degree: 'FCPS, FGH',
        details: 'Gastroenterologist & Hepatologist',
        position: 'Senior Consultant',
        hospiname: 'Clinicore Inc.',
        mailId: 'shakil@clinicore.net',
        mobile: '+91 999 999 9999'
      },
      recipientDetails: {
        fullName: 'Peter Stark',
        addressLine1: '8577 West West Drive ',
        addressLine2: 'Holbrook, NY',
        zipcode: '90001',
        mailId: 'peter@mail.com',
        mobile: '+91 988 888 8888'
      },
      cc: {
        details1: 'Jaundice for 4month,',
        details2: 'Ascites for 1month,',
        details3: 'Weakness for 4month,',
        bp: '110/70'
      },
      genexam: {
        details1: 'Jaundice ++',
        details2: 'Ascites +',
        details3: 'Anaemia +',
      },
      inves: {
        details1: 'SGPT, SGOT, S. Albumin, Prothrombin, Time, S. Bilirubin, USG of W/A',
      },
      advise: {
        details1: 'Water Daily 1 liter',
        details2: 'Dont take Salt',
        details3: '',
      },
      
      invoiceDetails: {
        invoiceNo: '001/2019',
        invoiceDate: 'Mon Dec 10 2018 07:46:00 GMT+0000 (GMT)'
      },
      invoiceData: {
        tasks: [
          {
            id: 1,
            name: 'Abacavir',
            morning: 2,
            noon: 0,
            night: 2,
            days: 5,
            after: "(After Eat)"
          },
          {
            id: 2,
            name: 'Amifostine',
            morning: 0,
            noon: 2,
            night: 1,
            days: 7,
            after: ""
          },
          {
            id: 3,
            name: 'Napa Extra',
            morning: 1,
            noon: 1,
            night: 1,
            days: 7,
            after: "(After Eat)"
          }
        ],
        subtotal: 114000,
        discountPercentage: 5,
        discountedAmount: 5700,
        total: 108300
      }
    }
  },
  computed: {

  },
  methods: {
    printInvoice () {
      window.print()
    }
  },
  components: {},
  mounted () {
    this.$emit('setAppClasses', 'invoice-page')
  }
}
</script>

<style lang="scss">
@media print {
  .invoice-page {
    * {
      visibility: hidden;
    }

    #content-area {
      margin: 0 !important;
    }

    .vs-con-table {
      .vs-con-tbody {
        overflow: hidden !important;
      }
    }

    #invoice-container,
    #invoice-container * {
      visibility: visible;
    }
    #invoice-container {
      position: absolute;
      left: 0;
      top: 0;
      box-shadow: none;
    }
  }
}

@page {
  size: 80%;
}
</style>
