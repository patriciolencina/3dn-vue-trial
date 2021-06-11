<template>
  <div>
    <v-container fluid>
      <v-container>
        <v-row>
          <v-col cols="12" lg="2"></v-col>
          <v-col cols="12" lg="10">
            <h2>
              Dear {{ customer.Prefix }} {{ customer.LastName }}
            </h2>
            <br>
            <p><b>Thank you so much for sharing your insights and time with us.</b></p>
            <p>
              Supporters like you are the lifeblood of our Party and help us maintain our position as the most
              successful political force in post war Australia. But these are uncertain times and we want to ensure we
              understand your priorities, needs and help you to have the connection with our Party in the way that works
              best for you.
            </p>
            <p>
              Your continued support and involvement is invaluable and greatly appreciated so we thanks you in advance
              for sharing your views.
            </p>
            <p>
              Yours sincerely
            </p>
            <div class="logo-wrapper my-5">
              <img class="logo-img" alt="Vue logo" src="@/assets/Liberal-Logo-White-Type.svg">
            </div>
            <p><b>Chris Stone</b></p>
            <p><b>State Director</b></p>
            <p>
              P.S. We know your time is important so we would like to thank you offering to one survey recipient –
              selected randomly – a copy of Lazarus Rising – A Personal and Political Autobiography of John
              Howard – signed by Mr Howard with a personal inscription.
            </p>
            <hr>
            <p class="display-2 font-weight-bold pt-10">
              YOU AND THE NSW LIBERAL PARTY
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <v-container fluid class="blue-grey lighten-4">
      <v-container>
        <v-row>
          <v-col cols="12" lg="2"></v-col>
          <v-col cols="12" lg="10">
            <p class="display-1 font-weight-bold">
              1. Why do you support the NSW Liberal Party?
            </p>
            <p class="pl-10 font-weight-bold">Please select the most important reasons (up to 3)</p>
            <hr>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "SurveysTrial",
  computed: {
    ...mapState('customer', ['customer']),
  },
}
</script>

<style scoped>
.logo-wrapper{
  width: 140px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right,#00529B,#009FDA);
}
.logo-img{
  width: 80px;
}
</style>