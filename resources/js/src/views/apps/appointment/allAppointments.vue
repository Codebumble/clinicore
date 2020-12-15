<template>
	<div class="vx-row">
		<div class="vx-col w-full mb-6">
			<vx-card title="All Appointments">

				<vs-table pagination max-items="3" stripe search :data="allAdmittedPatients">

					<template slot="thead">
						<vs-th sort-key="patientID">Appointment ID</vs-th>
						<vs-th sort-key="patientName">Patient Name</vs-th>
						<vs-th sort-key="gurardianName">Doctor Name</vs-th>
						<vs-th sort-key="admitDate">Appointment Date</vs-th>
						<vs-th sort-key="releaseDate">Entry Date</vs-th>
					</template>
					<template slot-scope="{data}">
						<vs-tr :key="index" v-for="(allAdmittedPatients, index) in data">

							<vs-td :data="data[index].patientID">
								{{ data[index].patientID }}
							</vs-td>

							<vs-td :data="data[index].patientName">
								{{ data[index].patientName }}
							</vs-td>


							<vs-td :data="data[index].gurardianName">
								{{ data[index].gurardianName }}
							</vs-td>

							<vs-td :data="data[index].admitDate">
								{{ data[index].admitDate }}
							</vs-td>

							<vs-td :data="data[index].releaseDate">
								{{ data[index].releaseDate }}

								<template slot="edit">
									<div class="vx-col mb-2">
										<flat-pickr placeholder="Release Date" v-model="data[index].releaseDate"
						:config="{ dateFormat: 'd F Y'}" class="w-full inputx" />
									</div>
								</template>

							</vs-td>

							<template class="expand-user" slot="expand">
								<div class="con-expand-users w-full">
									<!-- Expandable Data goes here -->
									<vx-card>
										<div class="vx-row">
											<div class="vx-col sm:w-1/2 w-full mb-2">
												<vs-list>
													<vs-list-item title="Sector:"> {{ data[index].sector }}
													</vs-list-item>
												</vs-list>
											</div>
											<div class="vx-col sm:w-1/2 w-full mb-2">
												<vs-list>
													<vs-list-item title="Doctor:"> {{ data[index].doctor }}
													</vs-list-item>
												</vs-list>
											</div>

											<div class="vx-col sm:w-1/2 w-full mb-2">
												<vs-list>
													<vs-list-item title="Package:"> {{ data[index].package }}
													</vs-list-item>
												</vs-list>
											</div>
											<div class="vx-col sm:w-1/2 w-full mb-2">
												<vs-list>
													<vs-list-item title="Gender:"> {{ data[index].gender }}
													</vs-list-item>
												</vs-list>
											</div>
											<div class="vx-col sm:w-1/2 w-full mb-2">
												<vs-list>
													<vs-list-item title="Mobile:"> {{ data[index].mob }} </vs-list-item>
												</vs-list>
											</div>
											<div class="vx-col sm:w-1/2 w-full mb-2">
												<vs-list>
													<vs-list-item title="Address:"> {{ data[index].addr }}
													</vs-list-item>
												</vs-list>
											</div>
											<div class="vx-col sm:w-1/2 w-full mb-2">
												<vs-list>
													<vs-list-item title="City:"> {{ data[index].city }} </vs-list-item>
												</vs-list>
											</div>
											<div class="vx-col sm:w-1/2 w-full mb-2">
												<vs-list>
													<vs-list-item title="Country:"> {{ data[index].country }}
													</vs-list-item>
												</vs-list>
											</div>

											<div class="vx-col sm:w-1/2 w-full mb-2">
												<vs-list>
													<vs-list-item title="Gurardian Address:">
														{{ data[index].gurardianAddr }} </vs-list-item>
												</vs-list>
											</div>
											<div class="vx-col sm:w-1/2 w-full mb-2">
												<vs-list>
													<vs-list-item title="Postal:"> {{ data[index].postal }}
													</vs-list-item>
												</vs-list>
											</div>
											<div class="vx-col sm:w-1/2 w-full mb-2">
												<vs-list>
													<vs-list-item title="Gurardian Contact:">
														{{ data[index].gurardianContact }} </vs-list-item>
												</vs-list>
											</div>

											<div class="vx-col sm:w-1/2 w-full mb-2">
												<vs-list>
													<vs-list-item title="Agent:"> {{ data[index].agent }}
													</vs-list-item>
												</vs-list>
											</div>
											<div class="vx-col sm:w-1/2 w-full mb-2">
												<vs-list>
													<vs-list-item title="Policy:"> {{ data[index].policy }}
													</vs-list-item>
												</vs-list>
											</div>
											<div class="vx-col sm:w-1/2 w-full mb-2">
												<vs-list>
													<vs-list-item title="Insurance:"> {{ data[index].insurance }}
													</vs-list-item>
												</vs-list>
											</div>
										</div>
									</vx-card>
								</div>
							</template>
						</vs-tr>
					</template>
				</vs-table>
			</vx-card>
		</div>
	</div>

</template>


<style lang="scss">
	.vs-list--slot {
		margin-left: 40px !important;
	}
</style>


<script>

import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
	export default {
		components: {
		flatPickr
	},
		data() {
			return {
				popupActive1: false,

				colorLoading: '#ff8000',

				allAdmittedPatients: [{
						patientID: 'HCAP032624',
						patientName: 'Saifur',
						city: 'Dinajpur',
						gurardianName: 'Mustafa',
						gurardianRel: 'Grand Father',
						admitDate: '02 December 2020',
						releaseDate: '06 December 2020',
						mob: '0184749573',
						gender: 'Male',
						addr: '600, Sk. Mujib Road, Agrabad',
						country: 'BD',
						postal: 'N/A',
						gurardianAddr: '600, Sk. Mujib Road, Agrabad',
						gurardianContact: '01836435543',
						agent: 'Rafi',
						policy: '97234',
						insurance: 'IFIC',
						sector: 'General Surgery',
						doctor: 'Dr. Shakil',
						package: 'Package 1',
					},
					{
						patientID: 'HCAP34546',
						patientName: 'Shakil',
						city: 'Dhaka',
						gurardianName: 'Saifur',
						gurardianRel: 'Brother',
						admitDate: '',
						releaseDate: '',
						addr: '',
						country: '',
						postal: '',
						gurardianRel: '',
						gurardianAddr: '',
						gurardianContact: '',
						agent: '',
						policy: '',
						insurance: '',
						sector: 'General Surgery',
						doctor: 'Dr. Shakil',
						package: 'Package 1',
					},
					{
						patientID: 'HCAP073243',
						patientName: 'Sunny',
						city: 'Shylhet',
						gurardianName: 'Shawon',
						gurardianRel: 'Brother',
						admitDate: '',
						releaseDate: '',
						addr: '',
						country: '',
						postal: '',
						gurardianRel: '',
						gurardianAddr: '',
						gurardianContact: '',
						agent: '',
						policy: '',
						insurance: '',
						sector: 'General Surgery',
						doctor: 'Dr. Shakil',
						package: 'Package 1',
					},
					{
						patientID: 'HCAP032624',
						patientName: 'Shawon',
						city: 'Dinajpur',
						gurardianName: 'Saifur',
						gurardianRel: 'Brother',
						admitDate: '',
						releaseDate: '',
						addr: '',
						country: '',
						postal: '',
						gurardianRel: '',
						gurardianAddr: '',
						gurardianContact: '',
						agent: '',
						policy: '',
						insurance: '',
						sector: 'General Surgery',
						doctor: 'Dr. Shakil',
						package: 'Package 1',
					},

				],
			}
		},

	}
</script>
