<template>
<div class="vx-col w-full mb-base">
      <vx-card title="Add Employee for Your Hospital">
        <div class="vx-row">
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-plus" label-placeholder="Employee Full Name*" v-model="input1" />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-bookmark" label-placeholder="Username*" v-model="input2" />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-bookmark" label-placeholder="Password*" v-model="input11" />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-bookmark" label-placeholder="Retype Password*" v-model="input12" />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-edit" label-placeholder="Address" v-model="input3" />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-terminal" label-placeholder="City" v-model="input4" />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-zap" label-placeholder="Postal Code" v-model="input5" />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-shield" label-placeholder="Country" v-model="input6" />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2 mt-5">
            <flat-pickr placeholder="Date of Birth" v-model="date" :config="{ dateFormat: 'd F Y', maxDate: new Date() }" class="w-full" v-validate="'required'" />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2 mt-5">
            <v-select v-model="selected2" placeholder="Gender" :options="options2" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
            </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-tablet" label-placeholder="Mobile Number*" v-model="input7" />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2 mt-5">
            <v-select v-model="selected3" :options="options3" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
            </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-chrome" label-placeholder="Email" v-model="input8" />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-server" label-placeholder="Special Designation(if any)" v-model="input9" />
          </div>
          <div class="vx-col sm:w-2/2 w-full mb-2 mt-5">
            <vs-textarea class="w-full" label="Others Information Like Educational Background,Experiance etc" v-model="input10" />
          </div>

        </div>
        <div class="vx-row">
         <div class="vx-col w-full mt-5">
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
          <div class="vx-col w-full">
            <vs-button class="mr-3 mb-2" @click="popupActive=true" type="filled">Submit</vs-button>

      <vs-popup background-color="rgba(255,255,255,.6)" :background-color-popup="colorx" class=""  title="Review" :active.sync="popupActive">
        <p> Are You Sure You Want to Add This Person As An Employee?</p><br>
        <vs-button @click="openLoadingColor" type="filled" :color="colorLoading">Accept</vs-button>
      </vs-popup>
            <vs-button color="warning" type="border" class="mb-2" @click="input1 = input2 = input4 = input5 = input6 = input7 = input8 = input9 = input10 = input11 = input12 = input13 = date = ''; check7 = false;">Reset</vs-button>
          </div>
        </div>
      </vx-card>
    </div>
</template>

<style lang="scss">
.inline-status{
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
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: '',
      input7: '',
      input8: '',
      input9: '',
      input10: '',
      input11: '',
      input12: '',
	  status: 'Active',
      colorx:"#def1d1",
      popupActive: false,
      colorLoading: '#ff8000',
      date: null,
      options2: [
        {id: 1, label: ''},
        {id: 3, label: 'Male'},
        {id: 2, label: 'Female'},
        {id: 4, label: 'Others'},
      ],
      selected2: {id: 0, label: 'Gander'},
      options3: [
        {id: 1, label: 'Representative'},
        {id: 3, label: 'Nurse'},
        {id: 2, label: 'Accountant'},
        {id: 4, label: 'Laboratorist'},
        {id: 5, label: 'Receptionist'},
        {id: 6, label: 'Pharmacist'},
        {id: 7, label: 'Record Manager'}
      ],
      selected3: {id: 0, label: 'Employee Section'},
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

