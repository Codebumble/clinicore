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
					<vs-input class="w-full" icon-pack="feather" icon="icon-plus" label-placeholder="Strength"
						v-model="medStrength" />
				</div>
				<div class="vx-col sm:w-1/2 w-full mb-4">
					<vs-input class="w-full" icon-pack="feather" icon="icon-plus" label-placeholder="Generic name"
						v-model="medGenericName" />
				</div>
				<div class="vx-col sm:w-1/2 w-full mb-4">
					<vs-input class="w-full" icon-pack="feather" icon="icon-plus" label-placeholder="Medicine Shelf"
						v-model="medicineShelf" />
				</div>
				<div class="vx-col sm:w-1/2 w-full mb-4">
					<vs-input class="w-full" icon-pack="feather" icon="icon-plus" label-placeholder="Box size"
						v-model="boxSize" />
				</div>
                <div class="vx-col sm:w-1/2 w-full mb-4">
					<vs-input class="w-full" icon-pack="feather" icon="icon-plus" label-placeholder="Price(Box)"
						v-model="price" />
				</div>
				<div class="vx-col sm:w-1/2 w-full mb-3 mt-3">
					<v-select v-model="selectedtype" :options="types" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
				</div>

                <div class="vx-col sm:w-1/2 w-full mb-3 mt-3">
					<v-select v-model="selectedCategory" :options="category" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
				</div>

                <div class="vx-col sm:w-1/2 w-full mt-3">
					<v-select v-model="selectedUnits" :options="units" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
				</div>
				<div class="vx-col sm:w-1/2 w-full mt-3">
					<v-select v-model="selectedManufacturer" :options="manufacturers" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
				</div>
				<div class="vx-col sm:w-1/2 w-full mt-3">
					<vs-input class="w-full" icon-pack="feather" icon="icon-plus" label-placeholder="Manufacturer Price"
						v-model="manufacturerPrice" />
				</div>
				<div class="vx-col sm:w-1/2 w-full mt-3">
					<vs-input class="w-full" icon-pack="feather" icon="icon-plus" label-placeholder="Sell Price"
						v-model="sellPrice" />
				</div>
				<div class="vx-col sm:w-1/2 w-full mt-3">
					<vs-input class="w-full" icon-pack="feather" icon="icon-plus" label-placeholder="Vat"
						v-model="vat" />
				</div>
				<div class="vx-col sm:w-1/2 w-full mt-3">
					<vs-input class="w-full" icon-pack="feather" icon="icon-plus" label-placeholder="Tax"
						v-model="tax" />
				</div>

			</div>

			<div class="vx-row mt-5">
				<div class="vx-col w-full">
					<vs-button class="mr-3 mb-2" @click="popupActive=true" type="filled">Submit</vs-button>

					<vs-popup background-color="rgba(255,255,255,.6)" :background-color-popup="colorx" class=""
						title="Review" :active.sync="popupActive">
						<p> Are You Sure You Want to Add This Medicine?</p><br>
						<vs-button @click="openLoadingColor" type="filled" :color="colorLoading">OK</vs-button>
					</vs-popup>
					<vs-button color="warning" type="border" class="mb-2"
						@click="medStrength = medGenericName = medicineShelf = boxSize = manufacturerPrice = sellPrice = vat = tax = medName = selectedCategory = selectedType = selectedUnits = selectedManufacturer = ''; check7 = false;">Reset</vs-button>
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
import vSelect from 'vue-select'
export default {
	components: {
		'v-select': vSelect,
	},
	data() {
		return {
			medStrength: '',
			medGenericName: '',
			medicineShelf: '',
			boxSize: '',
			price: '',
			manufacturerPrice: '',
			sellPrice: '',
			vat: '',
			tax: '',
			medName: '',
			pbName: '',
			puNAme: '',
			check7: '',
			colorx: "#def1d1",
			popupActive: false,
			colorLoading: '#ff8000',
			tabColor: 'success',
			category: [
				{
					id: 0,
					label: '',
				},
				{
					id: 1,
					label: 'Antipyretics',
				},
				{
					id: 2,
					label: 'Analgesics',
				},
				{
					id: 3,
					label: 'Antimalarial drugs',
				},
				{
					id: 4,
					label: 'Antibiotics',
				},
				{
					id: 5,
					label: 'Antiseptics',
				},
				{
					id: 6,
					label: 'Mood stabilizers',
				},
			],
			selectedCategory: [{
				id: 0,
				label: 'Select Category'
			}],
			types: [
				{
					id: 0,
					label: '',
				},
				{
					id: 1,
					label: 'Liquid',
				},
				{
					id: 2,
					label: 'Tablet',
				},
				{
					id: 3,
					label: 'Capsules',
				},
				{
					id: 4,
					label: 'Suppositories',
				},
				{
					id: 5,
					label: 'Drops',
				},
				{
					id: 6,
					label: 'Inhalers',
				},
				{
					id: 7,
					label: 'Injections',
				},
			],
			selectedtype: [{
				id: 0,
				label: 'Select Type'
			}],
			units: [{
					id: 0,
					label: '',
				},
				{
					id: 1,
					label: 'Box',
				},
				{
					id: 2,
					label: 'Piece',
				},
			],
			selectedUnits: [{
				id: 0,
				label: 'Select Unit'
			}],
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
			],
			manufacturers: [
				{
					id: 0,
					label: '',
				},
				{
					id: 1,
					label: 'ACI ',
				},
				{
					id: 2,
					label: 'ACME Laboratories Ltd',
				},
				{
					id: 3,
					label: 'Ad-din pharmaceuticals Ltd.',
				},
				{
					id: 4,
					label: 'Aexim Pharmaceuticals Ltd',
				},
				{
					id: 5,
					label: 'Al-Madina Pharmaceuticals Ltd',
				},
				{
					id: 6,
					label: 'Alco Pharma Ltd.',
				},

			],
			selectedManufacturer:[{
				id: 0,
				label: 'Select Manufacturer'
			}]
		}
	},
	methods: {
		openLoadingColor() {
			this.$vs.loading({
				type: 'sound'
			})
			this.popupActive = false;

			setTimeout(() => {

				this.$vs.loading.close()
			}, 2000);
			setTimeout(() => {
				this.$vs.notify({
					title: 'Success',
					text: 'Data Added Successfully!!',
					color: 'success',
					position: 'top-right',
					time: '4000',
					iconPack: 'feather',
					icon: 'icon-check'
				})
			}, 2000);
		},
	}
}
</script>
