<template>
    <v-container style="max-width: 1330px;" class="w-100 mt-5 pt-0 pr-8 pl-5">

 <div class="pb-5 d-flex align-center justify-space-between">
  <p style="font-weight: 600;
font-size: 24px;
line-height: 30px;">Hi {{vendor.ownerInfo.firstName}} {{ vendor.ownerInfo.lastName }}, Welcome back </p>

  <div class="d-flex align-center">
    <v-menu width="200">
      <template v-slot:activator="{ props }">
      
        <div v-bind="props" v-ripple  style="  border-radius: 6px;  border: 1px solid #e5e5e5; width:200px;
" variant="outlined" class="px-4 py-2 d-flex align-center justify-space-between text-grey-darken-3" >
<span>

  <v-icon class="mr-2" icon="mdi mdi-tune-vertical-variant"></v-icon> Filter 
</span>
<v-icon class="" icon="mdi mdi-chevron-down"></v-icon>
</div>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in ['Last 7 days', 'This Month', 'This Year', 'Custom']"
          :key="index"
          :value="index"
        >
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  
    <v-text-field style="" variant="outlined" density="compact" class="ml-2 borderedinput" hide-details="" prepend-inner-icon="mdi mdi-magnify" placeholder="Search"></v-text-field>
  </div>
 </div>
      <div class="d-flex justify-center">
<v-row style=" overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  display: grid;
  grid-auto-flow: column;">
<v-col cols="12" lg="3" v-for="n in dashes">

    <v-card min-width="300px" class="mx-auto cardStyle" width="100%" style=""  flat >
        <div class="d-flex  align-center">
            <v-avatar class="mr-2" size="34"><v-img :src="n.img"></v-img></v-avatar>
            <p style="font-weight: 500;
font-size: 20px;
line-height: 25px;

color: #333333;">{{n.name}}</p>
<div class="ml-2">
    <v-icon size="16" icon="mdi mdi-information"> </v-icon>
    <v-tooltip
        activator="parent"
        location="end" class="text-red"
      >{{ n.tooltip }}</v-tooltip>
</div>
     

        </div>
<div class="d-flex align-center mt-4 justify-space-between">
    <h1 class="bigpriceClass2 ">{{ n.amount }}</h1>
    <div class="text-left">
        <p style="font-weight: 600;
font-size: 14px;
line-height: 18px;
color: #00966D;" class="text-green-lighten-2" :class="n.trending? 'text-green-lighten-2' : 'text-red'"><v-icon :icon="n.trending? 'mdi mdi-trending-up':'mdi mdi-trending-down'"></v-icon> {{n.trend}}%</p>
        <p style="font-weight: 500;
font-size: 14px;
line-height: 18px;
letter-spacing: -0.01em;
color: #969696;">vs last 7 days</p>
    </div>
</div>
    </v-card>
</v-col>
</v-row>
      </div>

<v-row class="py-6">
    <v-col cols="12" lg="6">
        <v-card  class="mx-auto cardStyle" width="100%" style=""  flat >
           <h4 class="mb-2 timernum d-flex align-center text-left">Revenue Growth <span class="ml-2 lightText">(EUR)</span></h4> 
           <p class="lightText2">Revenue growth analytics of the week </p>
           <!-- <revenuegraph /> -->
           <v-img class="mt-12 mb-5" src="https://res.cloudinary.com/payhospi/image/upload/v1686320933/Group_427320557_ys3qve.png" width="100%" height="auto"></v-img>
  </v-card>
    </v-col>
    <v-col cols="12" lg="6">
        <v-card  class="mx-auto pa-4 coolTable" width="100%" style=""  flat >
        <div class="d-flex justify-space-between">
            <div>
                <p class="mb-2 timernum d-flex align-center text-left">Customer Growth</p> 
                <p class="lightText2">of the week based on country </p>
            </div>
            <v-menu width="auto">
              <template v-slot:activator="{ props }">
              <v-btn  v-bind="props"  style="    border: 1px solid #e5e5e5;
  " variant="outlined" class="text-grey-darken-3" >
                  Country <v-icon icon="mdi mdi-chevron-down"></v-icon>
              </v-btn>
      
  
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in ['United States', 'United Kingdom', 'Germany', 'France', 'Nigeria', 'Ghana', 'Kenya', 'South Africa']"
          :key="index"
          :value="index"
        >
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
        </div>
        <v-row class="mt-8">
            <v-col cols="7">
                <v-img src="https://res.cloudinary.com/payhospi/image/upload/v1685704413/Maps_ic2b3z.png">
                    <v-card style="position: absolute;top:20px;left: 50%;transform: translate(-50%, 0);"  width="" class="pa-3 px-6 rounded-lg bg-green">
        <p><v-icon class="mr-2" size="6" icon="mdi mdi-circle"></v-icon>United States</p>
        <div class="pt-2 align-center d-flex">
            <v-progress-circular class="mr-4" size="48" model-value="20">38%</v-progress-circular>            <div>
                <p style="font-weight: 500;font-size: 14px" class="text-capitalize">20,489</p>
                <p style="font-weight: 500;
