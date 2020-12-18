<template>
<div class="vx-col w-full mb-base">
	<vx-card title="All Service for Your Hospital/Clinic">
<vs-table pagination max-items="25" search :data="users">

    <template slot="thead">
      <vs-th sort-key="serviceName">Service Name</vs-th>
      <vs-th sort-key="desc">Desc</vs-th>
      <vs-th sort-key="qty">Quantity</vs-th>
      <vs-th sort-key="price">Price</vs-th>
      <vs-th sort-key="status">Status</vs-th>
      <vs-th>Action</vs-th>
    </template>

    <template slot-scope="{data}">
      <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

        <vs-td :data="data[indextr].serviceName">
          {{ data[indextr].serviceName }}
        </vs-td>

        <vs-td :data="data[indextr].desc">
          {{ data[indextr].desc }}
        </vs-td>



        <vs-td :data="data[indextr].qty">
          {{ data[indextr].qty }}
        </vs-td>

        <vs-td :data="data[indextr].price">
          {{ data[indextr].price }}
        </vs-td>

        <vs-td :data="data[indextr].status">
          {{ data[indextr].status }}
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
</template>


<style lang="scss">
.inline-status{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
}
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
	status: 'Active',
 	quantity: 1,
	price: 0,
      selected: [],
      'tableList': [
        'vs-th: Component',
        'vs-tr: Component',
        'vs-td: Component',
        'thread: Slot',
        'tbody: Slot',
        'header: Slot'
      ],
      users: [
        {
          "serviceName": "Emergency",
          "desc": "Emergency Service",
          "qty": "1",
          "price": "500",
          "status": "Active",
        },
        {
          "serviceName": "Cardiology",
          "desc": "Cardiology Service",
          "qty": "4",
          "price": "5000",
          "status": "Active",
        },
        {
          "serviceName": "OT",
          "desc": "OT Service",
          "qty": "1",
          "price": "50000",
          "status": "Active",
        },
        {
          "serviceName": "Ultrasound WA",
          "desc": "Ultrasound WA Service",
          "qty": "1",
          "price": "500",
          "status": "Inactive",
        },


      ]
    }
  },
}
</script>
