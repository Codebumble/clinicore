<template>
	<div class="vx-row">
		<div class="vx-col w-full mb-6">
			<vx-card title="Debit Reports">

				<vs-table pagination max-items="5" stripe search :data="debitList">

					<template slot="thead">
						<vs-th sort-key="date">Date</vs-th>
						<vs-th sort-key="accName">Account Name</vs-th>
						<vs-th sort-key="payTo">To Pay</vs-th>
						<vs-th sort-key="desc">Desc</vs-th>
						<vs-th sort-key="amount">Amount</vs-th>
					</template>
					<template slot-scope="{data}">
						<vs-tr :key="index" v-for="(debitList, index) in data">

							<vs-td :data="data[index].date">
								{{ data[index].date }}


							</vs-td>

							<vs-td :data="data[index].accName">
								{{ data[index].accName }}

							</vs-td>

							<vs-td :data="data[index].payTo">
								{{ data[index].payTo }}

							</vs-td>

							<vs-td :data="data[index].desc">
								{{ data[index].desc }}

							</vs-td>

							<vs-td :data="data[index].amount">
								{{ data[index].amount }}

							</vs-td>
						</vs-tr>
						<vs-tr>
							<vs-td colspan="4">
								<p style="margin: 0 auto; display: table;">Total:</p>
							</vs-td>
							<vs-td>
								<p>203642</p>
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

				debitList: [
					{
						amount: '5000',
						accName: 'Office Rent',
						payTo: 'Manik',
						desc: 'Office Rent of December',
						date: '02 December 2020',
					},
					{
						amount: '90000',
						accName: 'Extendature',
						payTo: 'Dash Corp.',
						desc: 'Office Extend',
						date: '04 December 2020',
					},
					{
						amount: '11000',
						accName: 'Employee Salary',
						payTo: 'Delowar',
						desc: 'Salary of Dec',
						date: '08 December 2020',
					},
					{
						amount: '5000',
						accName: 'Office Rent',
						payTo: 'Manik',
						desc: 'Office Rent of December',
						date: '02 December 2020',
					},

				],
			}
		},

	}
</script>
