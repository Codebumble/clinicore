<!-- =========================================================================================
  File Name: UserView.vue
  Description: User View page
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="page-user-view">

    <vs-alert color="danger" title="User Not Found" :active.sync="user_not_found">
      <span>User record with id: {{ $route.params.userId }} not found. </span>
      <span>
        <span>Check </span><router-link :to="{name:'page-user-list'}" class="text-inherit underline">All Users</router-link>
      </span>
    </vs-alert>

    <div id="user-data" v-if="user_data">

      <vx-card title="Account" class="mb-base">

        <!-- Avatar -->
        <div class="vx-row">

          <!-- Avatar Col -->
          <div class="vx-col" id="avatar-col">
            <div class="img-container mb-4">
              <img :src="user_data.avatar" class="rounded w-full" />
            </div>
          </div>

          <!-- Information - Col 1 -->
          <div class="vx-col flex-1" id="account-info-col-1">
            <table>
              <tr>
                <td class="font-semibold">Username</td>
                <td>{{ user_data.username }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Name</td>
                <td>{{ user_data.name }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Email</td>
                <td>{{ user_data.email }}</td>
              </tr>
            </table>
          </div>
          <!-- /Information - Col 1 -->

          <!-- Information - Col 2 -->
          <div class="vx-col flex-1" id="account-info-col-2">
            <table>
              <tr>
                <td class="font-semibold">Status</td>
                <td><div class="badge badge-primary">{{ user_data.status }}</div></td>
              </tr>
              <tr>
                <td class="font-semibold">Role</td>
                <td>{{ user_data.role }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Company</td>
                <td>{{ user_data.company }}</td>
              </tr>
            </table>
          </div>
          <!-- /Information - Col 2 -->
          <div class="vx-col w-full flex" id="account-manage-buttons">
            <vs-button icon-pack="feather" icon="icon-edit" class="mr-4" :to="{name: 'app-user-edit', params: { userId: $route.params.userId }}">Edit</vs-button>
            <vs-button type="border" color="danger" icon-pack="feather" icon="icon-trash" @click="confirmDeleteRecord">Delete</vs-button>
          </div>

        </div>

      </vx-card>

      <div class="vx-row">
        <div class="vx-col lg:w-1/2 w-full">
          <vx-card title="Information" class="mb-base">
            <table>
              <tr>
                <td class="font-semibold">Birth Date</td>
                <td>{{ user_data.dob }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Mobile</td>
                <td>{{ user_data.mobile }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Website</td>
                <td>{{ user_data.website }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Languages</td>
                <td>{{ user_data.languages_known.join(", ") }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Gender</td>
                <td>{{ user_data.gender }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Contact</td>
                <td>{{ user_data.contact_options.join(", ") }}</td>
              </tr>
            </table>
          </vx-card>
        </div>

        <div class="vx-col lg:w-1/2 w-full">
          <vx-card title="Social Links" class="mb-base">
            <table>
              <tr>
                <td class="font-semibold">Twitter</td>
                <td>{{ user_data.social_links.twitter }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Facebook</td>
                <td>{{ user_data.social_links.facebook }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Instagram</td>
                <td>{{ user_data.social_links.instagram }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Github</td>
                <td>{{ user_data.social_links.github }}</td>
              </tr>
              <tr>
                <td class="font-semibold">CodePen</td>
                <td>{{ user_data.social_links.codepen }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Slack</td>
                <td>{{ user_data.social_links.slack }}</td>
              </tr>
            </table>
          </vx-card>
        </div>
      </div>

      <!-- Permissions -->
      <vx-card>

        <div class="vx-row">
          <div class="vx-col w-full">
            <div class="flex items-end px-3">
              <feather-icon svgClasses="w-6 h-6" icon="LockIcon" class="mr-2" />
              <span class="font-medium text-lg leading-none">Permissions</span>
            </div>
            <vs-divider />
          </div>
        </div>

        <div class="block overflow-x-auto">
          <table class="w-full permissions-table">
            <tr>
              <!--
                You can also use `Object.keys(Object.values(data_local.permissions)[0])` this logic if you consider,
                our data structure. You just have to loop over above variable to get table headers.
                Below we made it simple. So, everyone can understand.
               -->
              <th class="font-semibold text-base text-left px-3 py-2" v-for="heading in ['Module', 'Read', 'Write', 'Create', 'Delete']" :key="heading">{{ heading }}</th>
            </tr>

            <tr v-for="(val, name) in user_data.permissions" :key="name">
              <td class="px-3 py-2">{{ name }}</td>
              <td v-for="(permission, name) in val" class="px-3 py-2" :key="name+permission">
                <vs-checkbox v-model="val[name]" class="pointer-events-none" />
              </td>
            </tr>
          </table>
        </div>

      </vx-card>
    </div>
  </div>
</template>

<script>
import moduleUserManagement from '@/store/user-management/moduleUserManagement.js'

export default {
  data () {
    return {
      user_data: null,
      user_not_found: false
    }
  },
  computed: {
    userAddress () {
      let str = ''
      for (const field in this.user_data.location) {
        str += `${field  } `
      }
      return str
    }
  },
  methods: {
    confirmDeleteRecord () {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: 'Confirm Delete',
        text: `You are about to delete "${this.user_data.username}"`,
        accept: this.deleteRecord,
        acceptText: 'Delete'
      })
    },
    deleteRecord () {
      /* Below two lines are just for demo purpose */
      this.$router.push({name:'app-user-list'})
      this.showDeleteSuccess()

      /* UnComment below lines for enabling true flow if deleting user */
      // this.$store.dispatch("userManagement/removeRecord", this.user_data.id)
      //   .then(()   => { this.$router.push({name:'app-user-list'}); this.showDeleteSuccess() })
      //   .catch(err => { console.error(err)       })
    },
    showDeleteSuccess () {
      this.$vs.notify({
        color: 'success',
        title: 'User Deleted',
        text: 'The selected user was successfully deleted'
      })
    }
  },
  created () {
    // Register Module UserManagement Module
    if (!moduleUserManagement.isRegistered) {
      this.$store.registerModule('userManagement', moduleUserManagement)
      moduleUserManagement.isRegistered = true
    }

    const userId = this.$route.params.userId
    this.$store.dispatch('userManagement/fetchUser', userId)
      .then(res => { this.user_data = res.data })
      .catch(err => {
        if (err.response.status === 404) {
          this.user_not_found = true
          return
        }
        console.error(err)
      })
  }
}


</script>

<style lang="scss">

// .badge {
//   display : inline-block;
//   padding : 0.35em 0.4em;
//   font-size : 80%;
//   font-weight : 700;
//   line-height : 1;
//   text-align : center;
//   white-space : nowrap;
//   vertical-align : baseline;
//   border-radius : 0.25rem;
//   -webkit-transition : color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
//   transition : color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
// }
// @media (prefers-reduced-motion: reduce) {
//   .badge {
//     -webkit-transition : none;
//             transition : none;
//   }
// }
// a.badge:hover, a.badge:focus {
//   text-decoration : none;
// }
// .badge:empty {
//   display : none;
// }

// .btn .badge {
//   position : relative;
//   top : -1px;
// }

// .badge-pill {
//   padding-right : 0.6em;
//   padding-left : 0.6em;
//   border-radius : 10rem;
// }

// .badge-primary {
//   color : #FFFFFF;
//   background-color : #7367F0;
// }
// a.badge-primary:hover, a.badge-primary:focus {
//   color : #FFFFFF;
//   background-color : #4839EB;
// }
// a.badge-primary:focus, a.badge-primary.focus {
//   outline : 0;
//   box-shadow : 0 0 0 0.2rem rgba(115, 103, 240, 0.5);
// }

// .badge-secondary {
//   color : #2A2E30;
//   background-color : #B8C2CC;
// }
// a.badge-secondary:hover, a.badge-secondary:focus {
//   color : #2A2E30;
//   background-color : #9AA9B7;
// }
// a.badge-secondary:focus, a.badge-secondary.focus {
//   outline : 0;
//   box-shadow : 0 0 0 0.2rem rgba(184, 194, 204, 0.5);
// }

// .badge-success {
//   color : #FFFFFF;
//   background-color : #28C76F;
// }
// a.badge-success:hover, a.badge-success:focus {
//   color : #FFFFFF;
//   background-color : #1F9D57;
// }
// a.badge-success:focus, a.badge-success.focus {
//   outline : 0;
//   box-shadow : 0 0 0 0.2rem rgba(40, 199, 111, 0.5);
// }

// .badge-info {
//   color : #FFFFFF;
//   background-color : #00CFE8;
// }
// a.badge-info:hover, a.badge-info:focus {
//   color : #FFFFFF;
//   background-color : #00A1B5;
// }
// a.badge-info:focus, a.badge-info.focus {
//   outline : 0;
//   box-shadow : 0 0 0 0.2rem rgba(0, 207, 232, 0.5);
// }

// .badge-warning {
//   color : #2A2E30;
//   background-color : #FF9F43;
// }
// a.badge-warning:hover, a.badge-warning:focus {
//   color : #2A2E30;
//   background-color : #FF8510;
// }
// a.badge-warning:focus, a.badge-warning.focus {
//   outline : 0;
//   box-shadow : 0 0 0 0.2rem rgba(255, 159, 67, 0.5);
// }

// .badge-danger {
//   color : #FFFFFF;
//   background-color : #EA5455;
// }
// a.badge-danger:hover, a.badge-danger:focus {
//   color : #FFFFFF;
//   background-color : #E42728;
// }
// a.badge-danger:focus, a.badge-danger.focus {
//   outline : 0;
//   box-shadow : 0 0 0 0.2rem rgba(234, 84, 85, 0.5);
// }

// .badge-light {
//   color : #2A2E30;
//   background-color : #BABFC7;
// }
// a.badge-light:hover, a.badge-light:focus {
//   color : #2A2E30;
//   background-color : #9EA5B0;
// }
// a.badge-light:focus, a.badge-light.focus {
//   outline : 0;
//   box-shadow : 0 0 0 0.2rem rgba(186, 191, 199, 0.5);
// }

// .badge-dark {
//   color : #FFFFFF;
//   background-color : #1E1E1E;
// }
// a.badge-dark:hover, a.badge-dark:focus {
//   color : #FFFFFF;
//   background-color : #050505;
// }
// a.badge-dark:focus, a.badge-dark.focus {
//   outline : 0;
//   box-shadow : 0 0 0 0.2rem rgba(30, 30, 30, 0.5);
// }





#avatar-col {
  width: 10rem;
}

#page-user-view {
  table {
    td {
      vertical-align: top;
      min-width: 140px;
      padding-bottom: .8rem;
      word-break: break-all;
    }

    &:not(.permissions-table) {
      td {
        @media screen and (max-width:370px) {
          display: block;
        }
      }
    }
  }
}

// #account-info-col-1 {
//   // flex-grow: 1;
//   width: 30rem !important;
//   @media screen and (min-width:1200px) {
//     & {
//       flex-grow: unset !important;
//     }
//   }
// }


@media screen and (min-width:1201px) and (max-width:1211px),
only screen and (min-width:636px) and (max-width:991px) {
  #account-info-col-1 {
    width: calc(100% - 12rem) !important;
  }

  // #account-manage-buttons {
  //   width: 12rem !important;
  //   flex-direction: column;

  //   > button {
  //     margin-right: 0 !important;
  //     margin-bottom: 1rem;
  //   }
  // }

}

</style>
