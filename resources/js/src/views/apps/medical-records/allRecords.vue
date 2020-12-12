<template>
	<div class="vx-row">
		<div class="vx-col w-full mb-6">
			<vx-card title="All Medical Records">

				<vs-table pagination max-items="3" stripe search :data="allMedicalRecords">

					<template slot="thead">
						<vs-th sort-key="patientID">Patient ID</vs-th>
						<vs-th sort-key="patientName">Doctor Name</vs-th>
						<vs-th sort-key="gurardianName">Case Manager</vs-th>
						<vs-th sort-key="admitDate">Ref. Doctor</vs-th>
					</template>
					<template slot-scope="{data}">
						<vs-tr :key="index" v-for="(allMedicalRecords, index) in data">

							<vs-td :data="data[index].patientID">
								{{ data[index].patientID }}
							</vs-td>

							<vs-td :data="data[index].doctorName">
								{{ data[index].doctorName }}
							</vs-td>


							<vs-td :data="data[index].caseManager">
								{{ data[index].caseManager }}
							</vs-td>

							<vs-td :data="data[index].refDoc">
								{{ data[index].refDoc }}
							</vs-td>

							<template class="expand-user" slot="expand">
								<div class="con-expand-users w-full">
									<!-- Expandable Data goes here -->
									<vx-card>
										<div class="vx-row">
											<div class="vx-col sm:w-1/2 w-full mb-2">
												<vs-list>
													<vs-list-item title="Patient ID:"> {{ data[index].patientID }}
													</vs-list-item>
												</vs-list>
											</div>
											<div class="vx-col sm:w-1/2 w-full mb-2">
												<vs-list>
													<vs-list-item title="Doctor Name:"> {{ data[index].doctorName }}
													</vs-list-item>
												</vs-list>
											</div>

											<div class="vx-col sm:w-1/2 w-full mb-2">
												<vs-list>
													<vs-list-item title="Case Manager:"> {{ data[index].caseManager }}
													</vs-list-item>
												</vs-list>
											</div>
											<div class="vx-col sm:w-1/2 w-full mb-2">
												<vs-list>
													<vs-list-item title="Ref. Doctor:"> {{ data[index].refDoc }}
													</vs-list-item>
												</vs-list>
											</div>
											<div class="vx-col sm:w-1/2 w-full mb-2">
												<vs-list>
													<vs-list-item title="Hospital Name:"> {{ data[index].hospitalName }} </vs-list-item>
												</vs-list>
											</div>
											<div class="vx-col sm:w-1/2 w-full mb-2">
												<vs-list>
													<vs-list-item title="Hospital Address:"> {{ data[index].hospitalAddr }}
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
	export default {
		data() {
			return {
				colorLoading: '#ff8000',

				allMedicalRecords: [
					{
						patientID: 'HCAP032624',
						hospitalAddr: '600, Sk. Mujib Road, Agrabad',
						hospitalName: 'Best AID',
						refDoc: 'Dr. Nuhas',
						caseManager: 'Motia',
						doctorName: 'Dr. Rana',
					},
					{
						patientID: 'HCAP983759',
						hospitalAddr: '600, Sk. Mujib Road, Agrabad',
						hospitalName: 'LAB AID',
						refDoc: 'Dr. Ashiq',
						caseManager: 'Motia',
						doctorName: 'Dr. Shakil',
					},
					{
						patientID: 'HCAP285834',
						hospitalAddr: '600, Sk. Mujib Road, Agrabad',
						hospitalName: 'Best Care',
						refDoc: 'Dr. Bilai',
						caseManager: 'Motia',
						doctorName: 'Dr. Shawon',
					},
					{
						patientID: 'HCAP683954',
						hospitalAddr: '600, Sk. Mujib Road, Agrabad',
						hospitalName: 'Nam mone nai',
						refDoc: 'Dr. Jollat',
						caseManager: 'Motia',
						doctorName: 'Dr. Sunny',
					},

				],
			}
		},

	}
</script>
