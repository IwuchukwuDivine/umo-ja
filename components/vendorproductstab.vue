<template>
	<div>
		<div style="background-color: " class="d-flex py-6 align-center justify-space-between">
			<p style="font-weight: 600; font-size: 12px; line-height: 15px; text-transform: uppercase; color: #969696">72 products found</p>
			<div>
				<v-btn flat rounded="xl" size="x-small" color="transparent" style="font-size: 15px; color: #333333" icon="mdi mdi-view-grid"></v-btn>
				<v-btn
					flat
					rounded="xl"
					size="x-small"
					color="transparent"
					style="font-size: 15px; color: #333333"
					icon="mdi mdi-filter-variant"
					class="mx-2"
				></v-btn>
				<v-btn style="border: 1px solid #e5e5e5" variant="outlined" class="textClass text-grey-darken-3">
					<v-icon class="mr-2" size="20" icon="mdi mdi-tune-vertical"></v-icon>Filter
				</v-btn>
			</div>
		</div>
		<v-carousel style="overflow: visible" height="170" class="promo promoshort" :show-arrows="false" hide-delimiter-background="" cycle>
			<v-carousel-item v-for="n in 6">
				<v-img
					cover
					height="auto"
					min-height="160px"
					class="bg-black d-flex py-3 align-center rounded-lg"
					src="https://res.cloudinary.com/payhospi/image/upload/c_fit,w_1000/v1684602013/Rectangle_458_zafbwy.png"
				>
					<div>
						<v-row class="d-flex pa-4 px-6 justify-space-between align-center">
							<v-col cols="6" sm="6">
								<h1 style="line-height: 1.2" class="mb-0 text-white font-weight-black">The Waden Cloth</h1>
								<p class="textClass mb-4 text-white">known to be used by the Nawi people</p>
								<div>
									<v-btn flat to="/product_page" color="orange"><span class="smallBtn"> See product </span> </v-btn>
									<v-btn flat variant="text" class="ml-2 text-white howit"
										><span style="text-decoration: underline">
											<span class="smallBtn"> Not now </span>
										</span>
									</v-btn>
								</div>
							</v-col>
							<v-col class="d-flex justify-end" cols="6" sm="6">
								<v-card
									width="auto"
									style="
										background-color: rgb(57 57 57 / 60%) !important;

										backdrop-filter: blur(3.1475px);
										border-radius: 12.118px;
										width: auto;
									"
									class="bg-black px-5 py-3"
								>
									<p class="text-white text-overline text-center">auction ends in</p>
									<vue-countdown
										style="font-weight: 700; font-size: 40px"
										class="text-yellow-darken-1"
										:time="timediff"
										v-slot="{ days, hours, minutes, seconds }"
									>
										<div class="d-flex align-center justify-space-between">
											<div v-if="days" class="text-center bg-grey-lighten-3 rounded-lg px-3 py-2">
												<p style="font-weight: 500; font-size: 14px; line-height: 17px; color: #333333">{{ days }}</p>
												<p
													style="
														font-weight: 500;
														font-size: 7px;
														line-height: 9px;
														letter-spacing: 0.03em;

														color: #333333;
													"
												>
													days
												</p>
											</div>
											<p v-if="days" class="text-grey-lighten-3 mb-1 text-h3 mx-1" style="line-height: 1">:</p>
											<div v-if="hours" class="text-center bg-grey-lighten-3 rounded-lg px-3 py-2">
												<p style="font-weight: 500; font-size: 14px; line-height: 17px; color: #333333">{{ hours }}</p>
												<p
													style="
														font-weight: 500;
														font-size: 7px;
														line-height: 9px;
														letter-spacing: 0.03em;

														color: #333333;
													"
												>
													hours
												</p>
											</div>
											<p v-if="hours" class="text-grey-lighten-3 mb-1 text-h3 mx-1" style="line-height: 1">:</p>
											<div class="text-center bg-grey-lighten-3 rounded-lg px-3 py-2">
												<p style="font-weight: 500; font-size: 14px; line-height: 17px; color: #333333">{{ minutes }}</p>
												<p
													style="
														font-weight: 500;
														font-size: 7px;
														line-height: 9px;
														letter-spacing: 0.03em;

														color: #333333;
													"
												>
													mins
												</p>
											</div>
											<p v-if="hours" class="text-grey-lighten-3 mb-1 text-h3 mx-1" style="line-height: 1">:</p>

											<div class="text-center bg-grey-lighten-3 rounded-lg px-3 py-2">
												<p style="font-weight: 500; font-size: 14px; line-height: 17px; color: #333333">{{ seconds }}</p>
												<p
													style="
														font-weight: 500;
														font-size: 7px;
														line-height: 9px;
														letter-spacing: 0.03em;

														color: #333333;
													"
												>
													seconds
												</p>
											</div>
										</div>
									</vue-countdown>
								</v-card>
							</v-col>
						</v-row>
					</div>
				</v-img>
			</v-carousel-item>
		</v-carousel>
		<v-row style="background-color: #fff" class="mt-8">
			<v-col v-for="(n, i) in items" :key="i" lg="4" xs="6" sm="4" md="6">
				<product-component :index="i" :item="n" @add-to-cart="AddToCart(n)"/>
			</v-col>
		</v-row>
	</div>
