<template>
<div class="vx-row">
 <div class="vx-col sm:w-1/2 mb-6">
      <vx-card title="Modify Patient Info">
        <div class="vx-row mr-auto">
            <div class="vx-col sm:w-2/2 w-full mb-2">
            <v-select v-model="selected" :options="options" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
            </div>
          <div class="vx-col sm:w-2/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-plus" label-placeholder="Full Name*" v-model="input1" />
          </div>
          <div class="vx-col sm:w-2/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-edit" label-placeholder="Address" v-model="input3" />
          </div>
          <div class="vx-col sm:w-2/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-terminal" label-placeholder="City" v-model="input4" />
          </div>
          <div class="vx-col sm:w-2/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-zap" label-placeholder="Postal Code" v-model="input5" />
          </div>
          <div class="vx-col sm:w-2/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-shield" label-placeholder="Country" v-model="input6" />
          </div>
          <div class="vx-col sm:w-2/2 w-full mb-2 mt-5">
            <flat-pickr placeholder="Date of Birth" v-model="date" :config="{ dateFormat: 'd F Y', maxDate: new Date() }" class="w-full" v-validate="'required'" />
          </div>
          <div class="vx-col sm:w-2/2 w-full mb-2 mt-5">
            <v-select v-model="selected2" :options="options2" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
            </div>
          <div class="vx-col sm:w-2/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-tablet" label-placeholder="Mobile Number*" v-model="input7" />
          </div>
          <div class="vx-col sm:w-2/2 w-full mb-2 mt-5">
            <v-select v-model="selected3" :options="options3" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
            </div>



          </div>
          
        
        
        <div class="vx-row mt-5">
          <div class="vx-col w-full">
            <vs-button class="mr-3 mb-2" @click="popupActive=true" type="filled">Submit</vs-button>

      <vs-popup background-color="rgba(255,255,255,.6)" :background-color-popup="colorx" class=""  title="Review" :active.sync="popupActive">
        <p> Are You Sure You Want to Modify This Patient?</p><br>
        <vs-button @click="openLoadingColor" type="filled" :color="colorLoading">OK</vs-button>
      </vs-popup>
            <vs-button color="warning" type="border" class="mb-2" @click="input1 = input4 = input5 = input6 = input7 = input8 = input3 = date = ''; check7 = false;">Reset</vs-button>
          </div>
        </div>
      </vx-card>
      
    </div>
    <div class="vx-col sm:w-1/2 mb-6">
      <vx-card title="Remove A Patient Info">
        <div class="vx-row mr-auto">
            <div class="vx-col sm:w-2/2 w-full mb-2">
            <v-select v-model="selected1" :options="options1" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
            </div>
        </div>
        
        <div class="vx-row mt-5">
          <div class="vx-col w-full">
            <vs-button class="mr-3 mb-2" @click="popupActive1=true" type="filled">Remove</vs-button>

      <vs-popup background-color="rgba(255,255,255,.6)" :background-color-popup="colorx" class=""  title="Review" :active.sync="popupActive1">
        <p> Are You Sure You Want to Remove This Patient info?</p><br>
        <vs-button @click="openLoadingDelete(me)" type="filled">Remove</vs-button>
      </vs-popup>
             </div>
        </div>
      </vx-card>
      </div>
    </div>
</template>
<script>
import vSelect from 'vue-select'
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'

export default{
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
      popupActive1: false,
      
      colorLoading: '#ff8000',
      options: [
        {id: 1, label: 'Shakil Ahmed(187907)'},
        {id: 3, label: 'Saifur Rahman(138492)'},
        {id: 2, label: 'Saymoon Islam(155394)'},
      ],
      selected: {id: 1, label: 'Shakil Ahmed(187907)'},
      options1: [
        {id: 1, label: 'Shakil Ahmed(187907)'},
        {id: 3, label: 'Saifur Rahman(138492)'},
        {id: 2, label: 'Saymoon Islam(155394)'},
      ],
      selected1: {id: 2, label: 'Saifur Rahman(138492)'},
      options2: [
        {id: 1, label: 'Gander'},
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
  components: {
    'v-select': vSelect,
    flatPickr
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
        text: 'Data Modified Successfully!!',
        color: 'success',
        position:'top-right',
        time: '4000',
        iconPack: 'feather',
        icon:'icon-check'})
        }, 2000);
    },
    openLoadingDelete(me) {
      this.$vs.loading({ type: 'sound' })
      this.popupActive1=false;
      
      setTimeout(() => {
          
        this.$vs.loading.close()
      }, 2000);
        setTimeout(() =>{
      this.$vs.notify({
        title: 'Success',
        text: 'Data Removed Successfully!!',
        color: 'success',
        position:'top-right',
        time: '4000',
        iconPack: 'feather',
        icon:'icon-check'})
        }, 2000);
    }
  }
}
</script>

