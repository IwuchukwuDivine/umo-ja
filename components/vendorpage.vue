<template>
	<div id="homepage" style="min-height: 100vh; width: 100%">
		<v-img
			style="height: 185px; position: relative"
			width="auto"
			cover
			class="d-flex bg-grey justify-end align-end"
			src="https://res.cloudinary.com/payhospi/image/upload/v1685854735/Rectangle_448_2_lh8kz3.png"
		>
			<v-container class="w-100" style="position: relative; bottom: 18px; display: flex; justify-content: end; max-width: 1300px">
				<v-btn to="/discovery_page" flat="" rounded="xl" color="rgba(0, 0, 0, 0.70)">
					<v-icon class="mr-2" color="white" icon="mdi mdi-information-outline"></v-icon>
					<span style="color: #fff; font-size: 12px; font-style: normal; font-weight: 400"> Tap to read more about Ghana 🇬🇭 </span>
				</v-btn>
			</v-container>
		</v-img>
		<v-card class="overflow-visible pr-2" flat tile color="#Fff" min-height="100vh" width="100%">
			<v-container style="max-width: 1400px">
				<v-row>
					<v-col md="4" cols="12" xs="12">
						<v-card
							variant="outlined"
							style="border: 1px solid #cecece; margin-top: -45px; border-radius: 16px; z-index: 99"
							flat
							class="pb-12 bg-white"
							width="100%"
						>
							<v-sheet max-width="455" class="mx-auto" width="100%" style="padding-top: 20px">
								<div class="text-center pa-4">
									<v-avatar class="mx-auto" style="border: 2.93049px solid #fce7ce" size="100">
										<v-img
											class="bg-grey-lighten-3 rounded-xl"
											src="https://res.cloudinary.com/dkbt6at26/image/upload/v1684497818/Frame_481586_zfgoph.png"
										></v-img>
									</v-avatar>
									<h3 class="py-4" style="font-size: 24px; font-weight: 800; line-height: 30px">
										Thatdesignpro <v-icon color="#1273EB" size="22" icon="mdi mdi-check-decagram"></v-icon>
									</h3>
									<v-btn color="orange" width="80%" flat> Follow</v-btn>
								</div>
								<div class="pa-2">
									<div class="pa-4 align-center justify-space-between d-flex">
										<div class="align-center d-flex">
											<v-avatar rounded="0" size="23"
												><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1684592715/umoja/profile-2user_2_jcekww.png"></v-img
											></v-avatar>
											<p class="textClass text-grey-darken-1 px-2">Followers</p>
										</div>
										<p class="priceClass">2,800</p>
									</div>
									<div class="px-4 align-center justify-space-between d-flex">
										<div class="align-center d-flex">
											<v-avatar rounded="0" size="23"
												><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1686310494/game-icons_africa_b7x2hf.png"></v-img
											></v-avatar>
											<p class="textClass text-grey-darken-1 px-2">Country</p>
										</div>
										<h1>🇬🇭</h1>
									</div>
								</div>
								<v-divider></v-divider>
								<div class="pa-4 px-6 align-center d-flex">
									<v-avatar rounded="0" size="19"
										><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1684591613/umoja/location_q0ouqw.png"></v-img
									></v-avatar>
									<p class="textClass px-4">Shop 24b Drip King Plaza, Victoria Island Lagos state, Nigeria</p>
								</div>
								<v-divider></v-divider>
								<v-sheet class="px-6 pt-8">
									<h3 style="font-weight: 700; font-size: 24px; line-height: 30px; color: #333333">BIO <span class="text-grey">(Fabric)</span></h3>

									<p class="textClass text-left mt-4 mb-8">
										Lorem ipsum dolor sit amet consectetur. Sit et vulputate et euismod mi enim. Tellus sagittis augue proin ipsum posuere.
										Suspendisse consectetur id mollis curabitur amet.
										<br />
										<br />
										Pellentesque enim orci aenean interdum morbi suspendisse. Dictumst aliquam donec in risus semper arcu faucibus.
									</p>

									<p style="font-weight: 700; font-size: 12px; line-height: 20px; color: #969696">ON THE WEB</p>
									<div class="pt-4 justify-start align-center d-flex">
										<v-btn
											size="small"
											style="border: 0.357149px solid #2c6e63"
											class="green-hover rounded-xl mr-4"
											variant="outlined"
											:key="n.icon"
											v-for="n in buttons"
											flat
											icon
										>
											<v-avatar rounded="0" size="23"><v-icon color="mygreen" :icon="'mdi mdi-' + n.icon"></v-icon></v-avatar>
										</v-btn>
									</div>
									<div class="pt-12 mt-12 justify-start align-center d-flex">
										<!-- <v-btn style="border: 0.357149px solid #2C6E63;" flat size="large" variant="text" block class="mb-8 green-hover" color="mygreen" ><v-icon class="mr-2" icon="mdi mdi-pencil"></v-icon> Edit Profile</v-btn> -->
									</div>
									<p class="text-center textClass text-grey-darken-1">MEMBER SINCE: MARCH 24, 2020</p>
								</v-sheet>
							</v-sheet>
						</v-card>
					</v-col>
					<v-col md="8" xs="12">
						<v-sheet style="overflow: hidden" color="transparent" class="mt-2">
							<v-tabs v-model="tab" color="mygreen" grow>
								<v-tab v-for="item in ['products', 'posts', 'articles', 'promo%']" :key="item" :value="item" class="d-flex align-center">
									{{ item }}
									<v-badge v-if="item !== 'promo%'" class="ml-4 mb-1 px-1" rounded="lg" color="grey-lighten-2" content="2" size="12"></v-badge>
								</v-tab>
							</v-tabs>
							<v-divider></v-divider>
							<v-window v-model="tab">
								<v-window-item value="products">
									<Vendorproductstab />
								</v-window-item>
								<v-window-item value="posts">
									<Vendorposts />
								</v-window-item>
								<v-window-item value="articles">
									<Vendorarticles />
								</v-window-item>
								<v-window-item value="promo%">
									<Vendorpromo />
								</v-window-item>
							</v-window>
						</v-sheet>
					</v-col>
				</v-row>
			</v-container>
		</v-card>
	</div>
