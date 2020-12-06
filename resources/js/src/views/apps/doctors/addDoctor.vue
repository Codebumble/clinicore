<template>
<div class="vx-col w-full mb-base">
      <vx-card title="Add Doctor for Your Hospital">
        <div class="vx-row">
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-plus" label-placeholder="Doctor Full Name*" v-model="input1" />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-bookmark" label-placeholder="Doctor Username*" v-model="input2" />
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
         <div class="vx-col w-full">
             <div class="vx-row mb-6">
      <div class="vx-col sm:w-1/6 w-full">
        <span>Status:</span>
      </div>
      <div class="vx-col sm:w-1/6 w-full">
      <vs-switch color="success" v-model="switch2">
        <span slot="on">Active</span>
        <span slot="off">Inactive</span>
      </vs-switch>
      </div>
    </div>
         </div>
        </div>
        
        <div class="vx-row">
          <div class="vx-col w-full">
            <vs-button class="mr-3 mb-2" @click="popupActive=true" type="filled">Submit</vs-button>

      <vs-popup background-color="rgba(255,255,255,.6)" :background-color-popup="colorx" class=""  title="Review" :active.sync="popupActive">
        <p> Are You Sure You Want to Add This Person As A Doctor?</p><br>
        <vs-button @click="openLoadingColor" type="filled" :color="colorLoading">Accept</vs-button>
      </vs-popup>
            <vs-button color="warning" type="border" class="mb-2" @click="input1 = input2 = input4 = input5 = input6 = input7 = input8 = input9 = input10 = input11 = input12 = input13 = date = ''; check7 = false;">Reset</vs-button>
          </div>
        </div>
      </vx-card>
    </div>
</template>
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
      switch2:true,
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
      selected2: {id: 1, label: 'Gander'},
      options3: [
        {id: 1, label: 'Department'},
        {id: 3, label: 'General Surgery'},
        {id: 2, label: 'Physiotherapy'},
        {id: 4, label: 'Orthopaedics'},
        {id: 5, label: 'Gynecology'},
      ],
      selected3: {id: 1, label: 'Department'},
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

