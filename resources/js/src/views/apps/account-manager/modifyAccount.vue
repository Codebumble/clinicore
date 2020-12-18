<template>
	<div class="vx-row">
		<div class="vx-col sm:w-1/2 mb-6">
			<vx-card title="Modify or Remove Account">
				<div class="vx-row mr-auto">
					<div class="vx-col sm:w-2/2 w-full mb-2">
						<v-select v-model="selectedAcc" :options="acc" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
					</div>
					<div class="vx-col sm:w-2/2 w-full mb-2">
						<vs-input class="w-full" icon-pack="feather" icon="icon-plus" label-placeholder="New Account Name"
							v-model="newAccName" />
					</div>
					<div class="vx-col sm:w-2/2 w-full mb-2 mt-4">
						<v-select v-model="selectedAccType" :options="accType" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
					</div>
					<div class="vx-col sm:w-2/2 w-full mb-2">
						<vs-input class="w-full" v-model="desc" label-placeholder="Description" />
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
							<p> Are You Sure You Want to Modify This Account?</p><br>
							<vs-button @click="openLoadingColor" type="filled" :color="colorLoading">OK</vs-button>
						</vs-popup>
						<vs-button color="warning" type="border" class="mb-2"
							@click="input1 = input2 = ''; check7 = false;">Reset</vs-button>
					</div>
				</div>
			</vx-card>

		</div>
		<div class="vx-col sm:w-1/2 mb-6">
			<vx-card title="Remove Account">
				<div class="vx-row mr-auto">
					<div class="vx-col sm:w-2/2 w-full mb-4">
						<v-select v-model="selectedAcc" :options="acc" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
					</div>
				</div>

				<div class="vx-row">
					<div class="vx-col w-full">
						<vs-button class="mr-3 mb-2" @click="popupActive1=true" type="filled">Remove</vs-button>

						<vs-popup background-color="rgba(255,255,255,.6)" :background-color-popup="colorx" class=""
							title="Review" :active.sync="popupActive1">
							<p> Are You Sure You Want to Remove This Account?</p><br>
							<vs-button @click="openLoadingDelete(me)" type="filled">Remove</vs-button>
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

export default {
	data() {
		return {
			check7: '',
			newAccName: '',
			desc: '',
			status: 'Active',
			colorx: "#def1d1",
			popupActive: false,
			popupActive1: false,

			colorLoading: '#ff8000',
			acc: [{
					id: 1,
					label: ''
				},
				{
					id: 2,
					label: 'Office Rent'
				},
				{
					id: 3,
					label: 'Extendature'
				},
				{
					id: 4,
					label: 'Employee Salary'
				},
			],
			selectedAcc: {
				id: 1,
				label: 'Select an account'
			},
			accType: [{
					id: 1,
					label: ''
				},
				{
					id: 3,
					label: 'Debit'
				},
				{
					id: 2,
					label: 'Credit'
				},
			],
			selectedAccType: {
				id: 1,
				label: 'Account Type'
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

