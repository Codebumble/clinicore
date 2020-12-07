<template>
<div class="vx-col w-full mb-base">
      <vx-card title="Add Service for Your Hospital/Clinic">
        <div class="vx-row">
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full"  icon-pack="feather" icon="icon-plus" label-placeholder="Service Name*" v-model="input1" />
          </div>
		</div>
        <div class="vx-row">
          <div class="vx-col sm:w-1/2 w-full mb-2 mt-3">
            <vs-textarea class="w-full" v-model="textarea" placeholder="Description" />
          </div>
        </div>
		<div class="vx-row">
          <div class="vx-col mb-2">
            <vs-input-number v-model="quantity" label="Quantity: "/>
          </div>
		</div>
		<div class="vx-row">
          <div class="vx-col mb-2">
            <vs-input-number v-model="price" label="Price: "/>
          </div>
		</div>
        <div class="vx-row">
         <div class="vx-col w-full">
             <div class="vx-row mb-6">
      <div class="vx-col sm:w-2/6">
        <span>Status:</span>
      </div>
      <div class="vx-col sm:w-3/6">
		<ul class="centerx inline-status">
			<li class="mr-4">
				<vs-radio color="success" v-model="status" vs-value="Active">Active</vs-radio>
			</li>
			<li class="mr-4">
				<vs-radio color="danger" v-model="status" vs-value="Inactive">Inactive</vs-radio>
			</li>
		</ul>
      </div>
    </div>
         </div>
        </div>

        <div class="vx-row">
          <div class="vx-col w-full">
            <vs-button class="mr-3 mb-2" @click="popupActive=true" type="filled">Save</vs-button>

      <vs-popup background-color="rgba(255,255,255,.6)" :background-color-popup="colorx" class=""  title="Review" :active.sync="popupActive">
        <p> Are You Sure You Want to Add This Service?</p><br>
        <vs-button @click="openLoadingColor" type="filled" :color="colorLoading">OK</vs-button>
      </vs-popup>
            <vs-button color="warning" type="border" class="mb-2" @click="input1 = input2 = ''; check7 = false;">Reset</vs-button>
          </div>
        </div>
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
export default{
  data () {
    return {
      check7: '',
      input1: '',
	  input2: '',
	  textarea: '',
	  status: 'Active',
	  quantity: 1,
	  price: 0,
      colorx:"#def1d1",
      popupActive: false,
      colorLoading: '#ff8000',
    }
  },
  methods: {
    openLoadingColor() {
      this.$vs.loading({ type: 'sound' })
      this.popupActive=false;

      setTimeout(() => {

        this.$vs.loading.close()
      }, 2000);
        setTimeout(() =>{
      this.$vs.notify({
        title: 'Success',
        text: 'Data Added Successfully!!',
        color: 'success',
        position:'top-right',
        time: '4000',
        iconPack: 'feather',
        icon:'icon-check'})
        }, 2000);
    },
  }
}
</script>

