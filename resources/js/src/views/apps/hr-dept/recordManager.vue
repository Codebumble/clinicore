
<template>
<vx-card title="All Record Manager List">
  <vs-table :data="users">

    <template slot="thead">
      <vs-th>ID</vs-th>
      <vs-th>Name</vs-th>
      <vs-th>Department</vs-th>
      <vs-th>Mobile Number</vs-th>
    </template>

    <template slot-scope="{data}">
      <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
        <vs-td :data="tr.id">
          {{ tr.id }}
        </vs-td>
        <vs-td :data="tr.name">
          {{ tr.name }}
        </vs-td>
        <vs-td :data="tr.department">
          {{ tr.department }}
        </vs-td>
        <vs-td :data="tr.mobile">
          {{ tr.mobile }}
        </vs-td>

          <template class="expand-user" slot="expand">
            <div class="con-expand-users w-full">
              <div class="con-btns-user flex items-center justify-between">
                <div class="con-userx flex items-center justify-start">
                  <vs-avatar :badge="tr.id" size="45px" :src="`https://randomuser.me/api/portraits/women/${indextr}.jpg`" />
                  <span>{{ tr.name  }}({{ tr.username }})</span>
                </div>
                <div class="flex">
                  <vs-button type="border" size="small" icon-pack="feather" icon="icon-phone" class="mr-2"></vs-button>
                  <vs-button type="border" size="small" icon-pack="feather" icon="icon-send" color="success" class="mr-2"></vs-button>
                  <vs-button type="border" size="small" icon-pack="feather" icon="icon-trash" color="danger"></vs-button>
   
                </div>
              </div>
              <vs-list>
                <vs-list-item icon-pack="feather" icon="icon-mail" :title="tr.email"></vs-list-item>
                <vs-list-item icon-pack="feather" icon="icon-server" :title="address"><span>{{  tr.address }},{{  tr.city }}-{{  tr.postal }},{{ tr.country }}</span></vs-list-item>
                <vs-list-item icon-pack="feather" icon="icon-globe" :title="tr.gender"></vs-list-item>
                <vs-list-item icon-pack="feather" icon="icon-circle" :title="tr.birthdate"></vs-list-item>
                <vs-list-item icon-pack="feather" icon="icon-shield" :title="tr.status"></vs-list-item>
              </vs-list>
            </div>
          </template>
      </vs-tr>
    </template>
  </vs-table>
  </vx-card>
</template>

<script>
export default {
  data() {
    return {
       popupActive1: false,
       
      
      colorLoading: '#ff8000',
      users: [
          {
          "id": 1,
          "name": "Shakil Ahmed",
          "username": "drshakilofficial",
          "email": "drshakil324@gmail.com",
          "address": "21,Motijheel",
          "city": "Dhaka",
          "country": "Bangladesh",
          "postal": "1220",
          "status": "Active",
          "mobile": "+880-1898-147076",
          "gender": "Male",
          "birthdate": "26 NOV 1987",
          "department": "Record Manager"

          
        },
        {
          "id": 2,
          "name": "Saifur Rahman",
          "username": "drsaifursss132",
          "email": "drsaifursss132@gmail.com",
          "address": "675/C,Kolabagan",
          "city": "Dhaka",
          "country": "Bangladesh",
          "postal": "1245",
          "status": "Active",
          "mobile": "+880-1870-440394",
          "gender": "Male",
          "birthdate": "22 JUN 1979",
          "department": "Record Manager"
        },
        {
          "id": 3,
          "name": "Saymoon islam",
          "username": "drsaymonislam576",
          "email": "saymonislam576@gmail.com",
          "address": "103/C,Nilkhet",
          "city": "Dhaka",
          "country": "Bangladesh",
          "postal": "1200",
          "status": "Active",
          "mobile": "+880-1911-449620",
          "gender": "Male",
          "birthdate": "19 JAN 1988",
          "department": "Record Manager"
        },
        {
          "id": 4,
          "name": " Moinul Islam",
          "username": "drmoinulhaqqu",
          "email": "vaimoinulhaqqu@gmail.com",
          "address": "22/N,Nondipara",
          "city": "Dhaka",
          "country": "Bangladesh",
          "postal": "1209",
          "status": "Active",
          "mobile": "+880-1870-440394",
          "gender": "Male",
          "birthdate": "06 JUL 1979",
          "department": "Record Manager"
        },
      ]
    }
  },
  
}
</script>