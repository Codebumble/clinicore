<template>
	<div class="vx-col w-full mb-base">
		<vx-card title="Create Prescription for Your Patient">
			<div class="vx-row">
                <div class="vx-col sm:w-3/4 w-full mb-2">
          <v-select class="w-full" icon-pack="feather" icon="icon-plus" v-model="selected" :options="options" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
				</div>
				<div class="vx-col sm:w-3/4 w-full mb-2">
          <v-select class="w-full" icon-pack="feather" icon="icon-plus" v-model="selected1" :options="options1" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
				</div>
			</div>
			<div class="vx-row">
				<div class="vx-col sm:w-3/4 w-full mb-2 mt-3">
					<vs-textarea class="w-full" v-model="textarea" placeholder="Information About Patient Problem" />
				</div>
			</div>

			<div class="vx-row">
				<div class="vx-col sm:w-3/3 mb-2 mt-3">
					<vs-table stripe noDataText="">
						<template slot="thead">
							<vs-th>Medicine Name</vs-th>
							<vs-th>Morning</vs-th>
							<vs-th>Noon</vs-th>
              <vs-th>Night</vs-th>
							<vs-th>Action</vs-th>
						</template>

						<template>
							<vs-tr v-for="(servicePackage, index) in servicePackages" :key="index">
								<vs-td>
									<vs-input icon-pack="feather" icon="icon-edit-2" placeholder="*" v-model="servicePackage.serviceName" />
								</vs-td>
								<vs-td>
									<vs-input-number label="Quantity:" v-model="servicePackage.morning" />
								</vs-td>
								<vs-td>
									<vs-input-number label="Quantity:" v-model="servicePackage.noon" />
								</vs-td>
                <vs-td>
									<vs-input-number label="Quantity:" v-model="servicePackage.night" />
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
					<vs-button class="mr-3 mb-2" @click="popupActive=true" type="filled">Print</vs-button>

					<vs-popup background-color="rgba(255,255,255,.6)" :background-color-popup="colorx" class=""
						title="Review" :active.sync="popupActive">
						<p> Are You Sure You Want to Print This Prescription ?</p><br>
						
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
import vSelect from 'vue-select'

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
        options1: [
        {id: 1, label: 'Shakil Ahmed(16261)'},
        {id: 3, label: 'Saifur Rahman(28292)'},
        {id: 2, label: 'Saymoon Islam(3312)'},
      ],
      selected1: {id: 1, label: 'Patient '},
      options: [
        {id: 1, label: 'UX16528723'},
        {id: 3, label: 'UX82075298'},
        {id: 2, label: 'UX80280228'},
      ],
      selected: {id: 0, label: 'Choose Prescription ID'},
				servicePackages: [{
					serviceName: '',
					morning: 0,
          noon: 0,
          night:0,
				}],
			}
		},components: {
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
					morning: 0,
          noon: 0,
          night: 0,
				});
			},
			removeService(index, servicePackage){
				this.servicePackages.indexOf(servicePackage);
				this.servicePackages.splice(index, 1);
			}

		}
	}

</script>
