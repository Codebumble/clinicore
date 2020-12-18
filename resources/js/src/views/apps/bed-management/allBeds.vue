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
      <vs-th>Action</vs-th>
    </template>

    <template slot-scope="{data}">
      <vs-tr :key="index" v-for="(allBeds, index) in data">

        <vs-td :data="data[index].bedType">
          {{ data[index].bedType }}
        </vs-td>
        <vs-td :data="data[index].desc">
          {{ data[index].desc }}
        </vs-td>
        <vs-td :data="data[index].bedCap">
          {{ data[index].bedCap }}
        </vs-td>
        <vs-td :data="data[index].charge">
          {{ data[index].charge }}
        </vs-td>
        <vs-td :data="data[index].status">
          {{ data[index].status }}
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
