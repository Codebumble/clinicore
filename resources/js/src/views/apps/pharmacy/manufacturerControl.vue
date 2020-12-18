<template>
	<vx-card>

		<vs-tabs alignment="fixed" :color="tabColor">
			<vs-tab @click="tabColor = 'success'" label="Manage Manufacturer">
				<div>
<vx-card>
		<vs-table :data="manufacturers" search stripe pagination max-items="3">

			<template slot="thead">
				<vs-th>Manufacturer Name</vs-th>
				<vs-th>Manufacturer Mobile</vs-th>
				<vs-th>Phone</vs-th>
				<vs-th>Email</vs-th>
				<vs-th>Country</vs-th>
				<vs-th>Action</vs-th>
			</template>

			<template slot-scope="{data}">
				<vs-tr :key="index" v-for="(tr, index) in data">

					<vs-td :data="data[index].manufacturerName">
						{{ data[index].manufacturerName }}
					</vs-td>

					<vs-td :data="data[index].manufacturerMob">
						{{ data[index].manufacturerMob }}
					</vs-td>
					<vs-td :data="data[index].phone">
						{{ data[index].phone }}
					</vs-td>
					<vs-td :data="data[index].email">
						{{ data[index].email }}
					</vs-td>
					<vs-td :data="data[index].country">
						{{ data[index].country }}
					</vs-td>

					<vs-td>
						<vs-button color="primary" type="line" icon-pack="feather" icon="icon-eye" class="inline-action"></vs-button>
						<vs-button color="success" type="line" icon-pack="feather" icon="icon-edit" class="inline-action"></vs-button>
						<vs-button color="danger" type="line" icon-pack="feather" icon="icon-trash" class="inline-action"></vs-button>
					</vs-td>
				</vs-tr>
			</template>
		</vs-table>
		</vx-card>
				</div>


			</vs-tab>
			<vs-tab @click="tabColor = 'success'" label="Add Manufacturer">
				<div>

			<vx-card>
<div class="vx-row">
				<div class="vx-col sm:w-1/2 w-full mb-2">
					<vs-input class="w-full" icon-pack="feather" icon="icon-plus" label-placeholder="Manufacturer Name"
						v-model="manufacturerName" />
				</div>
				<div class="vx-col sm:w-1/2 w-full mb-2">
					<vs-input class="w-full" icon-pack="feather" icon="icon-plus" label-placeholder="Manufacturer Mobile"
						v-model="manufacturerMob" />
				</div>
				<div class="vx-col sm:w-1/2 w-full mb-2">
					<vs-input class="w-full" icon-pack="feather" icon="icon-edit" label-placeholder="Phone"
						v-model="phone" />
				</div>
				<div class="vx-col sm:w-1/2 w-full mb-2">
					<vs-input class="w-full" icon-pack="feather" icon="icon-edit" label-placeholder="Email"
						v-model="email" />
				</div>
				<div class="vx-col sm:w-1/2 w-full mb-2">
					<vs-input class="w-full" icon-pack="feather" icon="icon-edit" label-placeholder="Country"
						v-model="country" />
				</div>
				<div class="vx-col sm:w-1/2 w-full mb-2">
					<vs-input class="w-full" icon-pack="feather" icon="icon-edit" label-placeholder="City"
						v-model="city" />
				</div>
				<div class="vx-col sm:w-1/2 w-full mb-2">
					<vs-input class="w-full" icon-pack="feather" icon="icon-edit" label-placeholder="State"
						v-model="state" />
				</div>
				<div class="vx-col sm:w-1/2 w-full mb-2">
					<vs-input class="w-full" icon-pack="feather" icon="icon-edit" label-placeholder="Manufacturer Address"
						v-model="manufacturerAddress" />
				</div>
				<div class="vx-col sm:w-1/2 w-full mb-2">
					<vs-input class="w-full" icon-pack="feather" icon="icon-edit"
						label-placeholder="Manufacturer Details" v-model="manufacturerDetails" />
				</div>


			</div>

			<div class="vx-row mt-3">
				<div class="vx-col w-full">
					<vs-button class="mr-3 mb-2" @click="popupActive=true" type="filled">Save</vs-button>

					<vs-popup background-color="rgba(255,255,255,.6)" :background-color-popup="colorx" class=""
						title="Review" :active.sync="popupActive">
						<p> Are You Sure You Want to Add This Manufacturer?</p><br>
						<vs-button @click="openLoadingColor" type="filled" :color="colorLoading">OK</vs-button>
					</vs-popup>
					<vs-button color="warning" type="border" class="mb-2"
						@click="manufacturerName = manufacturerMob = phone = email = country = city = state = manufacturerAddress = manufacturerDetails = ''; check7 = false;">Reset</vs-button>
				</div>
			</div>
		</vx-card>

				</div>
			</vs-tab>


			<vs-tab @click="tabColor = 'success'" label="Manage Advance">
				<div>
					<vx-card>
						<div class="w-full mb-3">
							<v-select v-model="selectedManufacturer" :options="manufacturerNames" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
						</div>
						<div class="w-full mb-3 mt-5">
							<v-select v-model="selectedAdvanceType" :options="advanceType" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
						</div>
						<div class="w-full mb-3 mt-5">
							<vs-input class="w-full" icon-pack="feather" icon="icon-edit"
						label-placeholder="Amount" v-model="amount" />
						</div>


						<div class="vx-row mt-5">
							<div class="vx-col w-full">
								<vs-button class="mr-3 mb-2" @click="popupActive=true" type="filled">Save</vs-button>

								<vs-popup background-color="rgba(255,255,255,.6)" :background-color-popup="colorx" class="" title="Review"
									:active.sync="popupActive">
									<p> Are You Sure You Want to Add This Activity to Ledger?</p><br>
									<vs-button @click="openLoadingColor" type="filled" :color="colorLoading">OK</vs-button>
								</vs-popup>
								<vs-button color="warning" type="border" class="mb-2"
									@click="amount = ''; check7 = false;">
									Reset</vs-button>
							</div>
						</div>


					</vx-card>
				</div>
			</vs-tab>

		</vs-tabs>
	</vx-card>
