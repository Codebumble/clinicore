<template>
	<div class="vx-col w-full mb-base">
		<vx-card title="Add Department/Sector for Your Hospital">
			<div class="vx-row">
				<div class="vx-col sm:w-1/2 w-full mb-2">
					<vs-input class="w-full" icon-pack="feather" name="Department Name" icon="icon-plus" label-placeholder="Department Name*"
						v-model="form.name" v-validate="'required'"/>
						<span class="text-danger text-sm" v-show="errors.has('Department Name')">{{ errors.first('Department Name') }}</span>
				</div>
			</div>
			<div class="vx-row">
				<div class="vx-col sm:w-1/2 w-full mb-2">
					<vs-input class="w-full" v-model="form.value" label-placeholder="Description" />
				</div>
			</div>
			<div class="vx-row">
				<div class="vx-col sm:w-1/2 w-full mb-2">
					<vs-input class="w-full" v-model="form.department_head_name" label-placeholder="Head of the Department/Incharge Name" />
				</div>
			</div>
			<div class="vx-row">
					<div class="vx-col sm:w-1/2 w-full mb-2 mt-5">
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

			<div class="vx-row">
				<div class="vx-col w-full">
					<vs-button class="mr-3 mb-2" @click="popupActive=true" type="filled">Submit</vs-button>

					<vs-popup background-color="rgba(255,255,255,.6)" :background-color-popup="colorx" class=""
						title="Review" :active.sync="popupActive">
						<p> Are You Sure You Want to Add The Sector/Department?</p><br>
						<vs-button @click="openLoadingColor" type="filled" :color="colorLoading">OK</vs-button>
					</vs-popup>
					<vs-button color="warning" type="border" class="mb-2"
						@click="form.name = form.departmentheadsince = form.departmentheadname = form.description = form.status = '';">Reset</vs-button>
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
const axios = require('axios');
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
export default {
	data() {
		return {
			form: {},
			status: 'Active',
			colorx: "#def1d1",
			popupActive: false,
			colorLoading: '#ff8000',
		}
	},components: {
    flatPickr
  },methods: {
		openLoadingColor() {
			this.$validator.validateAll().then(result => {
        if(result) {
			this.$vs.loading({
				type: 'sound'
			})
			console.log(this.form);
			this.popupActive = false;
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
				this.form.name = '';
			this.form.status = '';
			this.form.departmentheadname = '';
			this.form.description = '';
			this.form.departmentheadsince = '';
			}, 2000);
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

