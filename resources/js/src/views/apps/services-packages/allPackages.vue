<template>
	<div class="vx-row">
		<div class="vx-col w-full mb-6">
			<vx-card title="All Packages">

				<vs-table :data="allPackages">

					<template slot="thead">
						<vs-th>Package Name</vs-th>
						<vs-th>Description</vs-th>
						<vs-th>Service Quantity</vs-th>
						<vs-th>Discount</vs-th>
						<vs-th>Total Price</vs-th>
						<vs-th>Status</vs-th>
						<vs-th>Action</vs-th>
					</template>
					<template slot-scope="{data}">
						<vs-tr :key="index" v-for="(allPackages, index) in data">

							<vs-td :data="data[index].packageName">
								{{ data[index].packageName }}
							</vs-td>

							<vs-td :data="data[index].desc">
								{{ data[index].desc }}
							</vs-td>

							<vs-td :data="data[index].qty">
								{{ data[index].qty }}
							</vs-td>

							<vs-td :data="data[index].amount">
								{{ data[index].amount }}
							</vs-td>

							<vs-td :data="data[index].price">
								{{ data[index].price }}
							</vs-td>

							<vs-td :data="data[index].status">
								{{ data[index].status }}
							</vs-td>


        <vs-td>
          <vs-button color="success" type="line" icon-pack="feather" icon="icon-edit" class="inline-action"></vs-button>
						<vs-button color="danger" type="line" icon-pack="feather" icon="icon-trash" class="inline-action"></vs-button>
        </vs-td>

							<template class="expand-user" slot="expand">
								<div class="con-expand-users w-full">
									<!-- Expandable Data goes here -->
									<vx-card>

										<vs-table :data="serviceLists">
											<template slot="thead">
												<vs-th>Service Name</vs-th>
												<vs-th>Quantity</vs-th>
												<vs-th>Price</vs-th>
											</template>
											<template slot-scope="{data}">
												<vs-tr :key="index" v-for="(serviceLists, index) in data">
													<vs-td :data="data[index].serviceName">
														{{ data[index].serviceName }}
													</vs-td>

													<vs-td :data="data[index].serviceName">
														{{ data[index].qty }}
													</vs-td>

													<vs-td :data="data[index].serviceName">
														{{ data[index].price }}
													</vs-td>
												</vs-tr>
											</template>
										</vs-table>
									</vx-card>
								</div>
							</template>
						</vs-tr>
					</template>
				</vs-table>
			</vx-card>
		</div>
	</div>

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
  data() {
    return {
       popupActive1: false,


      colorLoading: '#ff8000',

	  allPackages:[
		  {
          "packageName": 'Package 1',
		  "desc": 'Description Goes here',
		  "qty": 3,
		  "amount": '10%',
		  "price": 1200,
		  "status": 'active'
        },
          {
          "packageName": 'Package 2',
		  "desc": 'Description Goes here',
		  "qty": 2,
		  "amount": '30%',
		  "price": 2000,
		  "status": 'active'
        },
          {
          "packageName": 'Package 3',
		  "desc": 'Description Goes here',
		  "qty": 10,
		  "amount": '50%',
		  "price": 5000,
		  "status": 'active'
        },
          {
          "packageName": 'Package 4',
		  "desc": 'Description Goes here',
		  "qty": 4,
		  "amount": '60%',
		  "price": 10000,
		  "status": 'inactive'
        },
	],
	serviceLists: [
		{
			'serviceName': 'Cardiology',
			'qty': '1',
			'price': '800',
		},
		{
			'serviceName': 'Nurology',
			'qty': '2',
			'price': '700',
		},
	]
    }
  },

}
</script>
