<template>
	<div class="vx-row">
		<div class="vx-col sm:w-1/2 mb-6">
			<vx-card title="Modify Medical Records / Case">
				<div class="vx-row mr-auto">
					<div class="vx-col sm:w-2/2 w-full mb-2">
						<v-select v-model="selectedPatientID" :options="patientID" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
					</div>
					<div class="vx-col sm:w-2/2 w-full mb-2">
						<vs-input class="w-full" icon-pack="feather" icon="icon-plus" label-placeholder="Doctor Name"
							v-model="doctorName" />
					</div>
					<div class="vx-col sm:w-2/2 w-full mb-2 mt-4">
						<v-select v-model="selectedCaseManager" placeholder="Case Manager" :options="caseManager"
							:dir="$vs.rtl ? 'rtl' : 'ltr'" />
					</div>
					<div class="vx-col sm:w-2/2 w-full mb-2 mt-4">
						<v-select v-model="selectedRefDoc" placeholder="Ref. Doctor" :options="refDoc"
							:dir="$vs.rtl ? 'rtl' : 'ltr'" />
					</div>
					<div class="vx-col sm:w-2/2 w-full mb-2">
						<vs-input class="w-full" icon-pack="feather" icon="icon-plus" label-placeholder="Hospital Name"
							v-model="hospitalName" />
					</div>
					<div class="vx-col sm:w-2/2 w-full mb-2">
						<vs-input class="w-full" icon-pack="feather" icon="icon-map-pin"
							label-placeholder="Hospital Address" v-model="hospitalAddr" />
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
										<vs-radio color="success" v-model="status" vs-value="Active">Active</vs-radio>
									</li>
									<li class="mr-4">
										<vs-radio color="danger" v-model="status" vs-value="Inactive">Inactive
										</vs-radio>
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
							<p> Are You Sure You Want to Modify The Sector/Department?</p><br>
							<vs-button @click="openLoadingColor" type="filled" :color="colorLoading">OK</vs-button>
						</vs-popup>
						<vs-button color="warning" type="border" class="mb-2"
							@click="hospitalName = doctorName = hospitalAddr = ''; check7 = false;">Reset</vs-button>
					</div>
				</div>
			</vx-card>

		</div>
		<div class="vx-col sm:w-1/2 mb-6">
			<vx-card title="Remove A Department/Sector">
				<div class="vx-row mr-auto">
					<div class="vx-col sm:w-2/2 w-full mb-2">
						<v-select v-model="selectedPatientID" :options="patientID" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
					</div>
				</div>

				<div class="vx-row">
					<div class="vx-col w-full">
						<vs-button class="mr-3 mb-2" @click="popupActive1=true" type="filled">Remove</vs-button>

						<vs-popup background-color="rgba(255,255,255,.6)" :background-color-popup="colorx" class=""
							title="Review" :active.sync="popupActive1">
							<p> Are You Sure You Want to Remove This Record?</p><br>
							<vs-button @click="openLoadingDelete(me)" type="filled">Remove</vs-button>
						</vs-popup>
					</div>
				</div>
			</vx-card>
		</div>
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
import vSelect from 'vue-select'

export default {
	data() {
		return {
			hospitalName: '',
			doctorName: '',
			hospitalAddr: '',
			status: 'Active',
			colorx: "#def1d1",
			colorLoading: '#ff8000',
			patientID: [{
					id: 0,
					label: ''
				},
				{
					id: 1,
					label: 'HCPV876234'
				},
				{
					id: 3,
					label: 'HCPV766234'
				},
				{
					id: 2,
					label: 'HCPV236454'
				},
			],
			selectedPatientID: {
				id: 0,
				label: 'Select Patient ID'
			},
			refDoc: [{
					id: 1,
					label: ''
				},
				{
					id: 3,
					label: 'Dr. Shakil'
				},
				{
					id: 2,
					label: 'Dr. Shawon'
				},
				{
					id: 4,
					label: 'Dr. Sunny'
				},
			],
			selectedRefDoc: {
				id: 1,
				label: 'Ref. Doctor'
			},
			caseManager: [{
					id: 0,
					label: ''
				},
				{
					id: 1,
					label: 'Abul Hayat'
				},
				{
					id: 3,
					label: 'Abul Mal Abdul Muhit'
				},
				{
					id: 2,
					label: 'Motia'
				},
				{
					id: 4,
					label: 'Corona Bibi'
				},
			],
			selectedCaseManager: {
				id: 0,
				label: 'Case Manager'
			},
		}

	},
	components: {
		'v-select': vSelect,
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
					text: 'Data Modified Successfully!!',
					color: 'success',
					position: 'top-right',
					time: '4000',
					iconPack: 'feather',
					icon: 'icon-check'
				})
			}, 2000);
		},
		openLoadingDelete(me) {
			this.$vs.loading({
				type: 'sound'
			})
			this.popupActive1 = false;

			setTimeout(() => {

				this.$vs.loading.close()
			}, 2000);
			setTimeout(() => {
				this.$vs.notify({
					title: 'Success',
					text: 'Data Removed Successfully!!',
					color: 'success',
					position: 'top-right',
					time: '4000',
					iconPack: 'feather',
					icon: 'icon-check'
				})
			}, 2000);
		}
	}
}
</script>

