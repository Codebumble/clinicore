<template>
	<div class="vx-col w-full mb-base">
		<vx-card title="Allocate Bed">
			<div class="vx-row">
				<div class="vx-col sm:w-1/2 w-full mb-2">
					<vs-input class="w-full" icon-pack="feather" icon="icon-plus" label-placeholder="Patient ID"
						v-model="patientID" />
				</div>
				<div class="vx-col sm:w-1/2 w-full mb-2 mt-5">
					<v-select v-model="selectedBedType" :options="bedType" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
				</div>
				<div class="vx-col sm:w-1/2 w-full mb-2 mt-5">
					<flat-pickr placeholder="Assign Date" v-model="assignDate" :config="{ dateFormat: 'd F Y' }" class="w-full"/>
				</div>
				<div class="vx-col sm:w-1/2 w-full mb-2 mt-5">
					<flat-pickr placeholder="Discharge Date" v-model="dischargeDate" :config="{ dateFormat: 'd F Y' }" class="w-full"/>
				</div>
				<div class="vx-col sm:w-1/2 w-full mb-2">
					<vs-input class="w-full" icon-pack="feather" icon="icon-plus" label-placeholder="Desc."
						v-model="desc" />
				</div>
			</div>

			<div class="vx-row mt-3">
				<div class="vx-col w-full">
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
				<div class="vx-col w-full mt-5">
					<vs-button class="mr-3 mb-2" @click="popupActive=true" type="filled">Submit</vs-button>

					<vs-popup background-color="rgba(255,255,255,.6)" :background-color-popup="colorx" class=""
						title="Review" :active.sync="popupActive">
						<p> Are You Sure You Want to Add This Payment?</p><br>
						<vs-button @click="openLoadingColor" type="filled" :color="colorLoading">Accept</vs-button>
					</vs-popup>
					<vs-button color="warning" type="border" class="mb-2"
						@click="patientID = assignDate = dischargeDate = desc = ''; check7 = false;">
						Reset</vs-button>
				</div>
			</div>
		</vx-card>
	</div>
</template>

<style lang="scss">
	.inline-status {
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
export default {
	components: {
		'v-select': vSelect,
		flatPickr
	},
	data() {
		return {
			check7: '',
			patientID: '',
			desc: '',
			assignDate: null,
			dischargeDate: null,
			status: 'Active',
			bedType: [{
					id: 1,
					label: ''
				},
				{
					id: 2,
					label: 'General Word'
				},
				{
					id: 3,
					label: 'General'
				},
				{
					id: 4,
					label: 'Semi Private'
				},
				{
					id: 5,
					label: 'Private room 1001'
				},
			],
			selectedBedType: {
				id: 1,
				label: 'Select Bed Type'
			},
		}
	},
	methods: {
		openLoadingColor() {
			this.$vs.loading({
				type: 'sound'
			})
			this.popupActive = false;

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
				})
			}, 2000);
		},
	}
}
</script>
