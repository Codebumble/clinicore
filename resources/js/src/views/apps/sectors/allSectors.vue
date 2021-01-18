<template>
	<vx-card title="All Sector & Department">
		<vs-table :data="users">

			<template slot="thead">
				<vs-th>ID</vs-th>
				<vs-th>Sector/Department Name</vs-th>
				<vs-th>Incharge/Departent Head</vs-th>
				<vs-th>Joinng As Incharge/D. Head</vs-th>
                <vs-th>Action</vs-th>
			</template>

			<template slot-scope="{data}">
				<vs-tr :key="indextr" v-for="(tr, indextr) in data">

					<vs-td :data="data[indextr].id">

						{{ data[indextr].id }}
					</vs-td>

					<vs-td :data="data[indextr].name">
						{{ data[indextr].name }}
					</vs-td>

					<vs-td :data="data[indextr].signedby">

						{{ data[indextr].signedby }}
					</vs-td>

					<vs-td :data="data[indextr].entry">

						{{ data[indextr].entry }}
					</vs-td>
                    <vs-td :data="data[indextr].id">
                            <div class="flex">
                  <vs-button type="border" size="small" icon-pack="feather" icon="icon-eye" class="mr-2"></vs-button>
                  <vs-button type="border" size="small" icon-pack="feather" icon="icon-trash" color="danger"></vs-button>
   
                            </div>
                    </vs-td>


				</vs-tr>
			</template>

		</vs-table>
	</vx-card>
</template>

<script>
export default {
	data() {
		return {
			users: [{
					"id": 1,
					"name": "Ahona Shaikh(XS6754)",
					"signedby": "Dr. Shakil Khan",
					"entry": "21 July,2020",
					"website": "Active",
				},
				{
					"id": 2,
					"name": "Promy Ahmed(XT6945)",
					"signedby": "Dr. Miraj Datta",
					"entry": "20 July,2020",
					"website": "Active",
				},
				{
					"id": 3,
					"name": "Israt Jahan(XU5375)",
					"signedby": "Dr. Noor-E-Jannat",
					"entry": "20 July,2020",
					"website": "Inactive",
				},
				{
					"id": 4,
					"name": "Tanjima Tahiya(XX5355)",
					"signedby": "Dr. Noor-E-Jannat",
					"entry": "20 July,2020",
					"website": "Active",
				},

			]
		}
	},methods: {


	},
}
</script>
