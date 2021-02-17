<template>
<div class="vx-col w-full mb-base">
      <vx-card title="Add Doctor for Your Hospital">
        <div class="vx-row">
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-plus" label-placeholder="Doctor Full Name*" v-model="form.fullname"/>
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-bookmark" label-placeholder="Doctor Username*" v-model="form.username" />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-bookmark" label-placeholder="Password*" v-model="form.password" />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-bookmark" label-placeholder="Retype Password*" v-model="form.retypepassword" />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-edit" label-placeholder="Address" v-model="form.address" />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-terminal" label-placeholder="City" v-model="form.city" />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-zap" label-placeholder="Postal Code" v-model="form.postal" />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-shield" label-placeholder="Country" v-model="form.country" />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-shield" label-placeholder="Nationality" v-model="form.nationality" />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2 mt-5">
            <flat-pickr placeholder="Date of Birth" v-model="form.birthdate" :config="{ dateFormat: 'd F Y', maxDate: new Date() }" class="w-full" v-validate="'required'" />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2 mt-5">
            <v-select v-model="form.doc_gender" label="text" placeholder="Gender*" :options="gender" :dir="$vs.rtl ? 'rtl' : 'ltr'" option-text="name" return-object />
            </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-tablet" label-placeholder="Mobile Number*" v-model="form.mobile" />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2 mt-5">
            <v-select v-model="form.department" label="name" placeholder="Department*" :options="department" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
            </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-chrome" label-placeholder="Email" v-model="form.email" />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-server" label-placeholder="Special Designation(if any)" v-model="form.special1" />
          </div>
          <div class="vx-col sm:w-2/2 w-full mb-2 mt-5">
            <vs-textarea class="w-full" label="Others Information Like Educational Background,Experiance etc" v-model="form.others1" />
          </div>

        </div>
        <div class="vx-row">
         <div class="vx-col w-full">
             <div class="vx-row mb-6">
      <div class="vx-col sm:w-2/6">
        <span>Status:</span>
      </div>
      <div class="vx-col sm:w-3/6">
		<ul class="centerx inline-status">
			<li class="mr-4">
				<vs-radio color="success" v-model="form.status" vs-value="Active">Active</vs-radio>
			</li>
			<li class="mr-4">
				<vs-radio color="danger" v-model="form.status" vs-value="Inactive">Inactive</vs-radio>
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
        <p> Are You Sure You Want to Add This Person As A Doctor?</p><br>
        <vs-button @click="openLoadingColor" type="filled" :color="colorLoading">Accept</vs-button>
      </vs-popup>
            <vs-button color="warning" type="border" class="mb-2" @click="form = {}">Reset</vs-button>
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
import axios from 'axios'
import 'flatpickr/dist/flatpickr.css'
import vSelect from 'vue-select'
export default{
  components: {
    'v-select': vSelect,
    flatPickr
  },
  data () {
    return {
      form: {},
      status: 'Active',
      retypepassword: '',
      colorx:"#def1d1",
      popupActive: false,
      colorLoading: '#ff8000',
      date: null,
      gender: [
        { value: 'Male', text: 'Male' },
        { value: 'Female', text: 'Female' },
        { value: 'Others', text: 'Others' },
      ],
      gender_selected: [],
      department: [],
    }
  },
  created:function() {


        this.loadData();

        },
  methods: {
    loadData(){
		  axios.get('/api/department-list')
                .then(response => {
					this.department = response.data;
					console.log("Department Loaded");
				});

	  },
    openLoadingColor() {
			this.$validator.validateAll().then(result => {
        if(result) {
          if(this.form.password == this.form.retypepassword) {
			this.$vs.loading({
				type: 'sound'
			})
			console.log(this.form);
			this.popupActive = false;
       this.form.doc_gender = this.form.doc_gender.text;
       this.form.department = this.form.department.name;
			axios.post('/api/add-doctor', this.form)
  .then(function (response) {
	 console.log(response.data);
   console.log(form.doc_gender);

  })
  .catch(function (error) {
    console.log(error);
  })

  setTimeout(() => {

				this.$vs.loading.close()
			}, 2000);
			setTimeout(() => {
				this.$vs.notify({
					title: 'Success',
					text: 'Data Added Successfully!!',
					color: 'success',
					position: 'top-right',
					time: '4000',
					iconPack: 'feather',
					icon: 'icon-check'
				});
				this.form = {};
			}, 2000); } else {
        this.popupActive = false;
			setTimeout(() => {
				this.$vs.notify({
					title: 'Failed',
					text: 'Password Didnt Match!!',
					color: 'danger',
					position: 'top-right',
					time: '4000',
					iconPack: 'feather',
					icon: 'icon-check'
				});
			}, 2000);
      }
		} else {
			this.popupActive = false;
			setTimeout(() => {
				this.$vs.notify({
					title: 'Failed',
					text: 'Something Went Wrong!!',
					color: 'danger',
					position: 'top-right',
					time: '4000',
					iconPack: 'feather',
					icon: 'icon-check'
				});
			}, 2000);
		}
		})

		},
  }
}
</script>