</template>

<style lang="scss">
	.inline-action {
		float: left !important;
		margin: 0 .5rem;
	}
	.inline-action:first-child{
		margin: 0 .5rem 0 0;
	}

	.vs-table--td{
		padding: 5px 15px !important;
	}
</style>

<script>
import vSelect from 'vue-select'
export default {

	components: {
		'v-select': vSelect,
	},
	data() {
		return {
			check7: '',
			colorx: "#def1d1",
			popupActive: false,
			colorLoading: '#ff8000',
			tabColor: 'success',


			manufacturerName: '',
			manufacturerMob: '',
			phone: '',
			email: '',
			country: '',
			city: '',
			state: '',
			manufacturerAddress: '',
			manufacturerDetails: '',
			amount: '',


			manufacturers: [{
					manufacturerName: 'ACL',
					manufacturerMob: '3425677356',
					phone: '53443453434',
					email: 'admin@acl.com',
					country: 'Bolivia',
					city: 'Bosali',
					state: 'Bosali',
					manufacturerAddress: 'Ks-34. demo state',
					manufacturerDetails: 'Optional Details goes here',
				},
				{
					manufacturerName: 'ACL',
					manufacturerMob: '3425677356',
					phone: '53443453434',
					email: 'admin@acl.com',
					country: 'Bolivia',
					city: 'Bosali',
					state: 'Bosali',
					manufacturerAddress: 'Ks-34. demo state',
					manufacturerDetails: 'Optional Details goes here',
				},
				{
					manufacturerName: 'ACL',
					manufacturerMob: '3425677356',
					phone: '53443453434',
					email: 'admin@acl.com',
					country: 'Bolivia',
					city: 'Bosali',
					state: 'Bosali',
					manufacturerAddress: 'Ks-34. demo state',
					manufacturerDetails: 'Optional Details goes here',
				},
				{
					manufacturerName: 'ACL',
					manufacturerMob: '3425677356',
					phone: '53443453434',
					email: 'admin@acl.com',
					country: 'Bolivia',
					city: 'Bosali',
					state: 'Bosali',
					manufacturerAddress: 'Ks-34. demo state',
					manufacturerDetails: 'Optional Details goes here',
				},
				{
					manufacturerName: 'ACL',
					manufacturerMob: '3425677356',
					phone: '53443453434',
					email: 'admin@acl.com',
					country: 'Bolivia',
					city: 'Bosali',
					state: 'Bosali',
					manufacturerAddress: 'Ks-34. demo state',
					manufacturerDetails: 'Optional Details goes here',
				},
				{
					manufacturerName: 'ACL',
					manufacturerMob: '3425677356',
					phone: '53443453434',
					email: 'admin@acl.com',
					country: 'Bolivia',
					city: 'Bosali',
					state: 'Bosali',
					manufacturerAddress: 'Ks-34. demo state',
					manufacturerDetails: 'Optional Details goes here',
				},

			],

			manufacturerNames: [
				{
					id: 1,
					label: ''
				},
				{
					id: 2,
					label: 'ACL'
				},
				{
					id: 3,
					label: 'Square'
				},
				{
					id: 4,
					label: 'Beximco'
				},
			],
			selectedManufacturer: {
				id: 1,
				label: 'Select Manufacturer'
			},

			advanceType: [
				{
					id: 1,
					label: ''
				},
				{
					id: 2,
					label: 'Payment'
				},
				{
					id: 3,
					label: 'Receive'
				},
			],
			selectedAdvanceType: {
				id: 1,
				label: 'Select Advance Type'
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
		}
	},
}
</script>
