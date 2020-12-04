<template>
<div class="vx-row">
 <div class="vx-col sm:w-1/2 mb-6">
      <vx-card title="Modify A Department/Sector">
        <div class="vx-row mr-auto">
            <div class="vx-col sm:w-2/2 w-full mb-2">
            <v-select v-model="selected" :options="options" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
            </div>
          <div class="vx-col sm:w-2/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-plus" label-placeholder="New Name" v-model="input1" />
          </div></div>
          <div class="vx-row">
          <div class="vx-col sm:w-2/2 w-full mb-2">
            <vs-input class="w-full" v-model="input2" label-placeholder="Description" />
          </div>
        </div>
        <div class="vx-row ml-auto mr-auto">
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
        <p> Are You Sure You Want to Modify The Sector/Department?</p><br>
        <vs-button @click="openLoadingColor" type="filled" :color="colorLoading">OK</vs-button>
      </vs-popup>
            <vs-button color="warning" type="border" class="mb-2" @click="input1 = input2 = ''; check7 = false;">Reset</vs-button>
          </div>
        </div>
      </vx-card>
      
    </div>
    <div class="vx-col sm:w-1/2 mb-6">
      <vx-card title="Remove A Department/Sector">
        <div class="vx-row mr-auto">
            <div class="vx-col sm:w-2/2 w-full mb-2">
            <v-select v-model="selected1" :options="options1" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
            </div>
        </div>
        
        <div class="vx-row">
          <div class="vx-col w-full">
            <vs-button class="mr-3 mb-2" @click="popupActive1=true" type="filled">Remove</vs-button>

      <vs-popup background-color="rgba(255,255,255,.6)" :background-color-popup="colorx" class=""  title="Review" :active.sync="popupActive1">
        <p> Are You Sure You Want to Remove The Sector/Department?</p><br>
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

export default{
  data () {
    return {
      check7: '',
      input1: '',
      input2: '',
      switch2:true,
      colorx:"#def1d1",
      popupActive: false,
      popupActive1: false,
      
      colorLoading: '#ff8000',
      options: [
        {id: 1, label: 'Doctor'},
        {id: 3, label: 'Laboratorist'},
        {id: 2, label: 'Receptionist'},
      ],
      selected: {id: 3, label: 'Laboratorist'},
      options1: [
        {id: 1, label: 'Doctor'},
        {id: 3, label: 'Laboratorist'},
        {id: 2, label: 'Receptionist'},
      ],
      selected1: {id: 3, label: 'Laboratorist'},
    }
    
  },
  components: {
    'v-select': vSelect,
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

