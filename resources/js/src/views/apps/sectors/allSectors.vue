<template>
	<vx-card>
		<vs-table pagination max-items="10" search stripe :data="users">
			<template slot="header">
            <h3>All Sector & Department</h3>
        </template>

			<template slot="thead">
				<vs-th>ID</vs-th>
				<vs-th>Sector/Department Name</vs-th>
				<vs-th>Incharge/Departent Head</vs-th>
				<vs-th>Joinng As Incharge/D. Head</vs-th>
				<vs-th>Status</vs-th>
                <vs-th>Action</vs-th>
			</template>

			<template slot-scope="{data}">
				<vs-tr :key="sector.id" v-for="sector in data">

					<vs-td :data="sector.id">

						{{ sector.id }}
					</vs-td>

					<vs-td :data="sector.name">
						{{ sector.name }}
					</vs-td>

					<vs-td :data="sector.department_head_name">

						{{ sector.department_head_name }}
					</vs-td>

					<vs-td :data="sector.head_since">

						{{ sector.head_since }}
					</vs-td>
					<vs-td :data="sector.status">

						{{ sector.status }}
					</vs-td>
                    <vs-td :data="sector.id">
                            <div class="flex">
					<vs-button @click="editData(sector)" type="border" size="small" icon-pack="feather" icon="icon-edit" class="mr-2" color="success"></vs-button>
                  <vs-button type="border" size="small" icon-pack="feather" icon="icon-eye" class="mr-2"></vs-button>
                  <vs-button type="border" size="small" icon-pack="feather" icon="icon-trash" color="danger"></vs-button>
   
                            </div>
                    </vs-td>


				</vs-tr>
			</template>

		</vs-table>
		<div class="demo-alignment">
		<vs-popup classContent="popup-example" title="Lorem ipsum dolor sit amet" :active.sync="popupActive2">
      
	  <div class="vx-row">
				<div class="vx-col sm:w-2/2 w-full mb-2">
					<vs-input class="w-full" icon-pack="feather" name="Department Name" icon="icon-plus" label-placeholder="Department Name*"
						v-model="form.name" v-validate="'required'"/></div>
			</div>
			<div class="vx-row">
				<div class="vx-col sm:w-2/2 w-full mb-2">
					<vs-input class="w-full" v-model="form.value" label-placeholder="Description" />
				</div>
			</div>
			<div class="vx-row">
				<div class="vx-col sm:w-2/2 w-full mb-2">
					<vs-input class="w-full" v-model="form.department_head_name" label-placeholder="Head of the Department/Incharge Name" />
				</div>
			</div>
			<div class="vx-row">
					<div class="vx-col sm:w-2/2 w-full mb-2 mt-5">
            <flat-pickr placeholder="Head of the Department/Incharge Since" v-model="form.head_since" :config="{ dateFormat: 'd F Y', maxDate: new Date() }" class="w-full"/>
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

      <vs-button class="mr-3 mb-2" @click="popupActive3=true" color="primary" type="filled">Edit</vs-button>
	  <vs-button class="mr-3 mb-2" @click="popupActive2=false" color="danger" type="filled">Close</vs-button>

      <vs-popup title="Inner popup" :active.sync="popupActive3">
        <p class="mr-3 mb-2">Are You Sure You Want to Modify The Sector/Department?</p>
		<vs-button class="mr-3 mb-2" @click="openLoadingColor" color="primary" type="filled">Confirm</vs-button>
		<vs-button class="mr-3 mb-2" @click="popupActive3=false" color="danger" type="filled">Discard</vs-button>
      </vs-popup>
    </vs-popup>
		</div>
	</vx-card>
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
const axios = require('axios');

import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
export default {
	data() {
		return {
			users: [],
			form: {},
			popupActive2: false,
			popupActive3: false,
		}
	},components: {
    flatPickr
  },methods: {
	  loadData(){
		  axios.get('/api/department-list')
                .then(response => {
                    this.users = response.data;
                });

	  },
		editData:function(sector){
			this.popupActive2 = true;
			this.form = sector;

		},
		openLoadingColor() {
			this.$validator.validateAll().then(result => {
        if(result) {
			this.$vs.loading({
				type: 'sound'
			})
			console.log(this.form);
			this.popupActive2 = false;
			this.popupActive3 = false;
			axios.post('/api/add-department', this.form)
  .then(function (response) {
	 console.log(response);
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
				this.form = {};
				this.loadData();
			}, 2000);
		} else {
			this.popupActive3 = false;
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
			
		}
	},created:function() { 
            
            
        this.loadData();

        },
}
</script>
