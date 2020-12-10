<template>
<div class="vx-col w-full mb-base">
      <vx-card title="Admit a Patient for Your Hospital">
        <div class="vx-row">
            <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-plus" label-placeholder="Patient ID*" v-model="patientID" />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-plus" label-placeholder="Full Name*" v-model="fname" />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-edit" label-placeholder="Address" v-model="addr" />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-terminal" label-placeholder="City" v-model="city" />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-zap" label-placeholder="Postal Code" v-model="post" />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-shield" label-placeholder="Country" v-model="country" />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-shield" label-placeholder="Guardian Name" v-model="guardianName" />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-shield" label-placeholder="Guardian Relation" v-model="guardianRel" />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-shield" label-placeholder="Guardian Address" v-model="guardianAddr" />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-shield" label-placeholder="Guardian Contact" v-model="guardianContact" />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-shield" label-placeholder="Agent Name" v-model="agentName" />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-shield" label-placeholder="Policy No" v-model="policyNo" />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2 mt-5">
            <flat-pickr placeholder="Admisstion Date" v-model="admitDate" :config="{ dateFormat: 'd F Y', maxDate: new Date() }" class="w-full" v-validate="'required'" />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2 mt-5">
            <flat-pickr placeholder="Release Date" v-model="releaseDate" :config="{ dateFormat: 'd F Y' }" class="w-full" v-validate="'required'" />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2 mt-5">
            <v-select v-model="selectedGender" placeholder="Gender" :options="genders" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
            </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-tablet" label-placeholder="Mobile Number*" v-model="mob" />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2 mt-5">
            <v-select v-model="selectedSector" :options="sectors" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
        </div>
          <div class="vx-col sm:w-1/2 w-full mb-2 mt-5">
            <v-select v-model="selectedDoctor" :options="doctors" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
        </div>
		<div class="vx-col sm:w-1/2 w-full mb-2 mt-5">
            <v-select v-model="selectedPackage" :options="packages" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
        </div>
		<div class="vx-col sm:w-1/2 w-full mb-2 mt-5">
            <v-select v-model="selectedInsurance" :options="insurances" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
        </div>

        </div>

<div class="vx-row mt-3">
				<div class="vx-col w-full">
					<div class="vx-row mb-6">
						<div class="vx-col sm:w-2/6">
							<span>Status:</span>
						</div>
						<div class="vx-col sm:w-3/6">
							<ul class="centerx inline-status">
								<li class="mr-4">
									<vs-radio color="success" v-model="status" vs-value="Active">Active</vs-radio>
								</li>
								<li class="mr-4">
									<vs-radio color="danger" v-model="status" vs-value="Inactive">Inactive</vs-radio>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

        <div class="vx-row">
          <div class="vx-col w-full mt-5">
            <vs-button class="mr-3 mb-2" @click="popupActive=true" type="filled">Submit</vs-button>

      <vs-popup background-color="rgba(255,255,255,.6)" :background-color-popup="colorx" class=""  title="Review" :active.sync="popupActive">
        <p> Are You Sure You Want to Admit This Person As A Patient?</p><br>
        <vs-button @click="openLoadingColor" type="filled" :color="colorLoading">Accept</vs-button>
      </vs-popup>
            <vs-button color="warning" type="border" class="mb-2" @click="fname = patientID = addr = city = post = country = mob = input3 = admitDate = releaseDate = policyNo = agentName = guardianRel = guardianContact = guardianAddr = ''; check7 = false;">Reset</vs-button>
          </div>
        </div>
      </vx-card>
    </div>
</template>

<style lang="scss">
	.inline-status {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: center;
	}

</style>

<script>
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import vSelect from 'vue-select'
export default{
  components: {
    'v-select': vSelect,
    flatPickr
  },
  data () {
    return {
      check7: '',
      fname: '',
      patientID: '',
      addr: '',
      city: '',
      post: '',
      country: '',
      mob: '',
      colorx:"#def1d1",
      popupActive: false,
      colorLoading: '#ff8000',
      admitDate: null,
	  releaseDate: null,
	  policyNo: '',
	  agentName: '',
	  guardianName: '',
	  guardianRel: '',
	  guardianContact: '',
	  guardianAddr: '',
	  status: 'Active',
      genders: [
        {id: 1, label: ''},
        {id: 3, label: 'Male'},
        {id: 2, label: 'Female'},
        {id: 4, label: 'Others'},
	  ],
	  selectedGender: {id: 1, label: 'Gander'},
      doctors: [
        {id: 1, label: 'Select Doctor'},
        {id: 3, label: 'Dr. Saifur'},
        {id: 2, label: 'Dr. Sunny'},
        {id: 4, label: 'Dr. Shakil'},
      ],
	selectedDoctor: {id: 1, label: 'Select Doctor'},
      sectors: [
        {id: 1, label: 'Sectors'},
        {id: 3, label: 'General Surgery'},
        {id: 2, label: 'Physiotherapy'},
        {id: 4, label: 'Orthopaedics'},
        {id: 5, label: 'Gynecology'},
      ],
      selectedSector: {id: 1, label: 'Sectors'},
      packages: [
        {id: 1, label: 'Select Package'},
        {id: 3, label: 'Package 2'},
        {id: 2, label: 'Package 3'},
        {id: 4, label: 'Package 4'},
        {id: 5, label: 'Package 5'},
      ],
      selectedPackage: {id: 1, label: 'Select Package'},
      insurances: [
        {id: 1, label: 'Select Insurances'},
        {id: 3, label: 'IFIC'},
        {id: 2, label: 'BUPA'},
        {id: 4, label: 'Health'},
        {id: 5, label: 'AXAINC'},
      ],
      selectedInsurance: {id: 1, label: 'Select Insurances'},
    }
  },
  methods: {
    openLoadingColor() {
      this.$vs.loading({ type: 'sound' })
      this.popupActive=false;

      setTimeout(() => {

        this.$vs.loading.close()
      }, 2000);
        setTimeout(() =>{
      this.$vs.notify({
        title: 'Success',
        text: 'Data Added Successfully!!',
        color: 'success',
        position:'top-right',
        time: '4000',
        iconPack: 'feather',
        icon:'icon-check'})
        }, 2000);
    },
  }
}
</script>