font-size: 10px;
line-height: 100%;
/* identical to box height, or 10px */


color: rgba(255, 255, 255, 0.75);" class="text-capitalize">customers</p>
            </div>
        </div>
      </v-card> 
<div style="position: absolute;bottom:10px; left:10px" >
<div >
    
    <v-btn class="mb-2" size="small"  rounded="xl" icon> <v-icon size="18" color="grey-darken-1" icon="mdi mdi-magnify-plus-outline"></v-icon></v-btn>
</div>
<div >
    <v-btn size="small"  rounded="xl" icon> <v-icon size="18" color="grey-darken-1" icon="mdi mdi-magnify-minus-outline"></v-icon></v-btn>
   </div>  
   </div>  
           </v-img>
            </v-col>
            <v-col cols="5">
                <div class="mt-3" v-for="n in countries" :key="n.name">
                    <div class="d-flex mb-1 align-center">
                        <v-avatar size="24"><v-img :src="n.img"></v-img></v-avatar>
                        <p style="font-weight: 500;
font-size: 16px;" class="ml-3 text-capitalize">{{ n.name }}</p>
                    </div>
                    <div class="d-flex align-center">
                       <div style="width: 80%;">

                           <v-progress-linear style="width:100%;border-radius: 5px;" class="mr-2" color="#1361F4" :model-value="n.growth" :height="6"></v-progress-linear>
                        </div> 
                        <p
    style="font-weight: 500;
font-size: 16px;
line-height: 20px;
color: #969696;" class="ml-4">{{ n.growth }}%</p>
                    </div>
                </div>
            </v-col>
        </v-row>

  </v-card>
    </v-col>
    <v-col cols="12" lg="5">
        <v-card height="100%"  class=" mx-auto coolTable py-4" width="100%" style="overflow:hidden"  flat >
        <div class="d-flex px-4 justify-space-between">
            <div>
                <p class="mb-2 timernum d-flex align-center text-left">Top Transactions</p> 
                <p class="lightText2">of the week based on total purchase </p>
            </div>
            <v-btn variant="text" color="#1361F4" class="" >
View All            </v-btn>
        </div>
<div class="rounded- mt-5" >
    <v-table style="    height: 190px!important;
    overflow: scroll;">
    <thead>
      <tr class="bg-grey-lighten-3 ">
        <th style="font-size: 14px;" class="  font-weight-medium  text-left">
           #ID
        </th>
        <th style="font-size: 14px;" class=" text-left px-1  font-weight-medium">
          First Item
        </th>
        <th style="font-size: 14px;" class=" text-left px-1  font-weight-medium">
          Date
        </th>
        <th style="font-size: 14px;" class=" text-left px-1  font-weight-medium">
          Purchase
        </th>
      </tr>
    </thead>
    <tbody>
      <tr  @click="chosen = item.sn"
      :style="chosen == item.sn ? 'background:#DFDFDF':''"
        v-for="item in items"
        :key="item.sn"
      >
        <td style="font-size: 14px;" class="px-1 pl-2">
            <v-menu
      
      location="end"
    >
      <template v-slot:activator="{ props }">
   
        <span  v-bind="props">

{{ item.sn }}
</span>
      </template> 
      <v-card class="pa-4 rounded-lg bg-green">
        <p><v-icon class="mr-2" size="6" icon="mdi mdi-circle"></v-icon>Customer ID: {{ item.sn }}</p>
        <div class="pt-2 align-center d-flex">
            <v-avatar size="44" class="mr-2"><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1685693849/Rectangle_1898_gyahsj.png"></v-img></v-avatar>
            <div>
                <p style="font-weight: 500;font-size: 14px" class="text-capitalize">Jenny Wilson</p>
                <p style="font-weight: 500;
