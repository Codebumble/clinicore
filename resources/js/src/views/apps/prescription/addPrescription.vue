<template>
<div class="vx-col w-full mb-base">
      <vx-card title="Prescription for Your Patient">
        <div class="vx-row">
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <v-select v-model="selected1" placeholder="Patient UID" :options="options1" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input  class="w-full"  icon-pack="feather" icon="icon-bookmark" disabled label-placeholder="Dr. Nurul Islam" v-model="input2" />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2 mt-3">
            <vs-textarea class="w-full" v-model="textarea" placeholder="Description" />
          </div>
          <vs-divider color="primary">Add Medicine Here</vs-divider>
<div class="vx-col sm:w-1/2 w-full mb-2">

		<ul class="centerx inline-status">
      <li class="mr-3">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-plus" label-placeholder="Doctor Full Name*" v-model="input1" />
            </li>
            <li class="mr-1 mt-4">
            <vs-button radius color="danger" type="gradient" @click="addmedicinefeild" icon-pack="feather" icon="icon-user-plus"></vs-button>
          </li>
          </ul>
          
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
      options1: [
        {id: 1, label: 'Shakil Ahmed(6620)'},
        {id: 3, label: 'Saifur Rahman(8390)'},
        {id: 2, label: 'Saymoon Islam(8793)'},
      ],
      selected2: {id: 0, label: 'Patients UID'},
     
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
    },addmedicinefeild(){
      this.applicants.push({
        previous:'',
        expiration: ''
      })
    },
    deleteVisa(counter){
      this.applicants.splice(counter,1);
},
  }
}
</script>

