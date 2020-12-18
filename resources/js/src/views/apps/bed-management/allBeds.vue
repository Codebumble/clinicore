<template>
<div class="vx-col w-full mb-base">
	<vx-card title="All Beds On Your Hospital/Clinic">
<vs-table pagination max-items="25" search :data="allBeds">

    <template slot="thead">
      <vs-th sort-key="bedType">Bed Type</vs-th>
      <vs-th sort-key="desc">Desc</vs-th>
      <vs-th sort-key="bedCap">Bed Capacity</vs-th>
      <vs-th sort-key="charge">Charge</vs-th>
      <vs-th sort-key="status">Status</vs-th>
    </template>

    <template slot-scope="{data}">
      <vs-tr :key="index" v-for="(allBeds, index) in data">

        <vs-td :data="data[index].bedType">
          {{ data[index].bedType }}
		  <template slot="edit">
            <vs-input v-model="data[index].bedType" class="input" placeholder="Bed Type" />
          </template>
        </vs-td>
        <vs-td :data="data[index].desc">
          {{ data[index].desc }}
		  <template slot="edit">
            <vs-input v-model="data[index].desc" class="input" placeholder="Bed Type" />
          </template>
        </vs-td>
        <vs-td :data="data[index].bedCap">
          {{ data[index].bedCap }}
		  <template slot="edit">
            <vs-input v-model="data[index].bedCap" class="input" placeholder="Bed Type" />
          </template>
        </vs-td>
        <vs-td :data="data[index].charge">
          {{ data[index].charge }}
		  <template slot="edit">
            <vs-input v-model="data[index].charge" class="input" placeholder="Bed Type" />
          </template>
        </vs-td>
        <vs-td :data="data[index].status">
          {{ data[index].status }}
		  <template slot="edit">
           <div class="vx-row">
         <div class="vx-col w-full mt-2">
             <div class="vx-row mb-6">
      <div class="vx-col sm:w-2/6">
        <span>Status:</span>
      </div>
      <div class="vx-col sm:w-3/6">
		<ul class="centerx inline-status">
			<li class="mr-4">
				<vs-radio color="success" v-model="data[index].status" vs-value="Active">Active</vs-radio>
			</li>
			<li class="mr-4">
				<vs-radio color="danger" v-model="data[index].status" vs-value="Inactive">Inactive</vs-radio>
			</li>
		</ul>
      </div>
    </div>
         </div>
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
      allBeds: [
        {
          bedType: "General Word",
          desc: "Normal Bed",
          charge: "500",
          bedCap: "2",
          status: "Active",
        },
        {
          bedType: "General Word",
          desc: "Normal",
          charge: "500",
          bedCap: "2",
          status: "Active",
        },
        {
          bedType: "General",
          desc: "Medium",
          charge: "700",
          bedCap: "1",
          status: "Active",
        },
        {
          bedType: "Semi Private",
          desc: "Shared Room",
          charge: "100",
          bedCap: "1",
          status: "Active",
        },
        {
          bedType: "Private Room 1001",
          desc: "Private Bed with Room",
          charge: "1500",
          bedCap: "1",
          status: "Active",
        },
      ]
    }
  },
}
</script>
