<template>
<div class="vx-col w-full mb-base">
      <vx-card title="Add Reports/Docs for Patient">
        <div class="vx-row">
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-plus" label-placeholder="Patient UID*" v-model="input1" />
          </div></div>
          <div class="vx-row">
          <div class="vx-col sm:w-1/2 w-full mb-2 mt-5">
            <v-select v-model="selected1" :options="options1" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
            </div>
          </div>
          <div class="vx-col">
          <div class="vx-col sm:w-2/3 w-full  mb-2 mt-5">
            <quill-editor class="sm:h-2/3" v-model="input3"></quill-editor>
          </div>
          <div class="vx-col sm:w-1/4 w-full mb-2 mt-5">
          <vs-upload multiple automatic text="Select Docs OR Drag & Drop" action="https://jsonplaceholder.typicode.com/posts/"  />
          </div>
          
        </div>
        
        <div class="vx-row">
          <div class="vx-col w-full mt-5">
            <vs-button class="mr-3 mb-2" @click="popupActive=true" type="filled">Submit</vs-button>

      <vs-popup background-color="rgba(255,255,255,.6)" :background-color-popup="colorx" class=""  title="Review" :active.sync="popupActive">
        <p> Are You Sure You Want to Add This Docs For This Patients?</p><br>
        <vs-button @click="openLoadingColor" type="filled" :color="colorLoading">OK</vs-button>
      </vs-popup>
            <vs-button color="warning" type="border" class="mb-2" @click="input1 = input2 = input3 = ''; check7 = false;">Reset</vs-button>
          </div>
        </div>
      </vx-card>
    </div>
</template>
<script>

import vSelect from 'vue-select'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'

export default{
  data () {
    return {
      check7: '',
      input1: '',
      input2: '',
      input3: 'Write Some about the Docs/Patient(if any)',
      switch2:true,
      colorx:"#def1d1",
      popupActive: false,
      colorLoading: '#ff8000',
      options1: [
        {id: 1, label: 'Dr. Shakil Ahmed'},
        {id: 3, label: 'Dr. Saifur Rahman'},
        {id: 2, label: 'Dr. Saymoon Islam'},
        {id: 4, label: 'Other Hospital Or Client'},
      ],
      selected1: {id: 0, label: 'Doctor Name'},
    }
  },components: {
    'v-select': vSelect,
    quillEditor,
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
    }
  }
}
</script>

