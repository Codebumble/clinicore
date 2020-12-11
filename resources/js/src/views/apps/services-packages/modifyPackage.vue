<template>
	<div class="vx-row">
		<div class="vx-col w-full mb-6">
			<vx-card title="Modify A Package">
				<div class="vx-row mr-auto">
					<div class="vx-col sm:w-3/4 w-full mb-2">
						<v-select v-model="selected" :options="options" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
					</div>
					<div class="vx-col sm:w-3/4 w-full mb-2">
						<vs-input class="w-full" icon-pack="feather" icon="icon-plus" label-placeholder="New Name"
							v-model="input1" />
					</div>
					<div class="vx-col sm:w-3/4 w-full mb-2 mt-3">
						<vs-textarea class="w-full" v-model="textarea" placeholder="Description" />
					</div>
				</div>



			<div class="vx-row">
				<div class="vx-col sm:w-3/3 mb-2 mt-3">
					<vs-table stripe noDataText="">
						<template slot="thead">
							<vs-th>Service Name</vs-th>
							<vs-th>Quantity</vs-th>
							<vs-th>Price</vs-th>
							<vs-th>Action</vs-th>
						</template>

						<template>
							<vs-tr v-for="(servicePackage, index) in servicePackages" :key="index">
								<vs-td>
									<vs-input icon-pack="feather" icon="icon-edit-2" placeholder="Service Name*" v-model="servicePackage.serviceName" />
								</vs-td>
								<vs-td>
									<vs-input-number label="Quantity:" v-model="servicePackage.qty" />
								</vs-td>
								<vs-td>
									<vs-input-number label="Price:" v-model="servicePackage.price" />
								</vs-td>
								<vs-td>
									<vs-button radius color="success" type="gradient" icon-pack="feather" icon="icon-plus" class="inline-action" @click="addNewService"></vs-button>
									<vs-button radius color="danger" type="gradient" icon-pack="feather" icon="icon-minus" class="inline-action" @click="removeService(index, servicePackage)" :disabled="servicePackage.serviceName < 1"></vs-button>
								</vs-td>
							</vs-tr>
						</template>
					</vs-table>
				</div>
			</div>

			<!-- currency -->
			<div class="vx-row">
				<div class="vx-col sm:w-3/4 w-full mb-2 mt-3">
					<vx-input-group class="mb-base">
						<template slot="prepend">
						<div class="prepend-text bg-primary">
							<span>Discount</span>
						</div>
						</template>

						<vs-input v-model="amount" />

						<template slot="append">
						<div class="append-text bg-primary">
							<span>%</span>
						</div>
						</template>
					</vx-input-group>
				</div>
			</div>
			<!-- /currency -->


				<div class="vx-row">
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
					<div class="vx-col w-full">
						<vs-button class="mr-3 mb-2" @click="popupActive=true" type="filled">Save</vs-button>

						<vs-popup background-color="rgba(255,255,255,.6)" :background-color-popup="colorx" class=""
							title="Review" :active.sync="popupActive">
							<p> Are You Sure You Want to Modify This Service?</p><br>
							<vs-button @click="openLoadingColor" type="filled" :color="colorLoading">OK</vs-button>
						</vs-popup>
						<vs-button color="warning" type="border" class="mb-2"
							@click="input1 = input2 = ''; check7 = false;">Reset</vs-button>
					</div>
				</div>
			</vx-card>

		</div>
		<div class="vx-col w-full mb-6">
			<vx-card title="Remove Package">
				<div class="vx-row mr-auto">
					<div class="vx-col sm:w-2/2 w-full mb-2">
						<v-select v-model="selected1" :options="options1" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
					</div>
				</div>

				<div class="vx-row">
					<div class="vx-col w-full">
						<vs-button class="mr-3 mb-2" @click="popupActive1=true" type="filled">Remove</vs-button>

						<vs-popup background-color="rgba(255,255,255,.6)" :background-color-popup="colorx" class=""
							title="Review" :active.sync="popupActive1">
							<p> Are You Sure You Want to Remove This Service?</p><br>
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
	.inline-action {
		float: left !important;
		margin: 0 .5rem;
	}
	.inline-action:first-child{
		margin: 0 .5rem 0 0;
	}
</style>

<script>
	import vSelect from 'vue-select'

	export default {
		data() {
			return {
				check7: '',
				input1: '',
				input2: '',
				status: 'Active',
				colorx: "#def1d1",
				amount: 0,
				textarea: '',
				popupActive: false,
				popupActive1: false,
				servicePackages: [{
					serviceName: '',
					qty: 0,
					price: 0,
				}],
				colorLoading: '#ff8000',
				options: [{
						id: 1,
						label: 'Package 1'
					},
					{
						id: 3,
						label: 'Package 2'
					},
					{
						id: 2,
						label: 'Package 3'
					},
				],
				selected: {
					id: 3,
					label: 'Package 1'
				},
				options1: [{
						id: 1,
						label: 'Package 1'
					},
					{
						id: 3,
						label: 'Package 2'
					},
					{
						id: 2,
						label: 'Package 3'
					},
				],
				selected1: {
					id: 3,
					label: 'Package 3'
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
			},
			addNewService(){
				this.servicePackages.push({
					serviceNames: '',
					qty: 0,
					price: 0,
				});
			},
			removeService(index, servicePackage){
				this.servicePackages.indexOf(servicePackage);
				this.servicePackages.splice(index, 1);
			}
		}
	}
</script>
