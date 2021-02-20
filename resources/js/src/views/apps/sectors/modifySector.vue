<template>
	<div class="vx-row">
		<div class="vx-col sm:w-1/2 mb-6">
			<vx-card title="Modify A Department/Sector">
				<div class="vx-row mr-auto">
					<div class="vx-col sm:w-2/2 w-full mb-2">
						<v-select v-model="selected_department_edit" label="name" :options="department_option_edit" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
					</div>
					<div class="vx-col sm:w-2/2 w-full mb-2">
						<vs-input class="w-full" icon-pack="feather" icon="icon-plus" :disabled="isDisabled" label-placeholder="New Name"
							v-model="selected_department_edit.name" />
					</div>
					<div class="vx-col sm:w-2/2 w-full mb-2">
						<vs-input class="w-full" :disabled="isDisabled" v-model="selected_department_edit.value" label-placeholder="Description" />
					</div>
					<div class="vx-col sm:w-2/2 w-full mb-2">
						<vs-input class="w-full" :disabled="isDisabled" v-model="selected_department_edit.department_head_name" label-placeholder="Head of the Department/Incharge Name" />
					</div>
					
					<div class="vx-col sm:w-2/2 w-full mb-2 mt-5">
            <flat-pickr :disabled="isDisabled" placeholder="Head of the Department/Incharge Since" v-model="selected_department_edit.head_since" :config="{ dateFormat: 'd F Y', maxDate: new Date() }" class="w-full"/>
          </div>
				</div>

				<div class="vx-row">
					<div class="vx-col w-full mt-5">
						<div :disabled="isDisabled" class="vx-row mb-6">
							<div class="vx-col sm:w-2/6">
								<span>Status:</span>
							</div>
							<div class="vx-col sm:w-3/6">
								<ul class="centerx inline-status">
									<li class="mr-4">
										<vs-radio :disabled="isDisabled" color="success" v-model="selected_department_edit.status" vs-value="Active">Active</vs-radio>
									</li>
									<li class="mr-4">
										<vs-radio color="danger" :disabled="isDisabled" v-model="selected_department_edit.status" vs-value="Inactive">Inactive
										</vs-radio>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div class="vx-row">
					<div class="vx-col w-full">
						<vs-button class="mr-3 mb-2" @click="popupActiveEdit=true" type="filled">Submit</vs-button>

						<vs-popup background-color="rgba(255,255,255,.6)" :background-color-popup="colorx" class=""
							title="Review" :active.sync="popupActiveEdit">
							<p> Are You Sure You Want to Modify The Sector/Department?</p><br>
							<vs-button @click="openLoadingColor" type="filled" :color="colorLoading">Confirm</vs-button>
						</vs-popup>
						<vs-button color="warning" type="border" class="mb-2"
							@click="selected_department_edit = {};">Reset</vs-button>
					</div>
				</div>
			</vx-card>

		</div>
		<div class="vx-col sm:w-1/2 mb-6">
			<vx-card title="Remove A Department/Sector">
				<div class="vx-row mr-auto">
					<div class="vx-col sm:w-2/2 w-full mb-2">
						<v-select v-model="selected_department_delete" label="name" :options="department_option_delete" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
					</div>
				</div>

				<div class="vx-row">
					<div class="vx-col w-full">
						<vs-button class="mr-3 mb-2"  @click="popupActiveDelete=true" type="filled">Remove</vs-button>

						<vs-popup background-color="rgba(255,255,255,.6)" :background-color-popup="colorx" class=""
							title="Review" :active.sync="popupActiveDelete">
							<p> Are You Sure You Want to Remove The Sector/Department?</p><br>
							<vs-button color="warning" @click="openLoadingDelete" type="filled">Remove</vs-button>
						</vs-popup>
					</div>
				</div>
			</vx-card>
		</div>
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
import vSelect from 'vue-select'
import axios from 'axios'
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'

export default {
	data() {
		return {
			colorx: "#def1d1",
			popupActiveEdit: false,
			popupActiveDelete: false,

			colorLoading: '#ff8000',

			department_option_delete: [],
			department_option_edit: [],
			selected_department_edit: {},
			selected_department_delete: {},
		}

	},
	components: {
		'v-select': vSelect,
		flatPickr,
	},computed: {
      isDisabled() {
        if(!this.selected_department_edit.id){
			return true;
		} else {
		return false;
		}
      },
    },
	methods: {
		loadData(){
		  axios.get('/api/department-list')
                .then(response => {
					this.department_option_edit = response.data;
					this.department_option_delete =response.data;
					console.log("Updated");
				});

	  },
		openLoadingColor() {
			this.$validator.validateAll().then(result => {
        if(result) {
			this.$vs.loading({
				type: 'sound'
			})
			console.log(this.form);
			this.popupActiveEdit = false;
			axios.post('/api/add-department', this.selected_department_edit)
  .then(function (response) {
	 console.log(response.data);

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
				this.selected_department_edit = {};
				this.loadData();
			}, 2000);
		} else {
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

		},openLoadingDelete() {
			this.$vs.loading({
				type: 'sound'
			})
			console.log(this.form);
			this.popupActiveDelete = false;
			axios.post('/api/delete-department', this.selected_department_delete)
  .then(function (response) {
	 console.log(response.data);

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
					text: 'Data Removed Successfully!!',
					color: 'danger',
					position: 'top-right',
					time: '4000',
					iconPack: 'feather',
					icon: 'icon-check'
				});
				this.selected_department_delete = {};
				this.loadData();
			}, 2000);
		

		}
	},created:function() {


        this.loadData();

        },
}
</script>