</template>
<script>
export default {
	data() {
		return {
			placescards: false,
			mods: 1,
			window: "products",
			rating: 4,
			tab: null,
			items: [
				{
					name: "Green and brown kente scarf material, Made in Lagos Nigeria.",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1684602010/Rectangle_459_dfuzam.png",
					price: "115.32",
					likes: "1.2k",
				},
				{
					name: "Multi colored ankara scarf for women designed by Lumi Opeyemi.",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1684602010/Rectangle_459_1_wnr1ld.png",
					price: "57.00",
					likes: "456",
					oos: true,
				},

				{
					name: "Green and brown kente scarf material, Made in Lagos Nigeria..",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1684602019/Rectangle_459_2_m9thyj.png",
					price: "57.00",
					likes: "456",
				},
				{
					name: "Orange colored ankara scarf for women designed by Lumi Opeyemi.",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1684602018/Rectangle_459_4_w3hzqw.png",
					price: "79.00",
					likes: "66",
					oos: true,
				},
				{
					name: "Bento Multi colored ankara scarf for women designed by Lumi Opeyemi.",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1684602018/Rectangle_459_5_y4qlrw.png",
					price: "179.00",
					likes: "966",
				},
				{
					name: "Multi colored ankara scarf for women designed by Lumi Opeyemi.",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1684602016/Rectangle_459_3_eoyq3v.png",
					price: "57.00",
					likes: "456",
				},
				{
					name: "Green and brown kente scarf material, Made in Lagos Nigeria..",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1684602019/Rectangle_459_2_m9thyj.png",
					price: "57.00",
					likes: "456",
				},
				{
					name: "Orange colored ankara scarf for women designed by Lumi Opeyemi.",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1684602018/Rectangle_459_4_w3hzqw.png",
					price: "79.00",
					likes: "66",
					oos: true,
				},
				{
					name: "Bento Multi colored ankara scarf for women designed by Lumi Opeyemi.",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1684602018/Rectangle_459_5_y4qlrw.png",
					price: "179.00",
					likes: "966",
				},
				{
					name: "Multi colored ankara scarf for women designed by Lumi Opeyemi.",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1684602016/Rectangle_459_3_eoyq3v.png",
					price: "57.00",
					likes: "456",
				},
			],
		};
	},
	computed: {
		buttons() {
			return [
				{
					icon: "youtube",
				},
				{
					icon: "twitter",
				},
				{
					icon: "facebook",
				},
				{
					icon: "linkedin",
				},
			];
		},
		cols() {
			const { lg, sm, md } = this.$vuetify.display;
			return lg
				? [4, 6, 6, 6, 4, 8, 4, 3, 10, 2]
				: md
				? [4, 6, 6, 12, 6, 8, 4, 3, 10, 2]
				: sm
				? [6, 12, 12, 12, 12, 12, 12, 12, 12]
				: [6, 12, 12, 12, 12, 12, 12, 12, 12];
		},
	},
	methods: {
		filt(text) {
			var newText = text.length > 40 ? text.slice(0, 40) + "..." : text;
			return newText;
		},
	},
};
</script>
<style>
.v-carousel.promo .v-btn.v-btn--icon {
	border-radius: 50% !important;
}
.v-carousel.promo .v-btn--icon .v-icon {
	font-size: 9px;
	color: #cecece;
}
.v-carousel.promo .v-btn--icon.v-btn--active .v-icon {
	color: orange;
}

.v-carousel--hide-delimiter-background .v-carousel__controls {
	bottom: -46px;
}
</style>
