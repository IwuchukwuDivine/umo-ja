<template>
	<div style="min-height: 120vh; width: 100%">
		<v-img
			eager
			v-once
			height="calc(507px)"
			style="position: relative; min-height: 500px"
			width="100%"
			cover
			class="d-flex bg-grey align-center"
			src="https://res.cloudinary.com/payhospi/image/upload/c_fit,w_1300/v1690557693/rectangle-1943_ki3qvz.png"
		>
			<v-container style="max-width: 1400px; width: 100%" class="">
				<div class="w-100 d-flex justify-end">
					<v-card flat style="border-radius: 15px; padding: 40px !important" max-width="420">
						<h1 style="color: var(--carbon-4, #333); font-size: 48px; font-weight: 600; line-height: 120%" class="mb-1">Get 5% Cash Back on €20</h1>
						<p style="color: var(--carbon-4, #333); font-size: 16px; font-weight: 400; line-height: 140%">
							Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.
						</p>
						<v-btn to="/product_page" class="mt-6 green-hover" color="#333" size="large" style="" variant="outlined" rounded="xl">
							Learn More <v-icon class="ml-1" icon="mdi mdi-arrow-top-right"></v-icon>
						</v-btn>
					</v-card>
				</div>
				<div>
					<p style="color: #fff; font-size: 16px; font-weight: 600; letter-spacing: -0.16px" class="mb-2">Select African Country</p>
					<v-menu location="bottom" offset="10px" width="150px" max-height="400">
						<template v-slot:activator="{ props }">
							<div
								v-ripple
								v-bind="props"
								style="cursor: pointer; width: fit-content; height: 44px; border: 1px solid #cecece"
								size="large"
								color="white"
								variant="elevated"
								flat
								class="bg-white rounded-xl elevation-0 chipper px-2"
							>
								<div class="d-flex justify-space-between w-100 h-100 align-center">
									<div class="d-flex align-center">
										<v-avatar size="30.88" class="mr-1"
											><v-img eager src="https://res.cloudinary.com/payhospi/image/upload/v1689486623/rw-rwanda-medium_oui3ln.png"></v-img
										></v-avatar>
										<span class="mr-2" style="color: var(--carbon-4, #333); font-size: 14px; letter-spacing: -0.14px; font-weight: 500">
											{{ country }}
										</span>
									</div>
									<v-icon class="" icon="mdi mdi-chevron-down"></v-icon>
								</div>
							</div>
						</template>
						<v-list>
							<v-list-item v-for="(item, index) in africanCountries" :key="index" :value="index" @click="selectCountry(item)">
								<v-list-item-title>{{ item }}</v-list-item-title>
							</v-list-item>
						</v-list>
					</v-menu>
				</div>
			</v-container>
		</v-img>
		<v-card class="overflow-visible" flat tile color="" min-height="100vh" width="100%">
			<v-container style="padding-bottom: 100px; max-width: 1400px">
				<v-row>
					<v-col class="pt-0" cols="12" xs="12">
						<v-sheet class="pt-0">
							<div class="d-flex justify-space-between py-8">
								<p
									style="
										font-style: normal;
										font-weight: 600;
										font-size: 32px;
										line-height: 1;
										/* identical to box height */

										text-transform: ;

										/* Carbon/4 */

										color: #333333;
									"
								>
									Products
								</p>

								<v-btn size="small" class="font-weight-medium textClass px-4" rounded flat variant="text" color="#1273EB"
									>Explore the product market place <v-icon class="ml-2" icon="mdi mdi-arrow-right"></v-icon
								></v-btn>
							</div>
							<v-divider></v-divider>
							<div style="" class="d-flex py-6 align-center justify-space-between">
								<v-chip-group
									variant="outlined"
									mandatory
									style="font-size: 14px; line-height: 17px; letter-spacing: 0.03em; text-transform: uppercase; color: #333333"
									class="text-uppercase"
									v-model="chip"
									selected-class=" chipselected"
								>
									<v-chip
										:class="chip == tag.name ? 'chipselected' : ''"
										style="font-size: 14px"
										size="large"
										class="pa-4"
										v-for="tag in tags"
										:key="tag.name"
									>
										{{ tag.name }} <v-icon size="21" v-if="tag.image" class="ml-2" :icon="'mdi mdi-' + tag.image"></v-icon>
									</v-chip>
								</v-chip-group>
								<div>
									<v-btn variant="tonal" color="#333333" class="textClass" flat>
										<v-icon size="20" icon="mdi mdi-filter-outline"></v-icon>Filter</v-btn
									>
								</div>
							</div>

							<v-row style="" class="">
								<v-col cols="6" v-for="(n, i) in items" sm="4" :key="i" lg="24" md="3">
									<product-component :item="n" :index="i" />
								</v-col>
							</v-row>
						</v-sheet>
					</v-col>
				</v-row>
			</v-container>
		</v-card>
		<div style="padding: 100px 0">
			<v-row>
				<v-col class="px-0" cols="12" md="6" lg="6">
					<v-img
						eager
						cover
						width="100%"
						min-height="429"
						height="auto"
						src="https://res.cloudinary.com/payhospi/image/upload/v1690560694/rectangle-69_u12j2b.png"
					></v-img>
				</v-col>
				<v-col class="px-0" cols="12" md="6" lg="6">
					<v-card rounded="0" width="100%" height="100%" min-height="429" color="#F8B735" flat class="d-flex align-center">
						<v-container style="max-width: 1400px" class="px-12">
							<p style="color: var(--magnetic-green-2, #333); font-size: 12px; font-weight: 500; letter-spacing: 3.66px; text-transform: uppercase">
								limited offer
							</p>
							<p style="color: #333; font-size: 48px; font-weight: 500; letter-spacing: -1.44px">Art in its essense</p>
							<p style="color: #333; font-size: 20px; font-weight: 500; letter-spacing: -0.2px" class="mb-8">GET 20% OFF for your first order</p>
							<v-btn color="#333" size="large" variant="outlined" rounded="xl">
								Shop now <v-icon class="ml-1" icon="mdi mdi-arrow-top-right"></v-icon>
							</v-btn>
						</v-container>
					</v-card>
				</v-col>
			</v-row>
		</div>
		<v-container class="px-3" style="padding-top: 0px; max-width: 1400px">
			<PostsRow :maxwidth="'1400px'" :showVendor="true" :title="postRow.title" :items="postRow.items" />
		</v-container>
		<div style="padding: 0 0 100px 0">
			<v-row>
				<v-col class="px-0" cols="12" md="6" lg="6">
					<v-card
						rounded="0"
						width="100%"
						style="border: none !important"
						height="100%"
						min-height="429"
						color="mygreen"
						flat
						class="cardStyle py-0 d-flex align-center"
					>
						<v-container style="max-width: 1400px" class="px-12">
							<p style="color: var(--magnetic-green-2, #fff); font-size: 12px; font-weight: 500; letter-spacing: 3.66px; text-transform: uppercase">
								limited offer
							</p>
							<p style="color: #fff; font-size: 48px; font-weight: 500; letter-spacing: -1.44px">Uncensored Beauty</p>
							<p style="color: #fff; font-size: 20px; font-weight: 500; letter-spacing: -0.2px" class="mb-8">GET 20% OFF for your first order</p>
							<v-btn color="#fff" size="large" variant="outlined" rounded="xl">
								Shop now <v-icon class="ml-1" icon="mdi mdi-arrow-top-right"></v-icon>
							</v-btn>
						</v-container>
					</v-card>
				</v-col>
				<v-col class="px-0" cols="12" md="6" lg="6">
					<v-img
						min-height="429"
						eager
						cover
						width="100%"
						height="auto"
						src="https://res.cloudinary.com/payhospi/image/upload/v1690560991/rectangle-69_vgfhlc.png"
					></v-img>
				</v-col>
			</v-row>
		</div>
		<v-container style="max-width: 1400px">
			<v-row>
				<v-col class="pt-0" cols="12" xs="12">
					<v-sheet class="pt-0">
						<div class="d-flex justify-space-between pt-8">
							<p
								style="
									font-style: normal;
									font-weight: 600;
									font-size: 32px;
									line-height: 1;
									/* identical to box height */

									text-transform: ;

									/* Carbon/4 */

									color: #333333;
								"
							>
								Top Articles
							</p>

							<v-btn size="small" class="font-weight-medium textClass px-4" rounded flat variant="text" color="#1273EB"
								>Explore the product market place <v-icon class="ml-2" icon="mdi mdi-arrow-right"></v-icon
							></v-btn>
						</div>
						<v-divider class="mb-12 mt-6"></v-divider>
					</v-sheet>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="6" v-for="(n, i) in articles" :key="i" lg="4" md="4">
					<div class="cardStyle">
						<div class="mb-4 d-flex">
							<v-avatar size="50">
								<v-img :src="n.smallImage"></v-img>
							</v-avatar>
							<div class="ml-3">
								<div class="d-flex align-center">
									<p style="color: #1e1e1e; font-size: 16px; font-weight: 600; line-height: 140%">Thatdesignpro</p>
									<v-icon class="mx-1" size="5" color="grey-lighten-2" icon="mdi mdi-circle"></v-icon>
									<p style="color: #969696; font-size: 14px; font-weight: 400; line-height: 140%">27th Nov, 2023</p>
								</div>
								<div class="d-flex align-center mt-1">
									<p style="color: var(--carbon-3, #969696); font-size: 14px; font-weight: 500">Fashion and Beauty</p>
								</div>
							</div>
						</div>
						<v-card flat color="grey-lighten-4" :image="n.bigImage" width="100%" height="188px" class="d-flex align-center justify-center rounded-lg">
						</v-card>
						<p class="mt-4 mb-2" style="color: var(--carbon-4, #333); font-size: 20px; font-weight: 700; line-height: 140%">
							Ankara Beauty Essentials: Elevate Your Style with Confidence
						</p>
						<p style="color: var(--carbon-3, #969696); font-size: 14px; font-weight: 400; line-height: 140%">
							Lorem ipsum dolor sit amet consectetur. Id et ornare tristique tempus egestas neque tincidunt lobortis. Integer arcu sit massa orci
							phasellus ipsum tincidunt et amet.
						</p>
						<v-btn size="small" color="#1273EB" class="px-0" variant="text">
							<span style="color: var(--deep-sky-blue-4, #1273eb); font-size: 14px; font-weight: 600"> Read more </span>
							<v-icon size="small" class="ml-4" icon="mdi mdi-arrow-right"></v-icon
						></v-btn>
					</div>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>
