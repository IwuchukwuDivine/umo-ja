<template>
  <div class="authBg">
    <authHeader/>
    <div class="d-flex justify-center py-12 px-2">
      <v-card flat class="pa-12 rounded-lg" width="100%" max-width="562px">
        <h1 style="
          font-style: normal;
          font-weight: 900;
          font-size: 48px;
          line-height: 60px;
          letter-spacing: -0.03em;
          color: #333333;">Sign Up</h1>
        <p class="font-weight-medium mb-6 mt-1">Already have an account? <span style="color:#0076FF; cursor: pointer;" @click="$router.push('/user/login')">Sign In</span></p>
        <v-row>
          <v-col cols="6">
            <v-btn size="x-large" flat variant="outlined" block>
              <v-avatar rounded="0" size="24" class="mr-2">
                <v-img src="https://res.cloudinary.com/payhospi/image/upload/v1686302222/flat-color-icons_google_vhnhqm.png"></v-img>
              </v-avatar>Sign Up with Google
            </v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn size="x-large" flat color="black" block>
              <v-avatar rounded="0" size="24" class="mr-2">
                <v-img src="https://res.cloudinary.com/payhospi/image/upload/v1686302222/bi_apple_qka2so.png"></v-img>
              </v-avatar>Sign Up with Apple
            </v-btn>
          </v-col>
        </v-row>
        <div class="d-flex py-8 px-5 justify-space-between align-center">
          <v-divider></v-divider>
          <p class="px-2 w-100 text-center">or sign up with</p>
          <v-divider></v-divider>
        </div>
        <v-form ref="form" @submit.prevent="handleSubmit">
          <v-row>
            <v-col>
              <p  class="inputLabel" >First Name</p>
              <v-text-field n v-model="first_name" :rules="firstNameRules" placeholder="First name" density="comfortable"></v-text-field>
            </v-col>
            <v-col>
              <p class="inputLabel">Last Name</p>
              <v-text-field 
              @click:append="showPassword = !showPassword"
               :type="showPassword ? 'text' : 'password'" v-model="last_name" :rules="lastNameRules" placeholder="Last name" density="comfortable"></v-text-field>
            </v-col>
          </v-row>
          <p class="inputLabel">Email Address</p>
          <v-text-field v-model="email" :rules="emailRules" placeholder="Enter email address" density="comfortable"></v-text-field>
          <p class="inputLabel">Password</p>
          <v-text-field append-inner-icon="mdi mdi-eye-outline" v-model="password" :rules="passwordRules" placeholder="Enter Password" density="comfortable"></v-text-field>

          <p class="inputLabel">Confirm Password</p>
          <v-text-field append-inner-icon="mdi mdi-eye-outline" v-model="confirmPassword" :rules="confirmpasswordRules" placeholder="Confirm Password" density="comfortable"></v-text-field>
          <v-checkbox v-model="agree" :rules="agreeRule" @click="agree = !agree" color="mygreen">
            <template v-slot:label>
              <div class="font-weight-medium">
                I agree to Umoja 
                <a href="#" style="color:#0076FF;text-decoration:none" @click="openPrivacyPolicy">Privacy Policy</a> and 
                <a href="#" style="color:#0076FF;text-decoration:none" @click="openTermsOfUse">Terms of Use</a>
              </div>
            </template>
          </v-checkbox>
          <p v-if="userStore.signUpError" style="color: red;">{{ userStore.signUpError }}</p>
          <v-btn type="submit" block color="mygreen" flat size="x-large" class="rounded-lg mt-6"> 
            <span style="text-transform: none;">Create an account</span>
          </v-btn>
        </v-form>
      </v-card>
    </div>
  </div>
</template>
 <script setup>
 import { ref, reactive } from 'vue';
 import { useUserStore } from '~/stores/userStore';
 import { useRouter } from 'vue-router';
 import {emailRules, passwordRules, firstNameRules, lastNameRules} from '~/utils/formrules'
 import {formatDate} from '~/utils/date';

 const userStore = useUserStore()
 const router = useRouter()
 const showPassword = ref(false)


 const email = ref('');
 const last_name = ref('');
 const first_name = ref('');
 const password = ref('');
 const confirmPassword = ref('');
 const agree = ref(false)


 const agreeRule = [
 (v) => !!v || 'You must agree to the terms and conditions',
]

const confirmpasswordRules = [
    v => !!v || 'Confirm Password is required',
    v => v === password.value || 'Passwords do not match'
  ]


 async function handleSubmit() {
  if (first_name.value && last_name.value && email.value && password.value && agree.value && confirmPassword.value) {
    try {
      const isSignedUp = await userStore.signup({ first_name: first_name.value, last_name: last_name.value, email: email.value, password: password.value, dateRegistered: formatDate()});
      if (isSignedUp) {
        router.push('/home2');
        userStore.signUpError = "";
      }
    } catch (error) {
      // Handle any unexpected errors
      console.error('An error occurred during signup:', error);
      userStore.signUpError = error.message;
    }
  } 

}
 
 </script>