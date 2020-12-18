<template>
	<vx-card>

		<vs-tabs alignment="fixed" :color="tabColor">
			<vs-tab @click="tabColor = 'success'" label="Manage Medicines">
				<div>
<vx-card>
		<vs-table :data="categories" search stripe pagination max-items="3">

			<template slot="thead">
				<vs-th>ID</vs-th>
				<vs-th>Medicines Name</vs-th>
                <vs-th>Category</vs-th>
                <vs-th>Price(Box)</vs-th>
                <vs-th>Price(Unit)</vs-th>
				<vs-th>Action</vs-th>
			</template>

			<template slot-scope="{data}">
				<vs-tr :key="index" v-for="(tr, index) in data">

					<vs-td :data="data[index].id">
						{{ data[index].id }}
					</vs-td>

                    <vs-td :data="data[index].name">
						{{ data[index].name }}
					</vs-td>

					<vs-td :data="data[index].category">
						{{ data[index].category }}
					</vs-td>

                    <vs-td :data="data[index].box">
						{{ data[index].box }}tk
					</vs-td>

                    <vs-td :data="data[index].unit">
						{{ data[index].unit }}tk
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
			<vs-tab @click="tabColor = 'success'" label="Add Medicine">
				<div>


			<vx-card>
			<div class="vx-row">
				<div class="vx-col sm:w-1/2 w-full mb-4">
					<vs-input class="w-full" icon-pack="feather" icon="icon-plus" label-placeholder="Medicine Name*"
						v-model="medName" />
				</div>
                <div class="vx-col sm:w-1/2 w-full mb-4">
					<vs-input class="w-full" icon-pack="feather" icon="icon-plus" label-placeholder="Category*"
						v-model="catName" />
				</div>
                <div class="vx-col sm:w-1/2 w-full mb-4">
					<vs-input class="w-full" icon-pack="feather" icon="icon-plus" label-placeholder="Price(Box)*"
						v-model="pbName" />
				</div>
                <div class="vx-col sm:w-1/2 w-full mb-4">
					<vs-input class="w-full" icon-pack="feather" icon="icon-plus" label-placeholder="Price(Unit)*"
						v-model="puName" />
				</div>
			</div>

			<div class="vx-row">
				<div class="vx-col w-full">
					<vs-button class="mr-3 mb-2" @click="popupActive=true" type="filled">Submit</vs-button>

					<vs-popup background-color="rgba(255,255,255,.6)" :background-color-popup="colorx" class=""
						title="Review" :active.sync="popupActive">
						<p> Are You Sure You Want to Add This Medicine?</p><br>
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
    medName: '',
    pbName: '',
    puNAme: '',
	categories: [{
                    "id": 1,
                    "name": "Napa",
                    "category": "Tablet",
                    "box": "400",
                    "unit": "0.80",
				},
				{
                    "id": 2,
                    "name": "A-Clox",
                    "category": "Capsule",
                    "box": "1080",
                    "unit": "5.97",
				},
				{
                    "id": 3,
                    "name": "Aclobet",
                    "category": "Cream",
                    "box": "2070",
                    "unit": "43.13",

				},
				{
                    "id": 4,
                    "name": "GeloZen",
                    "category": "Gel",
                    "box": "5029",
                    "unit": "30",
				},
				{
                    "id": 5,
                    "name": "Aciphin",
                    "category": "Injection",
                    "box": "--",
                    "unit": "130",
				},

			]
  }),
}
</script>
