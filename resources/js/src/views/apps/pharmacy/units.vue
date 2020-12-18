<template>
	<vx-card>

		<vs-tabs alignment="fixed" :color="tabColor">
			<vs-tab @click="tabColor = 'success'" label="Manage Unit">
				<div>
<vx-card>
		<vs-table :data="categories" search stripe pagination max-items="3">

			<template slot="thead">
				<vs-th>ID</vs-th>
				<vs-th>Unit Name</vs-th>
				<vs-th>Action</vs-th>
			</template>

			<template slot-scope="{data}">
				<vs-tr :key="index" v-for="(tr, index) in data">

					<vs-td :data="data[index].id">
						{{ data[index].id }}
					</vs-td>

					<vs-td :data="data[index].category">
						{{ data[index].category }}
					</vs-td>

					<vs-td>
						<vs-button color="success" type="line" icon-pack="feather" icon="icon-edit" class="inline-action"></vs-button>
						<vs-button color="danger" type="line" icon-pack="feather" icon="icon-trash" class="inline-action"></vs-button>
					</vs-td>
				</vs-tr>
			</template>
		</vs-table>
		</vx-card>
				</div>


			</vs-tab>
			<vs-tab @click="tabColor = 'success'" label="Add Unit">
				<div>


			<vx-card>
			<div class="vx-row">
				<div class="vx-col sm:w-1/2 w-full mb-4">
					<vs-input class="w-full" icon-pack="feather" icon="icon-plus" label-placeholder="Unit Name*"
						v-model="catName" />
				</div>
			</div>

			<div class="vx-row">
				<div class="vx-col w-full">
					<vs-button class="mr-3 mb-2" @click="popupActive=true" type="filled">Submit</vs-button>

					<vs-popup background-color="rgba(255,255,255,.6)" :background-color-popup="colorx" class=""
						title="Review" :active.sync="popupActive">
						<p> Are You Sure You Want to Add This Medicine Unit?</p><br>
						<vs-button @click="openLoadingColor" type="filled" :color="colorLoading">OK</vs-button>
					</vs-popup>
					<vs-button color="warning" type="border" class="mb-2"
						@click="catName = ''; check7 = false;">Reset</vs-button>
				</div>
			</div>
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
	catName: '',
	categories: [{
					"id": 1,
					"category": "Piece ",
				},
				{
					"id": 2,
					"category": "Box",
				},
			]
  }),
}
</script>