font-size: 10px;
line-height: 100%;
/* identical to box height, or 10px */


color: rgba(255, 255, 255, 0.75);" class="text-capitalize">
<v-icon size="12" class="mr-1" icon="mdi mdi-map-marker"></v-icon>United States</p>
            </div>
        </div>
      </v-card>
    </v-menu>
    </td>
        <td style="font-size: 14px;" class="text-grey-lighten-1 px-1">{{ item.name }}</td>
        <td style="font-size: 14px;" class="text-grey-lighten-1 px-1">{{ item.date }}</td>
        <td style="font-size: 14px;" class="text-grey-lighten-1 px-1">
            <span v-if="chosen !== item.sn ">
                {{ item.total }}
            </span>
            <v-btn v-else color="mygreen" size="small" class=" rounded-lg"> See details</v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
</div>

  </v-card>
    </v-col>
    <v-col cols="12" lg="4">
        <v-card height="auto"  class="pa-4 mx-auto coolTable" width="100%"  flat >
        <div class="d-flex justify-space-between">
            <div>
                <p class="mb-2 timernum d-flex align-center text-left">Top Product</p> 
                <p class="lightText2">of the week based on total purchase </p>
            </div>
            <v-btn variant="text" color="#1361F4" >
View more            </v-btn>
        </div>

        <v-row class="mt-1">
            <v-col v-for="n in imgs" cols="4"><v-img width="100%" class="rounded-lg" :src="n"></v-img></v-col>
        </v-row>
  </v-card>
    </v-col>
    <v-col v-if="!show_more" cols="12" lg="3">
        <v-card theme="dark" image="https://res.cloudinary.com/payhospi/image/upload/v1685693850/Rectangle_1894_auhcts.png" height="100%" min-height="300px" class="mx-auto cardStyle" width="100%" style=""  flat >
        <div class="d-flex justify-space-between">
                <p style="font-weight: 500;
font-size: 27px;
line-height: 35px;
display: flex;max-width: 200px;
align-items: center;
letter-spacing: -0.03em;" class=" text-left">See more detail
statistic to analyze
your decision</p> 
        </div>
        <v-btn  @click="show_more = !show_more" style="position: absolute;bottom: 24px; left:24px" color="white" flat class="" >
    See More</v-btn>
    </v-card>
    </v-col>
    <v-col  v-if="show_more" cols="12" lg="3">
        <v-card height="100%"  class=" mx-auto coolTable py-4" width="" style="overflow:hidden"  flat >
        <div class="d-flex px-4 justify-space-between">
            <div>
                <p class="mb-2 timernum d-flex align-center text-left">Reviews</p> 
                <p class="lightText2">Customer feedback </p>
            </div>
            <v-btn variant="text" color="#1361F4" class="" >
See All            </v-btn>
        </div>
        <v-carousel style="overflow: visible;"
    height="auto" 
     :show-arrows="false" hide-delimiter-background="" >
      <v-carousel-item 
        v-for="n in 3"
      >      
<div class="d-flex align-center px-4 py-2 pt-3">
<v-avatar size="40"><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1686323650/Rectangle_1907_aocxwr.png"></v-img></v-avatar>
<div class="ml-2">
    <p class="" style="font-weight: 600;
font-size: 16px;
line-height: 20px;color: #333333;
letter-spacing: -0.01em;">Black and Green Ankara School</p>
    <p style="font-weight: 400;
font-size: 14px;
line-height: 18px;
letter-spacing: -0.01em;
color: #969696;
">Fashion and Style</p>
</div>
</div>
<p style="font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 140%;
letter-spacing: -0.01em;
color: #333333;" class="px-4">Lorem ipsum dolor sit amet consectetur. Accumsan dignissim venenatis egest
drerit eget volutpat <span class="text-blue-darken-3 font-weight-medium">

  See full Details
</span>

</p>
<p style="font-weight: 450;
    font-size: 13px;
    line-height: 16px;
    color: #000000;
    " class="d-flex  pl-4 my-2 align-center">
        <v-rating
        v-model="rating"
        color="grey-lighten-1"
        active-color="#F0B136"
        class=" "
        size="small" density="compact"
        ></v-rating><span style="margin-left:9px ;" >4.0/5.0</span> 
    </p>
    
