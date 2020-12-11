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
    </template>

    <template slot-scope="{data}">
      <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

        <vs-td :data="data[indextr].serviceName">
          {{ data[indextr].serviceName }}
		  <template slot="edit">
            <vs-input v-model="tr.serviceName" class="inputx" placeholder="Service Name" />
          </template>
        </vs-td>

        <vs-td :data="data[indextr].desc">
          {{ data[indextr].desc }}
		  <template slot="edit">
            <vs-input v-model="tr.desc" class="inputx" placeholder="Desc" />
          </template>
        </vs-td>



        <vs-td :data="data[indextr].qty">
          {{ data[indextr].qty }}
		  <template slot="edit">
            <div class="vx-col mb-2">
            <vs-input v-model="tr.qty" class="inputx" placeholder="Quantity" />
          </div>
          </template>
        </vs-td>

        <vs-td :data="data[indextr].price">
          {{ data[indextr].price }}
		  <template slot="edit">
           <vs-input v-model="tr.price" class="inputx" placeholder="Price" />
          </template>
        </vs-td>

        <vs-td :data="data[indextr].status">
          {{ data[indextr].status }}
		  <template slot="edit">
            <div class="vx-col sm:w-3/6">
		<ul class="centerx inline-status">
			<li class="mr-4">
				<vs-radio color="success" v-model="tr.status" vs-value="Active">Active</vs-radio>
			</li>
			<li class="mr-4">
				<vs-radio color="danger" v-model="tr.status" vs-value="Inactive">Inactive</vs-radio>
			</li>
		</ul>
      </div>
          </template>
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
