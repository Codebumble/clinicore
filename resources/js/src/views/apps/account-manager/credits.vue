<template>
	<div class="vx-row">
		<div class="vx-col w-full mb-6">
			<vx-card title="Credit Reports">

				<vs-table pagination max-items="5" stripe search :data="creditsList">

					<template slot="thead">
						<vs-th sort-key="date">Date</vs-th>
						<vs-th sort-key="patientID">Patient ID</vs-th>
						<vs-th sort-key="total">Total</vs-th>
						<vs-th sort-key="discount">Discount</vs-th>
						<vs-th sort-key="paid">Paid</vs-th>
						<vs-th sort-key="due">Due</vs-th>
					</template>
					<template slot-scope="{data}">
						<vs-tr :key="index" v-for="(creditsList, index) in data">

							<vs-td :data="data[index].date">
								{{ data[index].date }}
							</vs-td>

							<vs-td :data="data[index].patientID">
								{{ data[index].patientID }}
							</vs-td>

							<vs-td :data="data[index].total">
								{{ data[index].total }}
							</vs-td>

							<vs-td :data="data[index].discount">
								{{ data[index].discount }}
							</vs-td>

							<vs-td :data="data[index].paid">
								{{ data[index].paid }}
							</vs-td>

							<vs-td :data="data[index].due">
								{{ data[index].due }}
							</vs-td>

							<template class="expand-user" slot="expand">
								<div class="con-expand-users w-full">

									<vx-card>
										<div class="vx-row">
											<div class="vx-col sm:w-1/2 w-full mb-2">
												<vs-list>
													<vs-list-item title="Date:"> {{ data[index].date }}
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
													<vs-list-item title="Patient Name:"> {{ data[index].patientName }}
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
													<vs-list-item title="Doctor:"> {{ data[index].doctor }}
													</vs-list-item>
												</vs-list>
											</div>
											<div class="vx-col sm:w-1/2 w-full mb-2">
												<vs-list>
													<vs-list-item title="Service Name:"> {{ data[index].serviceName }}
													</vs-list-item>
												</vs-list>
											</div>
											<div class="vx-col sm:w-1/2 w-full mb-2">
												<vs-list>
													<vs-list-item title="Total:"> {{ data[index].total }}
													</vs-list-item>
												</vs-list>
											</div>
											<div class="vx-col sm:w-1/2 w-full mb-2">
												<vs-list>
													<vs-list-item title="Discount:"> {{ data[index].discount }}
													</vs-list-item>
												</vs-list>
											</div>
											<div class="vx-col sm:w-1/2 w-full mb-2">
												<vs-list>
													<vs-list-item title="Paid:"> {{ data[index].paid }}
													</vs-list-item>
												</vs-list>
											</div>
											<div class="vx-col sm:w-1/2 w-full mb-2">
												<vs-list>
													<vs-list-item title="Due:"> {{ data[index].due }}
													</vs-list-item>
												</vs-list>
											</div>
										</div>
									</vx-card>

								</div>
							</template>

						</vs-tr>
						<vs-tr>
							<vs-td colspan="4">
								<p style="margin: 0 auto; display: table;">Total:</p>
							</vs-td>
							<vs-td colspan="4">
								<p style="margin: 0 auto; display: table;">203642</p>
							</vs-td>
						</vs-tr>
					</template>
				</vs-table>
			</vx-card>
		</div>
	</div>

</template>


<script>
	export default {
		data() {
			return {
				popupActive1: false,

				colorLoading: '#ff8000',

				creditsList: [
					{
						total: '20900',
						discount: '10%',
						paid: '20900',
						due: '0',
						patientName: 'Saifur',
						patientID: 'HCH872364',
						city: 'Dinajpur',
						mob: '0184749573',
						gender: 'Male',
						addr: '600, Sk. Mujib Road, Agrabad',
						doctor: 'Dr. Shakil',
						serviceName: 'Cardiology',
						date: '06 December 2020'
					},
					{
						total: '20900',
						discount: '10%',
						paid: '20900',
						due: '0',
						patientName: 'Saifur',
						patientID: 'HCH872364',
						city: 'Dinajpur',
						mob: '0184749573',
						gender: 'Male',
						addr: '600, Sk. Mujib Road, Agrabad',
						doctor: 'Dr. Shakil',
						serviceName: 'Cardiology',
						date: '06 December 2020'
					},
					{
						total: '20900',
						discount: '10%',
						paid: '20900',
						due: '0',
						patientName: 'Saifur',
						patientID: 'HCH872364',
						city: 'Dinajpur',
						mob: '0184749573',
						gender: 'Male',
						addr: '600, Sk. Mujib Road, Agrabad',
						doctor: 'Dr. Shakil',
						serviceName: 'Cardiology',
						date: '06 December 2020'
					},
					{
						total: '20900',
						discount: '10%',
						paid: '20900',
						due: '0',
						patientName: 'Saifur',
						patientID: 'HCH872364',
						city: 'Dinajpur',
						mob: '0184749573',
						gender: 'Male',
						addr: '600, Sk. Mujib Road, Agrabad',
						doctor: 'Dr. Shakil',
						serviceName: 'Cardiology',
						date: '06 December 2020'
					},


				],
			}
		},

	}
</script>