</v-carousel-item>
    </v-carousel>
  </v-card>
    </v-col>
    <v-col  v-if="show_more" cols="12" lg="6">
        <v-card height="100%"  class=" mx-auto coolTable py-4" width="100%" style="overflow:hidden"  flat >
        <div class="d-flex px-4 justify-space-between">
            <div>
                <p class="mb-2 timernum d-flex align-center text-left">Recent Orders</p> 
                <p class="lightText2">of the week based on total purchase </p>
            </div>
            <v-btn variant="text" color="#1361F4" class="" >
View More            </v-btn>
        </div>
<div class="rounded- mt-5" >
    <v-table style="    height: 190px!important;
    overflow: scroll;">
    <thead>
      <tr class="bg-grey-lighten-3  ">
        <th style="font-size: 14px;" class="  font-weight-bold  text-left">
           Products & Category
        </th>
        <th style="font-size: 14px;" class=" text-left px-1  font-weight-bold">
         Qty
        </th>
        <th style="font-size: 14px;" class=" text-left px-1  font-weight-bold">
          Sales
        </th>
        <th style="font-size: 14px;" class=" text-left px-1  font-weight-bold">
          Total Prices
        </th>
      </tr>
    </thead>
    <tbody>
      <tr  @click="chosen = item.sn"
      :style="chosen == item.sn ? 'background:#DFDFDF':''"
        v-for="item in items"
        :key="item.sn"
      >
        <td style="font-size: 14px;" class="px-1  d-flex align-center pl-2">
          <v-avatar color="grey-lighten-2" class="pa-1 mr-3 ml-1" size="30" ><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1686754027/H468a70379a6043119f5077bf8ba35a7cO_bnnitb.png"></v-img></v-avatar>
          <div >

            <p class="" style="font-weight: 600;
font-size: 16px;
line-height: 20px;
color: #333333;">{{ item.name }}</p>
            <p style="font-weight: 400;
font-size: 14px;
line-height: 18px;
color: #969696;">Fashion and Style</p>
          </div>
    </td>
        <td style="font-size: 14px;" class="text-grey-darken-1 px-1">240</td>
        <td style="font-size: 14px;" class="text-grey-darken-1 px-1">{{ item.total }}</td>
        <td style="font-size: 14px;" class="text-grey-darken-1 px-1">{{ item.total }}</td>
       
      </tr>
    </tbody>
  </v-table>
</div>

  </v-card>
    </v-col>
    <v-col  v-if="show_more" cols="12" lg="6">
        <v-card height="100%"  class=" mx-auto coolTable py-4" width="100%" style="overflow:hidden"  flat >
        <div class="d-flex px-4 justify-space-between">
            <div>
                <p class="mb-2 timernum d-flex align-center text-left">Out of Stock</p> 
                <p class="lightText2">of the week based on total purchase </p>
            </div>
            <v-btn variant="text" color="#1361F4" class="" >
View Details            </v-btn>
        </div>
<div class="rounded- mt-5" >
    <v-table style="    height: 190px!important;
    overflow: scroll;">
    <thead>
      <tr class="bg-grey-lighten-3 ">
        <th style="font-size: 14px;" class="  font-weight-medium  text-left">
           #
        </th>
        <th style="font-size: 14px;" class=" text-left px-1  font-weight-medium">
          ID Number
        </th>
        <th style="font-size: 14px;" class=" text-left px-1  font-weight-medium">
          Name
        </th>
        <th style="font-size: 14px;" class=" text-left px-1  font-weight-medium">
          Price
        </th>
        <th style="font-size: 14px;" class=" text-left px-1  font-weight-medium">
          Stock
        </th>
      </tr>
    </thead>
    <tbody>
      <tr  @click="chosen = item.sn"
      :style="chosen == item.sn ? 'background:#DFDFDF':''"
        v-for="item in items"
        :key="item.sn"
      >
        <td style="font-size: 14px;" class="px-1 pl-2">
          <v-avatar  color="grey-lighten-2" class="pa-1 ml-1" size="30" rounded="lg"><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1686754027/H468a70379a6043119f5077bf8ba35a7cO_bnnitb.png"></v-img></v-avatar>
    </td>
        <td style="font-size: 14px;" class="text-grey-lighten-1 px-1">{{ item.sn }}</td>
        <td style="font-size: 16px;" class="font-weight-bold text-grey-darken-2 px-1">{{ item.name }}</td>
        <td style="font-size: 14px;" class="text-grey-darken-2 px-1">{{ item.total }}</td>
        <td style="font-size: 14px;" class="text-grey-lighten-1 px-1">
          
            <v-btn color="myred" variant="tonal" size="small" class=" rounded-lg"> Out of Stock</v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
