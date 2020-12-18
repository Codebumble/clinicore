<template>
	<div class="vx-col w-full mb-base">
		<vx-card title="Allocated Beds On Your Hospital/Clinic">
			<vs-table pagination max-items="25" search :data="allAllocatedBeds">

				<template slot="thead">
					<vs-th sort-key="patientID">Patient ID</vs-th>
					<vs-th sort-key="bedType">Bed Type</vs-th>
					<vs-th sort-key="charge">Charge</vs-th>
					<vs-th sort-key="assignDate">Assign Date</vs-th>
					<vs-th sort-key="dischargeDate">Discharge Date</vs-th>
					<vs-th sort-key="status">Total</vs-th>
					<vs-th>Action</vs-th>
				</template>

				<template slot-scope="{data}">
					<vs-tr :key="index" v-for="(allBeds, index) in data">

						<vs-td :data="data[index].patientID">
							{{ data[index].patientID }}
						</vs-td>
						<vs-td :data="data[index].bedType">
							{{ data[index].bedType }}
						</vs-td>
						<vs-td :data="data[index].assignDate">
							{{ data[index].assignDate }}
						</vs-td>
						<vs-td :data="data[index].dischargeDate">
							{{ data[index].dischargeDate }}
						</vs-td>
						<vs-td :data="data[index].charge">
							{{ data[index].charge }}
						</vs-td>
						<vs-td :data="data[index].total">
							{{ data[index].total }}
						</vs-td>

        <vs-td>
          <vs-button color="success" type="line" icon-pack="feather" icon="icon-edit" class="inline-action"></vs-button>
						<vs-button color="danger" type="line" icon-pack="feather" icon="icon-trash" class="inline-action"></vs-button>
        </vs-td>

						<template class="expand-user" slot="expand">
							<div class="con-expand-users w-full">

								<vx-card>
									<div class="vx-row">
										<div class="vx-col sm:w-1/2 w-full mb-2">
											<vs-list>
												<vs-list-item title="Patient Name:"> {{ data[index].patientName }}
												</vs-list-item>
											</vs-list>
										</div>
										<div class="vx-col sm:w-1/2 w-full mb-2">
											<vs-list>
												<vs-list-item title="Patient ID:"> {{ data[index].patientID }}
												</vs-list-item>
											</vs-list>
										</div>

										<div class="vx-col sm:w-1/2 w-full mb-2">
											<vs-list>
												<vs-list-item title="Bed Type:"> {{ data[index].bedType }}
												</vs-list-item>
											</vs-list>
										</div>
										<div class="vx-col sm:w-1/2 w-full mb-2">
											<vs-list>
												<vs-list-item title="Assign Date:"> {{ data[index].assignDate }}
												</vs-list-item>
											</vs-list>
										</div>
										<div class="vx-col sm:w-1/2 w-full mb-2">
											<vs-list>
												<vs-list-item title="Discharge Date:"> {{ data[index].dischargeDate }}
												</vs-list-item>
											</vs-list>
										</div>
										<div class="vx-col sm:w-1/2 w-full mb-2">
											<vs-list>
												<vs-list-item title="Day:"> {{ data[index].day }}
												</vs-list-item>
											</vs-list>
										</div>
										<div class="vx-col sm:w-1/2 w-full mb-2">
											<vs-list>
												<vs-list-item title="Total:"> {{ data[index].total }} </vs-list-item>
											</vs-list>
										</div>
										<div class="vx-col sm:w-1/2 w-full mb-2">
											<vs-list>
												<vs-list-item title="Desc.:"> {{ data[index].desc }}
												</vs-list-item>
											</vs-list>
										</div>

										<div class="vx-col sm:w-1/2 w-full mb-2">
											<vs-list>
												<vs-list-item title="Contact:">
													{{ data[index].contact }} </vs-list-item>
											</vs-list>
										</div>

										<div class="vx-col sm:w-1/2 w-full mb-2">
											<vs-list>
												<vs-list-item title="Assigned By:">
													{{ data[index].assignedBy }} </vs-list-item>
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
</template>


<style lang="scss">
.inline-status{
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

	.vs-table--td{
		padding: 5px 15px !important;
	}
</style>


<script>
export default {
  data() {
    return {
	status: 'Active',
      allAllocatedBeds: [
        {
        	patientID: 'HCH876326',
        	bedType: "General Word",
        	charge: "500",
        	assignDate: '02 December 2020',
			dischargeDate: '04 December 2020',
			day: '2',
			total: "1000",
			patientName: 'Moinul',
			desc: 'Normal Bed',
			contact: '01873645443',
			assignedBy: 'Abul'
        },
        {
        	patientID: 'HCH876326',
        	bedType: "General Word",
        	charge: "500",
        	assignDate: '02 December 2020',
			dischargeDate: '04 December 2020',
			day: '2',
			total: "1000",
			patientName: 'Moinul',
			desc: 'Normal Bed',
			contact: '01873645443',
			assignedBy: 'Abul'
        },
        {
        	patientID: 'HCH876326',
        	bedType: "General Word",
        	charge: "500",
        	assignDate: '02 December 2020',
			dischargeDate: '04 December 2020',
			day: '2',
			total: "1000",
			patientName: 'Moinul',
			desc: 'Normal Bed',
			contact: '01873645443',
			assignedBy: 'Abul'
        },
        {
        	patientID: 'HCH876326',
        	bedType: "General Word",
        	charge: "500",
        	assignDate: '02 December 2020',
			dischargeDate: '04 December 2020',
			day: '2',
			total: "1000",
			patientName: 'Moinul',
			desc: 'Normal Bed',
			contact: '01873645443',
			assignedBy: 'Abul'
        },

	  ],
	  bedType: [{
					id: 1,
					label: ''
				},
				{
					id: 2,
					label: 'General Word'
				},
				{
					id: 3,
					label: 'General'
				},
				{
					id: 4,
					label: 'Semi Private'
				},
				{
					id: 5,
					label: 'Private room 1001'
				},
			],
			selectedBedType: {
				id: 1,
				label: 'Select Bed Type'
			},
    }
  },
}
</script>
