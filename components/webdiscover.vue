<template>
    <v-card min-height="100vh" flat style="padding-top: 200px;padding-bottom: 200px;" class="d-flex  justify-center align-center">
    <div class=" w-100 ">
    <div class=" w-100 text-center">

        <p  class="tinytext1"
        style="color: var(--magnetic-green-4, #2C6E63);
            font-size: 14px;
            font-weight: 500;
            text-transform: uppercase;
            line-height: 120%; /* 16.8px */
            letter-spacing: 0.7px;" >What is the Umoja solution?</p>
        <p style="color: var(--carbon-5, #2A2A2A);
            font-size: 48px;
            font-weight: 600;
            line-height: 120%; /* 57.6px */
            letter-spacing: -1.44px;" class="mt-4 subtitles mb-4">Discover a dynamic Marketplace</p>
        <p style="color: var(--carbon-4, #333);
            font-size: 20px;
            font-weight: 400;max-width: 577px;
            line-height: 180%;
            letter-spacing: -0.6px;" class="mx-auto titlesub">Umoja provides a unique experience, connecting a variety of buyers and sellers to a digital african market.</p>
               <v-btn-toggle mandatory :model-value="1"  v-model="mods" style="background:#F8F8F8" class="bto mt-8" rounded="xl" >
            <v-btn :style="mods == 2 ? '    background: #F8F8F8!important;': ''" color="mygreen" :width="$vuetify.display.smAndDown? '150':$vuetify.display.xsAndDown? '120': '188'" :value="1"  rounded="xl" >
                 <span
                 :style="mods == 2 ? 'color: var(--magnetic-green-3, #94AAA5);':''"
                 style="
        font-size: 14px;
        font-weight: 600;">
        Buyers
            </span>
             </v-btn>
            <v-btn :style="mods == 1 ? '    background: #F8F8F8!important;': ''" color="mygreen" :width="$vuetify.display.smAndDown? '150':$vuetify.display.xsAndDown? '120': '188'" :value="2" rounded="xl"> 
                <span
                 :style="mods == 1 ? 'color: var(--magnetic-green-3, #94AAA5);':''"
                 style="

font-size: 14px;
font-weight: 600;">
Vendors
            </span>
                </v-btn>
          </v-btn-toggle>
          </div>
<v-container class="mt-12">

<v-row>
    <v-col v-for=" n in (mods == 1? items1: items2)" :key="n" cols="12" sm="6" lg="3">
        <v-card   flat class="height0 cardStyle">
            <v-avatar eager :color="n.color" class="mb-4 mt-6 rounded-lg" size="60"><img width="30" :src="n.src" /></v-avatar>
            <p class="my-4" style="color: var(--carbon-4, #333);
font-size: 20px;
font-weight: 600;
line-height: 140%; /* 28px */
letter-spacing: -0.6px;">{{ n.title }}</p>
            <p 
    style="color: var(--carbon-3, #969696);
font-size: 16px;
font-weight: 400;
line-height: 160%; /* 25.6px */
letter-spacing: -0.16px;">{{ n.content }}</p>
        </v-card>
    </v-col>
</v-row></v-container>
</div>

</v-card>
</template>
<script>

export default {
  data() {
    return {
        mods:1,
        items1: [
            {
                color: '#EDF0EF',
                src: 'https://res.cloudinary.com/payhospi/image/upload/v1689496936/bold-messages-coversation-pen-2_jnbd3t.png',
                title: 'Create an account',
                content: 'Sign up for free to start using Umoja. Create your profile and start your journey to traverse a whole new vibe with unique african vendors from all parts of the world.'
            },
            {
                color: '#FDF1ED',
                src: 'https://res.cloudinary.com/payhospi/image/upload/v1689496936/bold-search-minimalistic-magnifer_k1wit4.png',
                title: 'Explore a commercial/cultural Learning experience',
                content: `In Umoja, you're able to not only buy but discover and learn about the different african cultures and feel a personal connection to each vendor and product.`
            },
            {
                src: 'https://res.cloudinary.com/payhospi/image/upload/v1689496936/bold-shopping-ecommerce-cart-2_fpmwr0.png',
                color: '#FEF6ED',
                title: 'Buy authentic African products',
                content: `We've partnered with original and authentic African Vendors, from whom you are able to buy a wide range of products directly from.`
            },
            {
                src: 'https://res.cloudinary.com/payhospi/image/upload/v1689496936/bold-essentional-ui-delivery_nifd95.png',
                color: '#F7EDEE',
                title: 'Umoja Service & delivery',
                content: "Umoja cares for our customers and ensures a premium service from order to delivery. We strive for the utmost customer satisfaction with a dedication to build trust through diligent customer service."
            },
        ],
        items2: [
            {
                color: '#F7EDEE',
                src: 'https://res.cloudinary.com/payhospi/image/upload/v1692435142/bold-shopping-ecommerce-shop-2_zay7a9.png',
                title: 'African Marketplace',
                content: 'Our marketplace is dedicated to vendors with connections to Africa. Experience a closer cooperation between seller and buyers. Get direct channels to customers from all parts of the world and share your potential with a global audience.'
            },
            {
                color: '#FEF6ED',
                src: 'https://res.cloudinary.com/payhospi/image/upload/v1692435142/bold-security-key-minimalistic-2_avxmje.png',
                title: 'CRM Solution',
                content: `The platform offers more than just a marketplace. We offer a CRM tool that comes with different apps and features which aims to cover all areas of your businesses.`
            },
            {
                src: 'https://res.cloudinary.com/payhospi/image/upload/v1692435142/bold-business-statistic-graph-new_ogoig8.png',
                color: '#FDF1ED',
                title: 'Umoja Business Partner',
                content: `Umoja is your partner. We want to support you and help you manage your business with ease, so you're able to focus on your creativity, realise your potential and grow.`
            },
            {
                src: 'https://res.cloudinary.com/payhospi/image/upload/v1692435142/bold-transport-parts-service-bus_q2khvi.png',
                color: '#EDF0EF',
                title: 'Umoja Logistics',
                content: `With the Umoja logistics (TMS) solution, we aim to support our vendors through our global transport activities. Umoja logistics strives to ensure our Partners are able to fulfil the customers expectation.`
            },
        ],
     
    };
  },

};
</script>