</div>

  </v-card>
    </v-col>

</v-row>
</v-container>

</template>
<style>

.reviewstab .v-carousel .v-btn--icon .v-icon{
font-size: 9px;
}
.reviewstab .v-carousel--hide-delimiter-background .v-carousel__controls {
    bottom: -33px;
}
.reviewstab .v-carousel .v-btn--icon.v-btn--active .v-icon{
color: orange;
}
.reviewstab .rev .v-rating__item .v-btn{
  scale: 2!important;
    margin-left: -13px!important;


}

</style>
<script>
import { useVendorStore } from '~/stores/vendorStore';

export default {
  setup() {
    const vendorStore = useVendorStore()
    const vendor = vendorStore.getVendor

    return {
      vendor
    }
  },
  data() {
    return {
        menu:true,
        rating:4,
        show_more:false,
   text:'1',
   chosen:'',
   countries:[
    {
    name: 'united states',
    growth: 38,
    img: 'https://res.cloudinary.com/payhospi/image/upload/v1685693849/Flags_q0wr5w.png'
   },
    {
    name: 'united kingdom',
    growth: 27,
    img: 'https://res.cloudinary.com/payhospi/image/upload/v1685693849/Flags_1_tjfkib.png'
   },
    {
    name: 'France',
    growth: 20,
    img: 'https://res.cloudinary.com/payhospi/image/upload/v1685693849/Flags_2_gq15ze.png'
   },
    {
    name: 'Argentina',
    growth: 16,
    img: 'https://res.cloudinary.com/payhospi/image/upload/v1685693849/Flags_3_hqmdge.png'
   },
],
   items:[
    {
        sn:'#23942',
        name:'Leather crop top & pants......',
        date:'17 May',
        total:'€2,349‎',
    },
    {
        sn:'#23442',
        name:'Leather crop top & pants......',
        date:'17 May',
        total:'€2,349‎',
    },
    {
        sn:'#26042',
        name:'Leather crop top & pants......',
        date:'17 May',
        total:'€2,349‎',
    },
    {
        sn:'#25442',
        name:'Leather crop top & pants......',
        date:'17 May',
        total:'€2,349‎',
    },
    {
        sn:'#23442',
        name:'Leather crop top & pants......',
        date:'17 May',
        total:'€2,349‎',
    },
    {
        sn:'#26742',
        name:'Leather crop top & pants......',
        date:'17 May',
        total:'€2,349‎',
    },
    {
        sn:'#21042',
        name:'Leather crop top & pants......',
        date:'17 May',
        total:'€2,349‎',
    },
   ],
   imgs:['https://res.cloudinary.com/payhospi/image/upload/v1685693850/Rectangle_1895_u1foj0.png','https://res.cloudinary.com/payhospi/image/upload/v1685693851/Rectangle_1896_x07ole.png','https://res.cloudinary.com/payhospi/image/upload/v1685693851/Rectangle_1897_ca06qx.png'],
   dashes:[
    {
        img: 'https://res.cloudinary.com/payhospi/image/upload/v1685691668/Frame_427320547_1_vxn2kx.png',
        name: 'Total Revenue',
        tooltip: 'Total revenue made in the last seven days',
        amount: '€‎512,987',
        trend: '16',
        trending:true
    },
    {
        img: 'https://res.cloudinary.com/payhospi/image/upload/v1685691668/Frame_427320547_hzperi.png',
        name: 'Total Customers',
        tooltip: 'Total customers in the last seven days',
        amount: '27,654',
        trend: '0.4',
        trending:false
    },
    {
        img: 'https://res.cloudinary.com/payhospi/image/upload/v1685691671/Frame_427320547_3_rhk1fq.png',
        name: 'Total Transactions',
        tooltip: 'Total transactions in the last seven days',
        amount: '135,302',
        trend: '8',
        trending:true
    },
    {
        img: 'https://res.cloudinary.com/payhospi/image/upload/v1685691668/Frame_427320547_2_krqzsv.png',
        name: 'Total Products Sold',
        tooltip: 'Total products sold in the last seven days',
        amount: '196,987',
        trend: '2',
        trending:true
    },
   ]
    }
},

}
</script>