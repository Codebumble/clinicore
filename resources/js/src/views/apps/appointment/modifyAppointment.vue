<template>
<div class="vx-row">
	<div class="vx-col w-full mb-base">
		<vx-card title="Add Appointment for A Doctor">
            <div class="vx-row">
				<div class="vx-col sm:w-1/2 w-full mb-2 mt-5">
            <v-select v-model="selected3" :options="options3" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
				</div>
			</div>
			<div class="vx-row">
				<div class="vx-col sm:w-1/2 w-full mb-2 mt-5">
            <v-select v-model="selected1" :options="options1" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
				</div>
			</div>
            <div class="vx-row">
				<div class="vx-col sm:w-1/2 w-full mb-2 mt-5">
            <v-select v-model="selected" :options="options" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
				</div>
			</div>
            <div class="vx-row">
				<div class="vx-col sm:w-1/2 w-full mb-2 mt-5">
            <v-select v-model="selected2" :options="options2" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
				</div>
			</div>
			<div class="vx-row">
				<div class="vx-col sm:w-1/2 w-full mb-2 mt-5">
					<vs-textarea counter="100" label="Problem(if Explainable)" :counter-danger.sync="counterDanger" v-model="textarea" />
				</div>
			</div>
            <div class="vx-row">
            <div class="vx-col sm:w-1/2 w-full mb-2 mt-3">
            <flat-pickr placeholder="Date of Appointment" v-model="date" :config="{ dateFormat: 'd F Y', maxDate: new Date() }" class="w-full" v-validate="'required'" />
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
									<vs-radio color="danger" v-model="status" vs-value="Inactive">Inactive</vs-radio>
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
						<p> Are You Sure You Want to Add The Appointment?</p><br>
						<vs-button @click="openLoadingColor" type="filled" :color="colorLoading">OK</vs-button>
					</vs-popup>
					<vs-button color="warning" type="border" class="mb-2"
						@click="input1 = input2 = ''; check7 = false;">Reset</vs-button>
				</div>
			</div>
		</vx-card>

	</div>
    <div class="vx-col w-full mb-6">
			<vx-card title="Remove Appointment">
				<div class="vx-row mr-auto">
					<div class="vx-col sm:w-1/2 w-full mb-2">
						<v-select v-model="selected4" :options="options4" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
					</div>
				</div>

				<div class="vx-row">
					<div class="vx-col w-full">
						<vs-button class="mr-3 mb-2" @click="popupActive1=true" type="filled">Remove</vs-button>

						<vs-popup background-color="rgba(255,255,255,.6)" :background-color-popup="colorx" class=""
							title="Review" :active.sync="popupActive1">
							<p> Are You Sure You Want to Remove This Appointment?</p><br>
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
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import vSelect from 'vue-select'
export default {
	data() {
		return {
			check7: '',
			input1: '',
			input2: '',
			status: 'Active',
			colorx: "#def1d1",
            popupActive: false,

			popupActive1: false,
            colorLoading: '#ff8000',
            options1: [
        {id: 1, label: 'Shakil Ahmed(16261)'},
        {id: 3, label: 'Saifur Rahman(28292)'},
        {id: 2, label: 'Saymoon Islam(3312)'},
      ],
      selected1: {id: 1, label: 'Patient UID '},
      options: [
        {id: 1, label: 'Dr. Anamul Haque'},
        {id: 3, label: 'Dr. Abul Mridha'},
        {id: 2, label: 'Dr. Saif Sheikh'},
      ],
      selected: {id: 1, label: 'Doctor Name'},
      options2: [
        {id: 1, label: 'Department'},
        {id: 3, label: 'General Surgery'},
        {id: 2, label: 'Physiotherapy'},
        {id: 4, label: 'Orthopaedics'},
        {id: 5, label: 'Gynecology'},
      ],
      selected2: {id: 1, label: 'Department'},
      options3: [
        {id: 1, label: 'AI8028342'},
        {id: 3, label: 'AI8028343'},
        {id: 2, label: 'AI8028344'},
      ],
      selected3: {id: 1, label: 'Appointment ID'},
      options4: [
        {id: 1, label: 'AI8028342'},
        {id: 3, label: 'AI8028343'},
        {id: 2, label: 'AI8028344'},
      ],
      selected4: {id: 1, label: 'Appointment ID'},
      textarea: '',
    counterDanger: false

		}
    },

    components: {
    'v-select': vSelect,
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
					text: 'Data Added Successfully!! Appointment Number For this Doctor is 37.',
					color: 'success',
					position: 'top-right',
					time: '6000',
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
	}
}
</script>

