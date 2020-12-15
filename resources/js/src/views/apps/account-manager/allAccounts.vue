<template>
	<div class="vx-row">
		<div class="vx-col w-full mb-6">
			<vx-card title="All Advance Bill">

				<vs-table pagination max-items="4" stripe search :data="allAccounts">

					<template slot="thead">
						<vs-th sort-key="accName">Account Name</vs-th>
						<vs-th sort-key="accType">Account Type</vs-th>
						<vs-th sort-key="desc">Desc.</vs-th>
						<vs-th sort-key="status">Status</vs-th>
					</template>
					<template slot-scope="{data}">
						<vs-tr :key="index" v-for="(allAccounts, index) in data">

							<vs-td :data="data[index].accName">
								{{ data[index].accName }}


							</vs-td>

							<vs-td :data="data[index].accType">
								{{ data[index].accType }}

							</vs-td>

							<vs-td :data="data[index].desc">
								{{ data[index].desc }}

							</vs-td>


							<vs-td :data="data[index].status">
								{{ data[index].status }}

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

				allAccounts: [
					{
						accName: 'Office Rent',
						accType: 'Debit',
						desc: 'Office Rent',
						status: 'Active',
					},
					{
						accName: 'Employee Salary',
						accType: 'Debit',
						desc: 'Employee Salary',
						status: 'Active',
					},
					{
						accName: 'Extendature',
						accType: 'Debit',
						desc: 'Extendature',
						status: 'Active',
					},
					{
						accName: 'X-Ray Earning',
						accType: 'Credit',
						desc: 'Earning from X-Ray',
						status: 'Active',
					},


				],
			}
		},

	}
</script>
