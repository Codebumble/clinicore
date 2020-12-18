<template>
	<div class="vx-row">
		<div class="vx-col w-full mb-6">
			<vx-card title="All Advance Bill">

				<vs-table pagination max-items="3" stripe search :data="allAdvancePayments">

					<template slot="thead">
						<vs-th sort-key="aid">AID</vs-th>
						<vs-th sort-key="patientID">Patient ID</vs-th>
						<vs-th sort-key="amount">Amount</vs-th>
						<vs-th sort-key="paymentMethod">Payment Method</vs-th>
						<vs-th sort-key="receiptNo">Receipt No.</vs-th>
						<vs-th sort-key="date">Date</vs-th>
					</template>
					<template slot-scope="{data}">
						<vs-tr :key="index" v-for="(allAdvancePayments, index) in data">

							<vs-td :data="data[index].aid">
								{{ data[index].aid }}

								<template slot="edit">
									<div class="mb-2">
										<vs-input icon-pack="feather" icon="icon-edit" label-placeholder="AID"
						v-model="data[index].aid" />
									</div>
								</template>
							</vs-td>

							<vs-td :data="data[index].patientID">
								{{ data[index].patientID }}
								<template slot="edit">
									<div class="vx-col mb-2">
										<vs-input icon-pack="feather" icon="icon-edit" label-placeholder="Patient ID"
						v-model="data[index].patientID" />
									</div>
								</template>
							</vs-td>

							<vs-td :data="data[index].amount">
								{{ data[index].amount }}
								<template slot="edit">
									<div class="vx-col mb-2">
										<vs-input icon-pack="feather" icon="icon-edit" label-placeholder="Amount"
						v-model="data[index].amount" />
									</div>
								</template>
							</vs-td>


							<vs-td :data="data[index].paymentMethod">
								{{ data[index].paymentMethod }}
								<template slot="edit">
									<div class="vx-col mb-2">
										<vs-input icon-pack="feather" icon="icon-edit" label-placeholder="Payment Method"
						v-model="data[index].paymentMethod" />
									</div>
								</template>
							</vs-td>

							<vs-td :data="data[index].receiptNo">
								{{ data[index].receiptNo }}
								<template slot="edit">
									<div class="vx-col mb-2">
										<vs-input icon-pack="feather" icon="icon-edit" label-placeholder="Receipt No."
						v-model="data[index].receiptNo" />
									</div>
								</template>
							</vs-td>

							<vs-td :data="data[index].date">
								{{ data[index].date }}

								<template slot="edit">
									<div class="vx-col mb-2">
										<flat-pickr placeholder="Date" v-model="data[index].date"
						:config="{ dateFormat: 'd F Y'}" class="w-full inputx" />
									</div>
								</template>

							</vs-td>

							<!-- <template class="expand-user" slot="expand">
								<div class="con-expand-users w-full"> -->
									<!-- Expandable Data goes here -->
									<!-- <vx-card>
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
									</vx-card> -->
								<!-- </div>
							</template> -->
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

				allAdvancePayments: [
					{
						aid: 'APP034353',
						patientID: 'HCAP032624',
						amount: '50000',
						paymentMethod: 'bKash',
						receiptNo: '873678435',
						date: '02 December 2020',
					},
					{
						aid: 'APP034353',
						patientID: 'HCAP032624',
						amount: '50000',
						paymentMethod: 'bKash',
						receiptNo: '873678435',
						date: '02 December 2020',
					},
					{
						aid: 'APP034353',
						patientID: 'HCAP032624',
						amount: '50000',
						paymentMethod: 'bKash',
						receiptNo: '873678435',
						date: '02 December 2020',
					},
					{
						aid: 'APP034353',
						patientID: 'HCAP032624',
						amount: '50000',
						paymentMethod: 'bKash',
						receiptNo: '873678435',
						date: '02 December 2020',
					},

				],
			}
		},

	}
</script>
