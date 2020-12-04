
<template>
<vx-card title="All Sector/Department List">
  <vs-table :data="users">

    <template slot="thead">
      <vs-th>ID</vs-th>
      <vs-th>Sector Name</vs-th>
      <vs-th>Discription</vs-th>
      <vs-th>Status</vs-th>
    </template>

    <template slot-scope="{data}">
      <vs-tr :key="indextr" v-for="(tr, indextr) in data">

        <vs-td :data="data[indextr].id">
          
          {{ data[indextr].id }}
        </vs-td>

        <vs-td :data="data[indextr].username">
          {{ data[indextr].name }}
        </vs-td>

        <vs-td :data="data[indextr].email">
          
          {{ data[indextr].email }}
        </vs-td>

        <vs-td :data="data[indextr].website">
          
          {{ data[indextr].website }}
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
      users: [
        {
          "id": 1,
          "name": "Doctor",
          "username": "doctor",
          "email": "Sections for Doctors",
          "website": "Active",
        },
        {
          "id": 2,
          "name": "Admin",
          "username": "admin",
          "email": "Section Created for Admins",
          "website": "Active",
        },
        {
          "id": 3,
          "name": "Nurse",
          "username": "nurse",
          "email": "Nurses Sedtion",
          "website": "Inactive",
        },
        {
          "id": 4,
          "name": "Combined",
          "username": "combined",
          "email": "For All",
          "website": "Active",
        },
        
      ]
    }
  },
}
</script>