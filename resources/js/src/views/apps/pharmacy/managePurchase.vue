<template>
	<vx-card>

		<vs-tabs alignment="fixed" :color="tabColor">
			<vs-tab @click="tabColor = 'success'" label="Manage Medicines">
				<div>
<vx-card>
		<vs-table :data="categories" search stripe pagination max-items="3">

			<template slot="thead">
				<vs-th>Serial</vs-th>
				<vs-th>Purchase ID</vs-th>
                <vs-th>Invoice ID</vs-th>
                <vs-th>Purchase Date</vs-th>
                <vs-th>Toral Price</vs-th>
				<vs-th>Action</vs-th>
			</template>

			<template slot-scope="{data}">
				<vs-tr :key="index" v-for="(tr, index) in data">

					<vs-td :data="data[index].id">
						{{ data[index].id }}
					</vs-td>

                    <vs-td :data="data[index].pid">
						{{ data[index].pid }}
					</vs-td>

					<vs-td :data="data[index].iid">
						{{ data[index].iid }}
					</vs-td>

                    <vs-td :data="data[index].pdate">
						{{ data[index].pdate}}
					</vs-td>

                    <vs-td :data="data[index].cost">
						{{ data[index].cost }}TK
					</vs-td>

					<vs-td>
						<vs-button color="success" type="line" icon-pack="feather" icon="icon-edit" class="inline-action"></vs-button>
						<vs-button color="danger" type="line" icon-pack="feather" icon="icon-trash" class="inline-action"></vs-button>
					</vs-td>
				</vs-tr>
                <vs-tr>
                    <vs-td></vs-td>
                    <vs-td></vs-td>
                    <vs-td></vs-td>
                    <vs-td>Total: </vs-td>
                    <vs-td>
                        12,980TK
                        </vs-td>
                        <vs-td></vs-td>
                </vs-tr>
			</template>

		</vs-table>
		</vx-card>
				</div>


			</vs-tab>
			
		</vs-tabs>
	</vx-card>
</template>


<style lang="scss">
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
  data:()=>({
	tabColor:'success',
	categories: [{
                    "id": 1,
                    "pid": "P728282",
                    "iid": "I27292",
                    "pdate": "22-08-2020",
                    "cost": "4,292",
				},
				{
                    "id": 2,
                    "pid": "P728281",
                    "iid": "I27290",
                    "pdate": "22-08-2020",
                    "cost": "6,801",
				},
				{
                    "id": 3,
                    "pid": "P728280",
                    "iid": "I27285",
                    "pdate": "22-08-2020",
                    "cost": "637",

				},
				{
                    "id": 4,
                    "pid": "P728279",
                    "iid": "I27279",
                    "pdate": "22-08-2020",
                    "cost": "4,812",
				},
				{
                    "id": 5,
                    "pid": "P728278",
                    "iid": "I27278",
                    "pdate": "22-08-2020",
                    "cost": "760",
				},

			]
  }),
}
</script>
