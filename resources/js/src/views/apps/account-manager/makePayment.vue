<template>
	<div class="vx-col w-full mb-base">
		<vx-card title="Make Payment">
			<div class="vx-row">
				<div class="vx-col sm:w-1/2 w-full mb-2 mt-5">
					<flat-pickr placeholder="Date" v-model="date" :config="{ dateFormat: 'd F Y' }" class="w-full"/>
				</div>
				<div class="vx-col sm:w-1/2 w-full mb-2 mt-5">
					<v-select v-model="selectedAccName" :options="accName" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
				</div>

				<div class="vx-col sm:w-1/2 w-full mb-2">
					<vs-input class="w-full" icon-pack="feather" icon="icon-edit" label-placeholder="To Pay"
						v-model="toPay" />
				</div>
				<div class="vx-col sm:w-1/2 w-full mb-2">
					<vs-input class="w-full" icon-pack="feather" icon="icon-edit" label-placeholder="Amount"
						v-model="amount" />
				</div>
				<div class="vx-col sm:w-1/2 w-full mb-2">
					<vs-input class="w-full" icon-pack="feather" icon="icon-edit" label-placeholder="Description"
						v-model="desc" />
				</div>
			</div>

			<div class="vx-row">
				<div class="vx-col w-full mt-5">
					<vs-button class="mr-3 mb-2" @click="popupActive=true" type="filled">Submit</vs-button>

					<vs-popup background-color="rgba(255,255,255,.6)" :background-color-popup="colorx" class=""
						title="Review" :active.sync="popupActive">
						<p> Are You Sure You Want to Make This Payment?</p><br>
						<vs-button @click="openLoadingColor" type="filled" :color="colorLoading">Accept</vs-button>
					</vs-popup>
					<vs-button color="warning" type="border" class="mb-2"
						@click="toPay = amount = desc = date = ''; check7 = false;">
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
			toPay: '',
			amount: '',
			desc: '',
			date: null,
			accName: [{
					id: 1,
					label: ''
				},
				{
					id: 2,
					label: 'Employee Salary'
				},
				{
					id: 3,
					label: 'Office Rent'
				},
				{
					id: 4,
					label: 'Expendature'
				},
			],
			selectedAccName: {
				id: 1,
				label: 'Account Name'
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