<style></style>
<script>
import { useProductStore } from "~/stores/productStore.js";

export default {
	data() {
		return {
			articles: [
				{
					smallImage: "https://res.cloudinary.com/payhospi/image/upload/v1695046634/rectangle-22429mhgdy878_iyunoo.png",
					bigImage: "https://res.cloudinary.com/payhospi/image/upload/v1695046484/rectangle-29jhv646_o8o1ps.png",
				},
				{
					smallImage: "https://res.cloudinary.com/payhospi/image/upload/v1695046633/rectangle-22429jhgcuytd767_v27dnn.png",
					bigImage: "https://res.cloudinary.com/payhospi/image/upload/v1688745018/rectangle-29_ofcoa9.png",
				},
				{
					smallImage: "https://res.cloudinary.com/payhospi/image/upload/v1695046633/rectangle-22429jgud77_eruoj1.png",
					bigImage: "https://res.cloudinary.com/payhospi/image/upload/v1695046484/rectangle-29mhgch767_f0kg3t.png",
				},
				{
					smallImage: "https://res.cloudinary.com/payhospi/image/upload/v1695046626/rectangle-22429mhgdjyud767476_hetdp0.png",
					bigImage: "https://res.cloudinary.com/payhospi/image/upload/v1695046484/rectangle-29jhfcj7575_d7vim4.png",
				},
				{
					smallImage: "https://res.cloudinary.com/payhospi/image/upload/v1695046641/rectangle-22429ngfxydyd6536_gdmnar.png",
					bigImage: "https://res.cloudinary.com/payhospi/image/upload/v1695046484/rectangle-29nsys66_hgyeof.png",
				},
				{
					smallImage: "https://res.cloudinary.com/payhospi/image/upload/v1695046640/rectangle-22429jgdcuc87_nngvuq.png",
					bigImage: "https://res.cloudinary.com/payhospi/image/upload/v1695046484/rectangle-2ijhf8678_n7ksv8.png",
				},
			],
			placescards: false,
			mods: 1,
			tab: null,
			country: "All of Africa",
			chip: "POPULAR products",
			postRow: {
				title: "Top Posts",
				items: [
					{
						vendorName: "Nana Akufo-Addo",
						vendorImg: "https://res.cloudinary.com/payhospi/image/upload/v1691149309/rectangle-22437_hlbqwt.png",
						vendorCategory: "Sculptor",
						name: "Koko Rachel Deco Set",

						image: "https://res.cloudinary.com/payhospi/image/upload/v1694074683/rectangle-53artpost_i1dui9.png",
						price: "115.32",

						location: "Accra, Ghana",
						likes: "1.2k",
						imgs: "2",
					},
					{
						vendorName: "Bonsu Thompson",
						vendorImg: "https://res.cloudinary.com/payhospi/image/upload/v1694180194/frame-221hyjfutd_wjuuzh.png",
						vendorCategory: "Artist",

						name: "The Nawi Scarfs",
						image: "https://res.cloudinary.com/payhospi/image/upload/v1694074680/rectangle-53artpt_qhdriv.png",
						price: "79.00",
						location: "Accra, Ghana",
						likes: "66",
						video: true,
						imgs: "4",
						oos: true,
					},
					{
						vendorName: "Dede Ayew",
						vendorImg: "https://res.cloudinary.com/payhospi/image/upload/v1691149309/rectangle-22437_hlbqwt.png",
						vendorCategory: "Painter",

						name: "Koko Rachel Deco Set",
						image: "https://res.cloudinary.com/payhospi/image/upload/v1694074679/rectangle-53artre4_acefqy.png",
						price: "115.32",
						location: "Accra, Ghana",
						imgs: "5",
						likes: "1.2k",
					},
					{
						vendorName: "Bonsu Thompson",
						vendorImg: "https://res.cloudinary.com/payhospi/image/upload/v1694180194/frame-221hyjfutd_wjuuzh.png",
						vendorCategory: "Artist",
						name: "The Nawi Scarfs",
						image: "https://res.cloudinary.com/payhospi/image/upload/v1694179608/rectangle-53mkiut_ae1wpt.png",
						price: "79.00",
						video: true,
						imgs: "4",
						location: "Accra, Ghana",
						likes: "66",
						oos: true,
					},
				],
			},
			tags: [
				{
					name: "POPULAR products",
					image: "",
				},
				{
					name: "top selling products",
					image: "seal-variant",
				},
				{
					name: "products on promo",
					image: "sale-outline",
				},
				{
					name: "top auction",
					image: "trending-up",
				},
			],
			africanCountries: [
				"Algeria",
				"Angola",
				"Benin",
				"Botswana",
				"Burkina Faso",
				"Burundi",
				"Cabo Verde",
				"Cameroon",
				"Central African Republic",
				"Chad",
				"Comoros",
				"Democratic Republic of the Congo",
				"Republic of the Congo",
				"Cote d'Ivoire",
				"Djibouti",
				"Egypt",
				"Equatorial Guinea",
				"Eritrea",
				"Eswatini",
				"Ethiopia",
				"Gabon",
				"Gambia",
				"Ghana",
				"Guinea",
				"Guinea-Bissau",
				"Kenya",
				"Lesotho",
				"Liberia",
				"Libya",
				"Madagascar",
				"Malawi",
				"Mali",
				"Mauritania",
				"Mauritius",
				"Morocco",
				"Mozambique",
				"Namibia",
				"Niger",
				"Nigeria",
				"Rwanda",
				"Sao Tome and Principe",
				"Senegal",
				"Seychelles",
				"Sierra Leone",
				"Somalia",
				"South Africa",
				"South Sudan",
				"Sudan",
				"Tanzania",
				"Togo",
				"Tunisia",
				"Uganda",
				"Zambia",
				"Zimbabwe",
			],
		};
	},
	computed: {
		productStore() {
			return useProductStore();
		},
		items() {
			return this.productStore.getProductsArray("main");
		},
		buttons() {
			return [
				{
					icon: "https://res.cloudinary.com/payhospi/image/upload/v1684591614/umoja/Vector_mgadhr.png",
				},
				{
					icon: "https://res.cloudinary.com/payhospi/image/upload/v1684592133/umoja/facebook_tup8rq.png",
				},
				{
					icon: "https://res.cloudinary.com/payhospi/image/upload/v1684592133/umoja/instagram_wogd5x.png",
				},
				{
					icon: "https://res.cloudinary.com/payhospi/image/upload/v1684592133/umoja/globe-americas_annyvh.png",
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
		selectCountry(item) {
			this.country = item;
		},
		filt(text) {
			var newText = text.length > 50 ? text.slice(0, 50) + "..." : text;
			return newText;
		},
	},
};
</script>
