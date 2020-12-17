<template>
	<div class="vx-col w-full mb-base">
		<vx-card title="Add Purchase Data">
			<div class="vx-row">
				<div class="vx-col sm:w-1/2 w-full mb-2">
					<vs-input class="w-full" icon-pack="feather" icon="icon-plus" label-placeholder="Purchase From(Company Name)*" v-model="input1" />
				</div>
			</div>
			<div class="vx-row">
				<div class="vx-col sm:w-1/3 w-full mb-2 mt-3">
					<flat-pickr placeholder="Purchase Date" v-model="pdate" :config="{ dateFormat: 'd F Y', maxDate: new Date() }" class="w-full" v-validate="'required'" />
				</div>
			</div>

			<div class="vx-row">
				<div class="vx-col sm:w-3/3 mb-2 mt-3">
					<vs-table stripe noDataText="">
						<template slot="thead">
							<vs-th>Medicine Name</vs-th>
							<vs-th>Expire Date</vs-th>
							<vs-th>Price</vs-th>
                            <vs-th>Quantity(Box)</vs-th>
							<vs-th>Action</vs-th>
						</template>

						<template>
							<vs-tr v-for="(servicePackage, index) in servicePackages" :key="index">
								<vs-td>
									<vs-input icon-pack="feather" icon="icon-edit-2" placeholder="Medicine Name*" v-model="servicePackage.serviceName" />
								</vs-td>
                                <vs-td>
									<flat-pickr placeholder="Expire Date" v-model="edate" :config="{ dateFormat: 'd F Y', maxDate: new Date() }"  v-validate="'required'" />
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

			<div class="vx-row">
				<div class="vx-col w-full">
					<vs-button class="mr-3 mb-2" @click="popupActive=true" type="filled">Save</vs-button>

					<vs-popup background-color="rgba(255,255,255,.6)" :background-color-popup="colorx" class=""
						title="Review" :active.sync="popupActive">
						<p> Are You Sure You Want to Add This Purchase Info?</p><br>
						<vs-button @click="openLoadingColor" type="filled" :color="colorLoading">OK</vs-button>
					</vs-popup>
					<vs-button color="warning" type="border" class="mb-2"
						@click="input1 = input2 = ''; check7 = false;">Reset</vs-button>
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
	.inline-action {
		float: left !important;
		margin: 0 .5rem;
	}
	.inline-action:first-child{
		margin: 0 .5rem 0 0;
	}

</style>

<script>
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
	export default {
		data() {
			return {
				check7: '',
				input1: '',
				input2: '',
				textarea: '',
				status: 'Active',
				amount: 0,
				colorx: "#def1d1",
				popupActive: false,
				colorLoading: '#ff8000',
				servicePackages: [{
					serviceName: '',
					qty: 0,
                    price: 0,
                    pdate: '',
                    edate: '',
				}],
			}
		},components: {
    flatPickr
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