</template>
<style></style>
<script>
import VueCountdown from "@chenfengyuan/vue-countdown";
import { useVendorStore } from "~/stores/vendorStore";
import { useCartStore } from "~/stores/cartStore";

export default {
	components: {
		VueCountdown,
	},
	methods: {
		AddToCart(item) {
            const vendorStore = useVendorStore()
            const cartStore = useCartStore()
            if (vendorStore. getVendorIsLoggedIn) {
                cartStore.addItem(item)
            } else {
                this.$router.push('/vendor/login')
            }
        },
		filt(text) {
			var newText = text.length > 40 ? text.slice(0, 40) + "..." : text;
			return newText;
		},
	},
	computed: {
		timediff() {
			var startDate = new Date();
			// Do your operations
			var endDate = new Date("2023-12-21");
			var seconds = endDate.getTime() - startDate.getTime();
			return seconds;
		},
	},
	data() {
		return {
			placescards: false,
			mods: 1,
			window: "products",
			rating: 4,
			items: [
				{	
					id: 55,
					name: "Green and brown kente scarf material, Made in Lagos Nigeria.",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1684602010/Rectangle_459_dfuzam.png",
					price: "115.32",
					likes: "1.2k",
				},
				{	
					id: 56,
					name: "Multi colored ankara scarf for women designed by Lumi Opeyemi.",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1684602010/Rectangle_459_1_wnr1ld.png",
					price: "57.00",
					likes: "456",
					oos: true,
				},

				{
					id: 57,
					name: "Green and brown kente scarf material, Made in Lagos Nigeria..",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1684602019/Rectangle_459_2_m9thyj.png",
					price: "57.00",
					likes: "456",
				},
				{
					id: 58,
					name: "Orange colored ankara scarf for women designed by Lumi Opeyemi.",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1684602018/Rectangle_459_4_w3hzqw.png",
					price: "79.00",
					likes: "66",
					oos: true,
				},
				{	
					id: 59,
					name: "Bento Multi colored ankara scarf for women designed by Lumi Opeyemi.",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1684602018/Rectangle_459_5_y4qlrw.png",
					price: "179.00",
					likes: "966",
				},
				{
					id: 60,
					name: "Multi colored ankara scarf for women designed by Lumi Opeyemi.",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1684602016/Rectangle_459_3_eoyq3v.png",
					price: "57.00",
					likes: "456",
				},
				{
					id: 61,
					name: "Green and brown kente scarf material, Made in Lagos Nigeria..",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1684602019/Rectangle_459_2_m9thyj.png",
					price: "57.00",
					likes: "456",
				},
				{
					id: 62,
					name: "Orange colored ankara scarf for women designed by Lumi Opeyemi.",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1684602018/Rectangle_459_4_w3hzqw.png",
					price: "79.00",
					likes: "66",
					oos: true,
				},
				{
					id: 63,
					name: "Bento Multi colored ankara scarf for women designed by Lumi Opeyemi.",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1684602018/Rectangle_459_5_y4qlrw.png",
					price: "179.00",
					likes: "966",
				},
				{
					id: 64,
					name: "Multi colored ankara scarf for women designed by Lumi Opeyemi.",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1684602016/Rectangle_459_3_eoyq3v.png",
					price: "57.00",
					likes: "456",
				},
			],
		};
	},
};
</script>
